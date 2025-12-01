import React, {useState} from 'react'
import { sendContact } from '../utils/api'

export default function ContactForm(){
  const [status, setStatus] = useState(null)

  async function handleSubmit(e){
    e.preventDefault()
    const form = new FormData(e.target)
    const payload = Object.fromEntries(form.entries())
    const res = await sendContact(payload)
    setStatus(res?.status || 'error')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <input name="name" placeholder="Name" className="w-full p-2 border" />
      <input name="email" placeholder="Email" className="w-full p-2 border" />
      <textarea name="message" placeholder="Message" className="w-full p-2 border" />
      <button className="px-4 py-2 bg-blue-600 text-white">Send</button>
      {status && <div className="text-sm">Status: {status}</div>}
    </form>
  )
}
