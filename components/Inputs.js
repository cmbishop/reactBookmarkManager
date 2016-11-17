import React from "react"

export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(e){
    const data = e.target.value;
    const field = this.props.inputfield;
    this.props.updateweek(data, field);
  }

  render(){
    let input;
    if (this.props.inputfield !== 'text') {
      input = (
       <input
        type="text"
        value={this.props.inputdata}
        onChange={this.updateInput}
        />
      );
    } else {
      input = (
        <textarea
          value={this.props.inputdata}
          onChange={this.updateInput}
        />
      );
    }
    return (
      input
    );
  }
}
