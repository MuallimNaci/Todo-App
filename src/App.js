import { useState } from 'react';
import './App.css';

const Lists = [
  { id: 1, title: "Shopping", isCompleted: false },
  { id: 2, title: "Pay the bills", isCompleted: true }
];

function App() {


    const [list, setList] = useState(Lists)
    const [inputValue, setInputValue] = useState("")

    // line-through completed ones
   const listItemCompleted = (item) =>{
      setList(list.map(e => e.id === item ? {...e, isCompleted: !e.isCompleted} : e))
    }

    // Add new item to setList state and listing down there
    const addToDoList = (inputValue) =>{
      if (inputValue.title === '') {
        return false
      }
      setList([...list, {id: Date.now(), title: inputValue, isCompleted:false}])
      setInputValue("")
    }

    //clear completed ones
    const clearAll = () =>{
      setList(list.filter(item => !item.isCompleted))
    }


  return (
    <div className="container">
        <h1>To Do List</h1>

        <div className='row p-3 d-flex flex-column'>
          <div className='col-12'>
            <input value={inputValue.title} onChange={(e) => setInputValue(e.target.value)} placeholer="Enter your to do" />
          </div>
          <div className='col-12'>
            <button onClick={()=>addToDoList(inputValue)} className='button1'>Add İtem</button>
          </div>
        </div>
        <hr></hr>

        <div className='row'>
          <div className='col-12'>
              <ul>
                {list.map((item,index)=>(
                  <li onClick={()=>{listItemCompleted(item.id)}} key={index} className={item.isCompleted ? 'completed mt-2 mb-2' : 'mt-2 mb-2'}>{item.id} - {item.title}</li>
                ))}
              </ul>
          </div>
        </div>

        <div className='row'>
          <div className='col-12'>
             <button onClick={clearAll} className='button2'>Clear Completed</button>
          </div>
        </div>

    </div>
  );
}

export default App;
