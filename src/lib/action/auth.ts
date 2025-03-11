'use server'
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { hash } from "bcryptjs";
import { eq } from "drizzle-orm";
import { signIn } from "../../../auth";
export const signInWithCredentials=async(params:Pick<AuthCredentials, 'email'|'password'>)=>{
    const {email, password}= params;
    try {
       const result= await signIn("credentials",{
        email,
        password,
        redirect:false
       });
       if (!result){
        return {success:false, error:"Log in error"}
       }
       return{success:true}
    } catch (error) {
        console.log("Signin error",error)
        return{success:false, error:"Sign in error"}
    }
}

export const signUp=async(params:AuthCredentials)=>{
    const {fullName, email, universityCard, universityId, password}= params;
    const existingUser=await db
    .select()
    .from(users)
    .where(eq(users.email,email))
    .limit(1);

    if(existingUser.length>0){
        return{success:false, error:"User already exists"}}

    const hashedPassword= await hash(password, 10)

    try {
        await db
        .insert(users)
        .values({
            fullName,
            email,
            universityCard,
            universityId,
            password
        })
        return {success:true}
        // signInWithCredentials({email, password})
        
    } catch (error) {
        console.log(error)
        return{success:false, error:'Log in error'} 
    }
}