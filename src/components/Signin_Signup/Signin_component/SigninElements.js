import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom:0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(
        108deg,
        #348F50,
        #56B4D3
    );
`;
export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 20px 0;
    height: 100%;
    cursor: pointer;
    display: inline;

    &:hover {
       text-decoration:none;
        
    }
`;

export const FormWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const Icon = styled(Link)`
    /* margin-left: 32px;
    margin-top: 32px; */
    padding-bottom: 30px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;
    text-align: center;
    
`;

export const FormContent = styled.div`
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px;
    }
`;

export const Form = styled.form`
    background: #010101;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 70px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;

`;

export const FormInput = styled.input`  
    padding: 16px 16px;
    margin-bottom: 32px;
    border-radius: 4px;
    border: none;
`;

export const FormButton = styled.button`    
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
`;

export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color:#fff;
    font-size: 14px;
`