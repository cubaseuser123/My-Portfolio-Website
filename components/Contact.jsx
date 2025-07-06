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
        className='flex gap-6 mt-10 mb-8'>
            <motion.input 
            initial={{x:50,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:0.6, delay:1.2}}
            type="text"  placeholder='Enter your name' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='name'/>
            <input type="email"  placeholder='Enter your email' required className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white' name='email'/>
        </motion.div>
        <motion.textarea rows='6' placeholder='Enter your message' required  
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.6, delay:1.3}}
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6' name='message'></motion.textarea>
        <motion.button type='submit' 
        whileHover={{scale:1.05}}
        transition={{duration:0.3}}
        className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500'>Submit Now <Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.button>
        <p className='mt-5'>{result}</p>
      </motion.form>
    </motion.div>
  )
}

export default Contact
