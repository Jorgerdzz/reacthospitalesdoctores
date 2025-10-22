import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios';
import { Navigate } from 'react-router-dom';

export default class CreateHospital extends Component {

    urlHospital = Global.apiHospitales;

    cajaidhospital = React.createRef();
    cajanombre = React.createRef();
    cajadireccion = React.createRef();
    cajatelefono = React.createRef();
    cajacamas = React.createRef();

    insertHospital = (e) => {
        e.preventDefault();
        let hospital = {
            idhospital: parseInt(this.cajaidhospital.current.value),
            nombre: this.cajanombre.current.value,
            direccion: this.cajadireccion.current.value,
            telefono: this.cajatelefono.current.value,
            camas: parseInt(this.cajacamas.current.value)
        }
        let request = "webresources/hospitales/post";
        axios.post(this.urlHospital + request, hospital).then(response=>{
            console.log("Insertado")
            this.setState({
              status:true
            })
        });
    }

    state = {
      status: false
    }

  render() {
    return (
      <div>
        {
          this.state.status &&
          <Navigate to="/hospitales"/>
        }
        <h1>CreateHospital</h1>
        <form onSubmit={this.insertHospital}>
            <label>ID Hospital: </label>
            <input className='form-control' type='number' ref={this.cajaidhospital}></input>
            <label>Nombre:</label>
            <input className='form-control' type='text' ref={this.cajanombre}></input>
            <label>Dirección:</label>
            <input className='form-control' type='text' ref={this.cajadireccion}></input>
            <label>Teléfono:</label>
            <input className='form-control' type='text' ref={this.cajatelefono}></input>
            <label>Camas:</label>
            <input className='form-control' type='number' ref={this.cajacamas}></input><br></br>
            <button className='btn btn-primary'>Crear hospital</button>
        </form>
      </div>
    )
  }
}
