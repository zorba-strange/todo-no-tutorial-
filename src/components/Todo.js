const React           = require('react');
const EditTodo        = require('./EditTodo').default;
const { connect }     = require('react-redux');
const { bindActionCreators } = require('redux');
const { saveTodo }    = require('../actions/action_creators');
const { deleteTodo }    = require('../actions/action_creators');




/* example action creator. */
const setValue = (value) => {
    console.log(value, 'inputing value');
    return {
        type: 'INPUT_VALUE',
        value, 
    }
}




const todo = ({
    task, 
    isDone, 
    editing, 
    index, 
    dispatch, 
    /* redux will pass in props also */
    value,
    deleteTodo,
    saveTodo,

}) => {
    console.log(saveTodo, deleteTodo)
    console.log(dispatch, 'dispatch');
    // console.log('editing', editing);

    /* 
        try to maintain indendation and keep props on separate lines.  
    */
    if( editing ){
        // console.log(editing);
        let input;
        console.log(input, value, input && input.value);
        return (
            <form 
                onSubmit={(e) => {
                    e.preventDefault();
                    /* old way: read from dom */
                    dispatch(saveTodo(index, input.value));
                    /* new way: use state passed as prop from redux */
                    dispatch(saveTodo(index, value));

                    /* old way: manipulate dom directly */
                    input.value = '';
                    /* new way: dispatch an action */
                    dispatch(setValue('')); /* using dispatch as a prop */
                    setValue(''); /* or using mapStateToProps and bindActionCreators */
                }}>
                <input 
                    type="text" 
                    /*  you don't need to use a ref here. */
                    ref={node => input = node} 
                    onChange={(event) => dispatch(setValue(event.target.value))}
                    /* the value of the form input is a function of the state in memory. */
                    value={value}
                    placeholder={task} />
                <input 
                    type="submit" 
                    value="Save" />
            </form>
        )

    } else {
        return (
            <tr>
                <td>
                    {task}
                </td>
                <EditTodo 
                    index={index} 
                    editing={editing}/>
                <td>
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            dispatch(deleteTodo(index));
                        }}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
};


const mapStateToProps = (state) => {
    return {
        /* look up the form state from here */
        value: state.getIn(['path', 'to', 'form', 'state'], 'default value'),
        // value: 'soemthing', /* or use a default value */
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        /* bind action creators can do them one at a time, or a bunch at once */
        setValue: bindActionCreators(setValue, dispatch),
        deleteTodo: bindActionCreators(deleteTodo, dispatch),
        saveTodo: bindActionCreators(saveTodo, dispatch),
        /* all at once  */
        allActionCreators: bindActionCreators({
            setValue,
            deleteTodo,
            saveTodo,
        }, dispatch),

        /* you could do it this way */
        setValue: (...args) => dispatch(setValue(...args)),
        deleteTodo: (...args) => dispatch(deleteTodo(...args)),
        saveTodo: (...args) => dispatch(saveTodo(...args)),
    };
};




/* dispatch is not passed as a prop */
const Todo = connect(mapStateToProps, mapDispatchToProps)(todo);

/* dispatch is passed as a prop.  */
const Todo = connect(mapStateToProps)(todo);

export default Todo;
