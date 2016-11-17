import React from "react"
import Header from "./Header";
import Week from "./Week";
import CreateWeek from "./CreateWeek";
import WeekForm from "./WeekForm";

export default class Layout extends React.Component {

  constructor(props) {
    super(props);
    this.state = { posts: this.props.pageData.posts }
    this.updateWeek = this.updateWeek.bind(this);
    this.addWeek = this.addWeek.bind(this);
  }

  addWeek(){
    let new_Week = {
      subject: 'New Week',
      text: '',
      links: [ { link: '', link_text: '' } ]
    };
    let weeksArr = this.state.posts;
    weeksArr.push(new_Week);
    this.setState ({ posts: weeksArr } );
  }

  updateWeek(updatedWeek, index) {
    let currentWeek = this.state.posts;
    currentWeek[index] = updatedWeek;
    this.setState(currentWeek);
  }

  render(){
    let weekObjs = this.state.posts;
    let updateWeek = this.updateWeek;
    const weeksMap = weekObjs.map((week, index) => {
      return ( <div key={index}>
                <Week position={index} weekData={weekObjs[index]} updateWeek={updateWeek}/>
                <WeekForm position={index} weekData={weekObjs[index]} updateWeek={updateWeek} />
              </div>
             )
    });

    return (
      <div>
        <Header headerData={this.props.pageData.header_title} />
        <CreateWeek weekData={this.props.pageData} addWeek={this.addWeek} />
        {weeksMap}
      </div>
    );
  }
}
