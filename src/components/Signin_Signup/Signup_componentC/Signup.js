import React, { useState} from 'react'
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    NavLinks,
    Text
} from './SignupElements';
//import fetch from 'node-fetch'
//import axios from 'axios';
const Signup = ({toggle}) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // const [confirmPass, Setconfirm] = useState('');
    // var setEmails = (e) => {
    //     setEmail(e.target.value);                        
    // }
    // var setPassW = (e) => {
    //     setPass(e.target.value);                
    // }
    // const confirmPassword = (e)=>{
    //     if(e.target.value == pass)
    //     {
    //         return Setconfirm(true)
    //     }
        
    //     Setconfirm(false)
        
    // }
    // const Register = async (data)=>{
    //     try {
    //         const result = await axios.post("http://localhost:9999/auth/register",{userName:data.email, password: data.password})
    //         console.log(result.status)
    //         if(result.status === 200)
    //             return true
    //         return false
    //     } catch (error) {
    //         if(error.response)
    //         if(error.response.status === 404)
    //             return 1
    //     }
    // }
    // var _signup =  async(e) => {
    //     if(!confirmPass)
    //         return alert('Xác nhận mật khẩu sai')
    //     const resultRegister = await Register({email,password:pass})
    //     console.log(resultRegister)
    //     switch(resultRegister){
    //         case 1: return alert("Tài Khoản đã tồn tại!")
    //         case false: return alert("Sai Tài khoản hay mật khẩu");
    //         case null: return alert('Có lỗi xảy ra, vui lòng thử lại!')
    //         case true: alert("Đăng kí thành công!")
    //     }
        

    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //         "email": `${email}`,
    //         "password": `${pass}`
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:8000/auth/login", requestOptions)
    //     .then(response => {
    //         if(response.ok)
    //             return response.json();
    //         throw new Error(response.status);
    //     })
    //     .then(result => {
    //         console.log(result);
    //         localStorage.setItem('accessToken', result.access_token);
    //         toggle(true);
    //     })
    //     .catch(error => {alert("Sai email hoac password"); console.log(error)});
    //}
    
    return (
  
        <>
            <Container>
                <FormWrap>
                    
                    <FormContent>
                        
                        <Form action='#'>
                        <Icon to='/'>delivery</Icon>
                            <FormH1>Đăng kí tài khoản mới</FormH1>
                            <FormLabel htmlFor='for' >Tài khoản</FormLabel>
                            <FormInput type='email'  required />
                            <FormLabel htmlFor='for' >Mật khẩu</FormLabel>
                            <FormInput type='password'  required />
                            <FormLabel htmlFor='for'>Xác nhận mật khẩu</FormLabel>
                            <FormInput type='password'   required />
                            <FormButton type='button' >Tiếp tục</FormButton>
                            <FormLabel>Đã có tài khoản?</FormLabel>
                            <NavLinks to='Signin'>Đăng nhập</NavLinks>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
export default Signup;