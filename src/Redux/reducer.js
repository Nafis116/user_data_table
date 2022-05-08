const globalState = {
  dataArr: [],
  searchLine: ""
}

export default function reducer (state = globalState, action) {
  switch(action.type) {
    case 'SEARCH_DATA':
      console.log(state.dataArr)
      return {
        ...state,
        searchLine: action.payload.searchLine
      }
      

    default:
      return state;
  }
}