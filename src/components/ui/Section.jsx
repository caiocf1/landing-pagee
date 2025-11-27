import React from 'react';

const Section = ({
    children,
    id,
    className = '',
    containerClass = ''
}) => {
    return (
        <section id={id} className={`section ${className}`}>
            <div className={`container ${containerClass}`}>
                {children}
            </div>
        </section>
    );
};

export default Section;
