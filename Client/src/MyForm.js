import React from 'react'
import axios from 'axios'
import './MyForm.css'
import './Functionality'
import './main'
import { GetVal } from './Functionality'
class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { firstName: '', lastName: '', birthday: '', email: '', phonenumber: '', password: '' };
        //const [name1,setname]=React.useState(null);    
    }

    handle_Firstname = (event) => {
        this.setState({ firstName: event.target.value })
       // console.log(this.state.firstName)
    }
    handle_Lastname = (event) => {
        this.setState({ lastName: event.target.value })
        //console.log(this.state.firstName)
    }
    handle_Birthday = (event) => {
        this.setState({ birthday: event.target.value })
       // console.log(this.state.firstName)
    }
    handle_email = (event) => {
        this.setState({ email: event.target.value })
        //console.log(this.state.firstName)
    }
    handle_PhoneNumber = (event) => {
        this.setState({ phonenumber: event.target.value })
        //console.log(this.state.firstName)
    }
    handle_Password = (event) => {
        this.setState({ password: event.target.value });
        //console.log(this.state.name)
        console.log(this.state.roll_number)
    }

    handleSubmit = (event) => {
        alert('Email : ' + this.state.email + ' Lastname: ' + this.state.lastName);

        axios.post('http://localhost:5000/get_data_from_client', {
            firstname:this.state.firstName,
            lastname:this.state.lastName,
            birthday:this.state.birthday,
            email: this.state.email,
            phonenumber:this.state.phonenumber,
            password:this.state.password           
        }).then((response) => {
            console.log(this.state.email)
            console.log(response)
            console.log('Data Successfully sent to server!')
        })
        // axios.post('http://localhost:8500/AddDepartment', {
        //     firstname:this.state.firstName,
        //     lastname:this.state.lastName,
        //     birthday:this.state.birthday,
        //     email: this.state.email,
        //     phonenumber:this.state.phonenumber,
        //     password:this.state.password           
        // }).then((response) => {
        //     console.log(this.state.email)
        //     console.log(response)
        //     console.log('Data Successfully sent to server!')
        // })

        event.preventDefault();
    }

    render() {
        return (
            <body>
                <div class="page-wrapper bg-gra-02 p-t-130 p-b-100 font-poppins">
                    <div class="wrapper wrapper--w680">
                        <div class="card card-4">
                            <div class="card-body">
                                <h2 style={{ color: "Black", padding: "10px" }}>Testing Website</h2>
                                <br></br>
                                <br></br>
                                <br></br>
                                <form onSubmit={this.handleSubmit}>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">First Name</label>
                                                <input style={{ backgroundColor: "#EFEFEF" }} class="input--style-4" type="text" name="firstname" id="firstname"
                                                    onChange={this.handle_Firstname} value={this.state.value} />

                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Last Name</label>
                                                <input style={{ backgroundColor: "#EFEFEF" }} class="input--style-4" type="text" name="lastname" id="lastname"
                                                onChange={this.handle_Lastname} value={this.state.value} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">BirthDay</label>
                                                <input style={{ backgroundColor: "#EFEFEF" }} class="input--style-4" type="date" name="birthday" id="birthday"
                                                onChange={this.handle_Birthday} value={this.state.value} />
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row row-space">
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Email</label>
                                                <input style={{ backgroundColor: "#EFEFEF" }} class="input--style-4" onmouseleave="fillemail()" onfocus="clear_email()" type="email" name="email" id="email" 
                                                onChange={this.handle_email} value={this.state.value}/>
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Phone Number</label>
                                                <input style={{ backgroundColor: "#EFEFEF" }} class="input--style-4" type="text" name="phone" id="phone"
                                                onChange={this.handle_PhoneNumber} value={this.state.value} />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Password</label>
                                                <input style={{ backgroundColor: "#EFEFEF" }} class="input--style-4" type="password" name="password" id="password" 
                                                />
                                            </div>
                                        </div>
                                        <div class="col-2">
                                            <div class="input-group">
                                                <label class="label">Confirm Password</label>
                                                <input style={{ backgroundColor: "#EFEFEF" }} class="input--style-4" type="password" name="confirmpassword" id="confirmpassword" 
                                                onChange={this.handle_Password} value={this.state.value}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-space">
                                        <label id="alert" style={{ color: "red" }}></label>
                                    </div>
                                    <div class="p-t-15">
                                        <button class="btn btn--radius-2 btn--blue" type="submit" onClick={GetVal} >SignUp</button>
                                        <t></t><a href='11'>Already Have an Account?</a>
                                    </div>

                                </form>
                                <br />

                            </div>

                        </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <h6 style={{ color: "black", fontSize: "10px" }}>Powered by Incredebols<br></br>All Rights Reserved to the Owner</h6>
                </div>
            </body>
        );
    }
}

export default MyForm;