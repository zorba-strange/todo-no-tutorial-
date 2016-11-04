const { ADD_TODO }                = require('./ACTION_TYPES'); 


export addTodo = (task) => {
    return {
        action: ADD_TODO,
        task,
    }
};
