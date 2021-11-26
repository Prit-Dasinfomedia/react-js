// import logo from './logo.svg';
import React from "react";
// useState example
// import Setup from "./AdvanceReact Topics/1-useState/1-error-example";
// import Setup from "./AdvanceReact Topics/1-useState/2-UseState-Basics";
// import Setup from "./AdvanceReact Topics/1-useState/3-useState-array";
// import Setup from "./AdvanceReact Topics/1-useState/4-useState-object";
// import Setup from "./AdvanceReact Topics/1-useState/5-useState-counter";
// import Setup from "./AdvanceReact Topics/1-useState/6-functionUpdateform";

//useEffect Example
// import Setup from "./AdvanceReact Topics/2-useEffect/1-useEffect-basics";
// import Setup from "./AdvanceReact Topics/2-useEffect/2-useEffect-conditional";
// import Setup from "./AdvanceReact Topics/2-useEffect/3-useEffect-dependancylist";
// import Setup from "./AdvanceReact Topics/2-useEffect/4-useEffect-CleanUpFunction";
// import Setup from "./AdvanceReact Topics/2-useEffect/5-useEffect-fetchdata";

//condition rendering example
// import Setup from "./AdvanceReact Topics/3-Conditionl Rendaring/1-multipleReturns";
// import Setup from "./AdvanceReact Topics/3-Conditionl Rendaring/2-multiplereturns-fetch";
// import Setup from "./AdvanceReact Topics/3-Conditionl Rendaring/3-short-circuit";
// import Setup from "./AdvanceReact Topics/3-Conditionl Rendaring/4-TerneryOperators";
// import Setup from "./AdvanceReact Topics/3-Conditionl Rendaring/5-ShowHide";

//forms Example
// import Setup from "./AdvanceReact Topics/4-Forms/1-FormBasics";
// import Setup from "./AdvanceReact Topics/4-Forms/2-controlInput";
// import Setup from "./AdvanceReact Topics/4-Forms/3-addItemList";
// import Setup from "./AdvanceReact Topics/4-Forms/4-multiInput";

//useRef Example
// import Setup from "./AdvanceReact Topics/5-useRef/1-useRef";

//useReducer Example
// import Setup from "./AdvanceReact Topics/6-useReducer/";

//Pro drilling example
// import Setup from "./AdvanceReact Topics/7-Prop Drilling/1-prop-driling";

// context-api Example
// import Setup from "./AdvanceReact Topics/8-Context-api/1-context-api";

// custom Hooks Example
// import Setup from "./AdvanceReact Topics/9-custom-hooks/1-fetch-example";

//Prop Type example
// import Setup from "./AdvanceReact Topics/10-prop-types";

// react-router example
// import Setup from "./AdvanceReact Topics/11-react-router/";

//USeMemo use Callback example
// import Setup from "./AdvanceReact Topics/12-useMemo/";

// Redux example
import CartContainer from "./Redux/CartContainer";
import Navbar from "./Redux/Navbar";
import cartItems from "./cart-items";

import './App.css';

import {createStore} from 'redux';
const initiaStore = {
	count: 0
};
function reducer(state, action)
{
	console.log({state, action});
	if(action.type === "DECREASE")
	{	
		return {count : state.count - 1};
	}
	if(action.type === "INCREASE")
	{
		return {count : state.count + 1};
	}
	if(action.type === "RESET")
	{	
		return {count : 0};
	}
	return state;
}
const store = createStore(reducer , initiaStore); 
store.dispatch({type: 'DECREASE'})
store.dispatch({type: 'INCREASE'})
store.dispatch({type: 'RESET'})
console.log (store.getState());


function App() {
	return (
		<div className="container">
			<Navbar cart={store.getState()}/>
			<CartContainer cart={cartItems} />
		</div>
	);

}

export default App;
