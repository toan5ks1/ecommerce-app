import React, {useState} from 'react'
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
    Text,
    NavLinks
} from './SigninElements';
// import fetch from 'node-fetch'
const SignIn = ({toggle}) => {
    // const [email, setEmail] = useState('');
    // const [pass, setPass] = useState('');
    // var setEmails = (e) => {
    //     setEmail(e.target.value);                        
    // }
    // var setPassword = (e) => {
    //     setPass(e.target.value);                
    // }
    // var login = (e) => {
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
    // }
    
    return (
        <div>           
            <Container>
                <FormWrap>
                    
                    <FormContent>
                        
                        <Form action='#'>
                        <Icon to='/'>delivery</Icon>
                            <FormH1>Đăng nhập vào tài khoản của bạn</FormH1>
                            <FormLabel htmlFor='for' >Email</FormLabel>
                            <FormInput type='email' name='email' required />
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' name='password' required />
                            <FormButton type='button' >Continue</FormButton>
                            <Text>Quên mật khẩu {toggle}</Text>
                            <FormLabel>Chưa có tài khoản? <NavLinks to='signup'> Đăng kí</NavLinks></FormLabel>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </div>
    )
}
export default SignIn;

<FormLabel>Chưa có tài khoản? <NavLinks to='signup'> Đăng kí</NavLinks></FormLabel>