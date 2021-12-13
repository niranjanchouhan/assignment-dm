import './App.scss';
import { Panel } from './components/panel/panel';
import { data } from './constants/data';

function App() {
  return (
    <div className="App">
      <Panel data={data.categoryOptions}></Panel>
    </div>
  );
}

export default App;
