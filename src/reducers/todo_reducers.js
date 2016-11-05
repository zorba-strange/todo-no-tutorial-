const { combineReducers }       = require('redux');
const { 
    ADD_TODO,
    EDIT_TODO,
    SAVE_TODO
}                               = require('../actions/ACTION_TYPES');

const uid = () => Math.random().toString(34).slice(2);

const seed = {
    todos: [
        {
            task: 'Seed Todo',
            index: uid(),
            isDone: false,
            editing: false
        }
    ]
};

const todoApp = (state=seed, action) => {
    switch( action.type ){

        case ADD_TODO:
            return Object.assign({}, state, {
                todos: [
                    ...state.todos,
                    {
                        task: action.task,
                        isDone: false,
                        index: uid(), 
                        editing: false
                    }
                ]
            });

        case EDIT_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if( todo.index === action.index) {
                        return Object.assign({}, todo, {
                            editing: !todo.editing
                        })
                    }
                    return todo;
                })})

        case SAVE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo) => {
                    if( todo.index === action.index) {
                        console.log('found todo');
                        return Object.assign({}, todo, {
                            task: action.task,
                            editing: !todo.editing
                        })
                    }
                    return todo;
                })})

        default:
            return state;
    }
}




export default todoApp;
