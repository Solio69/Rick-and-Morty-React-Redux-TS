import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/Layout';
import CharacterList from '../pages/CharacterList'
import CharacterDetails from '../pages/CharacterDetails'
import Filters from '../pages/Filters'
import About from '../pages/About';



const App: FC = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route path="/characters" element={<CharacterList />} />
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
