import React from 'react'
import {Navbar} from '../components/component-navbar.js'
import {RatingFilterComponent} from '../components/component-rating_filter.js'
import {NewShoutComponent} from '../components/component-new_shout.js'
import {ShoutOutListComponent} from '../components/component-shout_list.js'
import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const ShoutsView = React.createClass({
	// getInitialState: function(){
	// 	return STORE.getStoreData() 
	// },

	componentDidMount: function(){
		let component = this;
		
		console.log('fetchyfetch')
		ACTIONS.fetchAllShouts()
	
		
	},
	
	render: function(){
		return (

			<div className="container">

					<RatingFilterComponent 
						{...this.props}
					/>
					<NewShoutComponent/>
					<ShoutOutListComponent 
						{...this.props}
					/>
			</div>
		)
	}
})