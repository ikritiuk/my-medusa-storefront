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

// Utility function to get the appropriate size
const getSizeFromSizes = (sizes: string, viewportWidth: number): { width: number; height: number } => {
  const sizeList = sizes.split(',').map(size => {
    const [mediaQuery, width] = size.trim().split(' ');
    return {
      mediaQuery,
      width: parseInt(width, 10)
    };
  });

  // Find the first matching size
  for (const size of sizeList) {
    if (!size.mediaQuery || window.matchMedia(size.mediaQuery).matches) {
      return { width: size.width, height: (size.width * 34) / 29 }; // Example aspect ratio
    }
  }

  return { width: 800, height: 600 }; // Fallback size
};

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
                                                             src,
                                                             watermark,
                                                             className,
                                                             fill,
                                                             sizes,
                                                             style,
                                                             priority,
                                                           }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        if (canvas && ctx) {
          // Get responsive canvas dimensions based on sizes prop
          const { width, height } = sizes ? getSizeFromSizes(sizes, window.innerWidth) : { width: 800, height: 600 };

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
  }, [src, watermark, sizes]);

  return (
    <canvas
      ref={canvasRef}
      className={`${className} ${fill ? "object-fill" : ""}`}
      style={{ ...style }} // Apply any additional styles
    />
  );
};

export default WatermarkedImage;
