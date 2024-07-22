import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import LayoutApp from '@/renderer/layout/LayoutApp';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LayoutApp />} />
      </Routes>
    </Router>
  );
}
