import React, { Component } from 'react';
import "./App.css"
import Header from "../Header";
import Form from "../Form";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="wrapper">
            <Header/>
            <div className="app-container">
                <div className="form-container">
                    <h1>Начните торговать  прямо сейчас</h1>
                    <ul>
                        <li>Нет спреда — торгуйте с прозрачными и точными котировками</li>
                        <li>Достаточно депозита в $10, чтобы начать торговать</li>
                    </ul>
                    <Form/>
                </div>
                <div className="image-container">
                    <div className="image-block"></div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
