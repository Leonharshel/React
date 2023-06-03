import React from 'react';
import Login from './Login';
const Asidepage = () => {
    const name = "testname"
    const email = "abc@gmail.com"
    const contact = +65165165
    return (<div className='container-2'>
        <h1>your details are</h1>
        <p>{name}</p>
        <p>{email}</p>
        <p>{contact}</p>
    </div>)
};
export default Asidepage;