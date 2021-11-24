import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// setup vars
const Books = [
	{
		Author: "james W. Williams",
		Title: "How to Read People like a Book.",
		image: " https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._Ac_UL200_SR200,200_.jpg",
	},
	{
		Author: "Shannon elson",
		Title: "Our class Family",
		image: " https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",

	}
]

const names = [ 'Prit','Harshil', 'Ajay'];
const newNames = names.map((name) => {
	return <h1>{name}</h1>;
}); 
function Booklist() {
	return (
		<section>
			{newNames}
		</section>
	);
}
const Book = (props) => {
	const { img, title, Author, children } = props;
	return (
		<article className="booklist">
			<img src={img} alt="" />
			<h1>{title}</h1>
			<h4>{Author}</h4>
			{children}
		</article>
	);
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
