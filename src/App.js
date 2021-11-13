import Home from './components/pages/home/Home';
import Sidebar from './components/sidebar/Sidebar';
import { Topbar } from './components/topbar/Topbar';

function App() {
  return (
    <div className="body m-0 p-0 box-border overflow-hidden">
      <Topbar />
      <div className="container flex flex-1 mt-5 overflow-y-hidden">
        <Sidebar />
        <div className="other-content overflow-y-auto">
        <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
