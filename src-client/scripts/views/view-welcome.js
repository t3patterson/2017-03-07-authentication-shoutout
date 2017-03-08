import React from 'react'
import {Navbar} from '../components/component-navbar.js'
import {HeroComponent} from '../components/component-welcome_hero.js'

import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const WelcomeView = React.createClass({
	// getInitialState: function(){
	// 	return STORE.getStoreData() 
	// },
	
	render: function(){
		console.log('from <HomeView/>', this.props.shoutOutsListData)
		return (

			<div className="container">
					<HeroComponent/>
					
			</div>
		)
	}
})