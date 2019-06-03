import React, { Component } from 'react';
import axios from 'axios';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            codigozip: '',
            accion: '',
            motorDb: '',
            modo: '',
            loading: false,
            response: ''
        }            
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    
    render() {
        const apiDebugPort = process.env.REACT_APP_API_DEBUG_PORT;
        const apiProdPort = process.env.REACT_APP_API_PROD_PORT;
        console.log(apiDebugPort, apiProdPort);
        return (
            <div>
                <div className="form-wrap">
                <form className="form-style-1" onSubmit={this.handleSubmit}>
                    <label>Nombre</label>
                    <input onChange={this.handleChange} type="text" name="nombre" />
                    <label>Código ZIP</label>
                    <input onChange={this.handleChange} type="text" name="codigozip" />
                    <label>Acción</label>
                    <select onChange={this.handleChange} name="accion">
                        <option value="">Seleccione</option>
                        <option value="obtener">Obtener</option>
                        <option value="crear">Crear</option>
                        <option value="editar">Editar</option>
                        <option value="borrar">Borrar</option>
                    </select>
                    <label>MotorDB</label>
                    <select onChange={this.handleChange} name="motorDb">
                        <option value="">Seleccione</option>
                        <option value="sqlserver">MSSQL</option>
                        <option value="mongodb">MongoDB</option>
                    </select>
                    <label>Modo</label>
                    <select onChange={this.handleChange} name="modo">
                        <option value="">Seleccione</option>
                        <option value={apiDebugPort}>Debug</option>
                        <option value={apiProdPort}>Prod</option>
                    </select>
                    <div><input type="submit" value="Enviar"/></div>
                </form>
                </div>
                <div className="result-wrap"><pre>{this.state.response}</pre></div>
            </div>
        );
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);

        let data = this.state;

        switch (this.state.accion) {
            case 'crear':
                this.createCity(data.nombre, data.codigozip, data.modo, data.motorDb);
                break;
            case 'editar':
                this.editCity(data.nombre, data.codigozip, data.modo, data.motorDb);
                break;
            case 'borrar': 
                this.deleteCity(data.codigozip, data.modo, data.motorDb);
                break;
            case 'obtener': 
                this.getCities(data.modo, data.motorDb)
                break;
            default:
                this.getCities(data.modo, data.motorDb)
                break;
        }
    }

    getCities(mode, dbEngine) {
        const url = `${process.env.REACT_APP_API_URL}:${mode}/${dbEngine}/city`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': process.env.REACT_APP_TOKEN,
            'accept-version': process.env.REACT_APP_API_VERSION
        };

        axios.get(url, {headers})
        .then(response => {
            console.log(response);
            this.setState({loading:false, response: JSON.stringify(response, null, 4)});

        })
        .catch(error => {
            console.log(error);
            this.setState({loading:false, response: JSON.stringify(error, null, 4)});
        })
    }
    
    createCity(name, zipCode, mode, dbEngine) {
        const url = `${process.env.REACT_APP_API_URL}:${mode}/${dbEngine}/city`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': process.env.REACT_APP_TOKEN,
            'accept-version': process.env.REACT_APP_API_VERSION
        };

        axios.post(url, {"CityName": name, "ZipCode": zipCode}, {headers})
        .then(response => {
            console.log(response);
            this.setState({loading:false, response: JSON.stringify(response, null, 4)});

        })
        .catch(error => {
            console.log(error);
            this.setState({loading:false, response: JSON.stringify(error, null, 4)});
        })
    }

    editCity(name, zipCode, mode, dbEngine) {
        const url = `${process.env.REACT_APP_API_URL}:${mode}/${dbEngine}/city/${zipCode}`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': process.env.REACT_APP_TOKEN,
            'accept-version': process.env.REACT_APP_API_VERSION
        };

        axios.put(url, {"CityName": name}, {headers})
        .then(response => {
            console.log(response);
            this.setState({loading:false, response: JSON.stringify(response, null, 4)});

        })
        .catch(error => {
            console.log(error);
            this.setState({loading:false, response: JSON.stringify(error, null, 4)});
        })
    }

    deleteCity(zipCode, mode, dbEngine) {
        const url = `${process.env.REACT_APP_API_URL}:${mode}/${dbEngine}/city/${zipCode}`;

        const headers = {
            'Content-Type': 'application/json',
            'Authorization': process.env.REACT_APP_TOKEN,
            'accept-version': process.env.REACT_APP_API_VERSION
        };

        axios.delete(url, {headers})
        .then(response => {
            console.log(response);
            this.setState({loading:false, response: JSON.stringify(response, null, 4)});

        })
        .catch(error => {
            console.log(error);
            this.setState({loading:false, response: JSON.stringify(error, null, 4)});
        })
    }
}

export default Formulario;