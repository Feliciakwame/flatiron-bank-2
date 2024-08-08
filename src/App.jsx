import "./App.css";
import Header from "./components/Header";
//import UserInput from "./components/UserInput";
//import AddTranscations from "./components/AddTranscations";
import BankList from "./components/BankList";
import Form from "./components/Form";

function App() {
  return (
    <div>
      <div className="header">
        <Header />
      </div>

      {/* //<div className="InputContainer">
        <UserInput />
      </div> */}
      {/* <div>
        <AddTranscations />
      </div> */}
      <div>
        <Form />
      </div>
      <div>
        <BankList />
      </div>
    </div>
  );
}

export default App;
