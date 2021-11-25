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
    
};
export default reducer;