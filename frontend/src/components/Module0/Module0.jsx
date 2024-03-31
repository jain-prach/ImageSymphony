// Frontend Elements:
// -	Image Upload - visible for url - root/ -  generate-noise-on-image, generate-modeled-noise-on-image, model-noise-from-image
// -	Image type input - visible for url model-noise-particular-type, model-noise-from-image
// -	Image size input - visible for url model-noise-particular-type, model-noise-from-image
// -	Image range input - visible for url model-noise-particular-type, model-noise-from-image
// -	Display – visible for all urls - displays image for generate-noise-on-image, generate-modeled-noise-on-image, model-noise-from-image - displays information for model-noise-particular-type, model-noise-from-image, generate-modeled-noise-on-image, generate-noise-on-image
// -	Submit – when triggered gets all the input - sends input to the backend - if valid - validity ensured in design.py - displays the output - visible for all urls

import React, { useState }  from 'react';
import axios from 'axios';
import './Module0.css';

const isImageUploadVisible = ['generate-noise-on-image', 'generate-modeled-noise-on-image', 'model-noise-from-image'].includes(window.location.pathname.slice(1));

const isInfoInputsVisible = ['model-noise-particular-type', 'model-noise-from-image'].includes(window.location.pathname.slice(1));

// ImageUpload Component in ReactJS (file = Module0.jsx):  takes in image file and when clicked on upload button sends to backend file backend/modules/module0/frontend.py -  then from frontend.py it is transferred to design.py which validates image type: .npy, .png, .jpg, .jpeg, .bin - if correct it is accepted as input

// when clicked on submit button in Module0 Component the image file gets sent to backend file backend.py that saves the image and  integration.py can access this image and can transfer to other modules 

function ImageUpload({ setSubmitEnabled }) {
    const [image, setImage] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    };
    const handleUpload = async () => {
        if (image) {
            const formData = new FormData();
            formData.append('image', image);
            try {
                const response = await axios.post('/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (response.data.validation === true) {
                    setSubmitEnabled(true);
                }
                else {
                    setErrorMessage("Accepted file extensions: .npy, .png, .jpg, .jpeg, .bin");
                    console.log('Invalid file type');
                }
            } catch (error) {
                console.error('Error uploading image: ', error);
            }
        }
    };

    return (
        <div>
            <input type="file" className="file-input" onChange={handleImageChange} />
            <button onClick={handleUpload}>Upload</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    )
}

function ImageType() {
    return (
        <div>
            <label className="image-type">Image Type</label>
            <select className="select-type">
                <option value="npy">.npy</option>
                <option value="jpg">.jpg</option>
                <option value="jpeg">.jpeg</option>
                <option value="png">.png</option>
                <option value="bin">.bin</option>
            </select>
        </div>
    )
}

function ImageSize() {
    return (
        <div>
            <label className="image-size">Image Size</label>
            <input type="number" className="width" placeholder='width' />
            <input type="number" className="height" placeholder='height' />
        </div>
    )
}

function ImageRange() {
    return (
        <div>
            <label className="image-range">Image Range</label>
            <input type="number" className="min" placeholder='min' />
            <input type="number" className="max" placeholder='max' />
        </div>
    )
}

function Display() {
    return (
        <div className="display">Display</div>
    )
}

const Module0 = () => {
    const [submitEnabled, setSubmitEnabled] = useState(false);

    const handleOnSubmit = async () => {
        try {
            const moduleName = window.location.pathname.split('/')[1]; 
            // Send the POST request to the module-specific path
            await axios.post(`/${moduleName}/submit`);
            console.log('Image submitted successfully');
        } catch (error) {
            console.error('Error submitting image: ', error);
        } 
    };
    
    return (
        <div className="module0">
            <h1>Give Image Input</h1>
            {isImageUploadVisible && <ImageUpload setSubmitEnabled={setSubmitEnabled} />}
            {isInfoInputsVisible && <ImageType />}
            {isInfoInputsVisible && <ImageSize />}
            {isInfoInputsVisible && <ImageRange />}
            {<Display />}
            <form onSubmit={handleOnSubmit}>
                <button className="submit" disabled={!submitEnabled}>Submit</button>
            </form>
        </div>
    )
}

export default Module0