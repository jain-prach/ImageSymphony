import React, { useEffect, useState } from 'react';
import MarkdownRenderer from '../tools/MarkdownRenderer';

const TermsOfService = () => {
    const [markdownContent, setMarkdownContent] = useState('');

    useEffect(() => {
        fetch('/docs/terms_of_service.md')
            .then((res) => res.text())
            .then((text) => { console.log(text);
            setMarkdownContent(text); })
            .catch((error) => console.error('Error fetching Markdown content:', error));
    }, []);

    return (
        <div>
            <div id="header" className="flex flex-row justify-between m-4">
                <h1>TERMS OF SERVICE</h1>
                <a href="/" className="pt-6">Back to Home</a>
            </div>
            <div id="TermsOfService" className="m-4">
                <MarkdownRenderer markdownContent={markdownContent} containerId="TermsOfService"/>
            </div>
        </div>
    );
}

export default TermsOfService;
