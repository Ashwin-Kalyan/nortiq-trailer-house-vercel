import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopPage from './pages/TopPage'
import OperationPage from './pages/OperationPage'
import ShintikuPage from './pages/ShintikuPage'
import TrailerPage from './pages/TrailerPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/operation" element={<OperationPage />} />
        <Route path="/shintiku" element={<ShintikuPage />} />
        <Route path="/trailer" element={<TrailerPage />} />
      </Routes>
    </Router>
  )
}

export default App