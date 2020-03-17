import React from 'react'

export default class Profile extends React.Component{
constructor(){
    super()
    this.state ={
       fields: {
         name:'',
         email: '',
         message: ''
       },
       errors: {},
       disabled : false
    }
  }

  handleValidation(){
       let fields = this.state.fields;
       let errors = {};
       let formIsValid = true;

       if(!fields["name"]){
          formIsValid = false;
          errors["name"] = "Name field cannot be empty";
       }

       if(typeof fields["name"] !== "undefined" && !fields["name"] === false){
          if(!fields["name"].match(/^[a-zA-Z]+$/)){
             formIsValid = false;
             errors["name"] = "Only letters";
          }
       }

       if(!fields["email"]){
          formIsValid = false;
		  errors["email"] = "Email field cannot be empty";
		}

		if(typeof fields["email"] !== "undefined" && !fields["email"] === false){
		   let lastAtPos = fields["email"].lastIndexOf('@');
		   let lastDotPos = fields["email"].lastIndexOf('.');
 
		   if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
			  formIsValid = false;
			  errors["email"] = "Email is not valid";
			}
	   }
 
	   if(!fields["message"]){
		  formIsValid = false;
		  errors["message"] = " Message field cannot be empty";
	   }
 
	   this.setState({errors: errors});
	   return formIsValid;
   }
 
   handleChange(field, e){
	   let fields = this.state.fields;
	   fields[field] = e.target.value;
	   this.setState({fields});
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
			  <label htmlFor="name">Name</label>
		  </div>
		  <div className="col-75">
			  <input type="text" placeholder="Enter Name"  refs="name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
			  <span style={{color: "red"}}>{this.state.errors["name"]}</span>
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
		  <div className="col-25">
			<label htmlFor="exampleInputEmail1">Email address</label>
		  </div>
		  <div className="col-75">
			  <input type="email" placeholder="Enter Email" refs="email" aria-describedby="emailHelp" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
			  <span style={{color: "red"}}>{this.state.errors["email"]}</span>
		  </div>
		</div>
		<div className="row">
		  <div className="col-25">
			  <label htmlFor="message">Message</label>
		  </div>
		  <div className="col-75">
			  <textarea type="text" placeholder="Enter Message" rows="5" refs="message" onChange={this.handleChange.bind(this, "message")} value={this.state.fields["message"]}></textarea>
			  <span style={{color: "red"}}>{this.state.errors["message"]}</span>
			  </div>
          </div>
          <div className="row">
            <button type="submit" disabled={this.state.disabled}>{this.state.disabled ? 'Sending...' : 'Send'}</button>
          </div>
      </form>
    )
  }
}
