/*eslint no-sequences: "error"*/

const globalState = {
  dataArr: [],
  searchLine: ""
}

export default function reducer (state = globalState, action) {
  switch(action.type) {
    case 'SEARCH_DATA':
      return {
        ...state,
        searchLine: action.payload.searchLine
      };
    
      case 'USERS_DATA':
        return {
          ...state,
          dataArr: action.payload.dataArr
        }

    default:
      return state;
  }
}