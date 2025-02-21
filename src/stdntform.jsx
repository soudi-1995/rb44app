import {useFormik} from 'formik'
import React from 'react'
import * as Yup from 'yup';
import Table from './table'



function StudentForm() {
    var [prdct, setprdct] = React.useState([])

    var studentForm = useFormik({
        initialValues : {
            firstname:'',
            lastname:'', 
            age:'',
            gender:'',
            Skills:[ ]
        },
        validationSchema:Yup.object({
            firstname:Yup.string()
            .required("* 'mundu peru raayi'")
            .max(5,'max only 5 letters')
            .test('custom validation1','recheck', ()=>{return false }),
           
           
        }),
        onSubmit:(values)=>{
            setprdct([...prdct,values])
           console.log(values)
           
        }

    })
   
    return (<div>
        <div className='border border-2 border-danger m-2 p-2'>
        
        <h2>Student Form</h2>

        <form onSubmit={studentForm.handleSubmit}>
        <input type="text" name='firstname' onChange={studentForm.handleChange} onBlur={studentForm.handleBlur} /> First name
        <br /> <b>{studentForm.touched.firstname && studentForm.errors.firstname}</b> 
        <br />
        <input type="text" name='lastname' onChange={studentForm.handleChange} /> Last nmae
        <br /> <i>(Optional...)</i>
        <br />
        <input type="text" name='age' onChange={studentForm.handleChange} /> Age
        <br /> <b>{studentForm.errors.age}</b>
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
        <button type='submit'>Save Details</button> 
        
        </form>
        </div>

        
        <Table prdct={prdct}> </Table>
        </div>
      
    ) 
}
export default StudentForm



