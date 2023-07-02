import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/global/Header';
import News from './News';
import NewsView from './NewsView';

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
    </div>
  );
}

export default App
