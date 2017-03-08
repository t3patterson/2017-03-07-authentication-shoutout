import React from 'react'
import {ACTIONS} from '../actions.js'

export const RegisterComponent = React.createClass({
	getInitialState: function(){
		return { 
			imgPreviewLink: 'http://rednova8.com/wordpress/wp-content/uploads/2017/02/no-image-found.jpg'
		}
	},

	_handleImgPreviewClick: function(evt){
		evt.preventDefault();
		let imgDomEl = this.refs.previewImgEl
		console.log(imgDomEl.value)
		if (imgDomEl.value.length > 0){
			this.setState({
				imgPreviewLink: imgDomEl.value
			})
		} else {
			this.setState({
				imgPreviewLink:  'http://rednova8.com/wordpress/wp-content/uploads/2017/02/no-image-found.jpg'
			})
		}
	},

   render: function(){

      return (
         <div className="auth-form">
				<form>
	            <h4>Username </h4>
					<input type="text" className="form-control" name="usernameField"/>
					
	            <h4>Password </h4>
	            <input type="password" className="form-control" name="passwordField"/>
				
	            <h4>Add Avatar Image</h4>
	            <input type="text" className="form-control" name="imgInputEl" ref="previewImgEl" />
	            <button 
						className="btn btn-default btn-warning btn-med"
 						style={{margin: '12px'}}
						onClick={this._handleImgPreviewClick} >
						Add Image
				   </button>

	            <br/>

	            <div href="#" className="thumbnail">
	                  <img src={this.state.imgPreviewLink} alt="no image found"/>
	            </div>

	            <button className="btn btn-block btn-success btn-lg" type="submit">Create Account</button>
				</form>
				
			</div>
      )
   }
})