import React, { Component } from 'react'
import { login } from "../../services/auth";
import api from "../../services/api";
import { Link } from "react-router-dom";
import './style.css'

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      telefone: "1234",
      error: ""
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = async e => {
    e.preventDefault();
    const { email, senha } = this.state;
    if (!email || !senha) {
      this.setState({ error: "Preencha email e senha para continuar!" });
    } else {
      try {
        const request = {
          email: this.state.email,
          senha: this.state.senha
        }
        console.log(request)
        const response = await api.post("/login", request);
        this.props.history.push("/app");
        login(response.data.token);
        console.log(response)
      } catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique suas credenciais."
        });
      }
    }
  };
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  };
  render() {
    return (
      <div className="container">
        {this.state.error && <p>{this.state.error}</p>}
<<<<<<< HEAD
        <div className="card" id="formulario">
          <div className="card-body">
            <h1 className="card-title text-center">Login</h1>
            <div>
              <form onSubmit={this.handleLogin}>
                <div className="form-group mt-5">
                  <input type="text" className="form-control" placeholder="Email" name='email'
                    onChange={(e) => this.handleChange(e)} />
                </div>
                <div className="form-group mt-3">
                  <input type="password" className="form-control" placeholder="Senha" name='senha'
                    onChange={(e) => this.handleChange(e)} />
                </div>
                <button type="submit" className="btn btn-dark btn-block mt-4">Entrar</button>
              </form>
=======
        <div className="row justify-content-center">

          <div className="card" id="formulario">
            <div className="card-body">
              <h1 className="card-title text-center">Login</h1>
              <div>
                <form>
                  <div className="form-group mt-5">
                    <input type="text" className="form-control" placeholder="Email" name='email' required
                      onChange={(e) => this.handleChange(e)} />
                  </div>
                  <div className="form-group mt-3">
                    <input type="password" className="form-control" placeholder="Senha" name='senha' required
                      onChange={(e) => this.handleChange(e)} />
                  </div>
                  <button type="submit" className="btn btn-dark btn-block mt-4">Entrar</button>
                </form>
              </div>
              <h5 className="text-center mt-4">Não tem uma conta?</h5>
              <p className="text-center">
                <strong>
                  <Link to="./signup">Cadastre-se</Link>
                </strong>
              </p>
>>>>>>> 39c687ac595afb642fc6e529e7c3e04cfbca37e9
            </div>
          </div>
        </div>
      </div>
    )
  }
}
