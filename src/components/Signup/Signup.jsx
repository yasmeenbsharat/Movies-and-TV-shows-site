import React, { useState } from 'react'
import Joi, { object, string } from 'joi';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import style from './signup.module.css'
import { toast } from 'react-toastify';
export default function Signup() {

    let navigate = useNavigate(); 
let [errorList,setErrorList] = useState([]);
let [user,setUser]= useState({
    name:'',
    email:'',
    age:'',
    password:'',
    cPassword:'',
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
    let {data} = await axios.post("https://lazy-blue-sockeye-gear.cyclic.app/api/v1/auth/signup",user);
      if(data.message==='success'){
        toast.success('Sign Up Successfully!');
        navigate('/login');
      }
     
    }
    
}
 function  validationRegisterUser( user){
    let schema=Joi.object({
      name:Joi.string().min(4).max(20).required(),  
      email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
      age:Joi.number().min(20).max(90),
      password:Joi.string().required().pattern(/^[A-Z][a-z]{2,8}$/),
      cPassword:Joi.valid(Joi.ref('password')).required(),
    });
    return schema.validate(user,{abortEarly:false});

    }

 

  return (
   <>

      {errorList.map((err,i)=>


      alert(err.message)
      
      
      )
      
      } 
 <div className = {`${style.signup} text-white d-flex align-items-center justify-content-start`}>
  <div className='w-50 vh-100 d-flex align-items-center justify-content-center'>
        
 <form  onSubmit={submitRegister} className='w-50 vh-75'>
 <h1 className=' text-center '>Sign Up</h1>
  <div className="form-group  mt-2">
    <label htmlFor="exampleInputName">User Name : </label>
    <input type="text" className="form-control my-2" id="exampleInputName" aria-describedby="emailHelp" onChange={getUserData} placeholder="Enter Your Name" y name='name'/>

  </div>
 <div className="form-group  pt-3 mt-2">

  <label htmlFor="exampleInputEmail1">Email address</label>
  <input type="email" className="form-control my-2" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={getUserData} placeholder="Enter Your Email" name='email'  />
</div>

  <div className="form-group pt-3 mt-2">
    <label htmlFor="exampleInputPassword1">Password : </label>
    <input type="password" className="form-control my-2" id="exampleInputPassword1" onChange={getUserData} placeholder="Enter Your Password"  name='password' />
  </div>
  <div className="form-group pt-3 mt-2">
    <label htmlFor="exampleInputCPassword1">CPassword : </label>
    <input type="password" className="form-control my-2" id="exampleInputCPassword" onChange={getUserData} placeholder="Enter Your CPassword"  name='cPassword' />
  </div>
  <div className="form-group pt-3 my-2">
  <label  htmlFor="exampleCheck1">Age : </label>
    <input type="number" className="form-control my-2" id="exampleCheck1"  onChange={getUserData}   placeholder="Enter Your Age"  name='age'/>
    
  </div>
  <button type="submit " className={` btn btn-primary mt-4  p-3 m-auto d-block  ${style.bttn} `}>Sign In</button>
</form>
        
        </div>
        </div>
        </>
  )
}
 