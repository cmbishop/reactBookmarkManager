import React from "react"

export default class CreateWeek extends React.Component {

  constructor(props) {
    super(props);
    this.state = { weeksArr: this.props.weekData.posts};
    this.createWeek = this.createWeek.bind(this);
  }

  createWeek(e) {
    e.preventDefault();
    this.props.addWeek(this.state.weeksArr);
  }

  render(){
    return (
      <button
        onClick={this.createWeek}>
        Add a new week
      </button>
    );
  }
}
