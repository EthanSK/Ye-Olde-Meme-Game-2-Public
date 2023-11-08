import React from "react";

export default function DocsImage(props: {
  src: string;
  width: number;
  link?: string;
  alt?: string;
  preventCenteredLayout?: boolean;
}) {
  const image = <img src={props.src} width={props.width} alt={props.alt} />;

  return props.link ? (
    <div className={props.preventCenteredLayout ? "" : "centered-container"}>
      <a href={props.link || "javascript:void(0)"} target="_blank">
        {image}
      </a>
    </div>
  ) : (
    <div className={props.preventCenteredLayout ? "" : "centered-container"}>
      {image}
    </div>
  );
}
