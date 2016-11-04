const React             = require('react');
const { connect }       = require('react-redux');


const Todos = ({todos}) => {
    return (
        <div>
            {todos.map((todo, index) => <div key={index}>{todo.task}</div>)}
        </div>
    )
}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        todos: state.todos
    }
}

const TodoList = connect(mapStateToProps)(Todos);


export default TodoList;
