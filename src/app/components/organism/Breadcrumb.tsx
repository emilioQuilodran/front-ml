import React from 'react';

interface BreadcrumbProps {
    items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
    return (
        <nav className="breadcrumb">
            {items.map((item, index) => (
                <span key={index} className="breadcrumb-item">
                    {item}
                    {index < items.length - 1 && <span className="breadcrumb-separator"> &gt; </span>}
                </span>
            ))}
        </nav>
    );
};

export default Breadcrumb;