import React from 'react'
// import { usePage }
import { usePage } from '@inertiajs/react'

export default function FlashMessage() {
  const { props } = usePage()
  const { flash } = props;

  console.log(props);
  return (
    <div>
        { flash && flash.map((message, i) => {
            <div key={index} className={`alert alert-${message.type}`} role="alert">
                {message.message}
            </div>
        })}
    </div>
  )
}
