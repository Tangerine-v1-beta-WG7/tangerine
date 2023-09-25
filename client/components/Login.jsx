import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const [input, setInput] = useState(['', '']);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const onChangeHandler2 = (e) => {
        console.log(e)
        input[e.target.id] = e.target.value
        setInput([...input])
    }

    const onClickHandler2 = async (e) => {
       
        try {
            e.preventDefault();
            const res = await fetch('/api/login', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },  
            body: JSON.stringify({
                username: input[0],
                password: input[1]
            })
          })
            setInput(['', '']);
            const data = await res.json();

            console.log(data);
            if (data==true) {
                setError(false)
                navigate('/home');
            }
            else setError(true);

        } catch (err) {
           console.log('some error', err)
        }
    }

  return (
     <div className="signup">
        <div className="quote">
            <div className="innerquote">Log in for Speedy Employee Service</div>   
        </div>
        <form className="signupform">
            <label htmlFor='username'>username</label>
            <input type='text'id= {0} className="signuptext" name='username' onChange={onChangeHandler2} value={input[0]}></input>
            <label htmlFor='password'>password</label>
            <input type='text'id= {1} className="signuptext" name='password' onChange={onChangeHandler2} value={input[1]}></input>
            <div className="thebuttons">
            <button onClick={onClickHandler2}>Login</button>
            {error ? <div id="error-message">Username or password incorrect</div> : null}
            </div>
        </form>
     </div>
    );
}

export default Login;