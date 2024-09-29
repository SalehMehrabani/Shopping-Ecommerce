import { useState, useEffect } from "react";

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
          className={`w-full h-full ${className} ${
            imageLoaded ? "opacity-1" : "opacity-0"
          } transition-opacity duration-300`}
          style={{ objectFit: "cover" }}
          loading="lazy"
        />
      ) : (
        <div
          className={`w-full h-full ${className}${
            !imageLoaded ? "opacity-1" : "opacity-0"
          } transition-opacity duration-300`}
          style={{ backgroundColor: "gray", opacity: 50 }}
        ></div>
      )}
    </>
  );
}

export default ImageComponent;
