import { Routes, Route } from 'react-router-dom';

import LogIn from './Pages/logInPage';
import SignUp from './Pages/signUpPage.jsx';
import Home from './Pages/homePage';
import CategoryPage from './Pages/CategoryPage';
import DetailedPlantPage from './Pages/DetailedPlantPage';
import AddPlantForm from './Pages/AddPlantForm';
import UpdatePlantForm from './Pages/UpdatePlantForm';
import NotFound from './Pages/NotFound';
import SearchPlantsPage from './Pages/SearchPlantsPage'
import PlantSuggestionPage from './Pages/PlantSuggestionPage';
import GardenPage from './Pages/GardenPage.jsx';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        <Routes>
          <Route path="/login" element={<LogIn />} />
          <Route path="/" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/category/:category" element={<CategoryPage/>}/>
          <Route path="/home/category/:category/:id" element={<DetailedPlantPage/>}/>
          <Route path="/home/my-garden" element={<GardenPage/>}/>
          <Route path="/plant/addplant" element={<AddPlantForm />} />
          <Route path="/plant/update/:id" element={<UpdatePlantForm />} />
          <Route path="/plant/search" element={<SearchPlantsPage />} />
          <Route path="/plant/suggestions" element={<PlantSuggestionPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      
    </div>
  );
}

export default App;
