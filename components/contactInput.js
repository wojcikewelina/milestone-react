import React, {Component} from 'react';

export default class ContactInput extends Component{


  render(){

    const {
      innerPlaceholder,
      inputClassName,
    } = this.props;
    return <input className= {this.props.inputClassName} type="text" placeholder={this.props.innerPlaceholder} value = {this.props.startText}/>
  }
}