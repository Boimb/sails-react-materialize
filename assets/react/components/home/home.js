import React from 'react'
import { Row, Card, CardTitle } from 'react-materialize'

const Home = () => {
  return (
    <Row>
      <h2>Simple Sails-React-Materialize starter</h2>
      <Card header={<CardTitle reveal image={"https://camo.githubusercontent.com/d35c1bcf773e62351cc5c894641646d579e7b943/687474703a2f2f7361696c736a732e636f6d2f696d616765732f626b67645f737175696464792e706e67"} waves='light'/>}
            title="Sails.js"
            reveal={<div><p>Build practical, production-ready Node.js apps in a matter of weeks, not months.</p>
              <p>Sails is the most popular MVC framework for Node.js, designed to emulate the familiar MVC pattern of frameworks like Ruby on Rails, but with support for the requirements of modern apps: data-driven APIs with a scalable, service-oriented architecture.</p>
            </div>}>
        <p><a href="https://sailsjs.com/">Go get it!</a></p>
      </Card>
      <Card header={<CardTitle reveal image={"https://www.alioze.com/wp-content/uploads/2016/11/react-js.png"} waves='light'/>}
            title="ReactJS"
            reveal={<p>A JavaScript library for building user interfaces.</p>}>
        <p><a href="https://reactjs.org/">Go get it!</a></p>
      </Card>
    </Row>
  )
}

export default Home
