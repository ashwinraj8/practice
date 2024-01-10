import React from 'react'

export const Login = () => {

    const submitHandle = (e)=>{
        e.preventDefault();
        alert('data submit!');
    }
  return (
    <>
        <form onSubmit={submitHandle}>
            <input placeholder='fill here'/>
            <button type='submit'>Click</button>
        </form>
    </>
  )
}
