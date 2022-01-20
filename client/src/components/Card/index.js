import "./style.css";

const Card = (props) => {
  const { title, description } = props;
  return (
    <article className="card">
      <h1 className="card__title">{title}</h1>
      <p className="card__description">{description}</p>
    </article>
  );
};

export default Card;
