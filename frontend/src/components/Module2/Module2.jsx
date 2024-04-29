import React, { useState, useEffect } from 'react';
import './Module2.css';

const Module2 = () => {
    const [processedNoise, setProcessedNoise] = useState(null);
    useEffect(() => {
        // const fetchImage = async () => {
        //     try {
        //         const response = await fetch('http://127.0.0.1:8000/output_image_processing/noise_display');
        //         if (response.ok) {
        //             const data = await response.json();
        //             setProcessedNoise(data.processedNoise);
        //         } else {
        //             console.error('Failed to fetch image:', response.statusText);
        //         }
        //     } catch (error) {
        //         console.error('Error fetching image:', error);
        //     }
        // };
        const fetchImage = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/output_image_processing/noise_display', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({})
                });
                if (response.ok) {
                    const data = await response.json();
                    setProcessedNoise(data.processedNoise);
                } else {
                    console.error('Failed to fetch image:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        };

        fetchImage();
    }, []);

    const handleImageDownload = () => {
        if (processedNoise) {
            const downloadLink = document.createElement('a');
            downloadLink.href = `data:image/png;base64,${processedNoise}`;
            downloadLink.download = 'processed_noise_image.png';
            downloadLink.click();
        }
    };

    return (
        <div className="processed_noise_display">
            <h2>Display Processed Noise Image</h2>
            {processedNoise && (
                <div>
                    <img src={`data:image/png;base64,${processedNoise}`} alt="Processed Noise" />
                    <button onClick={handleImageDownload}>Download Image</button>
                </div>
            )}
        </div>
    );
}

export default Module2;
