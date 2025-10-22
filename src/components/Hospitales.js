import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';

export default class Hospitales extends Component {

    urlHospitales = Global.apiHospitales;

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
      <div>
        <h1>Hospitales</h1>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>ID HOSPITAL</th>
                    <th>NOMBRE</th>
                    <th>DIRECCIÓN</th>
                    <th>TELÉFONO</th>
                    <th>CAMAS</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.hospitales.map((hospital, index) => {
                        return(
                            <tr key={index}>
                                <td>{hospital.idhospital}</td>
                                <td>{hospital.nombre}</td>
                                <td>{hospital.direccion}</td>
                                <td>{hospital.telefono}</td>
                                <td>{hospital.camas}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
      </div>
    )
  }
}
