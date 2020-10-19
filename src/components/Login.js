import { TextField,Button,Typography, Container,Link } from '@material-ui/core'
import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";


export class login extends Component {
    constructor() {
        super();
        this.state = {email: "",password: "",errors: {},isLogging:false};
    }
    // If logged in and user navigates to Login page, should redirect them to dashboard
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push("/");
            console.log(this.state.props)
        }
    }
    componentWillReceiveProps(nextProps) {

        this.setState({ isLogging:false });
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/");
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.setState({ isLogging:true });
        this.props.loginUser(userData);

    };
    render() {
         const { errors,isLogging } = this.state;
        return (
        <Container maxWidth="xs" style={{position:"absolute" ,left:"50%",top: "50%",transform: "translate(-50%, -50%)",padding:"50px" }} >
            <Typography component="h1" variant="h5">Sign in</Typography>
            <form style={{marginTop:"10px"}} onSubmit={this.onSubmit}>
                <TextField id="email"  type="email"  fullWidth label="Email" variant="outlined" required autoFocus onChange={this.onChange} error={(errors.email?true:false)} helperText={errors.email} style={{marginBottom:"15px"}}/>
                <TextField id="password"  type="password" fullWidth label="Password" variant="outlined"  required onChange={this.onChange} error={(errors.password?true:false)} helperText={errors.password} style={{marginTop:"15px",marginBottom:"30px"}}  />
                <Button disabled={isLogging} fullWidth variant="contained" color="primary" type="submit">
                    Sign In
                </Button>

                <Typography component="p" variant="p"  style={{textAlign:"center",padding:"10px"}}>OR</Typography>

                <Link href="/register">
                   <Button  fullWidth variant="contained" color="primary">
                        Sign Up
                    </Button>
                </Link>
            </form>
        </Container>   
        )
    }
}

login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{loginUser}) (login);

