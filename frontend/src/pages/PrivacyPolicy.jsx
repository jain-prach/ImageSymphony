import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../tools/MarkdownRenderer';

const PrivacyPolicy = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('/docs/privacy_policy.md')
            .then((res) => res.text())
            .then((text) => { console.log(text);
            setMarkdownContent(text); })
            .catch((error) => console.error('Error fetching Markdown content:', error));
    }, []);

    return (
        <div>
            <div id="header" className="flex flex-row justify-between m-4">
                <h1>PRIVACY POLICY</h1>
                <a href="/" className="pt-6">Back to Home</a>
            </div>
            <div id="PrivacyPolicy" className="m-4">
                <MarkdownRenderer markdownContent={markdownContent} containerId="PrivacyPolicy"/>
            </div>
        </div>
    );
}

export default PrivacyPolicy;
