import React, { useEffect, useState, useRef, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../data";

const reducer = (state, action) => {
    console.log(state);
    if(action.type === 'ADD_ITEM')
    {
        const newPeople = [...state.people,
        action.payload]
        return  {
            ...state,
            people: newPeople,
            isModalOpen: true,
            // modalContent: 'Item Added'  
        };   
    }
    if(action.type === 'REMOVE_ITEM')
    {
        const newPeople = state.people.filter(
            (person) => person.id !== action.payload
        );
        return { ...state, people: newPeople, isModalOpen: false}
    }
    
};

const defaultState = {
    people: [],
    isModalOpen: false,
    modalContent: ""
};
const Index = () => {
    const [name, setName] = useState('');  
    const [state , dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name) 
        {
            const newName = { id: new Date().getTime().toString() , name }
            dispatch({type: 'ADD_ITEM' ,payload: newName})
        }
        else 
        {
            alert("please fill up the form");
        }
    }
    return (
        <>
            {state.isModalOpen && <Modal/>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
            {state.people.map((person) => {
                return (
                    <div key={person.id}>
                        <p>{person.name}</p>
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM',payload:person.id})}>Remove</button>
                    </div>
                );
            })}
        </>
    );
};

export default Index;