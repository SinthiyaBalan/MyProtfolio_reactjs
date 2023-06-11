import React from 'react'

function Contact() {
  return (
    <div className='contact-container grow'>
      <div className="cont-form">
            <h3>Get in Touch</h3>
            <div>
            <form>
                <label for="fname">Name</label>
                 <input type="text"  placeholder="Your name.."/>
               
                <br/><label for="fname">Email</label>
                <input type="text"  placeholder="Email id.." />
            
               <br /><label for="subject">Subject</label>
               
                <textarea id="subject" name="subject" placeholder="Write something.." rows={4} cols={40} />
               
               <br/><input type="submit" value="Submit" /> 
                
              </form>
              </div>
        </div>

        <section class="cont-details">
            <div>
            <h3>Contact</h3>
            <div>Sinthiya Balasubramaniam</div>
            <div>Location : Munich , Germany.</div>
            <div>Email : sinthiyamct@gmail.com</div>
            <div>LinkedIn : <a href="https://www.linkedin.com/in/sinthiya-balasubramaniam/"> https://www.linkedin.com/in/sinthiya-balasubramaniam/</a></div>
            <div>Phone : 0176 56782844</div>
            </div>
        </section>
    </div>
  )
}

export default Contact