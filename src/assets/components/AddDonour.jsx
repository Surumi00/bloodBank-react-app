import React, { useState } from 'react'
import axios from 'axios'
const AddDonour = () => {

 const [input,setinput]=useState({
     donor_name: "",
  age: "",
  gender: "",
  blood_group: "",
  phone: "",
  email: "",
  city: "",
  weight_kg: "",
  last_donation_date: ""
 })


 const inputHandler=(event)=>{
    setinput({...input,[event.target.name]:event.target.value})
 }

 const dataHandler=()=>{
        console.log(input);
        axios.post("https://host-demo-app.onrender.com/api/add-donor",input).then(
            (res)=>{
                setinput(res.data)
                alert("data added")
            }
        ).catch(
            (error)=>{
                console.log(error.res.data);
                console.log(error.res.status);
                
            }
        )
        
 }





  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 className="text-center">Add Donour</h1>
                   <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label" >donour name:</label>
                        <input type="text"
                         className="form-control" required
                         name='donor_name'
                         value={input.donor_name}
                         onChange={inputHandler}

                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">age :</label>
                        <input type="number"
                         className="form-control"
                          required
                          name='age'
                          value={input.age}
                          onChange={inputHandler}
                          />
                        
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">gender:</label>
                        <select name="" id="" className="form-control"  name='gender'
                          value={input.gender} onChange={inputHandler}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">blood group:</label>
                        <select name="" id="" className="form-control" name='blood_group' value={input.blood_group} onChange={inputHandler}>
                            <option value="A+">A+</option>
                            <option value="A+">A+</option>
                             <option value="A+">B+</option>
                              <option value="A+">B-</option>
                               <option value="A+">AB+</option>
                                <option value="A+">AB-</option>
                                 <option value="A+">O+</option>
                                  <option value="A+">O-</option>
                            

                            
                        </select>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">phone  :</label>
                        <input name="text" id=""
                         className="form-control"
                         name='phone'
                         value={input.phone}
                         onChange={inputHandler}
                         ></input>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">email:</label>
                        <input type="text" className="form-control"
                        name='email'
                         value={input.email}
                            onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">city :</label>
                        <input type="text" className="form-control" required
                        
                        name='city'
                         value={input.city}
                         onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">weight_kg :</label>
                        <input type="number" className="form-control"  required
                        
                        name='weight_kg'
                         value={input.weight_kg}
                         onChange={inputHandler}
                        />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <label htmlFor="" className="form-label">last_donation_date</label>
                        <input type="date" className="form-control"
                        name='last_donation_date'
                         value={input.last_donation_date}
                        onChange={inputHandler}
                        />
                    </div>
                    
                    
                   </div>
                   <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                        <button className="btn btn-success" onClick={dataHandler}>Add donour :</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddDonour