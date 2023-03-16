export const Collection = ({ title, genres, link, rating }) => {
  const regex = new RegExp('(?<=\\/)[\\w-]+(?=\\?|$)');
  const match = regex.exec(link);

  return (
    <a className="collection" href={link} target="_blank" rel="noreferrer">
      <img src={`https://i3.ytimg.com/vi/${match}/maxresdefault.jpg`} alt="preview_img"></img>
      <p className="title">{title}</p>
      {genres.map((genre) => {
        return (
          <>
            <div className="hover__panel">
              <span className="genre">{genre}; </span>
              {/* <span className="hover__text">Мое мнение как зрителя</span> */}
            </div>
          </>
        )
      })}
      <br></br>
      <div className="hover__panel">
        <span className="rating">Рейтинг: {rating}</span>
        <span className="hover__text">Чисто мое мнение</span>
      </div>
    </a>
  );
}