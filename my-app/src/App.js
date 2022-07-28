import Header from './Components/Header'
import AddTask from './Components/AddTask';
import ToDoList from './Components/ToDoList';

function App() {
  const currentUser = 1;
  return (
    <div>
      <Header />
      <AddTask />
      <ToDoList currentUser={currentUser}/>
    </div>
  );
}

export default App;
