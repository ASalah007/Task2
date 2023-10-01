import "./App.css";
import CandidateList from "./components/CandidateList/CandidateList";
import SideNav from "./components/SideNav/SideNav";

function App() {
  return (
    <div className="flex overflow-hidden max-h-screen bg-[#F9FAFF]">
      <div className="overflow-auto overflow-x-hidden h-screen flex flex-col shadow-lg">
        <SideNav />
      </div>
      <CandidateList />
    </div>
  );
}

export default App;
