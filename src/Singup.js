import React from 'react'
import {Link} from "react-router-dom";
import { useFormik } from 'formik';
import * as Yup from 'yup';




function Singup() {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      phone:'',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().min(10, 'Phone must be 10 No').max(10, 'Phone must be at least 10 No').required('Moblie_No is required'),
      password: Yup.string().min(6, 'Password must be 6 characters').required('Password is required'),
    }),
    onSubmit: async (values) => {
      const response = await fetch('http://localhost:800/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert('Registration successful');
      } else {
        alert('Registration failed');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <section class="vh-100" >
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-lg-12 col-xl-11">
        <div class="card text-black" >
          <div class="card-body p-md-5">
            <div class="row justify-content-center">
              <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

    <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example1c"><b>Your Name</b></label>
                    <input type="text" id="form3Example1c" placeholder='UserName' name='userName' class="form-control"  onChange={formik.handleChange}/>       
                    <p className='text-danger'>
          <div>{formik.errors.userName}</div></p>
        </div>
      </div>

      <div>
      <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0">
                      <label class="form-label" for="form3Example3c"><b>Your Email</b></label>
                      <input type="email" id="form3Example3c" placeholder='Email' name='email' class="form-control" onChange={formik.handleChange}/>
                      <p className='text-danger'>
          <div>{formik.errors.email}</div></p>
        </div>
        </div>
      </div>

      <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-outline flex-fill mb-0"> 
                      <label class="form-label" for="form3Example4c"><b>Moblie_No</b></label>
                      <input type="Moblie_No" id="form3Example4c" placeholder='Moblie_No' class="form-control" name="phone" onChange={formik.handleChange} value={formik.values.phone}/>
                      <p className='text-danger'>
          <div>{formik.errors.phone}</div></p>
        </div>
      </div>

      <div class="d-flex flex-row align-items-center mb-4">
                    <div class="form-border flex-fill mb-0">
                      <label class="form-label" for="form3Example4c"><b>Password</b></label>
                      <input type="password" id="form3Example4c" class="form-control" placeholder='Password' name="password" onChange={formik.handleChange} value={formik.values.password}/>
        <p className='text-danger'>
         <div>{formik.errors.password}</div></p>
        </div>
      </div>
             <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                             <button type="submit" class="btn btn-primary btn-lg">Register</button>
                             <Link to="/Login" className='btn btn-default border mx-4 mx-4 mx-lg-4' >Result</Link>
                           </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
         </div>
      </section>
    </form>
  );
}
export default Singup
       
       
        