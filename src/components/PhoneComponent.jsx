import phone from "../images/phone.png";
import { connect } from "react-redux";
import { buyPhone } from "../redux/phone/actionPhone";


const PhoneComponent = (props) => {

  console.log(props)
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponiibilité:
        <span id="count"> {props.phones}</span>
      </p>
      <button onClick={() => props.buyPhone()}>Acheter</button>
    </div>
  )
}

// fonction permettant de récuprérer le state afin de l'utiliser en tant que props
const mapStateToProps = (state) => {
  return {
    phones: state.phones
  }
}
// fonction permettant de dispatcher  
const mapDispatchToProps = (dispatch) => {
  return {
    buyPhone: () => dispatch(buyPhone())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PhoneComponent);
