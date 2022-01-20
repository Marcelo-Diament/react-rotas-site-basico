import Card from "../Card";
import "./style.css";

const Shelf = ({ ...props }) => {
  const { title, posts } = props;
  const renderPosts = () => {
    return posts.map((post, index) => {
      const { title, description } = post;
      return <Card title={title} description={description} key={index} />;
    });
  };
  return (
    <section className="shelf">
      <h1 className="shelf__title">{title}</h1>
      {renderPosts()}
    </section>
  );
};

export default Shelf;
