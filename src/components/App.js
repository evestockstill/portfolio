import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
  return <h1>Hello World</h1>;
}
  
// export default function App() {
//   return (
//     <>
//       <Router >
//         <Switch>
//           <Route path='/lyrics/:artistName/:albumId/:songId' component={Lyrics} />
//           <Route path='/tracks/:artistName/:id/:albumId' component={TracksList} />
//           <Route path='/artist/:artistName/:id' component={Albums} />
//           <Route exact path='/' component={Header} />
//         </Switch>
//       </Router>
//     </>
//   );
// }
