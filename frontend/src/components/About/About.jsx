import React from 'react';
import './About.css';

const features = [
    {
        id: 1,
        icon: process.env.PUBLIC_URL + '/assets/Frame.png',
        title: 'Model Noise of a Particular Type',
        description: 'Select the specific type of noise to model',
        url: 'model-noise-particular-type',
    },
    {
        id: 2,
        icon: process.env.PUBLIC_URL + '/assets/Frame.png',
        title: 'Generate Noise on an Image',
        description: 'Choose the type of noise to generate on an image',
        url: 'generate-noise-on-image',
    },
    {
        id: 3,
        icon: process.env.PUBLIC_URL + '/assets/Frame.png',
        title: 'Model Noise from an Image',
        description: 'Analyze the characteristics of noise present in the image passed to the system',
        url: 'model-noise-from-image',
    },
    {
        id: 4,
        icon: process.env.PUBLIC_URL + '/assets/Frame.png',
        title: 'Generate Modeled Noise on an Image',
        description: 'Model Generated noise to desired images',
        url: 'generate-modeled-noise-on-image',
    },
];

function FeatureCard({ icon, title, description, url }) {
return (
    <div className='feature-card'>
        <a href={`${url}`}>
            <img src={icon} alt={title} className="feature-icon" />
            <h3 className="feature-title">{title}</h3>
            <p className="feature-description">{description}</p>
        </a>
    </div>
);
}

function About() {
return (
<section className="about-section" id="about">
    <div className="about-content">
        <h2>We Offer</h2>
        <p>
            ImageSymphony is the “method aggregation” or “technique fusion” of different ML models and python programs that can help generate noise on an image, from an image, or of some particular type that you can integrate with your desired inputs. Noise disturbs the harmony of the image, and thus the name ImageSymphony is a metaphor; however, it also suggests the ultimate goal behind developing this product.
        </p>
        <div className="feature-container">
            {features.map((feature) => (
            <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                url={feature.url}
            />
            ))}
        </div>
    </div>
</section>
);
}

export default About;
