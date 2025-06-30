import { BrowserRouter } from "react-router"                     
import { AppRouter } from "./router"        
import { store } from "./App"
import { Provider } from "react-redux"



export const CalendarApp = () => {        
return (    
  <Provider store={store}>
    <BrowserRouter>       
      <AppRouter/>        
    </BrowserRouter>        
  </Provider>    
    )       
}
