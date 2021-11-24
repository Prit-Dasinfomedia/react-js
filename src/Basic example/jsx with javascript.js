import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Booklist() {
	return (
		<section>
			<Book />
		</section>
	);
}
const Author = "james W. Williams"
const Book = () => {
	const Title = "How to Read People like a Book."
	return(
		<article className="booklist">
			<img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._Ac_UL200_SR200,200_.jpg" alt="" />

			<h1>{Title}</h1>
			<h4>{Author.toUpperCase()}</h4>
			<p>{ 6 + 6 }</p>
		</article>
	);
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
