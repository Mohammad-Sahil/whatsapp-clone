import { Button } from '@material-ui/core'
import React from 'react';
import { actionTypes } from '../context/reducer';
import { useStateValue } from '../context/StateProvider';
import { auth, provider } from '../firebase';
 import '../styles/Login.css';

const Login = () => {
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth.signInWithPopup(provider).then(result => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
        }).catch((err) => alert(err.message))
    }
  return (
    <div className="login">
           <div className="login_container">
               <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt=""/> 
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button type="submit" onClick={signIn}>Sign in With Google</Button>
           </div>
        </div>
  )
}

export default Login