import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FixedCTA from './components/FixedCTA'
import ScrollProgress from './components/ScrollProgress'
import HomePage from './pages/HomePage'
import OperationPage from './pages/OperationPage'
import ShintikuPage from './pages/ShintikuPage'
import TrailerHousePage from './pages/TrailerHousePage'

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <ScrollProgress />
      <Header />
      <main className="flex-grow-1" style={{ marginTop: '76px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/operation" element={<OperationPage />} />
          <Route path="/shintiku" element={<ShintikuPage />} />
          <Route path="/trailer-house" element={<TrailerHousePage />} />
        </Routes>
      </main>
      <Footer />
      <FixedCTA />
    </div>
  )
}

export default App
