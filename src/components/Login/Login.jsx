
import React, { useState } from 'react'
import Joi, { object, string } from 'joi';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import style from './login.module.css'
import { toast } from 'react-toastify';
export default function Login(props) {

    let navigate = useNavigate(); 
    let [errorList,setErrorList] = useState([]);
    let [user,setUser]= useState({
        email:'',
        password:'',
       
    })
    function getUserData(e){
        let myUser=user;
        myUser[e.target.name]=e.target.value;
        setUser(myUser);
    }
     async function submitRegister(e){
        e.preventDefault();
        let resultValidation= validationRegisterUser(user);
        console.log(resultValidation);
        if (resultValidation.error){
            console.log("error");
            setErrorList(resultValidation.error.details);
        }
        else{
        console.log("ok");
        let {data} = await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signin",user);
        console.log(data);
          if(data.message==='success'){
            toast.success('Login Successfully!');
            localStorage.setItem("userToken",data.token);
            props.getUserData();
            navigate('/header')
          }
          else if (data.message === "invalid account"){
            console.log("data.token");
           alert("your email or your password is incorrect");
          
     }
   
    
        }
        
    }
     function  validationRegisterUser( user){
        let schema=Joi.object({
          email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
          password:Joi.string().pattern(/^[A-Z][a-z]{2,8}$/),
        
        });
        return schema.validate(user,{abortEarly:false});
    
        }
    
     
    return (
        <>
          {errorList.map((err,i)=>


           alert(err.message)


)

} 
        <div className={`${style.login} text-white `}>
            <div className='w-50 vh-100 d-flex align-items-center justify-content-center'>
        
        <form  onSubmit={submitRegister} className='w-50 vh-75'>
            <h1 className=''>Log In</h1>
        
            <div className="form-group  pt-3 mt-2">
             <label htmlFor="exampleInputEmail1">Email address</label>
             <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getUserData} placeholder="Enter Your Email" name='email'  />
           </div>
           
             <div className="form-group pt-3 mt-2">
               <label htmlFor="exampleInputPassword1">Password : </label>
               <input type="password" className="form-control my-2" id="exampleInputPassword1" onChange={getUserData} placeholder="Enter Your Password"  name='password' />
             </div>
            
             <button type="submit mt-2" className=" btn btn-primary mt-5  w-50 p-3 m-auto d-block ">Log In</button>
           </form>
                   
                   </div>  
    
                   </div>
    
        </>
      )
}







