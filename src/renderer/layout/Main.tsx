import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeviceManager from '@/renderer/device/DeviceManager';

export default function Main() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" index element={<DeviceManager />} />
      </Routes>
    // </BrowserRouter>
  )
}
