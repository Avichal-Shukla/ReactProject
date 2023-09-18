import React, {useState} from 'react'
import {Link} from "react-router-dom"

export default function NavBar(props) {

  const {onCountryChange} = props;        // Extracting 'onCountryChange' from props using destructuring
  
  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    onCountryChange(selectedCountry);
  };


  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.theme} bg-${props.theme}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" to="/"> <b> Around the World </b> </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/"> Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports"> Sports </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health"> Health </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology"> Technology </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment"> Entertainment </Link>
                </li>
              </ul>
              <div className={`form-check form-switch text-${props.theme === 'light'? 'dark': 'light'}`} onClick={props.changeTheme}>
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.theme === 'light'? 'Dark Mode': 'Light Mode'} </label>
              </div>
              <select className={`form-select bg-${props.theme === 'light'? 'light': 'dark'}`} onChange={handleCountryChange}>
                  <option> Country </option>
                  <option value="in" country="in"> India </option>
                  <option value="us" country="us"> United States </option>
                  <option value="gb" country="gb"> United Kingdom </option>
                  <option value="jp" country="jp"> Japan </option>
                  <option value="cn" country="cn"> China </option>
                  <option value="au" country="au"> Australia </option>
                  <option value="kr" country="kr"> South Korea </option>
                  <option value="nz" country="nz"> New Zealand </option>
                  <option value="ru" country="ru"> Russia </option>
                  <option value="de" country="de"> Germany </option>
              </select>
            </div>
          </div>
      </nav>
    </div>
  )
}
