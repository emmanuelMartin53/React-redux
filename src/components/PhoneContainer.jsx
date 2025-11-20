import phone from "../images/phone.png";
import { useState } from "react";
import { connect } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";


const PhoneContainer = (props) => {


  const [totalPhone, setTotalPhone] = useState(1)
  console.log(totalPhone)

  console.log(props)
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponiibilité:
        <span id="count"> {props.phones}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => props.buyPhone(totalPhone)}>Acheter</button>
        <input type="number" value={totalPhone} onChange={(event) => setTotalPhone(event.target.value)}/>
      </div>
    </div>
  )
}

// fonction permettant de récuprérer le state afin de l'utiliser en tant que props
const mapStateToProps = (state, ownProps) => {
  console.log("Mon props", ownProps)
  return {
    phones: state.phone.phones
  }
}
// fonction permettant de dispatcher
const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: (totalPhone) => dispatch(buyPhone(totalPhone))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneContainer);
