import React, { useState } from "react";
import "./App"
import Icons from "./components/icons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const itemArray = new Array(9).fill("empty")          //Creating 9 values for 9 places

const App = ()=> {
  const [isCross, setIsCross] = useState(false)      //Checking boolean checker! no need to declare both of them can be verified by any one
  const [winMessage, setWinMessage] = useState("")  //displaying messaged who is the winner

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
