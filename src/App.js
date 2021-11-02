import React, { useState } from "react";
import "./App"
import Icons from "./components/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const itemArray = new Array(9).fill("empty")

const App = ()=> {
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")

  const reloadGame = () => {
    //
  }

  const checkisWinner = () => {
    //
  }

  const changeItem = itemNumber => {
    //
  }

  
  return(
    <div className="App">
      <Icon/>
    </div>
  )
}


export default App;
