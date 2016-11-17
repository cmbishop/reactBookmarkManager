import React from "react"

export default class LinkData extends React.Component {
  constructor(props) {
    super(props);
    this.updateLink = this.updateLink.bind(this);
  }

  updateLink(e){
    e.preventDefault();
    let data = e.target.value;
    let field = e.target.dataset.linkpart;
    let index = this.props.linkidx;
    this.props.updateweek(data, field, index);
  }

  render(){
    let link = this.props.linkdata;
    let index = this.props.index;
    return (
      <div key={index} >
        <label>Description: </label>
        <input
          type="text"
          data-linkpart={'link_text'}
          value={link.link_text}
          onChange={this.updateLink.bind(this)}
        />
        <label>Link: </label>
        <input
          type='text'
          data-linkpart={'link'}
          value={link.link}
          onChange={this.updateLink.bind(this)}
        />
      </div>
    );
  }
}
