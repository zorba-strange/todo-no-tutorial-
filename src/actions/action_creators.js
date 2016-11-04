const { 
    ADD_TODO,
    EDIT_TODO
}                           = require('./ACTION_TYPES'); 


export const addTodo = (task) => {
    console.log('adding');
    return {
        task,
        type: ADD_TODO,
    }
}

export const editTodo = (index) => {
    return {
        type: EDIT_TODO,
        index
    }
}
