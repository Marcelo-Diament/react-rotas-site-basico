import { NavLink } from "react-router-dom";
import { ToggleButton } from "../Button";
import { clearString, content } from "../../Helpers";
import "./style.css";

const Header = ({ ...props }) => {
  const { categories } = content;
  const renderCategoriesNavLinks = () =>
    categories.map((category, index) => {
      const { title } = category;
      const cleanTitle = clearString(title, true, true);
      return (
        <NavLink
          to={`/categorias/${cleanTitle}`}
          activeClassName="selected"
          className="subheader__subnav__item"
          key={index}
        >
          {title}
        </NavLink>
      );
    });
  const { themeClick } = props;
  return (
    <section className="header-container">
      <article className="header">
        <h1 className="header__title">HEADER</h1>
        <nav className="header__nav">
          <NavLink
            exact
            to="/"
            activeClassName="selected"
            className="header__nav__item"
          >
            Início
          </NavLink>
          <NavLink
            to="/sobre"
            activeClassName="selected"
            className="header__nav__item"
          >
            Sobre
          </NavLink>
          <NavLink
            to="/categorias"
            activeClassName="selected"
            className="header__nav__item"
          >
            Categorias
          </NavLink>
          <NavLink
            to="/promocoes"
            disabled
            className="header__nav__item--disabled"
          >
            Promoções
          </NavLink>
          <NavLink
            to="/contato"
            activeClassName="selected"
            className="header__nav__item"
          >
            Contato
          </NavLink>
          <ToggleButton className="header__nav__item" themeClick={themeClick} />
        </nav>
      </article>
      <article className="subheader">
        <nav className="subheader__nav">{renderCategoriesNavLinks()}</nav>
      </article>
    </section>
  );
};

export default Header;
