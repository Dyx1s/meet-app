import React, { useState } from 'react'
import userStore from '../stores/UserStore'

const RegistrationPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    await userStore.register(username, email, password);
  }
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className="w-full max-w-xs">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              User Name
            </label>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default RegistrationPage
