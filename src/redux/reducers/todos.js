import { ADD_TODO, TOGGLE_TODO } from "../ActionTypes.js";
const initialState = {
    allIds: [],
    byIds: {}
};
const todo_actions = (state = initialState, action) => {
    alert(JSON.stringify(action.payload))
    switch (action) {
        case ADD_TODO: {
            const { id, content } = action.payload;
            return {
                ...state,
                allIds: [...state.allIds, id],
                byIds: {
                  ...state.byIds,
                  [id]: {
                    content,
                    completed: false
                  }
                }
            };
        }
        case TOGGLE_TODO: {
            const { id } = action.payload;
            return {
                ...state,
                byIds: {
                ...state.byIds,
                [id]: {
                    ...state.byIds[id],
                    completed: !state.byIds[id].completed
                }
                }
            };
        }
        default:
        return state;
    }
}

  export default  todo_actions; 
  