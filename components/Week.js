import React from "react"
import Link from "./Links";

export default class Week extends React.Component {
  constructor(props) {
    super(props);
    this.stopEditing = this.stopEditing.bind(this);
  }

  updateWeek(newWeek) {
    this.setState({ week: newWeek });
  }

  stopEditing(e){
    e.preventDefault();
    let week = this.props.weekData;
    week.editing = true;
    this.props.updateWeek(week, this.props.position);
  }

  render(){
    var weekObj = this.props.weekData;
    let linksObj = weekObj.links;
    const linksMap = linksObj.map((week, index) => {
      return (<Link key={index} linkdata={linksObj[index]}/>);
    })
    return (
      <div className="App-section">
        <h3>{weekObj.subject}</h3>
        <button
          onClick={this.stopEditing}
          className='update_Week'>
          Edit Week
        </button>
        <p>{weekObj.text}</p>
        {linksMap}
      </div>
    );
  }
}
