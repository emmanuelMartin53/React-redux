import PhoneContainer from "./components/PhoneContainer.jsx";
import TabletContainer from "./components/TabletContainer.jsx";
import TvContainer from "./components/tvContainer.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";

const App = () => {

  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneContainer />
        <TabletContainer />
        <TvContainer />
      </div>
    </Provider>
  )
}

export default App
