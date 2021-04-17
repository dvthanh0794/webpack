import React from "react"
import './style.scss';
import MyImage from './assets/images/img.jpg';
import Test from 'Component/Test'

function App() {
    return (<div>
        <h1>Welcome to React App</h1>
        <h3>Date : {new Date().toDateString()}</h3>
        <img src={MyImage} alt="torchlight in the sky" />
        <Test/>
    </div>)
}

export default App