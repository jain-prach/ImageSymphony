import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../tools/MarkdownRenderer';

const ContactUs = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('/docs/contact_us.md')
            .then((res) => res.text())
            .then((text) => { console.log(text);
            setMarkdownContent(text); })
            .catch((error) => console.error('Error fetching Markdown content:', error));
    }, []);

    return (
        <div>
            <div id="header" className="flex flex-row justify-between m-4">
                <h1 style={{ color: '#e4dcc9' }}>Contact Us</h1>
                <a href="/" className="pt-6">Back to Home</a>
            </div>
            <div id="ContactUs" className="m-4">
                <MarkdownRenderer markdownContent={markdownContent} containerId="ContactUs"/>
            </div>
        </div>
    );
}

export default ContactUs;
