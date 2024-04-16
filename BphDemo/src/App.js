// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Page1 from './components/Page1';
// import Page2 from './components/Page2';

// function App() {
//   return (<>
//   <Router>
//       <div style={{color:"skyblue"}}>
//           <nav>
//             <ul>
//               <li>
//                 <Link to="/">Page 1</Link>
//               </li>
//               <li>
//                 <Link to="/page2">Page 2</Link>
//               </li>
//             </ul>
//           </nav>
//         <Switch>
//           <Route path="/page2">
//             <Page2 />
//           </Route>
//           <Route path="/">
//             <Page1 />
//           </Route>
//         </Switch>
//       </div>
//     </Router></>
    
//   );
// }



// export default App;
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Page1 from './components/Page1';
import Page2 from './components/Page2';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/Page2" component={Page2} />        
          <Route path="/" component={Page1} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

