import { React, useState } from 'react';
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
    const [selectedNoiseType, setSelectedNoiseType] = useState(null);

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

    const handleNoiseTypeSelection = (noiseType) => {
        setSelectedNoiseType(noiseType);
    };

    const navigateToModule3 = () => {
        if (selectedNoiseType) {
            // Navigate to Module 3 (Generate Noise on an Image)
            // You can use React Router or any other navigation method here
            console.log(`Navigating to Module 3 for ${selectedNoiseType.name}`);
        } else {
            alert('Please select a noise type.');
        }
    };

    const navigateToModule2 = () => {
        if (selectedNoiseType) {
            // Navigate to Module 3 (Generate Noise on an Image)
            // You can use React Router or any other navigation method here
            console.log(`Navigating to Module 3 for ${selectedNoiseType.name}`);
        } else {
            alert('Please select a noise type.');
        }
    };

    return (
        <div className="module1-container">
            <h2>Select Noise Type</h2>
            <div className="noise-types-container">
                {noiseTypes.map((noiseType) => (
                    <div key={noiseType.id} className="noise-type" onClick={() => handleNoiseTypeSelection(noiseType)}>
                        {noiseType.name}
                    </div>
                ))}
            </div>
            <div className="navigation-container">
                <button className="navigate-button" disabled={!moduleEnabled} onClick={navigateToModule3}>Generate Noise on Image</button>
                <button className="navigate-button" onClick={navigateToModule2}>Download Noise</button>
            </div>
        </div>
    );
};

export default Module1;
