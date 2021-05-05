import React, { useEffect, useState } from "react";

export default function ImagePopup(props) {
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  const openedClass = props.card ? "popup_opened" : "";

  useEffect(() => {
    props.card && setLink(props.card.link);
    props.card && setName(props.card.name);
  }, [props.card]);

  return (
    <section className={`popup popup_type_full-image ${openedClass}`}>
      <div className="popup__full-image-wrapper">
        <figure className="popup__figure">
          <img className="popup__full-image" src={link} alt={name} />
          <figcaption className="popup__full-image-caption">{name}</figcaption>
        </figure>
        <button
          type="reset"
          aria-label="Close"
          className="popup__close popup__close_type_full-image"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}
