import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Header from './components/global/Header';
import News from './News';
import NewsView from './NewsView';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/:newsId" element={<NewsView />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App
