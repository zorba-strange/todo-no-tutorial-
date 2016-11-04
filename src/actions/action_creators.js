const { 
    ADD_TODO,
    EDIT_TODO
}                           = require('./ACTION_TYPES'); 


export const addTodo = (task) => {
    return {
        action: ADD_TODO,
        task,
    }
};

export const editTodo = (index) => {
    return {
        action: EDIT_TODO,
        index
    }
}
