import { BUY_PHONE, BUY_TABLET } from "./type";


 export const buyPhone = (totalPhone) => {
  return {
    type: BUY_PHONE,
    payload: totalPhone
  }
}


export const buyTablet = (totalTablet) => {
  return {
    type: BUY_TABLET,
    payload: totalTablet
  }
}
