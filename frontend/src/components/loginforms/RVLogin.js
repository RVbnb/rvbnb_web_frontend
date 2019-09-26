import React from 'react';
import axios from "axios"; 
import { Link } from "react-router-dom"; 
import NavBar from '../NavBar';

// const RVLogin = props => {

//  const [RVOwners, setRVOwners]= useState({ username:"", password:""});

    
// const handleSubmit = event => {
//     event.preventDefault() 
//     axios
//     .post('https://rvbnb.herokuapp.com/api/auth/login', RVOwners)
//     .then(res => {
//         console.log(res)
//         localStorage.setItem("token", res.data.token)
//         props.history.push("/rvownersview")
//     })
//     .catch(error => {
//         console.log("This is an error from RVRegister", error)
//     }, [])
// }


//  const handleChange = event =>{ setRVOwners ({ ...RVOwners, [event.target.name]: event.target.value

//     }); 
// };
//         return (
//             <>
//             <div className="rv-owner"> 
//                 <form onSubmit={handleSubmit}>
//                 <p> Login As RV Owner </p> 
//                 <NavBar />
//                     <label>UserName</label>
//                 <input type="text" name="username" placeholder="UserName"
//                 onChange={handleChange} value={props.username}/>
//                 <label>Password</label>
//                 <input type="text" name="password" placeholder="password"
//                 onChange={handleChange} value={props.password} />
//                 <button type="submit"> Login </button>
//                 <Link to="/rv"> <div> Don't have an account? </div> </Link>
//                     </form>
//                 </div>
//                 </>
//         )

//     }

// export default RVLogin;

class RVLogin extends React.Component {
    state = {
        credentials: {
            username:"", 
            password:""
        }
    }

 handleSubmit = event => {
    event.preventDefault() 
    axios
    .post('https://rvbnb.herokuapp.com/api/auth/login', this.state.credentials)
    .then(res => {
        console.log(res)
        localStorage.setItem("token", res.data.token)
        this.props.history.push("/rvownersview")
    })
    .catch(error => {
        console.log("This is an error from RVRegister", error)
    }, [])
}


    handleChange = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        })
    }

    render() {
        return(
            <>
                <div className="rv-owner"> 
                <form onSubmit={this.handleSubmit}>
                <p> Login As RV Owner </p> 
                <NavBar />
                    <label>UserName</label>
                <input type="text" name="username" placeholder="UserName"
                onChange={this.handleChange} value={this.state.credentials.username}/>
                <label>Password</label>
                <input type="text" name="password" placeholder="password"
                onChange={this.handleChange} value={this.state.credentials.password} />
                <button type="submit"> Login </button>
                <Link to="/rv"> <div> Don't have an account? </div> </Link>
                    </form>
                </div>
            </>
        )
    }
}

export default RVLogin; 