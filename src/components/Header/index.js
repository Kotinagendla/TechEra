import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="nav-container">
    <Link to="/" className="logo-button">
      <img
        src="https://assets.ccbp.in/frontend/react-js/tech-era/website-logo-img.png"
        alt="website logo"
        className="nav-image"
      />
    </Link>
  </div>
)

export default Header
