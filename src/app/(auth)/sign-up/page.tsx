'use client'
import React from 'react'
import { signUpSchema } from '@/lib/validation'
import AuthForm from '@/components/AuthForm'

//Define labels
const Page = () => {
  return (
    <AuthForm 
    type='SIGN_UP'
    schema={signUpSchema}
    defaultValues={{
      email:"",
      password:"",
      fullName:"",
      universityId:"",
      universityCard:""

    }}
    onSubmit={()=>{}}
    />
  )
}

export default Page
