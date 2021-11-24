import React from 'react';
import ReactDOM from 'react-dom';


function Greeting() {
  return(
    <div>
      <Person />
      <Address />
    </div>
  );
}

const Person = () => <h2> Prit Patel </h2>;

const Address = () => {
  return <p>i am from Dharampur.</p>
}

ReactDOM.render(<Greeting />, document.getElementById('root'));
 