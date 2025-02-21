import StudentForm from "./stdntform"; 
import React from 'react'


function Table({prdct}){

    return (
        <div>
            <table className="table table-bordered" >
                <thead>
                    <tr>
                        <td>FirstName</td>
                        <td>LastName</td>
                        <td>Age</td>
                        <td>Gender</td>
                        <td>Skills</td>
                       
                    </tr>
                </thead>
                <tbody>
                   { prdct.map((a,i)=>{
                     return(
                        <tr >
                        <td>{a.firstname}</td>
                        <td>{a.lastname}</td>
                        <td>{a.age}</td>
                        <td>{a.gender}</td>
                        <td>{a.skill ? a.skill.join(', '):'-'}</td>
                     
                        
                    </tr>
                     )
                   })
                    
                  }
                </tbody>
            </table>
        </div>
    )
}
export default Table ;