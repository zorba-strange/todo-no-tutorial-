const React           = require('react');


const Todo = ({task}) => {
    return (
        <tr>
            <td>{task}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}


export default Todo;
