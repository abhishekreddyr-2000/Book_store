import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png"
        alt="not found"
        className="not-found-image"
      />

      <h1 className="not-found-heading">
        Page Not Found
      </h1>

      <p className="not-found-description">
        The page you are looking for does not exist.
      </p>

      <Link to="/">
        <button
          type="button"
          className="home-button"
        >
          Go To Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound