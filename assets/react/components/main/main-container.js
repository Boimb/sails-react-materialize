import React from 'react'
import Main from './main'
import {connect} from "react-redux";

const mapStateToProps = (state) => ({
  dummyProp: 'Hey !'
})

export default connect(mapStateToProps)(Main)
