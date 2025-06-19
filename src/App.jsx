import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Toaster } from "react-hot-toast"
import Layout from "./components/Layout/Layout"
import Dashboard from "./components/Dashboard/Dashboard"
import ImportHistory from "./components/ImportHistory/ImportHistory"
import Jobs from "./components/Jobs/Jobs"
import { SocketProvider } from "./contexts/SocketContext"

function App() {
  return (
    <SocketProvider>
      <Router>
        <div className="App">
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/imports" element={<ImportHistory />} />
              <Route path="/jobs" element={<Jobs />} />
            </Routes>
          </Layout>
          <Toaster position="top-right" />
        </div>
      </Router>
    </SocketProvider>
  )
}

export default App
