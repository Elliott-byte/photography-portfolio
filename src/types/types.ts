export type Photo = {
  src: string;
  thumb: string;
  width: number;
  height: number;
  alt: string;
  blurDataUrl: string;
};

export type GalleryProps = {
  photos: Photo[];
};
