import React from 'react'
import axios from 'axios'
import{useEffect,useState} from 'react'
import Navigationbar from './Navigationbar'


const ViewDonour = () => {
    const [data,setdata]=useState([])

        const fetchData=()=>{


          axios.get("https://host-demo-app.onrender.com/api/donors").then(
            (res)=>{
              setdata(res.data)
            }
          ).catch()

        }

        useEffect(()=>{
          fetchData()
        },[])
  return (
    <div>
        <Navigationbar/>
        <div className="container mt-4">
        <h2 className="text-center mb-4">View All course</h2>

        <table className="table table-striped">
          <thead>
            <tr>
              
              <th>donour_name</th>
              <th>age</th>
              <th>gender</th>
              <th>blood_group</th>
              <th>phone</th>
              
              <th>city</th>
              <th>weight_kg</th>
              
              
            </tr>
          </thead>

          <tbody>
            {data.map(
                (value,index)=>{
                    return(
                         <tr>
                        <td>{value.donor_name}</td>
                        <td>{value.age}</td>
                        <td>{value.gender}</td>
                        <td>{value.blood_group}</td>
                        <td>{value.phone}</td>
                        <td>{value.city}</td>
                        <td>{value.weight_kg}</td>
                        </tr>
                    )
                }
            )
                
            }
           
             </tbody>
        </table>
      </div>
    </div>
  )
}

export default ViewDonour