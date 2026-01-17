const initialState = {
  messages: [],
  pageNumber: 0,
  pageSize: 10,
  totalElements: 0,
  totalPages: 0,
  lastPage: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MESSAGES":
      return {
        ...state,
        messages: action.payload,
        pageNumber: action.pageNumber,
        pageSize: action.pageSize,
        totalElements: action.totalElements,
        totalPages: action.totalPages,
        lastPage: action.lastPage,
      };
    default:
      return state;
  }
};

export default messageReducer;