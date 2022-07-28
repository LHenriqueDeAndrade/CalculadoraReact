import React from "react";
import "../index.css";
import styled from "styled-components";

const Menu = styled.section`
background-color: silver;
display: flex;
height: 5vw;

div {
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
}

input {
  display: flex;
  text-align: center;
  border-radius: 5px;
}

button {
  border-radius: 5px;
  background-color: lightgray;
  &:hover {
    cursor: pointer;
  }
}

p {
  background-color: white;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 6vw;
  border:solid;
  border-radius: 5px;
}
`;

class Main extends React.Component {
  state = {
    n1: "",
    n2: "",
    result: 0
  };

  Number1 = (event) => {
    this.setState({
      n1: Number(event.target.value)
    });
  };

  Number2 = (event) => {
    this.setState({
      n2: Number(event.target.value)
    });
  };

  Soma = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 + n2,
      n1: "",
      n2: ""
    });
  };

  Subtração = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 - n2,
      n1: "",
      n2: ""
    });
  };

  Divisão = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 / n2,
      n1: "",
      n2: ""
    });
  };

  Multiplicação = () => {
    const { n1, n2 } = this.state;
    this.setState({
      result: n1 * n2,
      n1: "",
      n2: ""
    });
  };

  Limpar = () => {
    this.setState({
      result: null,
      n1: "null",
      n2: "null"
    })
  }

  render() {
    return (
      <Menu>
        <div>
        <input value={this.state.n1} type="number" onChange={this.Number1} />
        <input value={this.state.n2} type="number" onChange={this.Number2} />
        <p>= {this.state.result}</p>
        <button onClick={this.Soma}>Somar</button>
        <button onClick={this.Subtração}>Subtrair</button>
        <button onClick={this.Divisão}>Dividir</button>
        <button onClick={this.Multiplicação}>Multiplicar</button>
        <button onClick={this.Limpar}>C/CE</button>
        </div>
      </Menu>
    );
  }
}

export default Main;