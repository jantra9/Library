'use client'
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm, UseFormReturn, DefaultValues, FieldValues, Path } from "react-hook-form"
import { ZodType } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { FIELD_NAMES, FIELD_TYPES } from "@/constants"
import ImageUpload from "./ImageUpload"

interface Props <T extends FieldValues>{
    schema:ZodType<T>;
    defaultValues:T;
    onSubmit:(data:T)=> Promise<{success:boolean; error?: string}>;
    type:"SIGN_IN" | "SIGN_UP";
}

const AuthForm =<T extends FieldValues> ({type, schema, defaultValues, onSubmit}:Props<T>) => {
  const isSignIn=type==="SIGN_IN"

  // Define your form with labels.
  const form:UseFormReturn<T> = useForm
    ({
      resolver: zodResolver(schema),
      defaultValues: defaultValues as DefaultValues<T>
    })
    
    //Define a submit handler.
    const handleSubmit:SubmitHandler<T>= async(data)=> {
      // Do something with the form values.
      console.log(data)
    }
    return(
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold text-white">
          {isSignIn? "Welcome back to the library":"Create your library account"}
        </h1>
        <p className="text-light-100">
          {isSignIn ? "Access the vast collection of resources, and stay updated" : "Please complete all fields and upload a valid university ID to gain access to the library"}
        </p>
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
          {Object.keys(defaultValues).map((field)=>
          (<FormField
            key={field}
            control={form.control}
            name={field as Path<T>}
            render={({ field }) => (
              <FormItem>
                {/* Form label depends on FIELD_NAMES, field.name is a defaultValues prop===>FIELD_NAMES["fullName"]="Full Name" */}
                <FormLabel className="capitalize">
                  {/* */}
                  {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}
                </FormLabel>
                <FormControl>
                  {field.name==="universityCard"?(<ImageUpload/>):
                    (<Input type={FIELD_TYPES[field.name as keyof typeof FIELD_TYPES]} {...field} className="form-input" />)}
                </FormControl>
              </FormItem>
            )}
          />))}
          <Button className="form-btn" type="submit">{isSignIn? "Sign In":"Create"}</Button>
        </form>
        </Form>
        <p>
          {isSignIn? "New to our library? ":"Already have an account? "}
          <Link className="underline-offset-4 underline" href={isSignIn? "/sign-up":"/sign-in"}>
            {isSignIn? "Create an account" :"Sign in"}
          </Link>
        </p>
      </div>
    )
  
}

export default AuthForm
