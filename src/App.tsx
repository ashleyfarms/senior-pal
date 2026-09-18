import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Cities } from './pages/Cities';
import { CityPage } from './pages/CityPage';
import { Home } from './pages/Home';
import { Privacy } from './pages/Privacy';
import { Suggest } from './pages/Suggest';
import { Terms } from './pages/Terms';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cities" element={<Cities />} />
          <Route path="city/:cityId" element={<CityPage />} />
          <Route path="suggest" element={<Suggest />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
