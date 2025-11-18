import phone from "../images/phone.png";


const PhoneComponent = () => {
  return (
    <div className="container">
      <img src={phone} alt="phone" />
      <p>
        Disponiibilité:
        <span id="count"></span>
      </p>
      <button>Acheter</button>
    </div>
  )
}
export default PhoneComponent;
