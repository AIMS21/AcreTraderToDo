import tasks from '../data.json'

function ToDoList() {
    return (
      <div>
        {tasks && tasks.map(({ id, title, completed}) => (
          <div key={id} className="row">
            <p>{id} {title} {String(completed)}</p>
            
          </div>
        ))}
      </div>
    );
  }
  
  export default ToDoList;