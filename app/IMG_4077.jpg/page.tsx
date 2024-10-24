'use client';
import { useState } from 'react';

export default function ImageViewer() {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div style={{ 
      margin: 0, 
      height: '100vh', 
      backgroundColor: 'rgb(14, 14, 14)',
      display: 'flex',
      alignItems: isZoomed ? 'flex-start' : 'center',
      justifyContent: 'center',
      overflow: isZoomed ? 'auto' : 'hidden',
      minHeight: isZoomed ? 'fit-content' : '100vh'
    }}>
      <img
        src='/static/IMG_4077.JPG'
        onClick={handleClick}
        style={{
          display: 'block',
          WebkitUserSelect: 'none',
          cursor: isZoomed ? 'zoom-out' : 'zoom-in',
          backgroundColor: 'hsl(0, 0%, 90%)',
          transition: 'background-color 300ms',
          maxHeight: isZoomed ? 'none' : '100vh',
          maxWidth: isZoomed ? 'none' : '100vw',
          width: 'auto',
          height: 'auto',
          objectFit: 'contain'
        }}
        alt="IMG_4077"
      />
    </div>
  );
}