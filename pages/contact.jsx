import { useState, useRef} from 'react';
import BannerLayout from '../components/Common/BannerLayout';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'
import { HiMail, HiUser } from 'react-icons/hi'
import { BsChatTextFill } from 'react-icons/bs'
import Fiverr_Icon from '../components/Fiverr_Icon';
import Footer from '../components/Footer';
import { Modal } from 'antd';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef(null);
    const [thankYouMessage, setThankYouMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)

   

    const sendEmail = (e) => {
        e.preventDefault();

    //     var data = {
    //         service_id: 'service_gdznw7k',
    //         template_id: 'template_qgeu89n',
    //         user_id: 'ihuURRHtQ6axR2qDx',
    //         template_params: {
    //             'username': 'James',
    //             'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
    //         }
    //     };
    //     $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
    //     type: 'POST',
    //     data: JSON.stringify(data),
    //     contentType: 'application/json'
    // }).done(function() {
    //     alert('Your mail is sent!');
    // }).fail(function(error) {
    //     alert('Oops... ' + JSON.stringify(error));
    // });
    
        emailjs
          .sendForm('service_gdznw7k', 'template_qgeu89n', form.current, {
            publicKey: 'ihuURRHtQ6axR2qDx',



            
          })
          
          .then(
            () => {
              console.log('SUCCESS!');
              setThankYouMessage(
                'Thank you for sending a message. Your message has been sent!'
              );
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          
          const templateParams = {
            name: 'James',
            notes: 'Check this out!',
          };
           // Clear the form
    
        // Display thank you message    
      };

    return (
        <BannerLayout>
            <div className=" px-4 py-2">
                <div className="my-6 text-Snow flex flex-col gap-y-5">
                    <h1 className='text-lg font-bold'>Contact Information</h1>
                    <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
                        <div className="card_stylings w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Country:</span>
                                <span className='text-LightGray md:text-sm'>INDIA</span>
                            </div>
                            
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>State:</span>
                                <span className='text-LightGray md:text-sm'>HARYANA</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>City:</span>
                                <span className='text-LightGray md:text-sm'>AMBALA CITY</span>
                            </div>
                        </div>
                        <div className="card_stylings rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Email:</span>
                                <span className='text-LightGray text-sm'>Jatinsehgal466@gmail.com</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Linkedin:</span>
                                <span className='text-LightGray text-sm'>Jatinsehgal4</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className='md:text-base'>Phone:</span>
                                <span className='text-LightGray text-sm'>+91 8221866158</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-16 w-full card_stylings text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
                    <a className='hover:scale-125 ease-in-out duration-700' href="jatinsehgal466@gmail.com" target='_blank' rel="noreferrer"><HiMail /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://github.com/jatinxsehgal" target='_blank' rel="noreferrer"><FaGithub /></a>
                    <a className='hover:scale-125 ease-in-out duration-700' href="https://www.linkedin.com/in/jatinsehgal4/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 hidden sm:block' href="https://www.fiverr.com/jatinsehgal0" target='_blank' rel="noreferrer"><Fiverr_Icon /></a>
                    <a className='hover:scale-125 ease-in-out duration-700 text-2xl sm:text-4xl mt-1' href="https://www.upwork.com/freelancers/~017ae57af2750484ad" target='_blank' rel="noreferrer"><SiUpwork /></a>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                <div className="my-12 w-full h-auto text-Snow">
                    <h1 className='text-lg font-bold'>Get In Touch</h1>
                    <div className="mt-4 py-8 px-8 bg-EveningBlack rounded-xl text-sm">
                        <div>
                            <div className="flex flex-col w-full">
                                <div className="userIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none">
                                        <HiUser />
                                    </div>
                                    <input type="text" className="input_stylings" placeholder="Name" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="mailIcon relative mb-6">
                                    <div id="icon" className="absolute inset-y-0 left-0 flex items-center text-xl pl-3 pointer-events-none">
                                        <HiMail />
                                    </div>
                                    <input type="text" className="input_stylings" placeholder="Email" />
                                </div>
                            </div>

                            <div className="flex flex-col w-full">
                                <div className="textIcon relative mb-6">
                                    <div id="icon" className="absolute top-3 left-0 flex items-center text-lg pl-3 pointer-events-none">
                                        <BsChatTextFill />
                                    </div>
                                    <textarea rows={6} cols={50} className="input_stylings" placeholder="Message" />
                                </div>
                            </div>

                            <div className="my-4">
                                <button onClick={sendEmail} className="button"> SEND MESSAGE </button>
                            </div>
                        </div>
                    </div>
                </div>
                </form> 
            </div>
            
            {/* success modal */}
            <Modal
                className='card_stylings backdrop-blur-3xl drop-shadow-2xl'
                // wrapClassName='bg-red-800'
                centered
                open={isOpen}
                footer={null}
                closable={false}
                onOk={() => setIsOpen(false)}
                onCancel={() => setIsOpen(false)}
            >
                <div className='flex flex-col items-center justify-center'>
                    <h1 className='text-Green font-bold text-2xl'>In Progress</h1>
                    <a className='underline text-Snow' target='_blank' href='https://github.com/osamajavaid/portfolio'>Be the one to integrate this!</a>
                </div>
            </Modal>
            <Footer />
        </BannerLayout>

    )
}

export default Contact