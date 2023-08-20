import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

import { Form,
FormContainer,
FormWrap,Icon,
FormContent,FormLabel,
FormH1,FormInput,
FormButton,Text2,ErrorMessage } from './CreateAccountStyles'

const CreateAccount = () => {

const schema = yup.object().shape(
  {
    username:yup.string().required('Your username is required !'),
    email:yup.string().email().required('Please enter a correct Email !'),
    password:yup.string().min(5).max(15).required('Password not less than 5 characters'),
    confirmPassword:yup.string().oneOf([yup.ref('password'),null]).required('Password does not match !')
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
          <FormH1>Create New Account</FormH1>

          <FormLabel htmlFor='for'>UserName</FormLabel>
      <FormInput type='username' {...register('username')} />
      <ErrorMessage>{errors.username?.message}</ErrorMessage>

          <FormLabel htmlFor='for'>E-mail</FormLabel>
      <FormInput type='email' {...register('email')}/>
      <ErrorMessage>{errors.email?.message}</ErrorMessage>

      <FormLabel htmlFor='for'>Password</FormLabel>
      <FormInput type='password' {...register('password')}/>
      <ErrorMessage>{errors.password?.message}</ErrorMessage>

      <FormLabel htmlFor='for'>Confirm Password</FormLabel>
      <FormInput type='confirmPassword' {...register('confirmPassword')}/>
      <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

      <FormButton type='submit'>Continue</FormButton>
        <Text2 to ='/signin'>Already have an Account?</Text2>
        </Form>
      </FormContent>
      </FormWrap>
        
    </FormContainer>
  )
}

export default CreateAccount