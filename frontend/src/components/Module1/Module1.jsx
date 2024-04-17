import { React, useState } from 'react';
import axios from 'axios';
import './Module1.css';

// send the data to backend.py to generate noise between 0 and 1
// provide a button to go to module 3 to see the modeled noise and take image input from there to submit and add the modeled noise to the image and let the user download the image

// Users interact with the frontend view to select the type of noise they want to model. 
// The view dynamically generates different sections or divs for each noise type, allowing users to input parameters specific to each noise type. 
// Noise types include Gaussian noise, Salt and pepper noise, Shot noise, Quantization noise, Film grain, Periodic noise, Fixed Pattern noise, Speckle noise, and Random noise. 
// Users can navigate to Module 2 (Output Image Processing) and Module 3 (Generate Noise on an Image) after submitting the required parameters. - button for navigation
// The "Generate Noise on an Image" button is enabled only when all required parameters for noise modeling are submitted.


const Module1 = () => {
    const [moduleEnabled, setModuleEnabled] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [inputDisplay, setInputDisplay] = useState(null);

    const noiseTypes = [
        { id: 1, name: 'Gaussian Noise' },
        { id: 2, name: 'Salt and Pepper Noise' },
        { id: 3, name: 'Shot Noise' },
        { id: 4, name: 'Quantization Noise' },
        { id: 5, name: 'Film Grain' },
        { id: 6, name: 'Periodic Noise' },
        { id: 7, name: 'Fixed Pattern Noise' },
        { id: 8, name: 'Speckle Noise' },
        { id: 9, name: 'Random Noise' },
    ];

    const handleNoiseTypeSelection = async (noiseType) => {
        setErrorMessage("");
        setModuleEnabled(true);
        console.log(noiseType);
        try {
            const formData = new FormData();
                formData.append('noise_type', noiseType);
                await axios.post(`http://127.0.0.1:8000/model-noise-particular-type/noise-type`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
        }
        catch (error) {
            console.error('Error submitting noise_type: ', error);
        }
        if (noiseType === 'Gaussian Noise') {
            setInputDisplay(
                <div className="input-display">
                    {/* Input fields specific to Gaussian Noise */}
                    <label>Mean:</label>
                    <input type="number"  className="input-value mean" />
                    <label>Standard Deviation:</label>
                    <input type="number" className="input-value std-dev"/>
                </div>
            );
        } else if (noiseType === 'Salt and Pepper Noise') {
            setInputDisplay(
                <div className="input-display">
                    {/* Input fields specific to Salt and Pepper Noise */}
                    <label>Probability of Pepper:</label>
                    <input type="number" className="input-value prob-pepper"/>
                    <label>Probability of Salt:</label>
                    <input type="number" className="input-value prob-salt"/>
                </div>
            );
            // Add other conditions for other noise types
        }
    };

    const navigateToModule3 = () => {
        window.location.href = '/generate-noise-on-image';
    };

    const navigateToModule2 = () => {
        //add for submitting the noise type specific values to backend
        if (moduleEnabled) {
            window.location.href = '/output-image-processing';
        } else {
            setErrorMessage("Please submit desired values for noise type.");
        } //will do the validation of taking values later -> right now if the user doesn't input anything, random values are selected for noise generation
    };

    return (
        <div className="module1-container">
            <h2>Select Noise Type</h2>
            <div className="noise-types-container">
                {noiseTypes.map((noiseType) => (
                    <div key={noiseType.id} className="noise-type" onClick={() => handleNoiseTypeSelection(`${noiseType.name}`)}>
                        {noiseType.name}
                    </div>
                ))}
            </div>
            {inputDisplay}
            <div className="navigation-container">
                <button className="navigate-button" disabled={!moduleEnabled} onClick={navigateToModule3}>Generate Noise on Image</button>
                <button className="navigate-button" onClick={navigateToModule2}>Download Noise</button>
            </div>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
};

export default Module1;
