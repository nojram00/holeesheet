import React from 'react'
import { router, usePage } from '@inertiajs/react'

export default function Posts({ user }) {

  const auth = usePage().props;

  console.log(usePage().props.user)
  console.log(auth)

  const logoutUser = () => {
    router.get('/logout')
  }

  return (
    <div>
      Posts

      <button onClick={logoutUser}>Logout</button>
    </div>
  )
}
