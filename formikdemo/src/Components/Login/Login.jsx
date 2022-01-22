import React from 'react';
import { Formik } from 'formik';
import axios from "axios";

const Auth =  (username, password) => {
    const headers = {
        'Content-Type': 'application/json',
        // 'Authorization': 'JWT fefege...'
      }
     const data = {  "params": {
        "db": "bitnami_odoo", 
        "login": "test@gmail.com", 
        "password": "123"
    } }
      axios.post("http://54.161.181.103/web/session/authenticate", data, {
          headers: headers
        })
        .then((response) => {
         console.log(response)
        })
        .catch((error) => {
         console.log(error)
        })
}


const Login = () => (
  <div>
    <h1>Anywhere in your app!</h1>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
            Auth(values.email, values.password);    
        console.log(typeof values.email,typeof values.password);
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting} >
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Login;