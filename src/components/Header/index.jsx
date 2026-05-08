import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  return (
    <nav className="header-container">
      <h1 className="logo">IT BookStore</h1>

      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/books">
            Book List
          </Link>
        </li>

        <li>
          <Link className="nav-link" to="/cart">
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header