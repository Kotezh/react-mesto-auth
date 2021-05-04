import React, { useEffect, useState } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

export default function EditProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (props.isOpen) {
      setName(currentUser.name);
      setDescription(currentUser.about);
    }
  }, [props.isOpen]);

  function handleChange(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "job") {
      setDescription(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({
      name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      title="Редактировать профиль"
      name="edit-profile"
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      btnName="Сохранить"
    >
      <label className="popup__form-field">
        <input
          name="name"
          id="name"
          type="text"
          className="popup__input popup__input_type_name"
          value={name}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="40"
        />
        <span
          className="popup__error popup__error_visible"
          id="name-error"
        ></span>
      </label>
      <label className="popup__form-field">
        <input
          name="job"
          id="job"
          type="text"
          className="popup__input popup__input_type_job"
          value={description}
          onChange={handleChange}
          required
          minLength="2"
          maxLength="200"
        />
        <span
          className="popup__error popup__error_visible"
          id="job-error"
        ></span>
      </label>
    </PopupWithForm>
  );
}
