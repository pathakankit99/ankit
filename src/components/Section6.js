import React from 'react'

import hero from '../img3.jpg';
import {useState} from 'react'
function Section6() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  // console.log(process.env)
  const handleSubmit = () =>{
    const {
      REACT_APP_EMAILJS_RECEIVER: receiverEmail,
      REACT_APP_EMAILJS_TEMPLATEID: templateId,
      REACT_APP_EMAILJS_USERID: user,
    } = process.env

    submitForm({
      templateId,
      email,
      receiverEmail,
      message,
      user,
      name,
    })
  }

  const submitForm = ({
    templateId,
    email,
    receiverEmail,
    message,
    user,
    name,
  }) => {
    window.emailjs
      .send(
        "default_service",
        templateId,
        {
          email,
          receiverEmail,
          name,
          message,
        },
        user
      )
      .then(res => {
        if (res.status === 200) {
          setSuccess(true)
        }
      })
      // Handle errors here however you like
      .catch(err => {
        setError(true)
        console.error("Failed to send feedback. Error: ", err)})
  }
    return (
        <div id="contact" style={{backgroundColor: "#161e20"}} className="flex-wrap p-4 w-full flex justify-center items-center">
            <div  style={{color: "#9e9e9e",backgroundColor:"#20292b"}} className="w-full lg:w-6/12 p-4 shadow-xl rounded-xl">
                <p className="text-2xl md:text-4xl pb-6">Get Your Fast, Secure Website Now...</p>
                {
                  success?(<p className="px-2 py-1 bg-green-400 text-green-800 mb-4">Form successfully submitted</p>):(<></>)
                }
                {
                  error?(<p className="px-2 py-1 bg-red-400 text-red-800 mb-4">Some error occurred</p>):(<></>)
                }
                <div className="h-72">
                    <input
                      type="text"
                      placeholder="Name"
                      className="focus:outline-none"
                      value={name}
                      onChange={(e)=>setName(e.target.value)}
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="focus:outline-none"                      
                      value={email}
                      onChange={(e)=>setEmail(e.target.value)}
                    />
                    <textarea placeholder="Message..."
                      className="focus:outline-none"                      
                      value={message}
                      onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button onClick={handleSubmit} className="bg-gray-200 hover:text-white hover:bg-gray-900 px-4 py-2 text-gray-900 font-normal">Submit</button>
                </div>
            </div>
            <div className="w-6/12 hidden lg:block">
                <img alt="website development" src={hero}/>
            </div>
        </div>
    )
}

export default Section6
