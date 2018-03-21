import React, { Component } from 'react'
import { connect } from 'react-redux'

class Main extends Component {
  render() {
    return (
      <div id='main'>
        {this.props.children}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dummy: 'Hey !'
})

export default connect(mapStateToProps)(Main)
