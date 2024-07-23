import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DeviceManager from '@/renderer/device/DeviceManager';
import ConnectManager from '@/renderer/connect/ConnectManager';

export default function Main() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path="/" index element={<DeviceManager />} />
        <Route path="/connect" element={<ConnectManager />} />
      </Routes>
    // </BrowserRouter>
  )
}
