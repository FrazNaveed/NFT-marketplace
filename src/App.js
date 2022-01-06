
import {Navbar, Welcome, Footer, NFTs, Transactions, Loader} from './components';


function App() {
  return (
    <div className="min-h-screen">
      <div className= "gradient-bg-welcome"> 
      <Navbar/>
      <Welcome/>
      </div>
           
      <NFTs/>
      <Transactions/>
      <Footer/>
    </div>
  );
}

export default App;
