import axios from 'axios';
import React, { Component } from 'react'
import Global from '../Global';

export default class DetallesDoctor extends Component {

    urlDoctores = Global.apiDoctores;

    state = {
        doctor: null
    }

    loadDoctor = () =>{
        let request = "api/Doctores/" + this.props.iddoctor;
        console.log(request);
        axios.get(this.urlDoctores + request).then(response => {
            this.setState({
                doctor: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctor();
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.iddoctor != this.props.iddoctor){
            this.loadDoctor();
        }
    }

  render() {
    return (
      <div>
            {
                this.state.doctor &&
                <ul className='list-group'>
                    <h1>Detalle doctor</h1>
                    <li className='list-group-item'>Apellido: {this.state.doctor.apellido}</li>
                    <li className='list-group-item'>Especialidad: {this.state.doctor.especialidad}</li>
                    <li className='list-group-item'>Salario: {this.state.doctor.salario}</li>
                </ul>
                       
            }
      </div>
    )
  }
}
