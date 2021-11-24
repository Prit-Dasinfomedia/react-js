import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// setup vars
const firstBook = {
	Author: "james W. Williams",
	Title: "How to Read People like a Book.",
	image: " https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._Ac_UL200_SR200,200_.jpg",
}

const secondBook = {
	Author: "Shannon elson",
	Title: "Our class Family",
	image: " https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg",
}

function Booklist() {
	return (
		<section>
			<Book img={firstBook.image} title={firstBook.Title} Author={firstBook.Author}>
				<p>
					Lorem ipsum dolor sit amet consecteur adispicing elit. Dolor cum animi volupts temporibus quo delects.
				</p>
			</Book>
			<Book img={secondBook.image} title={secondBook.Title} Author={secondBook.Author} />
		</section>
	);
}
const Book = (props) => {
	const { img, title, Author,children } = props;
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
