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
            navigate('/login');

        } catch (err) {
           console.log('some error', err)
        }
    }

  return (
     <div>
        <div>something for jake</div>
        <form>
            <label htmlFor='username'>username</label>
            <input type='text'id= {0} name='username' onChange={onChangeHandler} value={text[0]}></input>
            <label htmlFor='password'>password</label>
            <input type='text'id= {1} name='password' onChange={onChangeHandler} value={text[1]}></input>
            <button onClick={onClickHandler}>sign up</button>
            <button>take me to login</button>
        </form>
     </div>
    );
}

export default Signup;