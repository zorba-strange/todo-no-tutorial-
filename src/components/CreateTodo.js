const React             = require('react');
const { connect }       = require('react-redux');
const { addTodo }       = require('../actions/action_creators');


const Create = ({dispatch}) => {
    let input;
    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            dispatch(addTodo(input.value));
            input.value = '';
        }}>
        <input type="text" ref={node => input = node} placeholder='Task' />
            <input type="submit" />
        </form>
    )
}

const CreateTodo = connect()(Create);


export default CreateTodo;
