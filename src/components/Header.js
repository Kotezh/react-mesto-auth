import logo from "../blocks/logo/logo.svg";

export default function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo header__logo" alt="Логотип" />
    </header>
  );
}

