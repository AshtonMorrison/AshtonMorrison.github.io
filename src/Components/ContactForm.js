

export default function ContactForm(){
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f826bd83-58ff-40c3-ae68-368e638085ed");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };


    return (
        <section className="contact-form">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className = 'row'>
                  <div className='input-box top'>
                      <label> *Name: </label>
                      <input type='text' name = "name" className="field" placeholder = "Enter Your Full Name" required />
                  </div>
                  <div className='input-box top'>
                      <label> *Email Address: </label>
                      <input type='email' name="email" className="field" placeholder = "Enter Your Email" required />
                  </div>
                </div>
                <div className='input-box'>
                    <label> *Message: </label>
                    <textarea name='message' className="field message" placeholder = "Enter Your Message" required></textarea>
                </div>
                <div className = "button-box">
                  <button type='submit'>Submit Message</button>
                  <button type='reset'>Reset Form</button>
                </div>
            </form>
        </section>
    )
}