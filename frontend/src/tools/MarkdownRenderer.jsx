// import React from 'react';
// import ReactDOM from 'react-dom';
// import ReactMarkdown from 'react-markdown';

// function MarkdownRenderer({ markdownContent }) {
//     ReactDOM.render(
//         <div className="markdown-container">
//             <ReactMarkdown>{markdownContent}</ReactMarkdown>
//         </div>,
//         document.querySelector('#content')
//     );
// }

// export default MarkdownRenderer;

// MarkdownRenderer.jsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

function MarkdownRenderer({ markdownContent, containerId }) {
    console.log(markdownContent);
    useEffect(() => {
        const container = document.querySelector(`#${containerId}`);
        ReactDOM.render(
            <div className="markdown-container">
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>,
            container
        );

        // Clean up the rendered component when the component is unmounted
        return () => {
            ReactDOM.unmountComponentAtNode(container);
        };
    }, [markdownContent, containerId]);

    // Return null because we don't want to render anything directly
    return null;
}

export default MarkdownRenderer;
