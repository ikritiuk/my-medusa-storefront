import React, { useEffect, useRef } from 'react';

const WatermarkedImage = ({ src, watermark }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      // Set canvas dimensions
      canvas.width = img.width;
      canvas.height = img.height;

      // Draw the image
      ctx.drawImage(img, 0, 0);

      // Add watermark
      ctx.font = '36px Arial';
      ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // White with transparency
      ctx.fillText(watermark, 10, img.height - 30); // Position of the watermark
    };

    img.src = src;
  }, [src, watermark]);

  return <canvas ref={canvasRef} />;
};

export default WatermarkedImage;
