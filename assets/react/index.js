import React from 'react'
import ReactDOM from 'react-dom'
import './style/style.scss'
import Header from './components/header/header'
import Main from './components/main/main'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <div id='wrapper'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
