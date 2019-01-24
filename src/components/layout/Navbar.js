import React from 'react';
import { Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {
    const {auth} = props;
    const links = auth.uid ? <SignInLinks/> : <SignOutLinks/>;
    return (
        <nav className='nav-wrapper transparent'>
            <div className='container'>
                <Link to='/' className='brand-logo'>Project Creator</Link>
                {links}
            </div>
        </nav>
    )
}

const mapStateToProps = state => {
    console.log(state)
    return {
        auth: state.firebase.auth
    }
}

export default connect(mapStateToProps)(Navbar);