import React, { useEffect, useRef } from "react";
import { useResizeObserver } from "react-resize-observer"; // Optional: to handle resizing more elegantly

type WatermarkedImageProps = {
  src: string;
  watermark: string;
  className?: string;
  style?: React.CSSProperties;
};

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
                                                             src,
                                                             watermark,
                                                             className,
                                                             style,
                                                           }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });

  // Optional: Use Resize Observer for dynamic sizing
  useResizeObserver({ onResize: ({ width, height }) => setDimensions({ width, height }) });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = new Image();

    img.onload = () => {
      if (canvas && ctx) {
        // Set canvas dimensions to match the container
        const { width, height } = dimensions;
        canvas.width = width;
        canvas.height = height;

        // Draw the image
        ctx.drawImage(img, 0, 0, width, height);

        // Add watermark
        ctx.font = "36px Arial";
        ctx.fillStyle = "rgba(200, 200, 200, 0.5)"; // Light gray
        ctx.fillText(watermark, 10, height - 30);
      }
    };

    img.src = src;
  }, [src, watermark, dimensions]); // Update whenever the src or dimensions change

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "auto", ...style }} // Make the canvas responsive
    />
  );
};

export default WatermarkedImage;
