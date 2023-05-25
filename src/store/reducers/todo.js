import { ADD_TODO, TOGGLE_DELETE_TODO, TOGGLE_TODO } from "../actions/types/todo";

const initialState = {
  allIds: [],
  byIds: {},
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;

      return {
        ...state,

        allIds: [...state.allIds, id],
        
        byIds: {
          ...state.byIds,

          [id]: {
            content,
            complete: false,
          },
        },
      };
    }

    case TOGGLE_TODO: {
      const {id} = action.payload;

      const targetTodo = state.byIds[id];

      return {
        ...state,

        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };

    }
    case TOGGLE_DELETE_TODO: {
      const {id} = action.payload;

      const filteredTodo = [...state.allIds].filter((todoItemId) => {
        return todoItemId !== id
      })
      return {
        ...state,

        allIds: filteredTodo,

        byIds: {
          ...state.byIds
        }
      }

    }

    default:
      return state;
  }
}
