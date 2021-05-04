import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function ConfirmationPopup(props) {
  return (
    <PopupWithForm
      title="Вы уверены?"
      name="type_confirm"
      isOpen={props.isOpen}
      onClose={props.onClose}
      btnName="Да"
    />
  );
}
