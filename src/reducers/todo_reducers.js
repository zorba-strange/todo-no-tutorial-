const { combineReducers }       = require('redux');
const { 
    ADD_TODO,
    EDIT_TODO
}                               = require('../actions/ACTION_TYPES');


const seed = {
    todos: [
        {
            task: 'Seed Todo',
            isDone: false
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
                        isDone: false
                    }
                ]
            });

        case EDIT_TODO:
            return (
                console.log("edit this todo")
            );

        default:
            return state;
    }
}




export default todoApp;
