import { createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import BaseResponse from "@/types/response"

interface AuthResponse extends BaseResponse{
  data: UserAuthForm
}

type UserAuthForm = {
  name:string,
  email: string,
  password:string
} 

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl:"/api"
  }),
  tagTypes: ["auth"],
  endpoints:(builder)=>({
    register: builder.mutation<AuthResponse,UserAuthForm>({
      query: (body)=>({
        url: "/auth/sign-up",
        method: "POST",
        body
      })
    })
  })
})

export const {useRegisterMutation} = authApi