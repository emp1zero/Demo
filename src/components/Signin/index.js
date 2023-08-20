import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import { Form, FormContainer,
  FormContent,
  FormH1,
  FormWrap,Icon,
  FormLabel,FormInput,
  FormButton,
  Button,
  ButtonContainer,
  Text,TextContainer, Text2,ErrorMessage

 } from './SigninStyles'
 import {auth,provider} from '../../config/firebase'
 import { signInWithPopup } from 'firebase/auth' 
 import { useNavigate } from 'react-router-dom'


const SignIN = () => {
const navigate= useNavigate();

  const SignINWithGoogle = async ()=>{
await signInWithPopup(auth,provider);
navigate('/dashboard')
  };
  const schema = yup.object().shape(
    {
      email:yup.string().email().required('Please enter a correct Email !'),
      password:yup.string().min(5).max(15).required('Incorrect Password'),
    }
  );
  const {register,handleSubmit,formState:{errors}}=useForm(
    {resolver:yupResolver(schema),}
  );
  
    const onSubmit=(data)=>{
      console.log(data)
    }
  

  return (
    <FormContainer>
      <FormWrap>
      <Icon to='/'>Pulse</Icon>
      <FormContent>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormH1>Sign into Your Account</FormH1>

          <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput type='email' {...register('email')} />
      <ErrorMessage>{errors.email?.message}</ErrorMessage>
      

      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' {...register('password')}/>
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <FormButton type='submit'>Continue</FormButton>
      <ButtonContainer>
        <Button onClick={SignINWithGoogle}>
        Sign in with Google
        </Button>
      </ButtonContainer>
      
      <TextContainer>
        <Text2 to ='/createaccount'>Create New Account</Text2>
        <Text>Forgot Password?</Text></TextContainer>
       
        </Form>
      </FormContent>
      </FormWrap>
        
    </FormContainer>
  )
}

export default SignIN