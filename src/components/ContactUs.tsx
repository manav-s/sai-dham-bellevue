import { useEffect, useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import { Button, Label, TextInput } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import React from "react";


const Contact = () => {

   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");
   const recaptcha = useRef<ReCAPTCHA | null>(null);
   // require('dotenv').config();
   
   
   //  RECAPTCHA API KEY
   // const apiKey = process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY

   const [submitted, setSubmitted] = useState(false);
   const [error, setError] = useState("");
   const [token, setToken] = useState<string>('');
   const [verificationResult, setVerificationResult] = useState<any>(null);



   const verifyRecaptcha = async () => {
      try {
        const result = await axios.post('/api/verify-recaptcha', {
          token,
        });
     
        setVerificationResult(result.data);
      } catch (error) {
        console.error('Error verifying reCAPTCHA', error);
      }
     };
     
     const handleToken = (token: string | null) => {
      if (token) {
        setToken(token);
      }
     };

   function submit(e: { preventDefault: () => void; }) {
      // This will prevent page refresh
      e.preventDefault();
      // const captchaValue = recaptcha.current?.getValue()
      // if (!captchaValue) {
      //   alert('Please verify the reCAPTCHA!')
      //   return
      // }

      if(message === "" || email === "") {
         alert("Please type a message!")
         return
      }
      // replace this with your own unique endpoint URL
      fetch("https://formcarry.com/s/OwxezQ2E1wF", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({ email: email, message: message })
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.code === 200) {
            setSubmitted(true);
          } else {
            setError(res.message);
          }
        })
        .catch((error) => setError(error));
    }
    
    if (error) {
     console.log(error)
     return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                    Contact Us
                  </p>
                  <p className="mt-6 text-lg leading-8 text-red-600">
                  We read all feedback and are always looking to improve.</p>
                  <br />
                  {/* <a href="http://www.cbsatpathy.com/" target={"_blank"} rel="noreferrer">
                     <h2 className="text-base font-semibold leading-7 text-orange-600">
                     Read more about our Guruji here {`>`}
                     </h2>    
                  </a> */}
                </div>
              </div>

              <form onSubmit={submit} className="h-[40rem] flex mt-6 justify-center lg:justify-start ">
                  <div className="mb-2 w-full">
                        <Label htmlFor="email4" value="Your email" />
                     </div>
                     <TextInput id="email4" type="email" icon={HiMail} onChange={(e) => setEmail(e.target.value)} placeholder="you@there.com" required />

                     <div className="mb-2 w-full">
                        <Label htmlFor="message" value="Message" />
                     </div>
                     <TextInput id="message" type="message" onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
                     <div className="mt-4">
                           <Button /*onClick={verifyRecaptcha}*/ type="submit">Submit</Button>
                        
                           {/* <ReCAPTCHA ref={recaptcha} onChange={handleToken} sitekey={`${process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY}`} />  */}
                     </div>
               </form>
            </div>
          </div>
        </div>
      );
    }

    if (submitted) {
      return (
         <div className="overflow-hidden bg-white py-24 sm:py-32">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
           <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
             <div className="lg:pr-8 lg:pt-4">
               <div className="lg:max-w-lg">
                 <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                   Thank you for your feedback!
                 </p>
                 <p className="mt-6 text-lg leading-8 text-red-600">
                 We look forward to reading your message.</p>
                 <br />
                 {/* <a href="http://www.cbsatpathy.com/" target={"_blank"} rel="noreferrer">
                    <h2 className="text-base font-semibold leading-7 text-orange-600">
                    Read more about our Guruji here {`>`}
                    </h2>    
                 </a> */}
               </div>
             </div>
           </div>
         </div>
       </div>
       );
     }

    return (
      <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:pr-8 lg:pt-4">
                <div className="lg:max-w-lg">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-red-900 sm:text-4xl">
                    Contact Us
                  </p>
                  <p className="mt-6 text-lg leading-8 text-red-600">
                  We read all feedback and are always looking to improve.</p>
                  <br />
                  {/* <a href="http://www.cbsatpathy.com/" target={"_blank"} rel="noreferrer">
                     <h2 className="text-base font-semibold leading-7 text-orange-600">
                     Read more about our Guruji here {`>`}
                     </h2>    
                  </a> */}
                </div>
              </div>

              <form onSubmit={submit} className="flex mt-6 justify-center lg:justify-start ">
                  <div className="max-w-2xl mx-auto p-4">
                        <div className="mb-2 w-full">
                           <Label htmlFor="email4" value="Your email" />
                        </div>
                        <TextInput className="" id="email4" type="email" icon={HiMail} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />

                        <div className="mb-2 w-full">
                           <Label htmlFor="message" value="Message" />
                        </div>
                        <TextInput id="message" type="message" onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
                        <div className="mt-4">
                              <Button /*onClick={verifyRecaptcha}*/ type="submit">Submit</Button>
                           
                              {/* <ReCAPTCHA ref={recaptcha} onChange={handleToken} sitekey={`${process.env.NEXT_PUBLIC_REACT_APP_SITE_KEY}`} />  */}
                        </div>
                  </div>
               </form>
            </div>
          </div>
        </div>
    )









}


export default Contact;