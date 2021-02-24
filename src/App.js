import './App.css';
import {MainNav, Footer, Search} from "./components/ui";

function App() {
  return (
    <>
       <MainNav/>
       <Search/>
       <div className="p-24">
           <h1 className="text-5xl">Meal Planner</h1>
       </div>
       <Footer/>
    </>
  );
}

export default App;
