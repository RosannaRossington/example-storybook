import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
// import { FaStar } from 'react-icons/fa';

// const createArrayHelper = (length) => [...Array(length)];

// function Star({ selected = false, onSelect }) {
//   return <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect}/>;
// }
// function StarRating({ totalStars = 5 }) {
//   const [selectedStars, setSelectedStars] = useState(0);
//   return (
//   <>
//   {createArrayHelper(totalStars).map((n, i) => (
//     <Star
//       key={i}
//       selectedStars={selectedStars > i}
//       onSelect={() => setSelectedStars(i + 1)}
//     />))}
//     <p>{selectedStars} of {totalStars}</p>
//   </>
//   );
// }

// function App() {
//   return <StarRating totalStars={4}/>
// }

// function App() {
//   const [name, setName] = useState("Jan");
//   const [admin, setAdmin] = useState(false);
//   //changing state will fire this until add dependency
//   useEffect(() => {
//     document.title = `Celebrate ${name}`
//   }, [name])

//   useEffect(() => {
//     console.log(admin? 'admin' : 'not admin')
//   }, [admin])

//   return(
//     <section>
//       <p>Congrats {name}</p>
//     <button onClick={() =>setName("WIll")}>Change Winner</button>
//     <p>Congrats {name}</p>
//     <button onClick={() =>setAdmin(true)}>Log In</button>
//     </section>
//   )
// }

// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch(`https://api.github.com/users`)
//       .then((response) => response.json())
//       .then(setData); // || res => setData(res)
//   });

//   if (data) {
//     return (
//       <ul>
//         {data.map((user) => (
//           <li key={user.id}>user.login</li>
//         ))}
//       </ul>
//     );
//   }
//   return <p>No Users</p>;
// }

ReactDOM.render(
  <React.StrictMode>
    <App></App>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
