import './App.css';
import ContactAdder from './components/ContactAdder/ContactAdder';
import ContactList from './components/ContactList';

function App() {
  return (
    <div className="App">
      <ContactAdder />
      <ContactList />
    </div>
  )
}

export default App;