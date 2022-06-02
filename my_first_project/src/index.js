import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
// import { App, Comment } from './App';
// import Clock from './Time';
// import List from './List';
import Form from './genderize';
// import Examples from './Examples';
// import FilterableProductTable from './Products';


const PRODUCTS = [
  { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
  { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
  { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
  { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
  { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
  { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <App />, */}
    {/* <Comment user={{
      avatarUrl: 'https://someurl/com',
      name: 'Harry'
    }}
      author={{
        text:"Lorem Ipsum",
        date: new Date().toLocaleString(),
        name: "Harry"
      }}
    /> */}
    {/*  <Clock timer={{ time: 1100 }}/>
    <Clock timer={{ time: 1300 }}/>
    <Clock timer={{ time: 1600 }}/>
    <Clock timer={{ time: 1800 }}/> */}
    <Form />
    {/* <List /> */}
    {/* <Examples /> */}

    {/* <FilterableProductTable products={PRODUCTS} /> */}

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
