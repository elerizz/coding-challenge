import './index.css';
import { useState } from 'react';

const ContactAdder = () => {
    const [firstname, setFirstname] = useState("");
    const [surname, setSurname] = useState("");
    const [number, setNumber] = useState("");
    const [contactlist, setContactlist] = useState([]);

    const createContact = (e) => {
        e.preventDefault()
        setContactlist((prev) => [...prev, {firstname: firstname, lastname: surname, number: number}])
    }

    return(
    <div>
        <form action="Add contact" className='ContactAdder'>
            <input type="text" placeholder='firstname' id="firstname" onChange={(e) => setFirstname(e.target.value)}/>
            <input type="text" placeholder='surname' id="surname" onChange={(e) => setSurname(e.target.value)}/>
            <input type="text" placeholder='number' id="number" onChange={(e) => setNumber(e.target.value)}/>
            <button type='submit' 
            onClick= {createContact} > 
            Add contact </button>
        </form>
    </div>
    )
}

export default ContactAdder 




