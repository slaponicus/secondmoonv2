import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {tags} from "../actions";
import PropTypes from 'prop-types'


class TagListing extends Component {

	static contextTypes = {
		router: PropTypes.object
	}

	componentDidMount() {
		if (!this.props.tags.length) {
	    	this.props.fetchTags();
		}
	}	

	handleTagClick(id){
		this.props.setTag(id,);
		this.context.router.history.push(`/`);
	}

	render(){
		if (!this.props.tags.isLoading) {
			return(
				<div>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<p>
								{this.props.tags.tags.map((tag)=>{
									return(<span><Link className="tag-link" to={"/?tags__name="+tag.name}><span>#{tag.name}</span></Link>&nbsp;</span>)
								})}
								</p>
							</div>
						</div>
					</div>
				</div>
			)
		} else {
			return(<div>Loading...</div>)
		}
	}

}

const mapStateToProps = state => {
	let errors = [];
	if (state.tags.errors) {
		errors = Object.keys(state.tags.errors).map(field => {
			return {field, message: state.tags.errors[field]};
		});
	} 
	return {
		tags: state.tags,
		errors
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchTags: () => {
			dispatch(tags.fetchTags());
	    },
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TagListing);
