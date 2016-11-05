const React             = require('react');
const { connect }       = require('react-redux');
const Todo              = require('./Todo').default;


const Todos = ({todos}) => {
    console.log({todos});
    return (
        <tr>
            {todos.map((todo) => {
                return (
                    <Todo key={todo.index}{...todo} />)
            })}
    
        </tr>
    )
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

const TodoList = connect(mapStateToProps)(Todos);


export default TodoList;
