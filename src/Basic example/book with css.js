import React from 'react';
import ReactDOM from 'react-dom';
import './book.css';

function Booklist() {
	return (
		<section>
			<Book />
		</section>
	);
}

const Book = () => {
	return(
		<article className="booklist">
			<Image />
			<Title />
			<Author />
		</article>
	);
}
const Image = () => (
	<img src="https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._Ac_UL200_SR200,200_.jpg" alt="" />
	
);

const Title = () => {
	return <p>How to Read People like a Book.</p>
}


const Author = () => {
	return <h4 style={{ color: "#617d98" , fontSize: "0.75rem", marginTop: "0.25rem"}}>james W. Williams</h4>
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
