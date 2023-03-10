export const Collection = ({ title, genres, link, rating }) => {
  return (
    <a className="collection" href={link} target="_blank" rel="noreferrer">
      <p className="title">{title}</p>
      <p className="genres">{genres}</p>
      <div className="hover__panel">
        <span className="rating">Рейтинг: {rating}</span>
        <span className="hover__text">Мое мнение как зрителя</span>
      </div>
    </a>
  );
}