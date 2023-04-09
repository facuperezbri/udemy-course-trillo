import Header from "./components/Header";
import HotelView from "./components/HotelView";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <Sidebar />
        <HotelView />
      </div>
    </div>
  );
}

export default App;
