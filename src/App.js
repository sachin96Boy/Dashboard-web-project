import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';

function App() {
  return (
    <div className="body m-0 p-0 box-border overflow-hidden">
      <Topbar />
      <div className="container flex">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
