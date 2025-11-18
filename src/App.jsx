import PhoneComponent from "./components/PhoneComponent.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";

const App = () => {

  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneComponent />
      </div>
    </Provider>
  )
}

export default App
