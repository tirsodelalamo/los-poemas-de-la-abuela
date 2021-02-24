import React from 'react';
import './Register.css'

import UserForm from '../../Auth/Form'

const Register = (props) => {

    return ( 
        <div className='register-container'>
            <h1>Registro de usuario</h1>
            <UserForm {...props}/>
        </div>
     );
}
 
export default Register;