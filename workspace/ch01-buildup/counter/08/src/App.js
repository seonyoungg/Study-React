import Reaction from './reaction.js';
import Header from "./components/Header.js";
import Counter from "./components/Counter.js";

// App 컴포넌트(어플리케이션의 시작점)
function App(){
  console.log('App 호출됨');
  return (
    Reaction.createElement('div', { id: 'app' }, Header, Counterter)
  );
}

export default App;