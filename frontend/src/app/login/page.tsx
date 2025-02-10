import LoginForm from '@/components/organisms/Login'
import React from 'react'

type Props = {}

function page({}: Props) {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <LoginForm />
    </div>
  )
}

export default page