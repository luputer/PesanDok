declare module 'react-lazy-load-image-component' {
    import React from 'react';
  
    export interface LazyLoadImageProps {
      src: string;
      alt?: string;
      effect?: string;
      placeholderSrc?: string;
      className?: string;
      width?: string | number;
      height?: string | number;
    }
  
    export const LazyLoadImage: React.FC<LazyLoadImageProps>;
    export default LazyLoadImage;
  }
  