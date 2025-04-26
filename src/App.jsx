import { Routes, Route } from 'react-router-dom';

import LogIn from './Pages/logInPage';
import SignUp from './Pages/signUpPage';
import Home from './Pages/homePage';
import CategoryPage from './Pages/CategoryPage';
import DetailedPlantPage from './Pages/DetailedPlantPage';
import AddPlantForm from './Pages/AddPlantForm';
import UpdatePlantForm from './Pages/UpdatePlantForm';
import NotFound from './Pages/NotFound';
import SearchPlantsPage from './Pages/SearchPlantsPage'
import PlantSuggestionPage from './Pages/PlantSuggestionPage';
import AdminPanel from './Pages/AdminPanel';
import SupervisorPanel from './Pages/SupervisorPanel';
import UpdateUserForm from './Pages/UpdateUserForm';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/category/:category" element={<CategoryPage/>}/>
          <Route path="/home/category/:category/:id" element={<DetailedPlantPage/>}/>
          <Route path="/plant/addplant" element={<AddPlantForm />} />
          <Route path="/plant/update/:id" element={<UpdatePlantForm />} />
          <Route path="/plant/search" element={<SearchPlantsPage />} />
          <Route path="/plant/suggestions" element={<PlantSuggestionPage />} />
          <Route path="/home/admin-panel" element={<AdminPanel />} />
          <Route path="/home/supervisor-panel" element={<SupervisorPanel />} />
          <Route path="/user/updateUser/:id" element={<UpdateUserForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
