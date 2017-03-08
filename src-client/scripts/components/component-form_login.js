import React from 'react'
import {ACTIONS} from '../actions.js'

export const LoginComponent = React.createClass({
	

   render: function(){
      let currentRatingShown = this.props.shownRatingType

      return (
         <div className="auth-form">
				<form>
	            <h4>Username </h4>
					<input type="text" className="form-control" name="usernameField"/>
					
	            <h4>Password </h4>
	            <input type="password" className="form-control" name="passwordField"/>
			
	            <button className="btn btn-block btn-success btn-lg" type="submit">+</button>
				</form>
				
			</div>
      )
   }
})