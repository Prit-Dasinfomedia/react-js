import React, { useEffect, useState } from "react";

const addItemList = () => {

    const [fname, setFName] = useState('');
    const [email, setEmail] = useState('');
    const [people, setPeople] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (fname && email) {
            const person = { id: new Date().getTime().toString(), fname, email };
            console.log(person);
            setPeople((people) => {
                return [...people, person]
            });
        }
        else {
            alert("Please fill the form");
        }
    }
    return (
        <>
            <article>
                <form className="form" onSubmit={handleSubmit} >
                    <div className="form-control">
                        <label>Name:</label>
                        <input type="text" id="fname" name="fname" value={fname}
                            onChange={(e) => setFName(e.target.value)}
                        />
                    </div>
                    <div className="form-control">
                        <label>Email:</label>
                        <input type="text" id="Email" name="Email" value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="submit">
                        add Person
                    </button>
                </form>
                {
                    people.map((person) => {
                        const { id, fname, email } = person;
                        return  <div className="item" key={id}>
                            <h4>{fname}</h4>
                            <p>{email}</p>
                        </div>
                   })
                }
            </article>
        </>
    )
};

export default addItemList;