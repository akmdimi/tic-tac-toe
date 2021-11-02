import React, { useState } from "react";
import "./App"
import Icon from "./components/Icon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { icons } from "react-icons/lib";

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
      <Container className="p-5">
        <ToastContainer position="bottom-center"></ToastContainer>
        <Row>
          <Col md={6} className="offset-md-3"></Col>
          <div className="grid">
          {itemArray.map((item, index)=>(
            <Card>
              <CardBody className="box">
                 <Icon name={item}/>
              </CardBody>
            </Card>
          ))}
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default App;