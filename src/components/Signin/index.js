import React from 'react'
import { Form, FormContainer,
  FormContent,
  FormH1,
  FormWrap,Icon,
  FormLabel,FormInput,
  FormButton,
  Text,TextContainer, Text2

 } from './SigninStyles'

const SignIN = () => {
  return (
    <FormContainer>
      <FormWrap>
      <Icon to='/'>Pulse</Icon>
      <FormContent>
        <Form>
          <FormH1>Sign into Your Account</FormH1>
          <FormLabel htmlFor='for'>Email</FormLabel>
      <FormInput type='email' required/>
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' required/>
      <FormButton type='submit'>Continue</FormButton>
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