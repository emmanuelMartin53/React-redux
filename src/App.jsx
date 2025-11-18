import PhoneComponent from "./components/PhoneComponent.jsx";
import TabletComponent from "./components/TabletComponent.jsx";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";

const App = () => {

  return (
    <Provider store={store}>
      <div className="section-one">
        <PhoneComponent />
        <TabletComponent />
      </div>
    </Provider>
  )
}

export default App
