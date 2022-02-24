import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar.jsx'

function App() {
  return (
    <div className="app">
        <div className="app_body">
            <Sidebar/>
        </div>
    </div>
  );
}

export default App;
