import React from "react"
import Input from "./Inputs"
import LinkData from "./LinkData"

export default class WeekForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { week: this.props.weekData };
    this.updateWeekObj = this.updateWeekObj.bind(this);
    this.addLink = this.addLink.bind(this);
  }

  update_Week(data, field, index) {
    let updatedWeek = this.state.week;
    switch (field) {
      case 'subject':
          updatedWeek.subject = data;
          break;
      case 'link':
          if (index !== undefined) {
            updatedWeek.links[index].link = data
          }
          break;
      case 'link_text':
          if (index !== undefined) {
            updatedWeek.links[index].link_text = data
          }
          break;
      default:
        break;
      }
    this.setState({ week: updatedWeek });
  }

  addLink(e){
    e.preventDefault();
    let current = this.state.week;
    let newLink = { link_text: '', link: ''};
    current.links.push(newLink);
    this.setState({ posts: current });
  }

  updateWeekObj(e) {
    e.preventDefault();
    let week = this.state.week;
    week.editing = false;
    this.props.updateWeek(week, this.props.position);
    this.setState(week);
  }

  render(){
    let linksObj = this.props.weekData.links;
    const linksMap = linksObj.map((link, index) => {
      return (
        <div key={index}>
          <LinkData linkdata={link} linkidx={index} updateweek={ this.update_Week.bind(this) } />
        </div>
      );
    })
    return (
      <div className={`App-section ${ this.state.week.editing ? '' : 'hidden'} `} >
        <h3>Edit Week</h3>
        <form>
          <label>Subject</label>
          <Input inputdata={this.props.weekData.subject} inputfield='subject' updateweek={this.update_Week.bind(this)}/>
          <br></br>
          <br></br>
          <div>
            { linksMap }
          </div>
          <button
            onClick={this.addLink}>
            Add Link
          </button>
          <button
            onClick={this.updateWeekObj}>
            Save Week
          </button>
        </form>
      </div>
    );
  }
}
