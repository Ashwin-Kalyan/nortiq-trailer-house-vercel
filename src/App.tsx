import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import FixedCTA from './components/FixedCTA'
import HomePage from './pages/HomePage'
import OperationPage from './pages/OperationPage'
import ShintikuPage from './pages/ShintikuPage'
import TrailerHousePage from './pages/TrailerHousePage'

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
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

