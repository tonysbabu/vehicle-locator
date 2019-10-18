import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { toast } from 'react-toastify';

 

const WithAuthWrapper = (WrappedComponent) => {
    return withRouter(class WithAuth extends Component {

        checkForAuthenticationStatus = () => {
             if(!localStorage.getItem('loggedIn')) {
                toast.error('User not sign in') 
                this.props.history.push('/')
             }
        }
        
        componentDidMount() {
            this.checkForAuthenticationStatus();
        }

        render() {
            return (
               <WrappedComponent />
             );
        }
    })
}
export default WithAuthWrapper;