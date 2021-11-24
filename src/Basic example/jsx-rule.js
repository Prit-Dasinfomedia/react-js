import React from 'react';
import ReactDOM from 'react-dom';


function Greeting() {
  return <h1>hello World</h1>
}
//JSX Rules create tag also close This Tag
// beacuse the Give Error
{/* <h1></h4> */}

ReactDOM.render(<Greeting />, document.getElementById('root'));
 