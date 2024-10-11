import React, { useEffect, useRef } from "react"

type WatermarkedImageProps = {
  src: string;      // URL of the image
  watermark: string; // Text for the watermark
  className?: string; // Additional classes
  alt?: string;     // Alternative text
  fill?: boolean;   // If you need to handle fill
  sizes?: string;   // Sizes attribute for responsive images
  style?: React.CSSProperties; // Inline styles
};

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
                                                             src,
                                                             watermark,
                                                             className,
                                                             alt,
                                                             fill,
                                                             sizes,
                                                             style,
                                                           }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas?.getContext("2d")
      const img = new Image()

      img.onload = () => {
        if (canvas && ctx) {
          // Responsive canvas dimensions
          const maxWidth = window.innerWidth < 800 ? window.innerWidth : 800
          const maxHeight = window.innerHeight < 600 ? window.innerHeight : 600

          // Maintain aspect ratio
          let width = img.width
          let height = img.height
          const scale = Math.min(maxWidth / width, maxHeight / height)
          width *= scale
          height *= scale

          // Set canvas dimensions
          canvas.width = width
          canvas.height = height

          // Draw the image
          ctx.drawImage(img, 0, 0, width, height)

          // Add watermark
          ctx.font = "36px Arial"
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)"
          ctx.fillText(watermark, 10, height - 30)
        }

      }
      img.src = src
    }


  }, [src, watermark])

  return (
    <canvas
      ref={canvasRef}
      className={`${className} ${fill ? "object-fill" : ""}`}
      alt={alt}
      style={{ ...style }} // Apply any additional styles
    />
  )
}

export default WatermarkedImage
