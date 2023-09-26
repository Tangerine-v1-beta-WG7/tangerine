import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';



const Signup = () => {
    const [text, setText] = useState(['', '']);
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        console.log(e)
        text[e.target.id] = e.target.value
        setText([...text])
    }

    const onClickHandler = async (e) => {
       
        try {
            e.preventDefault();
            const res = await fetch('/api/signup', {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },  
            body: JSON.stringify({
                username: text[0],
                password: text[1]
            })
          });
            setText(['', '']);
            navigate('/');

        } catch (err) {
           console.log('some error', err)
        }
    }

    const onClickHandler2 = (e) => {
        navigate('/')
    }

  return (
     <div className="signup">
        <div className="quote">
            <div className="innerquote">Speedy Employee Service</div>   
        </div>
        <form className="signupform">
           
            <label htmlFor='username'>username</label>
            <input type='text'id= {0} className="signuptext" name='username' onChange={onChangeHandler} value={text[0]}></input>
            <label htmlFor='password'>password</label>
            <input type='text' className="signuptext" id= {1} name='password' onChange={onChangeHandler} value={text[1]}></input>
          
            <div className="thebuttons">
            <button onClick={onClickHandler}>sign up</button>
            <button onClick={onClickHandler2}>take me to login</button>
            </div>
        </form>
     </div>
    );
}

export default Signup;