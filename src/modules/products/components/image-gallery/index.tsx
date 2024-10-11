import React, { useEffect, useRef } from "react"

type WatermarkedImageProps = {
  src: string;      // URL of the image
  watermark: string; // Text for the watermark
};

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({ src, watermark }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas?.getContext("2d")
      const img = new Image()

      img.onload = () => {
        if (canvas && ctx) {
          // Set desired maximum dimensions
          const maxWidth = 800 // Example max width
          const maxHeight = 600 // Example max height

          // Calculate the scaling factor to maintain aspect ratio
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
          ctx.fillStyle = "rgba(255, 255, 255, 0.5)" // White with transparency
          ctx.fillText(watermark, 10, height - 30) // Position of the watermark
        }

      }
      img.src = src // Load the image
    }
  }, [src, watermark])

  return <canvas ref={canvasRef}/>
}

export default WatermarkedImage
