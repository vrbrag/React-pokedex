import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import ReactDOM from "react-dom/client";
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();



// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//    <React.StrictMode>
//       <App />
//    </React.StrictMode>
// );

serviceWorker.unregister();