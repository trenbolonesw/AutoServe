
import './App.css';
import Layout from './components/layout/Layout';
import NotFound from './components/errorpages/404';
import Home from './components/landingPage/Home';
import CreateAppointment from './components/ClientService/CreateAppointments';
import DashBoard from './components/Admin/Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
         <Route index element={<Home />} />
         <Route path='/Dashboard' element={<DashBoard/>}/>
         <Route path='/CreateAppointment' element={<CreateAppointment/>}/>
        <Route path='*' element={<NotFound/>}/>

        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
