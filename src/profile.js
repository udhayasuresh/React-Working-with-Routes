import React from 'react'

export default class Profile extends React.Component{
constructor(){
    super()
    this.state ={
       
         name:'',
         email: '',
         message: ''
       ,
       errors: {},
       disabled : false
    }
  }

  handleValidation(){
       let email = this.state.email;
       let errors = {};
       let formIsValid = true;


       if(!email["email"]){
          formIsValid = false;
		  errors["email"] = "Email field cannot be empty";
		}

		if(typeof email["email"] !== "undefined" && !email["email"] === false){
		   let lastAtPos = email["email"].lastIndexOf('@');
		   let lastDotPos = email["email"].lastIndexOf('.');
 
		   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email["email"].indexOf('@@') === -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
			  formIsValid = false;
			  errors["email"] = "Email is not valid";
			}
	   }
 
	   
 
	   this.setState({errors: errors});
	   return formIsValid;
   }
 
	handleChange(field, e){
		let email = this.state.email;
		email[field] = e.target.value;
		this.setState({email});
  }
  
   handleSubmit(e){
	e.preventDefault();
	if(this.handleValidation()){
		console.log('validation successful')
	  }else{
		console.log('validation failed')
	  }
}


maxLengthCheck = (object) => {
	if (object.target.value.length > object.target.maxLength) {
	 object.target.value = object.target.value.slice(0, object.target.maxLength)
	  }
	}

render(){
  return (
	<form onSubmit={this.handleSubmit.bind(this)}>

		<div className="row">
		  <div className="col-25">
			<label htmlFor="exampleInputEmail1">Email address</label>
		  </div>
		  <div className="col-75">
			  <input type="email" placeholder="Enter Email" refs="email" aria-describedby="emailHelp" onChange={this.handleChange.bind(this, "email")} value={this.state.email["email"]}/>
			  <span style={{color: "red"}}>{this.state.errors["email"]}</span>
		  </div>
		</div>
                     
  <div className="row">
          <div className="col-25">
            <label htmlFor="">Postcode</label>

		  </div>
		  <div className="col-75">
			  <input type="number" name="postcode" maxLength = "6" onInput={this.maxLengthCheck}/>
		  </div>
		</div>
	
          <div className="row">
            <button type="submit" disabled={this.state.disabled}>{this.state.disabled ? 'Sending...' : 'Send'}</button>
          </div>
      </form>
    )
  }
}
