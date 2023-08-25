import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { legacy_createStore as createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css'
import {App} from "./App.jsx";

const initialState = {
  name: 'Bogdan',
  age: '16',
}

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_DATA':
      return {...initialState, name: action.name, age: action.age}
    default:
      return state
  }
}

const store = createStore(formReducer)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
