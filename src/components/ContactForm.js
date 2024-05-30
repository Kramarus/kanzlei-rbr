import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {

    const validateForm = () => {
        const nameField = document.getElementById("name");
    
        if (nameField.value.includes("CryptoCep")) {
          nameField.value = "";
        }
      };

    const form = useRef();

    const [name,setName] = useState("");
    const [phone,setPhone] = useState("");
    const [email,setEmail] = useState("");
    const [comment,setComment] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        const SERVICE_ID = 'service_p6msjff';
        const TEMPLATE_ID = 'template_u7m0rm9';
        const PUBLIC_KEY = 'LHnq7SREKvjXiCNxZ';

        emailjs.sendForm(
            SERVICE_ID, 
            TEMPLATE_ID, 
            form.current, 
            {
                publicKey: PUBLIC_KEY
            }
        ).then(
            () => {
                alert('Vielen Dank! Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.');
                setName("");
                setPhone("");
                setEmail("");
                setComment("");
            },
            (error) => {
                console.log('Fehler!', error.text);
            }
        );
    };

    return (
        <form ref={form} onSubmit={sendEmail} method="POST">
            
            <div className="form-group">
                <p class="text-dark">Wir kontaktieren Sie zurück</p>
            </div>
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" name="name" class="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required/>
            </div>
            <div class="form-group">
                <label for="phone">Handynummer</label>
                <input type="text" name="phone" class="form-control" id="phone" placeholder="Handynummer" value={phone} onChange={(e) => setPhone(e.target.value)}  required/>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" class="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}  required/>
            </div>
            <div class="form-group">
                <label for="comment">Kommentar</label>
                <textarea class="form-control" name="comment" id="comment" rows="3" value={comment} placeholder="Kommentar" onChange={(e) => setComment(e.target.value)} ></textarea>
            </div>            
            <div className="d-flex justify-content-center">
                <button class="btn btn-primary" type="submit" onClick={console.log("Success")}>Senden</button>
                {/* <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> */}
            </div>
        </form>
    )
}
