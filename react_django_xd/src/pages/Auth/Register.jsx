import React, { useState } from 'react'

export default function Register({ message }) {

    const [credentials, setCredentials] = useState({
        username: '',
        password: '',
        firstname: '',
        lastname: ''
      });

      const submitCredentials = (e) => {
        e.preventDefault();
        router.post('/login/authenticating', credentials);
        console.log('submit');
      }

      const handleChange = (e) => {
        const value = e.target.value
        const name = e.target.name

        console.log(credentials)

        setCredentials({
            ...credentials,
            [name] : value,
        })
      }

  return (
    <div>
      <form onSubmit={(e) => submitCredentials(e)}>
        <label htmlFor="username">Username</label>
        <input type="text" id='username' name='username' value={credentials.username} onChange={(e) => handleChange(e)}/>

        <label htmlFor="firstname">Firstname</label>
        <input type="text" id='firstname' name='firstname' value={credentials.username} onChange={(e) => handleChange(e)}/>

        <label htmlFor="lastname">Lastname</label>
        <input type="text" id='lastname' name='lastname' value={credentials.username} onChange={(e) => handleChange(e)}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={credentials.password} onChange={(e) => handleChange(e)}/>

        <input type="submit" value="Submit" className='cursor-pointer'/>
      </form>
    </div>
  )
}
