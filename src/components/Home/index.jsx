import {useNavigate} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const navigate = useNavigate()

  const onClickExploreBooks = () => {
    navigate('/books')
  }

  return (
    <div className="home-container">
      <Header />

      <div className="home-content">
        <h1 className="home-heading">
          Welcome to IT BookStore
        </h1>

        <p className="home-description">
          Discover your favorite programming and technology books.
        </p>

        <button
          type="button"
          className="explore-button"
          onClick={onClickExploreBooks}
        >
          Explore Books
        </button>
      </div>
    </div>
  )
}

export default Home