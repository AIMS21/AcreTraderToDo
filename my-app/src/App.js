import './App.css';
import Header from './Components/Header'
import AddTask from './Components/AddTask';
import ToDoList from './Components/ToDoList';

function App() {
  return (
    <div>
      <Header />
      <AddTask />
      <ToDoList />
    </div>
  );
}

export default App;
