import React, { useEffect, useRef } from 'react';

type WatermarkedImageProps = {
  src: string;      // URL of the image
  watermark: string; // Text for the watermark
};

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({ src, watermark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Reference to the canvas element

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas?.getContext("2d")
      const img = new Image();

      img.onload = () => {
        if (canvas && ctx) {
          // Set canvas dimensions
          canvas.width = img.width;
          canvas.height = img.height;

          // Draw the image
          ctx.drawImage(img, 0, 0);

          // Add watermark
          ctx.font = '36px Arial';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'; // White with transparency
          ctx.fillText(watermark, 10, img.height - 30); // Position of the watermark
        }
      };
      img.src = src; // Load the image
    }


  }, [src, watermark]);

  return <canvas ref={canvasRef} />; // Render the canvas
};

export default WatermarkedImage;
