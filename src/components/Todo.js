const React           = require('react');
const EditTodo        = require('./EditTodo').default;
const { connect }     = require('react-redux');
const { saveTodo }    = require('../actions/action_creators');

const todo = ({task, isDone, editing, index, dispatch }) => {
    console.log('editing', editing);
    if( editing ){
        console.log(editing);
        let input;
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                dispatch(saveTodo(index, input.value));
                input.value = '';
            }}>
            <input type="text" ref={node => input = node} placeholder={task} />
            <input type="submit" value="Save" />
        </form>
        )

    } else {
        return (
            <tr>
                <td>{task}</td>
                <EditTodo index={index} editing={editing}/>
            <td><button>Delete</button></td>
        </tr>
        )
    }
}

const Todo = connect()(todo);

export default Todo;
