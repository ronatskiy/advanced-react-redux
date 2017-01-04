import React, { Component } from "react";

export default class CommentBox extends Component {
	constructor(props) {
		super(props);

		this.state = { comment: "" };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ comment: event.target.value });
	}

	render() {
		const { comment } = this.state; 
		return (
			<div className="comment-box">
				<textarea 
					value={comment} 
					onChange={this.handleChange} />
				<button>Submit button</button>
			</div>
		);
	}
}