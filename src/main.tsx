import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tailwind.css'


import App from './App.tsx'
import Home from './pages/Home.tsx';
import Meal from './pages/Meal.tsx';
import MealsByArea from './pages/MealsByArea.tsx';
import MealsByCategory from './pages/MealsByCategory.tsx';
import MealsByIngredient from './pages/MealsByIngredient.tsx';
import MealsByLetter from './pages/MealsByLetter.tsx';
import Search from './pages/Search.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
            <Route path='/' element={<Home />} />
            <Route path='search' element={<Search />}/>
            <Route path='meal/:id' element={<Meal />}/>
            <Route path='by_letter' element={<MealsByLetter />}/>
            <Route path='by_ingredient' element={<MealsByIngredient />}/>
            <Route path='by_category' element={<MealsByCategory />}/>
            <Route path='by_area' element={<MealsByArea />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
