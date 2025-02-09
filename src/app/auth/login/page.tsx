"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import Input from "@/app/components/Input";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { signIn } from "next-auth/react";

type AuthInputForm = {
  email: string,
  password: string
}

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
})

export default function Login() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<AuthInputForm>({
    resolver: yupResolver(schema)
  })

  const onSubmit = async (data: AuthInputForm) => {
    try {
      const user = await signIn("credentials", {
        email: data.email,
        password: data.password,
        callbackUrl: searchParams.get("callbackUrl") || "/",
        redirect: false
      })


      if (!user?.error) {
        router.push(user?.url || "/")
      } else {
        alert('error')
      }

      console.log(user)
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <Input
              placeholder="Email"
              {...register('email')}
              error={errors.email?.message}
            />
          </div>
          <div className="mb-6">
            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
              error={errors.password?.message}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-800 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
