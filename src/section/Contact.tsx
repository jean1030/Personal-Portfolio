import { useState } from 'react'
import Phone from '../assets/phone'
import emailjs from '@emailjs/browser'
import Gmail from '../assets/gmail';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const {name, value} = event.target
    setFormData((prev) => ({...prev, [name]: value}));
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);

    const templateParams = {
      ...formData,
      time: new Date().toISOString(),
    }

    emailjs.send(
      "service_s9z6nzs",
      "template_6hxb1ue",
      templateParams,
      "HObhHz5qkW_UZLX6o"
    ).then(() => {
      setLoading(false);
      setSuccess(true);

      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }).catch((error) => {
      setLoading(false);
      setError(true);
      console.error("EmailJS Error:", error);
    })
  }

  return (
    <section id='contact' className='scroll-mt-28 min-h-[50vh] py-16 pt-12 lg:min-h-[55vh] lg:py-24 lg:pt-20 flex items-center relative z-0'>
      <div className='container mx-auto'>
        <div className='bg-gradient-to-r from-[#EFBFD5] to-[#9D61FD] text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center justify-between'>
            <div>
              <h2 className='font-[calistoga] text-2xl md:text-3xl'>Let’s Build Something Together</h2>
              <p className='text-sm md:text-base mt-2'>Whether it’s a project, opportunity, or collaboration, I’m just one message away.</p>
              
              <div className='flex flex-col items-start mt-5 gap-2'>
                <p className='text-sm text-black/60 md:text-base inline-flex gap-3 justify-center items-center'><Phone stroke='#666666' width={20} height={20}/> +63 991 4941 126</p>
                <p className='text-sm text-black/60 md:text-base inline-flex gap-3 justify-center items-center'><Gmail className='fill-[#666666] size-6'/> tiongson.jenniferantonette@gmail.com</p>
              </div>
            </div>
          
            <div className='flex flex-col w-full items-center'>
              <form onSubmit={handleSubmit} className='justify-center text-center'>
                <input name="name" value={formData.name} onChange={handleChange} required type="text" placeholder='Full Name' className='mt-3 border border-gray-900 px-6 h-12 w-full bg-gray-900 rounded-xl text-white'/>
                <input name="email" value={formData.email} onChange={handleChange} required type="email" placeholder='Email Address' className='mt-3 border border-gray-900 px-6 h-12 w-full bg-gray-900 rounded-xl text-white'/>
                <textarea name="message" value={formData.message} onChange={handleChange} required placeholder='Share your thoughts' className='mt-3 py-3 border border-gray-900 px-6 h-36 w-full bg-gray-900 rounded-xl text-white'></textarea>

                {success && (<p className='text-white font-semibold'>Message sent successfully!</p>)}
                {error && (<p className='text-red-500 font-semibold'>Failed to send message.</p>)}

                <button type="submit" className='w-1/2 mx-auto items-center font-semibold hover:bg-gray-700 hover:border-gray-700 hover:text-white transition duration-300 border border-gray-900 px-6 h-12 bg-gray-900 rounded-xl text-white'>{loading ? "Sending..." : "Send"}</button>
              </form>
            </div>  
          </div>
        </div>
      </div>
    </section>
  )
}
