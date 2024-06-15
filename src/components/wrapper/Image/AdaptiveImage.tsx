import { FC, useEffect, useRef, useState } from "react";

interface IImageProps {
  width: number;
  height: number;
  src: string;
}

export const AdaptiveImage: FC<IImageProps> = ({ width, height, src }) => {
  const ref = useRef(null);
  const [imgShape, setImgShape] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const img = ref.current;
    img.style.opacity = 1;

    if (imgShape.width > imgShape.height) {
      img.style.height = `${height}px`;
      img.style.width = "auto";
    }

    if (imgShape.width < imgShape.height) {
      img.style.width = `${width}px`;
      img.style.height = "auto";
    }
  }, [imgShape, height, width]);

  return (
    <div
      style={{
        height,
        width,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "inherit",
      }}
    >
      <img
        onLoad={(event) => {
          setImgShape({
            width: event.target.width,
            height: event.target.height,
          });
        }}
        style={{ opacity: 0 }}
        ref={ref}
        src={src}
        alt="img"
      />
    </div>
  );
};
