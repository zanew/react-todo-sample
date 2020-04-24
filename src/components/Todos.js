import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos(props) {    
    return (
        props.todos.map((todo) => (
            // these are props that are getting passed into your subcomponentne
            <TodoItem key={todo.id}
                      todo={todo}
                      markComplete={props.markComplete}
                      delTodo={props.delTodo}/>
        ))
  );
}

// PropTypes
Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

export default Todos;
