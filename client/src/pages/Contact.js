import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import { BsTelephone } from 'react-icons/bs';


const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Displaying a toast when submission is successful
  const toastifySuccess = () => {
    toast('Form sent!', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Send email and disabling form on submission

  const onSubmit = async (data) => {

    const { name, email, subject, message } = data;
    try {

      setDisabled(true);

      // Params validation
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Sending email contact form using emailjs
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_USER_ID
      );

      // Resetting and re-engage the form after successful submission
      reset();
     
      toastifySuccess();
    
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className='ContactForm' >
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <div className='contactForm'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} className="col-12 m-3" noValidate >
              
                <div className='row formRow'>
                  {/* About us short summary */}
                  <br></br>
                  <br></br>
                  <h1>About Us</h1>
                  <br></br>
                  <br></br>
                  <p>We are your trusted source for everything you need regarding PC Computer, Desktop, Laptop, Parts. </p>
                  <br></br>
                  {/* Contact */}
                  <h1>Contact Us</h1>
                  <br></br>
                  <br></br>
                  <p>We offer Reward for member with our Member Card. Up to 15% points back toward card credit. Now for a limited time 10 % off for Referral and Feedback on Our E-platform. Subject to change and store policy</p>
                  <p>We reserve the right to decline any promotion discount if we found a violation or abuse in the use of the promotion discount </p>
                  <p></p>
                  {/* Enquiry  */}
                  <p>Contact us Toll Free at 1(800)-987-6543 <BsTelephone style={{ color: 'blue', fontSize: '30px' }} />For Hours of Operations and Office Locations.</p>

                  <br></br>

                  <p>For open items Exchanges and return are allow up to 15 days after Product is opened </p>
                  <p>All Unopen Items Are Returnable for a Full Refund Up To 30 Days.</p>
                  <br></br>
                  <br></br>
                  <h3>Contact Form</h3>
                  <br></br>
                  <h5>Please Submit a Valid Email Address for Receipt and confirmation # about your Transaction/Purchase</h5>
                  {/*Field 1 */}
                  <div className='col-5'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please Enter Your Full Name'
                        },
                        maxLength: {
                          value: 50,
                          message: '50 Characters or Less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <br></br>
                  <div className='col-5'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Field 2 */}
                <div className='row formRow'>
                  <div className='col-10'>
                    <br></br>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Concern/Question/Inquiry'
                        },
                        maxLength: {
                          value: 100,
                          message: 'Cannot be more than 100 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Field 3 */}
                <div className='row formRow'>
                  <div className='col-10'>
                    <br></br>
                    <textarea
                      rows={6}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please Enter Your Message/Questions/Concerns</span>}
                  </div>
                </div>
                <br></br>
                <button className='submit-btn' disabled={disabled} type='submit'>
                  Send Message
                </button>
                <br></br>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;