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
                                                             priority,
                                                           }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const getCanvasSize = (sizes: string): { width: number; height: number } => {
    const sizeList = sizes.split(',').map(size => {
      const [mediaQuery, width] = size.trim().split(' ');
      return {
        mediaQuery,
        width: parseInt(width, 10)
      };
    });

    // Use the first matching size
    for (const size of sizeList) {
      if (!size.mediaQuery || window.matchMedia(size.mediaQuery).matches) {
        return { width: size.width, height: (size.width * 34) / 29 }; // Example aspect ratio
      }
    }

    return { width: 800, height: 600 }; // Fallback size
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const img = new Image();

    img.onload = () => {
      if (canvas) {
        const ctx = canvas.getContext("2d");

        // Get the appropriate canvas size based on the provided sizes prop
        const { width, height } = getCanvasSize(sizes || "(max-width: 576px) 280px, (max-width: 768px) 360px, (max-width: 992px) 480px, 800px");

        // High DPI support
        const devicePixelRatio = window.devicePixelRatio || 1;
        canvas.width = width * devicePixelRatio;
        canvas.height = height * devicePixelRatio;
        ctx.scale(devicePixelRatio, devicePixelRatio); // Scale the context

        // Set canvas dimensions in CSS
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        // Draw the image
        ctx.drawImage(img, 0, 0, width, height);

        // Add watermark
        ctx.font = "36px Arial";
        ctx.fillStyle = "rgba(211, 211, 211, 0.5)"; // Light gray with transparency
        ctx.fillText(watermark, 10, height - 30);
      }
    };

    img.src = src; // Load the image
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
