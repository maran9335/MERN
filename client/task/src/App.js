
import UserDashboard from './Components/UserDashboard';
import './App.css';
import ProfileEdit from './Components/ProfileEdit';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path='/pro' element={<ProfileEdit/>}></Route>
</Routes>
</BrowserRouter>

    <UserDashboard/>
    {/* <ProfileEdit/> */}
    </div>
  );
}

export default App;
