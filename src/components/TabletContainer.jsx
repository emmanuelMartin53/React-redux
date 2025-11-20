import tablet from "../images/tablet.png";
// importation des hooks useSelector et useDispatch
import { useSelector, useDispatch } from "react-redux";
import { buyTablet } from "../redux/phone/actionPhone";
import { useState } from "react";


const TabletContainer = () => {


   const [totalTablet, setTotalTablet] = useState(1)
    console.log(totalTablet)

  const tablets = useSelector((state) => {
    console.log(state)
      return state.phone.tablets
  })

  const dispatch = useDispatch()
  //console.log(props)
  return (
    <div className="container">
      <img src={tablet} alt="phone" />
      <p>
        Disponiibilité:
        <span id="count"> {tablets}</span>
      </p>
      <div className="btnContainer">
        <button  onClick={() => dispatch(buyTablet(Number(totalTablet)))}>Acheter</button>
        <input type="number" value={totalTablet} onChange={(event) => setTotalTablet(event.target.value)}/>
      </div>
    </div>
  )
}

export default TabletContainer;
