import { ADD_CHARACTER, DELETE_CHARACTER, FILTER, ORDER } from "./types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CHARACTER:
      return {
        ...state,
        allCharacters: [...state.allCharacters, action.payload],
      };

    case DELETE_CHARACTER:
      return {
        ...state,
        allCharacters: state.allCharacters.filter((character) => {
          return character.id !== action.payload.id;
        }),
      };

    case FILTER:
      return {
        ...state,
        myFavorites: state.allCharacters.filter((pj) => {
          return pj.gender === action.payload;
        }),
      };

    case ORDER:
      if (action.payload === "desc") {
        return {
          ...state,
          allCharacters: state.allCharacters.sort((a, b) => b.id - a.id),
        };
      } else {
        return {
            ...state,
            allCharacters: state.allCharacters.sort((a, b) => a.id - b.id),
          };
      }

    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
