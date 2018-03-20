import React from 'react'
import { Row, Card, CardTitle } from 'react-materialize'

const Main = () => {
  return (
    <div id='main'>
      <Row>
        <h2>Simple Sails-React-Materialize starter</h2>
        <Card header={<CardTitle reveal image={"https://www.alioze.com/wp-content/uploads/2016/11/react-js.png"} waves='light'/>}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <p><a href="#">This is a link</a></p>
        </Card>

        <Card header={<CardTitle reveal image={"https://camo.githubusercontent.com/d35c1bcf773e62351cc5c894641646d579e7b943/687474703a2f2f7361696c736a732e636f6d2f696d616765732f626b67645f737175696464792e706e67"} waves='light'/>}
              title="Card Title"
              reveal={<p>Here is some more information about this product that is only revealed once clicked on.</p>}>
          <p><a href="#">This is a link</a></p>
        </Card>
      </Row>
    </div>
  )
}

export default Main
