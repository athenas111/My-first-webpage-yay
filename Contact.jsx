/* eslint-disable no-undef */


import './Contact.css';
import msgIcon from '../../assets/msg-icon.png';
import  { useState } from 'react';

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0413cce9-2a23-496c-94a1-d74789695eca");

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
        <div className='contact'>
            <div className='contact-col'>
                <h3>Send us a message! <img src={msgIcon} alt="" /></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <ul>
                    <li>Contact@DreamDolls.com</li>
                    <li>+55 88-96632-4567</li>
                    <li>11 DreamPlace Av, DreamWorld <br /> MA 02139, Wonderland</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='enter your name' required/>
                    <label>Phone Number</label>
                    <input type="tel" name='phone' placeholder='enter your cel number' required/>
                    <label>Write Your Message Here</label>
                    <textarea name="message" rows={6} placeholder='enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit</button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact;
