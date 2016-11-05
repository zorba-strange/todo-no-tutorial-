const React           = require('react');
const { connect }     = require('react-redux');
const { editTodo }    = require('../actions/action_creators');

const editTodos = ({index, editing, dispatch}) => {
    console.log('edit index', index);
    console.log('edit index', editing);
    return (
        <td><button onClick={(e) => {
            console.log('edit');
            e.preventDefault();
            dispatch(editTodo(index));
        }}>Edit</button></td>
    )
}

const EditTodo = connect()(editTodos);


export default EditTodo;
