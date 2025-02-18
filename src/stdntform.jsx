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
            alert("")
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
        <input type="radio" name='gender' value='Female' onChange={studentForm.handleChange} />Female
        <input type="radio" name='gender' value='Female' onChange={studentForm.handleChange} />Male
        <input type="radio" name='gender' value='Female' onChange={studentForm.handleChange} />Others
        <br />
        <button>Save Details</button>
        </form>
        </div>
    ) 
}
export default StudentForm



