import React, { Component } from "react";
import { ShowCount } from "../redux/reducers/ShowCount";
export default class Counter extends Component {
  render() {
    return (<div><ShowCount/></div>)
  }
}
