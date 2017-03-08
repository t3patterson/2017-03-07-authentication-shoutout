import React from 'react'
import {Navbar} from '../components/component-navbar.js'
import {RegisterComponent} from '../components/component-form_register.js'

import {ACTIONS} from '../actions.js'
import {STORE} from '../store.js'

export const RegisterView = React.createClass({
	
	render: function(){
		return (

			<div className="container">
					<RegisterComponent/>
					
			</div>
		)
	}
})