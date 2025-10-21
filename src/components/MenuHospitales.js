import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'

export default class MenuHospitales extends Component {

  urlHospitales = Global.apiHospitales

  state = {
    hospitales: []
  }

  loadHospitales = () => {
    let request = "webresources/hospitales";
    axios.get(this.urlHospitales + request).then(response => {
      this.setState({
        hospitales: response.data
      })
    })
  }

  componentDidMount = () => {
    this.loadHospitales();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/doctores/14">Doctores 14</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/doctores/22">Doctores 22</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            {
              this.state.hospitales.map((hospital, index) => {
                return(
                  <li key={index}><NavLink className="dropdown-item" to={"/doctores/" + hospital.idhospital} >{hospital.nombre}</NavLink></li>
                )
              })
            }
            
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li className="dropdown-divider"></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
  }
}
