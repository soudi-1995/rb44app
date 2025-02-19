import {useFormik} from 'formik'
import React from 'react'


function StudentForm() {
    var studentForm = useFormik({
        initialValues : {
            firstname:'',
            lastname:'',
            age:'',
            gender:''
        },
        onSubmit:(values)=>{
            
            console.log(values)
        }
    })
    return (
        <div className='border border-2 border-danger m-2 p-2'>
        <h2>Student Form</h2>

        <form onSubmit={studentForm.handleSubmit}>
        <input type="text" name='firstname' onChange={studentForm.handleChange} />
        <br />
        <input type="text" name='lastname' onChange={studentForm.handleChange} />
        <br />
        <input type="text" name='age' onChange={studentForm.handleChange} />
        <br />
        <h6>Gender:</h6>
        <input type="radio" name='gender' value='Female' onChange={studentForm.handleChange} />Female
        <input type="radio" name='gender' value='Female' onChange={studentForm.handleChange} />Male
        <input type="radio" name='gender' value='Female' onChange={studentForm.handleChange} />Others
        <br />
        <h6>Skills:</h6>
        <input type="checkbox" name='skill' value='ReactJS' onChange={studentForm.handleChange}/>REACtJS
        <input type="checkbox" name='skill' value='DevOps' onChange={studentForm.handleChange}/>DevOps
        <input type="checkbox" name='skill' value='HTML/CSS' onChange={studentForm.handleChange}/>HTML/CSS
        <input type="checkbox" name='skill' value='NOdeJS' onChange={studentForm.handleChange}/>NOdeJS
        <br />
        <button>Save Details</button> 
        </form>
        </div>
    ) 
}
export default StudentForm



