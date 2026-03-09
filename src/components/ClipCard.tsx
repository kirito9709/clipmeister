import React from 'react';
import './ClipCard.css';

const ClipCard = ({ clip }) => {
    return (
        <div className="clip-card">
            <img src={clip.thumbnail} alt="Clip Thumbnail" className="clip-thumbnail" />
            <div className="clip-details">
                <h3>{clip.title}</h3>
                <p>{clip.description}</p>
                <div className="clip-actions">
                    <button className="edit-button">Edit</button>
                    <button className="download-button">Download</button>
                </div>
            </div>
        </div>
    );
};

export default ClipCard;