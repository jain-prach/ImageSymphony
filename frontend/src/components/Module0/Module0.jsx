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

const submitButtonEnabled = ['model-noise-particular-type'].includes(window.location.pathname.slice(1));

const resetLabels = () => {
    document.querySelector('.image-size').innerHTML = 'Image Size';
    document.querySelector('.image-range').innerHTML = 'Image Range';
};

// ImageUpload Component in ReactJS (file = Module0.jsx):  takes in image file and when clicked on upload button sends to backend file backend/modules/module0/frontend.py -  then from frontend.py it is transferred to design.py which validates image type: .npy, .png, .jpg, .jpeg, .bin - if correct it is accepted as input

// when clicked on submit button in Module0 Component the image file gets sent to backend file backend.py that saves the image and  integration.py can access this image and can transfer to other modules 

function ImageUpload({ setSubmitEnabled, setImage2 }) {
    const [errorMessage, setErrorMessage] = useState("");
    const [image, setImage] = useState();

    const handleImageChange = (event) => {
        setSubmitEnabled(false);
        setErrorMessage("");
        setImage(event.target.files[0]);
    };
    const handleUpload = async () => {
        if (!image) {
            setErrorMessage("Please select an image file.");
            return;
        }
        const formData = new FormData();
        formData.append('file', image);
        try {
            const response = await axios.post('http://127.0.0.1:8000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (response.data.validation === true) {
                setSubmitEnabled(true);
                setImage2(image);
            }
            else {
                setErrorMessage("Accepted file extensions: .npy, .png, .jpg, .jpeg, .bin");
                console.log('Invalid file type');
            }
        } catch (error) {
            console.error('Error uploading image: ', error);
        }
    };

    return (
        <div>
            <input type="file" className="file-input" onChange={handleImageChange}/>
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
    const handleSizeChange = () => {
        resetLabels();
    };
    return (
        <div>
            <label className="image-size">Image Size</label>
            <input type="number" className="width" placeholder='width' onChange={handleSizeChange}/>
            <input type="number" className="height" placeholder='height' onChange={handleSizeChange}/>
        </div>
    )
}

function ImageRange() {
    const handleRangeChange = () => {
        resetLabels();
    };
    return (
        <div>
            <label className="image-range">Image Range</label>
            <input type="number" className="min" placeholder='min' onChange={handleRangeChange}/>
            <input type="number" className="max" placeholder='max' onChange={handleRangeChange}/>
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
    const [image2, setImage2] = useState(null);
    const handleOnSubmit = async (event) => {
        event.preventDefault(); // Prevent default form submission behavior
        try {
            const moduleName = window.location.pathname.split('/')[1];
            if (moduleName === 'model-noise-particular-type') {
                const width = document.querySelector('.width').value;
                const height = document.querySelector('.height').value;
                const min = document.querySelector('.min').value;
                const max = document.querySelector('.max').value;

                if (!width || !height || !min || !max) {
                    document.querySelector('.image-size').innerHTML = width && height ? 'Image Size' :'Image Size (required)';
                    document.querySelector('.image-range').innerHTML = min && max ? 'Image Range' : 'Image Range (required)';
                    return;
                }

                const formData = new FormData();
                formData.append('type', document.querySelector('.select-type').value);
                formData.append('width', parseInt(width));
                formData.append('height', parseInt(height));
                formData.append('min', parseInt(min));
                formData.append('max', parseInt(max));

                await axios.post(`http://127.0.0.1:8000/${moduleName}/submit`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            else if (moduleName === 'model-noise-from-image') {
                const width = document.querySelector('.width').value;
                const height = document.querySelector('.height').value;
                const min = document.querySelector('.min').value;
                const max = document.querySelector('.max').value;

                if (!width || !height || !min || !max) {
                    document.querySelector('.image-size').innerHTML = width && height ? 'Image Size' :'Image Size (required)';
                    document.querySelector('.image-range').innerHTML = min && max ? 'Image Range' : 'Image Range (required)';
                    return;
                }
                
                const formData = new FormData();
                formData.append('file', image2);
                formData.append('type', document.querySelector('.select-type').value);
                formData.append('width', parseInt(width));
                formData.append('height', parseInt(height));
                formData.append('min', parseInt(min));
                formData.append('max', parseInt(max));
    
                await axios.post(`http://127.0.0.1:8000/${moduleName}/submit`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            else {
                const formData = new FormData();
                formData.append('file', image2);
                await axios.post(`http://127.0.0.1:8000/${moduleName}/submit`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }
            window.location.href = `${moduleName}/output`;
            console.log('Data submitted successfully');
        } catch (error) {
            console.error('Error submitting data: ', error);
        } 
    };
    
    return (
        <>
        <div className="homelink">
            <a href="/" className="pt-6">Back to Home</a>
        </div>
        <div className="module0">
            <h1>Give Image Input</h1>
            {isImageUploadVisible && <ImageUpload setSubmitEnabled={setSubmitEnabled} setImage2={setImage2}/>}
            {isInfoInputsVisible && <ImageType />}
            {isInfoInputsVisible && <ImageSize />}
            {isInfoInputsVisible && <ImageRange />}
            {<Display />}
            <form onSubmit={handleOnSubmit}>
                {isImageUploadVisible && <button className="submit" disabled={!submitEnabled}>Submit</button>}
                {submitButtonEnabled && <button className="submit">Submit</button>}
            </form>
        </div>
        </>
    )
}

export default Module0;