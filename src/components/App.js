const React             = require('react');
const TodoList          = require('./TodoList').default;
const Header            = require('./Header').default;
const CreateTodo        = require('./CreateTodo').default;


const App = () => {
    return (
        <div>
            <CreateTodo />
            <table>
                <tbody>
                    <Header />
                    <TodoList />
                </tbody>
            </table>
        </div>
    )
};


export default App;
