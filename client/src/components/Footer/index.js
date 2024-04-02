import React, { useState} from 'react'



import './Footer.css'


const Footer = () => {
  const [name, setName] = useState('');
  console.log('name', name)


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    

    setName('');
  }
    
    
  return (
  <div className='footer-container'>
    <div className = 'flex-row'>          
        {/* left */}
        <div className= 'card1 px-1 py-1'> 
          <div className='left'>       
            <h3>Your Feedback is Greatly Appreciated</h3>
              <p className='newsLetter-p'>Subscribe for comments and user recommendations to expand our Store</p>
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
            <h5>Thank you For Trusting Us With Your Time and Purchase</h5>           
          </div>
        </div>
        
        {/* right */}
        <div className="card1 px-1 py-1">  
          <div className='right'>      
            <h3>CONTACT</h3>
            <p>777 Example Street, SAN JOSE 77777</p>
            <p>BuyFromAmakon@Amakon.com</p>
            <p>Toll Free: 1(800)987-6543</p>  
          </div>     
        </div>
     </div> 
  </div>

    
  )
}

export default Footer