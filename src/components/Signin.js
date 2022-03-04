import { Alert } from 'bootstrap';
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'

export default function Signin() {

    const[name,setname] = useState("");
    const[password,setpassword] = useState("");
    const navigate = useNavigate();


    const checkuser =() =>{
        if(name==="user" && password==="1234"){
            navigate("/main");
        }else{
            Alert("wrong credentials")
        }
    }
  return (
    <div><section className="vh-100" style={{backgroundcolor:" #508bfc"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card shadow-2-strong" style={{borderradius: "1rem"}}>
            <div className="card-body p-5 text-center">
  
              <h3 className="mb-5">Sign in</h3>
  
              <div className="form-outline mb-4">
                <input type="email" id="typeEmailX-2" onChange={(e)=>setname(e.target.value)} className="form-control form-control-lg" />
                <label className="form-label" for="typeEmailX-2">Email</label>
              </div>
  
              <div className="form-outline mb-4">
                <input type="password" id="typePasswordX-2"onChange={(e)=>setpassword(e.target.value)} className="form-control form-control-lg" />
                <label className="form-label" for="typePasswordX-2">Password</label>
              </div>
  
              
              <div className="form-check d-flex justify-content-start mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="form1Example3"
                />
                <label className="form-check-label" for="form1Example3"> Remember password </label>
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={checkuser}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}
