import {Route, Routes} from "react-router-dom";
import {MainPage} from "./pages/MainPage.jsx";
import {OutputPage} from "./pages/OutputPage.jsx";
import {Layout} from "./components/Layout.jsx";

export const App = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route index element={<MainPage/>}/>
        <Route path={'/output'} element={<OutputPage/>}/>
      </Route>
    </Routes>
  )
}
