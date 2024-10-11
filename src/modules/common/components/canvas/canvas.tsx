import React, { useEffect, useRef } from "react";

type WatermarkedImageProps = {
  src: string;      // URL of the image
  watermark: string; // Text for the watermark
  className?: string; // Additional classes
  fill?: boolean;   // If you need to handle fill
  sizes?: string;   // Sizes attribute for responsive images
  style?: React.CSSProperties; // Inline styles
  priority?: boolean; // New prop for priority
};

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
                                                             src,
                                                             watermark,
                                                             className,
                                                             fill,
                                                             sizes,
                                                             style,
                                                           }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = new Image();

    img.onload = () => {
      if (canvas && ctx) {
        // Get the natural dimensions of the image
        const naturalWidth = img.naturalWidth;
        const naturalHeight = img.naturalHeight;

        // Calculate the desired dimensions based on the CSS sizes
        const maxWidth = 800; // Define max width
        const maxHeight = 600; // Define max height
        const scale = Math.min(maxWidth / naturalWidth, maxHeight / naturalHeight);
        const width = naturalWidth * scale;
        const height = naturalHeight * scale;

        // Set canvas dimensions
        canvas.width = width * window.devicePixelRatio; // Higher resolution for high-DPI displays
        canvas.height = height * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio); // Scale the context

        // Set canvas dimensions in CSS
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // Draw the image
        ctx.drawImage(img, 0, 0, width, height);

        // Add watermark
        ctx.font = "36px Arial";
        ctx.fillStyle = "rgba(200, 200, 200, 0.5)"; // Light gray
        ctx.fillText(watermark, 10, height - 30);
      }
    };

    img.src = src; // Load the image
  }, [src, watermark]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} ${fill ? "object-fill" : ""}`}
      style={{ ...style }} // Apply any additional styles
    />
  );
};

export default WatermarkedImage;
