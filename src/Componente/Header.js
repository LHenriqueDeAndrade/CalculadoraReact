import React, { Component } from "react";
import "../index.css";
import styled from "styled-components";

const Container = styled.section`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 15vh;

  h1 {
    color: white;
  }

  nav {
    max-width: 1920px;
    width: 100%;
    margin: auto;
  }
`;

class Header extends Component {
    
  render() {
    return (
      <Container>
        <h1>Calculadora</h1>
      </Container>
    );
  }
}

export default Header;