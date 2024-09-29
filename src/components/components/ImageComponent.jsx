import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";

function ImageComponent({ src, alt, className, hash }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setImageLoaded(true);
    };

    image.src = src;
  }, [src]);

  return (
    <>
      {imageLoaded ? (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full ${className}`}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <Blurhash
          hash={hash}
          width="100%"
          height="100%"
          resolutionX={32}
          resolutionY={32}
          punch={1}
          className={`w-full h-full ${className}`}
        />
      )}
    </>
  );
}

export default ImageComponent;
