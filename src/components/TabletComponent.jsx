import tablet from "../images/tablet.png";
import { useSelector, useDispatch } from "react-redux";
import { buyTablet } from "../redux/phone/actionPhone";


const TabletComponent = () => {

  const selectedTablet = useSelector((state) => {
      return state.tablets
  })

  const dispatch = useDispatch()
  //console.log(props)
  return (
    <div className="container">
      <img src={tablet} alt="phone" />
      <p>
        Disponiibilité:
        <span id="count"> {selectedTablet}</span>
      </p>
      <button  onClick={() => dispatch(buyTablet())}>Acheter</button>
    </div>
  )
}

export default TabletComponent;
