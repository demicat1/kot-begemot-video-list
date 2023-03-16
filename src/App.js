import React from 'react';
import { Collection } from './Collection'
import './index.scss';
import ScrollUpButton from './components/ScrollUpButton';

const genres = [
  { "name": "друг", "description": "В истории встречаются друзья героя" },
  { "name": "мистика", "description": "В истории встречается необъяснимая мистика" },
  { "name": "дух", "description": "В истории встречаются духи и души" },
  { "name": "ребенок", "description": "В истории встречаются дети в главных или второстепенных ролях" },
  { "name": "экзорцизм", "description": "В истории встречаются элементы экзорцизма" },
  { "name": "демон", "description": "В истории встречаются демоны" },
  { "name": "люди", "description": "В истории проиходят взаимоотношение между людьми" },
  { "name": "людоед", "description": "В истории встречаются каннибалы" },
  { "name": "подробно", "description": "В истории все описывается подробно" },
  { "name": "женщина", "description": "В истории главная роль играет девушка" },
  { "name": "монстр", "description": "В истории встречаются монстры" },
  { "name": "технологии", "description": "В истории технологии играют главную роль " },
  { "name": "параллельный", "description": "В истории описываются элементы параллельной реальности" },
  { "name": "семья", "description": "В истории встречаются семьи" },
  { "name": "животные", "description": "В истории встречаются животные" },
  { "name": "маньяк", "description": "В истории встречаются люди маньяки" }
]


function App() {
  const [idCategory, setIdCategory] = React.useState('')
  const [order, setOrder] = React.useState('')
  const [showDate, setShowDate] = React.useState(true)
  const [sort, setSort] = React.useState('')
  const [isLoading, setIsLoading] = React.useState(true)
  const [collections, setCollections] = React.useState([])

  React.useEffect(() => {
    setIsLoading(true)

    fetch(`https://6401939e3779a86262590fe4.mockapi.io/kot_begemot?${idCategory ? `genres=${idCategory}` : ''
      }&${sort ? `sortBy=${sort}` : ''
      }&${order ? `order=${order}` : ''
      }`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json)
      }).catch((err) => {
        console.warn(err)
      }).finally(() => setIsLoading(false))
  }, [idCategory, order, sort])

  return (
    <div className="App">
      <h1>Мои просмотренные видео</h1>
      <div className="top">
        <ul className="tags">
          <li
            className={order ? '' : 'active'}
            onClick={() => {
              setOrder('')
              setSort('')
              console.log(order)
            }}>По релевантности</li>
          <li
            className={order === 'asc' ? 'active' : ''}
            onClick={() => {
              setOrder('asc')
              setSort('rating')
              setShowDate(true)
              console.log(order)
            }}>По возрастающей</li>
          <li
            className={order === 'desc' ? 'active' : ''}
            onClick={() => {
              setOrder('desc')
              setSort('rating')
              setShowDate(true)
              console.log(order)
            }}>По убывающей</li>
          <br></br>
          <li
            className={showDate ? '' : 'active'}
            onClick={() => {
              setSort(showDate ? 'date' : '')
              setOrder('')
              setShowDate((prev) => !prev)
              console.log(showDate)
            }}>По дате просмотра</li>
          <br></br>
          <li
            className={idCategory ? '' : 'active'}
            onClick={() => {
              setIdCategory('')
            }}>все</li>
          {genres.map((genre) => (
            <li
              onClick={() => {
                setIdCategory(genre.name)
                console.log(genre.name)
              }}
              className={idCategory === genre.name ? 'active' : ''}
              key={genre.name}>
              {genre.name}
            </li>
          ))}
        </ul>
        {/* <input
          value={searchValue}
          onChange={e => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию" /> */}
      </div>
      <div className="content">
        {isLoading ? (
          <h2>Идет загрузка...</h2>
        ) : (
          collections.map((obj) => (
            <Collection
              key={obj.title}
              title={obj.title}
              genres={obj.genres}
              link={obj.link}
              rating={obj.rating}
            />
          ))
        )
        }
      </div>
      <ScrollUpButton />
    </div>
  );

}

export default App;
