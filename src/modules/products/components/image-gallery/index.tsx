import { Image as MedusaImage } from "@medusajs/medusa";
import { Container } from "@medusajs/ui";
import WatermarkedImage from "@modules/common/components/canvas/canvas"

type ImageGalleryProps = {
  images: MedusaImage[];
};

const ImageGallery = ({ images }: ImageGalleryProps) => {
  return (
    <div className="flex items-start relative">
      <div className="flex flex-col flex-1 small:mx-16 gap-y-4">
        {images.map((image, index) => {
          return (
            <Container
              key={image.id}
              className="relative aspect-[29/34] w-full overflow-hidden bg-ui-bg-subtle"
              id={image.id}
            >
              <WatermarkedImage
                src={image.url}
                watermark={`Royal-replica.shop`} // Customize the watermark text
              />
            </Container>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
