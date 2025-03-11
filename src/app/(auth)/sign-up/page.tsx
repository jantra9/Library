'use client'
import React from 'react'
import { signUpSchema } from '@/lib/validation'
import AuthForm from '@/components/AuthForm'
import { signUp } from '@/lib/action/auth'

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
      universityCard:"",
      universityId:0,

    }}
    onSubmit={signUp}
    />
  )
}

export default Page
