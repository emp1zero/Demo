import React from 'react'
import { Form,
FormContainer,
FormWrap,Icon,
FormContent,FormLabel,
FormH1,FormInput,
FormButton,TextContainer,
Text,Text2 } from './CreateAccountStyles'

const CreateAccount = () => {
  return (
    
    <FormContainer>
      <FormWrap>
      <Icon to='/'>Pulse</Icon>
      <FormContent>
        <Form>
          <FormH1>Create New Account</FormH1>
          <FormLabel htmlFor='for'>UserName</FormLabel>
      <FormInput type='username' required/>
          <FormLabel htmlFor='for'>E-mail</FormLabel>
      <FormInput type='email' required/>
      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' required/>
      <FormButton type='submit'>Continue</FormButton>
      
        <Text2 to ='/signin'>Already have an Account?</Text2>
        </Form>
      </FormContent>
      </FormWrap>
        
    </FormContainer>
  )
}

export default CreateAccount