import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PostCard from './PostCard';
import SearchForm from './SearchForm';

const APIEndpoint = `https://jsonplaceholder.typicode.com/`;

class Home extends Component {
	
	constructor() {
		super();
		this.state = {};
		this.state.users = [];
		this.state.posts = [];

		this.getPost = this.getPost.bind(this);
		this.getUsers = this.getUsers.bind(this);
		this.search = this.search.bind(this);
	}
	
	async getPost() {
		let response = await fetch(`${APIEndpoint}posts/`, {});
		return await response.json();
	}

	async getUsers() {
		let response = await fetch(`${APIEndpoint}users/`, {});
		return await response.json();
	}

	async search(search = null) {
		const _this = this;

		let users = (this.state.users.length > 0) ? this.state.users : await _this.getUsers();
		
		// Create an user map for performance
		let userMap = users.reduce((map, u) => Object.assign(map, { [u.id.toString()]: u }), {});

		// Get all the post
		let posts = (await _this.getPost());
		
		// Filter by criteria
		if (search) {
			posts = posts.filter((p) => p.body.toLowerCase().includes(search.toLowerCase()) || p.title.toLowerCase().includes(search.toLowerCase()));
		}
		posts = posts.map((p) => Object.assign(p, { user: userMap[p.userId.toString()] }));

		_this.setState({ posts, users });
	}

	async componentDidMount() {
		await this.search();
	}
	
	render() {
		return (
			<React.Fragment>
				<Row className='text-left'>
					<Col>
						<h2>Simple Blog</h2>
					</Col>
				</Row>
				<hr/>
				<Row className='text-left'>
					
					{/* Posts Area */}
					<Col sm={{ size: '8' }}>
						{this.state.posts.map((post) => (
							<PostCard key={post.id} post={post}></PostCard>
						))}
					</Col>
					
					{/* Side area */}
					<Col sm={{ size: '4' }}>
						<SearchForm onClick={this.search} />
					</Col>
				</Row>
			</React.Fragment>
		);
	}
}

export default Home;
