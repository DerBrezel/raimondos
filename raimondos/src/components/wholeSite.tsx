import React from 'react';
import '../App.css';

const videos = [
    { id: 1, title: "Video 1", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
    { id: 2, title: "Video 2", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
    { id: 3, title: "Video 3", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
    { id: 4, title: "Video 4", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
    { id: 5, title: "Video 5", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
    { id: 6, title: "Video 6", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
    { id: 7, title: "Video 7", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
    { id: 8, title: "Video 8", url: "https://drive.google.com/file/d/1Slla15S0s49fyLKJGiUTueMsSU4WJweO/preview" },
];

const WholeSite: React.FC = () => {
    return (
        <div>
            <h1>Raimondo</h1>
            <div style={containerStyle}>
                <div style={gridContainerStyle}>
                    {videos.map((video) => (
                        <div key={video.id} style={cardStyle}>
                            <iframe
                                src={video.url}
                                title={video.title}
                                allowFullScreen
                                style={iframeStyle}
                            ></iframe>
                            <div style={cardTitleStyle}>{video.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
};

const gridContainerStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '16px',
    padding: '16px',
    width: '100%',
    maxWidth: '1200px',
};

const cardStyle: React.CSSProperties = {
    background: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s',
};

const cardTitleStyle: React.CSSProperties = {
    padding: '0.5rem',
    fontSize: '1rem',
    textAlign: 'center',
    backgroundColor: '#f7f7f7',
};

const iframeStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio: '16 / 9',
    border: 'none',
};

export default WholeSite;
