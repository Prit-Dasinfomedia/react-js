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

// const names = [ 'Prit','Harshil', 'Ajay'];
// const newNames = names.map((name) => {
// 	return <h1>{name}</h1>;
// }); 
function Booklist() {
	return (
		<section>
			{Books.map((book)=> {
				// const { image, Title,Author} = book;
				return <Book book={book}></Book>
			})}
		</section>
	);
}
const Book = (props) => {
	const { image, Title, Author, children } = props.book;
	return (
		<article className="booklist">
			<img src={image} alt="" />
			<h1>{Title}</h1>
			<h4>{Author}</h4>
			{children}
		</article>
	);
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
