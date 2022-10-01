// export const getDataReducer = (
//   listOfUsers = { data: null, status: "idle", error: null },
//   action
// ) => {
//   return action.type == "GET_DATA" ? action.payload : listOfUsers;
// };

// export const getDataReducer = ( action,
// ) => {
// console.log(action);
//     switch (action.type) {
//       case "GET_DATA":
//         return action.payload
  
  
//       default:
//         return ;
//     }
//   };
export const getDataReducer = (state = [], action) => {
  console.log("action", action);
  switch (action.type) {
    case "GET_DATA":
      return action.payload;
    default:
      return state;
  }
};

  