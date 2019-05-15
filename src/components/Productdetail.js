import React, { Component } from 'react'

export default class Productdetail extends Component {
  render() {
    return (
      <div>
        								<div className="grid_1_of_5 images_1_of_5">
										<img src={this.props.product.imgUrl} />
										<h3>{this.props.product.name}</h3>
										<p>{this.props.product.description}</p>
										<h4>{this.props.product.price}</h4>
										<div className="button"><span><a href="singlepage.html">Read More</a></span></div>
								</div>
      </div>
    )
  }
}
