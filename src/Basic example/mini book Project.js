import React from 'react';
import ReactDOM from 'react-dom';


function Booklist() {
	return (
		<section>
			<Book />
		</section>
	);
}

const Book = () => {
	return(
		<article>
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
	return <p>james W. Williams</p>
}

ReactDOM.render(<Booklist />, document.getElementById('root'));
