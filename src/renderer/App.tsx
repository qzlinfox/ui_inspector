import './App.css';
import LayoutApp from '@/renderer/layout/LayoutApp';
import { BrowserRouter } from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <LayoutApp/>
    </BrowserRouter>
  );
}
