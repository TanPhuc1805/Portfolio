import React from 'react';

function BlogContent(props) {
    const {contentRef} = props
    return (
        <div className=" w-full h-40 overflow-hidden drop-shadow-sm">
            <textarea
                ref={contentRef}
                className="peer w-full h-full p-2 border-none resize-none overflow-y-auto focus:outline-none no-scrollbar"
                placeholder="Type here..."
            />
        </div>
    );
}

export default React.memo(BlogContent);