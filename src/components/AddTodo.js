import React, { useState } from 'react';
import PropTypes from 'prop-types';

function AddTodo(props) {
    const [state, setState] = useState({ title: ''});

    // generalized for any component that has a name property
    let onChange = (e) => setState({ [e.target.name]: e.target.value });

    let onSubmit = (e) => {
        // prevents event propagation (js trick)
        e.preventDefault();
        props.addTodo(state.title);
        setState({ title: '' });
    }
    
    return (
        <form onSubmit={onSubmit} style={{ display: 'flex' }}>
          <input type="text"
                 name="title"
                 style={{ flex: '10', padding: '5px' }}
                 placeholder="Add Todo..."
                 value={state.title}
                 onChange={onChange}
          />
          <input type="submit"
                 value="Submit"
                 className="btn"
                 style={{ flex: '1' }}
          />
        </form>
    );
}

// PropTypes
AddTodo.propTypes = {
    addTodo: PropTypes.func.isRequired
};

export default AddTodo;
