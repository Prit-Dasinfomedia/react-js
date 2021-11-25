import React, { useEffect, useState } from "react";

const MultiInput = () => {

    // const [fname, setFName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age , setAge] = useState('');
    const [person ,setPerson] = useState({fname: "", Email: "", Age: ""})
    const [people, setPeople] = useState([]);
    
    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        setPerson ({ ...person, [name]: value})
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(person.fname && person.Email && person.Age)
        {
            const newPerson = {...person , id: new Date().getTime().toString() }
            setPeople([ ...people, newPerson])
            setPerson({ fname: "" , Email: "" , Age: "" })
        }
        else
        {
            alert("Please fill up The Form");
        }

    };
    return (
        <>
            <article>
                <form className="form" >
                    <div className="form-control">
                        <label>Name:</label>
                        <input type="text" id="fname" name="fname" value={person.fname}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label>Email:</label>
                        <input type="text" id="Email" name="Email" value={person.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-control">
                        <label>Age:</label>
                        <input type="text" id="Age" name="Age" value={person.age}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" onClick={handleSubmit}>
                        add Person
                    </button>
                </form>
                {
                    people.map((person) => {
                        const { id, fname, Email,Age } = person;
                        return  <div className="item" key={id}>
                            <h4>{fname}</h4>
                            <p>{Email}</p>
                            <p>{Age}</p>
                        </div>
                   })
                }
            </article>
        </>
    )
};

export default MultiInput;