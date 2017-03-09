import React from 'react';
import {Navbar} from './components/component-navbar.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';

import {WelcomeView} from './views/view-welcome.js'
import {ShoutsView} from './views/view-shouts.js'
import {RegisterView} from './views/view-register.js'
import {LoginView} from './views/view-login.js'

export const ViewController = React.createClass({
	
	getInitialState: function(){
		ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
		let storeObject = STORE.getStoreData() 
		return storeObject
	},

	componentDidMount: function(){
		let component = this;
		
	   STORE.onStoreChange(function(){
			// console.log("STATE CHANGED!")
			let newStoreObj = STORE.getStoreData()
			component.setState(newStoreObj)
		})

		ACTIONS.fetchCurrentUser()

	},	
		
	render: function(){
		
		let componentToRender

		switch(this.state.currentNavRoute){
			case "LOGIN":	
				componentToRender = <LoginView {...this.state}/>
				break;
			case "REGISTER":	
				componentToRender = <RegisterView {...this.state}/>
				break;
 			case "SHOUTS":
				componentToRender = <ShoutsView {...this.state}  />
				break;
         case "HOME":
				componentToRender = <WelcomeView {...this.state} />
				break;
 			default:
		}

		// console.log('APP STATE', this.state)
		return (
			<div>
				<Navbar { ...this.state }/>
				{componentToRender}
			</div>
		)
	}
})
