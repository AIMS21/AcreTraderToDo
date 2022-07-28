import tasks from '../data.json'
import Switch from "react-switch";

const ToDoList = (props) => {
  const currentUser = props.currentUser;
  let count = 0;
  const change = () => {
    this.completed = true
    console.log("CHANGE")
  }
  const remove = () => {
    console.log("REMOVE")
  }
  return (
    <div>
      <h3>User {currentUser} To Do List</h3>
      <ul>
      {tasks.sort(function(x, y) { return x.completed - y.completed }).map(({ userId, id, title, completed}) => {
        if (currentUser === userId) {
          count = count + 1;
          return (
            <li>
              <div key={id} className="row">
                <p>Task Number: {id} - {title}<Switch onChange={change} checked={completed}></Switch></p> 
                <button onClick={remove}>remove</button>
              </div>
            </li>
          );
        }
        else {
          return (null)
        }

      })}
      </ul>
      {count === 0 ? <p>No current tasks for you right now!</p> : null}
      
    </div>
  );
  }
  
  export default ToDoList;