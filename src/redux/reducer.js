
export const getDataReducer = (state = [], action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_DATA":
      return action.payload;
    default:
      return state;
  }
};

  
