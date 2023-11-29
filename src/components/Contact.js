import React from 'react'

const Contact = () => {
  return (
    <div className='contact' >
        <main>
            <h1>Conatct Us</h1>

            <form>
                <div>
                    <label>Name</label>
                    <input type='text' required placeholder='Write your name here' />
                </div>

                <div>
                    <label>Email</label>
                    <input type='email' required placeholder='Write your email here' />
                </div>

                <div>
                    <label>Message</label>
                    <input type='text' required placeholder='Tell us about your query...' />
                </div>

                <button type="submit">Send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact