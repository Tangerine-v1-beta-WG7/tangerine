import React, { useEffect, useState } from "react";

const Login = () => {
    const [input, setInput] = useState(['', '']);

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
        } catch (err) {
           console.log('some error', err)
        }
    }

  return (
     <div>
        <div>something for jake this is where u login</div>
        <form>
            <label htmlFor='username'>username</label>
            <input type='text'id= {0} name='username' onChange={onChangeHandler2} value={input[0]}></input>
            <label htmlFor='password'>password</label>
            <input type='text'id= {1} name='password' onChange={onChangeHandler2} value={input[1]}></input>
            <button onClick={onClickHandler2}>Login</button>
        </form>
     </div>
    );
}

export default Login;