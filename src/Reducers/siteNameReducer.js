// const initialState = {
//   siteSelected: "hackernews",
// };

export const siteNameReducer = () => {
  const reducer = (state, action) => {
    console.log(action);

    switch (action.type) {
      case "UPDATE_INPUT":
        return {
          siteSelected: action.data,
        };

      default:
        return action.data;
    }
  };
  return reducer;
};
