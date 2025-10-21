import React, { Component } from 'react'
import Global from '../Global';
import axios from 'axios';
import DetallesDoctor from './DetallesDoctor';

export default class Doctores extends Component {

    urlDoctores = Global.apiDoctores;

    state = {
        doctores: [],
        idDoctor: 0
    }

    loadDoctores = () => {
        let request = "api/Doctores/DoctoresHospital/" + this.props.idhospital
        axios.get(this.urlDoctores + request).then(response => {
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctores()
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idhospital != this.props.idhospital){
            this.loadDoctores();
            this.setState({
                idDoctor: 0
            })
        }
    }

    seleccionarDoctor = (id) => {
        this.setState({
            idDoctor: id
        })
    }

  render() {
    return (
      <div>
        <h1>Doctores</h1>
        <table className='table table-dark table-striped'>
            <thead>
                <tr>
                    <th>APELLIDO</th>
                    <th>ESPECIALIDAD</th>
                    <th>SALARIO</th>
                    <th>ACCIONES</th>
                </tr>
            </thead>
            <tbody>
                {
                    this.state.doctores.map((doctor, index) => {
                        return(<tr key={index}>
                            <td>{doctor.apellido}</td>
                            <td>{doctor.especialidad}</td>
                            <td>{doctor.salario} €</td>
                            <td><button onClick={ () => {this.seleccionarDoctor(doctor.idDoctor)}} className='btn btn-success'>Detalles</button></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        {
            this.state.doctorSeleccionado != 0 &&
            <DetallesDoctor iddoctor={this.state.idDoctor}/>
        }
      </div>
    )
  }
}
