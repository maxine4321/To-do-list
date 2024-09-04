import  {useState} from "react"


function App() {

const [tasks, setTasks]= useState([]);
const [task, setTask]= useState("");
const addTasks=()=> {
  if(task !== ""){
    setTasks([...tasks,task])
    setTask("")
    console.log(tasks);
  }
}

const deleteTasks = (index)=> {
  const updatedList = [...tasks];
  // delete updatedList[index];
  updatedList.splice(index,1)
  setTasks(updatedList);
}

  return (
      <div className="flex flex-col h-screen w-screen gap-10 items-center">
    
          <h1 className="flex font-sans font-bold text-lg">TO-DO LIST</h1>
          
        <div className="flex ">
          <input className="rounded-md p-2 m-4 bg-blue-100 text-black" 
          type="text" 
          value={task}
          onChange={(e)=>{
            setTask(e.target.value);
          }}
          placeholder="Add a new task"/>
          <button onClick={addTasks}
          className="bg-blue-500 hover:bg-teal-500 text-white p-3 m-3 rounded-md font-semibold">Add Task</button>
        </div>

        <div>
            {tasks?.length >0 ?(
              <ul>
                {
                  tasks.map((task, index)=>(
                    <div className="flex gap-5 pl-12 pr-4 py-5"> 
                      <li className="self-center font-semibold pr-10 mr-6 grow">{task}</li>
                      <button onClick={()=>deleteTasks(index)}
                      className="bg-red-700 text-white rounded-md p-2 hover:bg-red-500">Delete</button>
                    </div>
                  ))
                }
              </ul>
            ):(
              <div> 
                <p>no task found</p>
              </div>
            )
            }
          </div>
        
      </div>
  )
}

export default App
