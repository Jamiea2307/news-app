import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NewsComponent from "./Components/newsComponent";

const App = () => {
  return (
    <div>
      <NewsComponent />
    </div>
  );
  // (
  //   <Router>
  //     <Switch>
  //       <Route path="/" />
  //     </Switch>
  //   </Router>
  // );
};

export default App;
