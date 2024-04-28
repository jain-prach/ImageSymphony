import React, { useState, useEffect } from 'react';
import './Module2.css';

const Module2 = () => {
    const [processedNoise, setProcessedNoise] = useState(null);

    useEffect(() => {
        const fetchProcessedNoise = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/output_image_processing/noise_display');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch processed noise data');
                }

                const data = await response.json();
                setProcessedNoise(data.processed_noise);
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchProcessedNoise();
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
                    <h3>Processed Noise Image</h3>
                    <img src={`data:image/png;base64,${processedNoise}`} alt="Processed Noise" />
                    <button onClick={handleImageDownload}>Download Image</button>
                </div>
            )}
        </div>
    );
}

export default Module2;
