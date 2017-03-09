import React from 'react'
import {ACTIONS} from '../actions.js'

export const LoginComponent = React.createClass({
	_handleSubmit: function(evt){
		evt.preventDefault()
		let formEl = evt.target
		console.log(formEl)
		let usrVal = formEl.usernameField.value
		let pwVal = formEl.passwordField.value
		ACTIONS.loginUser(usrVal, pwVal)
	},

   render: function(){
      let currentRatingShown = this.props.shownRatingType

      return (
         <div className="auth-form">
				<form onSubmit={this._handleSubmit}>
	            <h4>Username </h4>
					<input type="text" className="form-control" name="usernameField"/>
					
	            <h4>Password </h4>
	            <input type="password" className="form-control" name="passwordField"/>
			
	            <button style={{margin : "10px" } }className="btn btn-block btn-success btn-lg" type="submit">+</button>
				</form>
				
			</div>
      )
   }
})