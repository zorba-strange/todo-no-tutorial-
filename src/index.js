const React                 = require('react');
const { render }            = require('react-dom');
const { Provider }          = require('react-redux');
const { createStore }       = require('redux');
const todoApp               = require('./reducers/todo_reducers').default;
const App                   = require('./components/App').default;


const store = createStore(todoApp);


console.log('hello world');
render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
)
