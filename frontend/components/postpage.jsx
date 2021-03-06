import React from 'react';
import {Link} from 'react-router';

import $ from 'jquery';

var NewPostForm = React.createClass({
	getInitialState() {
		return {
				title:'',
				blog: '',
				author: '',
				imgURL: '',
				}
	},
	handleChange(inputEvent,event) {
		this.setState({[inputEvent]: event.target.value});
	},
	makeNewPost(event) {
		let blogTitle = this.state.title;
		let blogBlog = this.state.blog;
		let blogAuthor = this.state.author;
		let blogURL = this.state.imgURL;
		$.ajax({
			url: '/api/posts',
			type: 'POST',
			data: {	title: blogTitle, 
					blog: blogBlog, 
					author: blogAuthor, 
					imgURL: blogURL
					}
		})
	},
	render() {
		return (
			<div>
				<form>
					<input type="text" placeholder="title" 
					onChange={this.handleChange.bind(this,'title')}
					value={this.state.input} />

					<input type="text" placeholder="blog" 
					onChange={this.handleChange.bind(this,'blog')}
					value={this.state.input} />

					<input type="text" placeholder="author" 
					onChange={this.handleChange.bind(this,'author')}
					value={this.state.input} />

					<input type="text" placeholder="img" 
					onChange={this.handleChange.bind(this,'imgURL')}
					value={this.state.input} />

					<Link to='/'> <input onClick={this.makeNewPost} type="button" value="submit" /> </Link>
				</form>
			</div>
		)
	}
});

export default NewPostForm;
