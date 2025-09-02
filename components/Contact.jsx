import React, {useState} from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import {motion} from 'motion/react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1ac6e2f8-9982-4772-827f-f41aec428021");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
    return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id="contact" className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/public/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto]'>
      <motion.h4 
      initial={{y:-20,opacity:0}}
      whileInView={{y:20,opacity:1}}
      transition={{duration:0.5, delay:0.3}}
      className='text-center mb-2 text-lg'>Contact Me</motion.h4>
      <motion.h2 
      initial={{y:-20,opacity:0}}
      whileInView={{y:20,opacity:1}}
      transition={{duration:0.5, delay:0.5}}
      className='text-center text-5xl'>I am open to work and networking opportunities!</motion.h2>
      <motion.p 
      initial={{y:-20,opacity:0}}
      whileInView={{y:20,opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12'>This is my work-portfolio! Explore a collection of projects showcasing my expertise in front-end development</motion.p>

<motion.form onSubmit={onSubmit} 
  initial={{opacity:0}}
  whileInView={{opacity:1}}
  transition={{duration:0.5, delay:0.9}}
  className='max-w-2xl mx-auto'>
  <motion.div 
    initial={{x:-50,opacity:0}}
    whileInView={{x:0,opacity:1}}
    transition={{duration:0.6, delay:1.1}}
    className='flex flex-col md:flex-row gap-4 md:gap-6 mt-10 mb-8'>
      <motion.input 
        initial={{x:50,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.6, delay:1.2}}
        type="text"  
        placeholder='Enter your name' 
        required 
        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white min-w-0' 
        name='name'
      />
      <input 
        type="email"  
        placeholder='Enter your email' 
        required 
        className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white min-w-0' 
        name='email'
      />
  </motion.div>
  {/* Add your message field and submit button below */}
  <textarea
    name="message"
    placeholder="Enter your message"
    required
    className="w-full p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 min-h-[120px] resize-y"
  />
  <button
  type="submit"
  className="px-20 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition block mx-auto flex items-center justify-center"
>
  Send
  <div className="mt-4 text-center text-sm text-gray-600">{result}</div>
  </button>
</motion.form>
    </motion.div>
  )
}

export default Contact
