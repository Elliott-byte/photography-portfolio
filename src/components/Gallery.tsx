import { GalleryProps } from "@/types/types";
import { LightGallery } from "lightgallery/lightgallery";
import { useRef } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import LightGalleryComponent from "lightgallery/react";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

export function Gallery({ photos }: GalleryProps) {
  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <>
      <Masonry breakpointCols={2} className="flex gap-2" columnClassName="">
        {photos.map((photo, idx) => (
          <div className="relative" key={photo.src}>
            <Image
              key={photo.src}
              src={photo.src}
              width={photo.width}
              height={photo.height}
              className="my-4 cursor-pointer"
              alt={photo.alt}
              blurDataURL={photo.blurDataUrl}
              onClick={() => {
                lightboxRef.current?.openGallery(idx);
              }}
            />
            <div
              className="w-full h-full absolute inset-0 bg-transparent hover:bg-stone-900 hover:bg-opacity-10"
              onClick={() => {
                lightboxRef.current?.openGallery(idx);
              }}
            ></div>
          </div>
        ))}
      </Masonry>

      <LightGalleryComponent
        onInit={(ref) => {
          if (ref) lightboxRef.current = ref.instance;
        }}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        dynamic
        dynamicEl={photos.map((photo) => ({
          src: photo.src,
          thumb: photo.src,
        }))}
      />
    </>
  );
}
