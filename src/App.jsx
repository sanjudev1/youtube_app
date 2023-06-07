
import  './App.css'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Maincontainer from './components/Maincontainer'
import WatchPlay from './components/WatchPlay'

const RouterPath =createBrowserRouter([{path:"/",element:<Body/>,children:[{path:"/",element:<Maincontainer/>},{path:"watch",element:<WatchPlay/>}]}])

function App() {
  return (
    <Provider store={store}>
    <div>
     
      {/*
      Header
         -hamberger menu
         -youtube logo 
         -searchbar
         -profile logo
      Body
        -side bar
           -subscriptions
           -shorts
        -video container
           -video buttons
           -card container
      new video container
            -video player
            -comments
            -subscriptions
           
      */}
      
      <Header/>
      <RouterProvider router={RouterPath}/>
    </div>
    </Provider>
  )
}

export default App
