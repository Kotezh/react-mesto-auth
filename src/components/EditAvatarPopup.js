import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup(props) {
  const avatarInputRef = React.useRef();

  useEffect(() => {
    props.isOpen && (avatarInputRef.current.value = "");
  }, [props.isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar(avatarInputRef.current.value);
  }

  return (
    <PopupWithForm
      title="Обновить аватар"
      name="type_avatar"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      btnName="Сохранить"
    >
      <label className="popup__form-field">
        <input
          name="link"
          id="avatar-link"
          type="url"
          className="popup__input popup__input_type_avatar"
          ref={avatarInputRef}
          placeholder="Ссылка на картинку"
          required
        />
        <span
          className="popup__error popup__error_visible"
          id="avatar-link-error"
        ></span>
      </label>
    </PopupWithForm>
  );
}
