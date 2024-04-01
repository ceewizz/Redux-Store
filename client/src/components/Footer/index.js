import React, { useState} from 'react'
import { useMutation } from '@apollo/client';
import { ADD_NEWSLETTER } from '../../utils/mutations';


import './Footer.css'


const Footer = () => {
  const [name, setName] = useState('');
  console.log('name', name)
  const [addNewsletter] = useMutation(ADD_NEWSLETTER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    await addNewsletter({
      variables: {
        email: name,
      },

    });
    setName('');
  }
    
    
  return (
  <div className='footer-container'>
    <div className = 'flex-row'>          
        {/* left */}
        <div className= 'card1 px-1 py-1'> 
          <div className='left'>       
            <h3>Save even more</h3>
              <p className='newsLetter-p'>Subscribe for season discounts rewards and travel brochures!</p>
              {/* <p>Email *</p> */}
              <form
                  className="flex-row justify-center justify-space-between-md align-center"
                  onSubmit={handleFormSubmit}
              >
              <input className='input-box' placeholder='Email *' type="email" 
              value={name} onChange={(event) => setName(event.target.value)} />
              <div>
                <button className='footer-button' type="submit">Subscribe</button> 
              </div>
              </form>  
            </div>      
        </div>
        
        {/* middle */}
        <div className="card1 px-1 py-1">
          <div className ='middle'>
            <h5>You've Made a Great Choice!</h5>           
          </div>
        </div>
        
        {/* right */}
        <div className="card1 px-1 py-1">  
          <div className='right'>      
            <h3>CONTACT</h3>
            <p>999 Example Street, San Francisco CA 99999</p>
            <p>Bookatour@cruiseship.com</p>
            <p>Toll Free: 1(800)123-4567</p>  
          </div>     
        </div>
     </div> 
  </div>

    
  )
}

export default Footer