import React, { useEffect, useRef, useState } from "react";

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
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const { clientWidth, clientHeight } = canvasRef.current.parentElement!;
        setDimensions({ width: clientWidth, height: clientHeight });
      }
    };

    // Set initial dimensions
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const img = new Image();

    img.onload = () => {
      if (canvas && ctx) {
        const { width, height } = dimensions;

        // Set canvas dimensions
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

    img.src = src; // Load the image
  }, [src, watermark, dimensions]); // Re-draw on image source or dimensions change

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{ width: "100%", height: "auto", ...style }} // Make the canvas responsive
    />
  );
};

export default WatermarkedImage;
