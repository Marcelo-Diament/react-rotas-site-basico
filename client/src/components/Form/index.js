import "./style.css";

const Form = () => {
  return (
    <section className="form">
      <h1 className="form__title">FORM</h1>
      <form action="/" className="form__content">
        <fieldset className="form__content__fieldset">
          <legend className="form__content__fieldset__legend">
            Dados Pessoais
          </legend>
          <label htmlFor="nome" className="form__content__label">
            Nome
          </label>
          <input
            type="text"
            className="form__content__input"
            name="nome"
            id="nome"
          />
          <label htmlFor="sobrenome" className="form__content__label">
            Sobrenome
          </label>
          <input
            type="text"
            className="form__content__input"
            name="sobrenome"
            id="sobrenome"
          />
        </fieldset>
        <fieldset className="form__content__fieldset">
          <legend className="form__content__fieldset__legend">
            Dados Profissionais
          </legend>
          <label htmlFor="profissao" className="form__content__label">
            Profissão
          </label>
          <input
            type="text"
            className="form__content__input"
            name="profissao"
            id="profissao"
          />
          <label htmlFor="empresa" className="form__content__label">
            Empresa
          </label>
          <input
            type="text"
            className="form__content__input"
            name="empresa"
            id="empresa"
          />
        </fieldset>
        <button className="form__content__btn">Enviar</button>
      </form>
    </section>
  );
};

export default Form;
