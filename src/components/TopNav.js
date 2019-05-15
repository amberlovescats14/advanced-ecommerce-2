import React, { Component } from 'react'



export default class TopNav extends Component {
  handleClick = (e) => {
    e.preventDefault();
    console.log(e)
    this.props.categoryFunc(e.target.id)
    }
  render() {
    return (
      <div>
        					<div className="top-nav">
						<ul>
							<li><a href="#" id="headlights" onClick={this.handleClick}>car lights</a></li>
							<li><a href="#" id="tires" onClick={this.handleClick}>Car wheels</a></li>
							<li><a id="bumpers" href="#" onClick={this.handleClick}>car bumpers</a></li>
							<li><a href="#" id="audio" onClick={this.handleClick}>car audiosystem</a></li>
							<li><a href="#" id="engine" onClick={this.handleClick}>Engines</a></li>

							<div className="clear"> </div>
						</ul>
					</div>
      </div>
    )
  }
}
