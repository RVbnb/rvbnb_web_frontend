import React, {useState, useEffect} from 'react';

function rvRegister (){
    const [rvOwners, setRvOwners]= useState({ username:"", password:"", isLandOwner:false});
    const [error, setError] = useState();

    
useEffect(() =>{

fetchData()
    axios.post('https://rvbnb.herokuapp.com/api/auth')
    .then(res => setRvOwners(res.data))
        .catch(err => setError(err.res));
},[]);
handleChange = event =>{setRvOwners({...rvOwners, [event.target.name]: event.target.value}); };
    
 


handleSubmit = e  =>{
    e.prevent.Default();
    const newRvOwners = {
        username: '',
        password: '',
        isLandOwner:false

    }
}
    return (
<div className="rv-owner"> 
    <form onSubmit = {handleSubmit}>
        <label>UserName</label>
    <input type="text" name="username" placeholder="UserName"
    onChange={handleChange}/>
    <label>Password</label>
    <input type="text" name="password" placeholder="password"
    onChange={handlePassword}/>
    <button type="submit">Register</button>
        </form>
      </div>
    ) 
}

export default rvRegister;