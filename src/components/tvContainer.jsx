import tv from "../images/tv.png";
// importation des hooks useSelector et useDispatch
// import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { buyTv } from "../redux/tv/actionTv";
import { useState } from "react";

const TvContainer = (props) => {

  // const tvs = useSelector((state) => {
  //     return state.television.tv
  // })

  // const dispatch = useDispatch()

  const [totalTv, setTotaltv] = useState(1)

  console.log(props)

  return (
    <div className="container">
      <img src={tv} alt="tv" />
      <p>
        Disponiibilité:
        <span id="count"> {props.tv}</span>
      </p>
      <div className="btnContainer">
        <button onClick={() => props.buyTv(totalTv)}>Acheter</button>
        <input type="number" value={totalTv} onChange={(event) => setTotaltv(event.target.value)}/>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      tv: state.television.tv
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyTv: (totalTv) => dispatch(buyTv(totalTv))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TvContainer);
