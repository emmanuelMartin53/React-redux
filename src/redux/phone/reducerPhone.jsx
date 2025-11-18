import { BUY_PHONE, BUY_TABLET } from "./type";



const initialStatePhone = {
  phones: 5,
  tablets: 10

}


const phoneReducer = (state = initialStatePhone, action) => {
    switch (action.type) {
      case BUY_PHONE:
        return {
          ...state,
          phones: state.phones - 1
        }
      case BUY_TABLET:
        return {
          ...state,
          tablets: state.tablets - 1
        }
      default:
        return state
    }
}

export default phoneReducer;
