import React, { Component, Fragment } from 'react';
import moment from 'moment';
import _ from 'lodash';

class PostCard extends Component {

	render() {
		
		// Set a dummy created date
		this.props.post.createdDate = moment().subtract(this.props.post.id, 'd').hour(_.random(8, 16)).minute(_.random(1, 60)).format('ll')

		return (
			<Fragment>
				<h3>
					{this.props.post.title}
				</h3>
				<p>
					<span className="glyphicon glyphicon-time"></span> Published on {this.props.post.createdDate} <small> by {this.props.post.user.name} </small>
				</p>
				<hr/>
				<p>{ this.props.post.body }</p>
				{/* <a className="btn btn-link pull-right" ui-sref="^.this.props.post({id: this.props.post.id})">Ver más <span className="glyphicon glyphicon-chevron-right"></span></a> */}
			</Fragment>
		)
	}

}

export default PostCard;