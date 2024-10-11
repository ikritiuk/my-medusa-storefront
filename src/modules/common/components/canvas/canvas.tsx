import React, { useEffect, useRef } from "react";

type WatermarkedImageProps = {
  src: string;      // URL of the image
  watermark: string; // Text for the watermark
  className?: string; // Additional classes
  fill?: boolean;   // If you need to handle fill
  style?: React.CSSProperties; // Inline styles
  priority?: boolean; // New prop for priority
};

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
                                                             src,
                                                             watermark,
                                                             className,
                                                             fill,
                                                             style,
                                                             priority,
                                                           }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Define the sizes mapping
  const sizesMapping = [
    { maxWidth: 576, width: 280 },
    { maxWidth: 768, width: 360 },
    { maxWidth: 992, width: 480 },
    { maxWidth: Infinity, width: 800 }, // Fallback size
  ];

  // Get the appropriate size based on the viewport width
  const getCanvasSize = (viewportWidth: number): { width: number; height: number } => {
    for (const size of sizesMapping) {
      if (viewportWidth <= size.maxWidth) {
        return { width: size.width, height: (size.width * 34) / 29 }; // Example aspect ratio
      }
    }
    return { width: 800, height: 600 }; // Fallback size
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const img = new Image();
      const { width, height } = getCanvasSize(window.innerWidth); // Get size based on viewport width

      img.onload = () => {
        if (canvas && ctx) {
          // Set canvas dimensions
          canvas.width = width;
          canvas.height = height;

          // Draw the image
          ctx.drawImage(img, 0, 0, width, height);

          // Add watermark
          ctx.font = "36px Arial";
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
          ctx.fillText(watermark, 10, height - 30);
        }
      };
      img.src = src; // Load the image
    }
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
