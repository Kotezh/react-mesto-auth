export default function PopupWithForm(props) {
  const openedClass = props.isOpen ? "popup_opened" : "";
  
  return (
    <section className={`popup popup_type_${props.name} ${openedClass}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <button
          type="reset"
          aria-label="Close"
          className="popup__close popup__close_type_edit-profile"
          onClick={props.onClose}
        ></button>
        <form
          noValidate
          className="popup__form"
          name="edit-form"
          onSubmit={props.onSubmit}
          action="#"
          method="post"
        >
          {props.children}
          <button
            name="submit"
            type="submit"
            className="popup__btn-submit"
            value="Сохранить"
          >
            {props.btnName}
          </button>
        </form>
      </div>
    </section>
  );
}


