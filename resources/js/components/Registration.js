import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class Registration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }

    }


    render() {
        return (
            <div className="container-scroller">
                <div className="container-fluid page-body-wrapper full-page-wrapper">
                    <div className="content-wrapper d-flex align-items-center auth">
                        <div className="row flex-grow">
                            <div className="col-lg-4 mx-auto">
                                <div className="auth-form-light text-left p-5">
                                    <div className="brand-logo">
                                        <h1 className="text-center" style={{color: '#da8cff'}}>{global.variables.site_name}</h1>
                                    </div>
                                    <h4>New here?</h4>
                                    <form className="pt-3" ref={c => { this.form = c }} >
                                        <div className="form-group">
                                            <input type="text" className="form-control form-control-lg" name="first_name" id="first_name" placeholder="First Name" />
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-lg" name="email" id="email" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" name="password" id="password" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <input type="password" className="form-control form-control-lg" name="confirm_password" id="confirm_password" placeholder="Confirm Password" />
                                        </div>
                                        <div className="mt-3">
                                            <button type="submit" className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn" >SIGN UP</button>
                                        </div>
                                        <div className="text-center mt-4 font-weight-light"> Already have an account? <Link to='/user/login' className="text-primary">Login</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration