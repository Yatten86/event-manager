import React from 'react';
import { useFormik } from 'formik';
import { TextField, Container, Box} from '@mui/material';



interface FormValues {
    email: string;
    password: string;
    confirmPassword: string;
};

let engLang = require('../language/english.json')



function RegisterForm() {
    let formik = useFormik<FormValues>({
        initialValues:{
            email:'',
            password:'',
            confirmPassword:''
        },
        onSubmit: values => {
            console.log(values);
        }
    })
    return (
        <Container maxWidth={'sm'}>
            <Box sx={{
                    display:'flex', 
                    alignItems:'center', 
                    justifyContent:'center', 
                    height:'100vh'
                    }}
            >
                <Box 
                    sx={{
                    display: 'flex', 
                    flexDirection: 'column', 
                    width:'100%'
                }}
                >
                    <form onSubmit={formik.handleSubmit}>
                        <TextField 
                            id='email' 
                            name='email' 
                            label={engLang.registerForm.label.email} 
                            value={formik.values.email} 
                            onChange={formik.handleChange}
                        />

                        <TextField
                            id='password'
                            name='password'
                            label={engLang.registerForm.label.password}
                            type='password'
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />

                        <TextField
                            id='confirmPassword'
                            name='confirmPassword'
                            label={engLang.registerForm.label.confirmPassword}
                            type='password'
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                        />
                    </form>
                </Box>
            </Box>
        </Container>
    )
    }


export default RegisterForm;