const { act } = require("react-dom/test-utils");

const defaultState = [];
const todoList = (state = defaultState, action)=>{
    switch(action.type){
        default: 
        return state;
    }
};
export default todoList;