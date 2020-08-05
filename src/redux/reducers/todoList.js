import { ADD_TODO, TOGGLE_TODO } from "../actionTypes";

const defaultState = [];

const todoList = (state = defaultState, action) => {    
    switch (action.type) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            let obj = {
                'id': id,
                'content': content,
                'completed': false
            };
            state.push(obj);
            return [...state];
        }
        
        case TOGGLE_TODO: {          
            const { id } = action.payload;
            const currentTodo = state[id];
            currentTodo.completed = true;
            return [...state];            
        }

        default:
            return state;
    }
};
export default todoList;