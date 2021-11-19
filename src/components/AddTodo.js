import { useState } from "react";
import { addTodo } from "../redux/actions.js";
import { connect } from "react-redux";
const AddTodo = (props) =>{
    const [input, setInput] = useState("");
    const updateInput = (inputValue) =>{
        setInput(inputValue)
    }
    const handleAddTodo = (ev)=>{
      console.log(ev.target.value);
        props.addTodo(ev.target.value)
        setInput("")
    }
    return (
          <div>
            <input
              onChange={e => updateInput(e.target.value)}
              value={input}
            />
            <button className="add-todo" onClick={handleAddTodo}>
              Add Todo
            </button>
          </div>
    );    
}
export default connect(
  null,
  { addTodo }
)(AddTodo);