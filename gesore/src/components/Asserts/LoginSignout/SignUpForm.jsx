
import React from 'react'

const SignUpForm = () => {
    return (
        <div className='signup-container'>
            <form className='signup-form'>
                <h2>signup</h2>
                <label htmlFor="email">
                    Email:
                    
                    </label>
                <label htmlFor="password">
                        password:
                        <input type="password"/>
                        </label>
                        <button>signup</button>
            </form>            
        </div>         
    )     
}                
      

    
export default SignUpForm    
        



