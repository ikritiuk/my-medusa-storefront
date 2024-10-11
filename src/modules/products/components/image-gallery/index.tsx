import { Image as MedusaImage } from "@medusajs/medusa";
import { Container } from "@medusajs/ui";
import WatermarkedImage from "@modules/common/components/canvas/canvas";
import * as React from "react";

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => (
          <Container
            key={image.id}
            className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
            id={image.id}
          >
            <WatermarkedImage
              src={image.url}
              watermark="ROYAL-REPLICA.SHOP"
              priority={index <= 2}
              className="absolute inset-0 rounded-rounded"
              fill
              style={{
                objectFit: "cover",
              }}
            />
          </Container>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
