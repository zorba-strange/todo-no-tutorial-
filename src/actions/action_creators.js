const { 
    ADD_TODO,
    EDIT_TODO,
    SAVE_TODO
}                           = require('./ACTION_TYPES'); 


export const addTodo = (task) => {
    console.log('adding');
    return {
        task,
        type: ADD_TODO,
    }
}

export const editTodo = (index) => {
    console.log('action edit');
    return {
        type: EDIT_TODO,
        index
    }
}

export const saveTodo = (index, task) => {
    console.log('saving');
    return {
        type: SAVE_TODO,
        index,
        task
    }
}
