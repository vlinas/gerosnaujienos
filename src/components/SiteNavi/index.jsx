import React from 'react'
import Link from 'gatsby-link'
import './style.scss'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row menu-bg">
        <div className="container">
          <Link className="text-center desktop-logo" to="/">
          <img src="../img/logo.png" className="menu-logo"></img>
            {/* <h1 className="navbar-brand mb-0">{title}</h1> */}
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row">
              <li
                className={
                  location.pathname === '/' ? 'nav-item active' : 'nav-item'
                }
              >
                <Link to="/" className="nav-link">
                  📰 Naujienos
                </Link>
              </li>
              {/* <li
                className={
                  location.pathname === '/ikelti-naujiena/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/ikelti-naujiena/" className="nav-link">
                  ➕ Įkelti Naujieną
                </Link>
              </li> */}
              {/* <li
                className={
                  location.pathname === '/apie-projekta/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/apie-projekta/" className="nav-link">
                  ℹ️ Apie Projektą
                </Link>
              </li> */}
              {/* <li
                className={
                  location.pathname === '/nutrition/'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="/nutrition/" className="nav-link">
                  Nutrition
                </Link>
              </li> */}
            </ul>
          </div>
          <div className="navbar-nav flex-row ml-md-auto d-none d-md-flex" />
        </div>
      </nav>
    )
  }
}

export default SiteNavi
