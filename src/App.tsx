import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Services from './Service';
import Contact from './Contact';
import BookRequest from './BookRequest';
import EventFeedback from './EventFeedback';

function App() {
  return (
    <Router>
      <Navbar /> 
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-request" element={<BookRequest />} />
          <Route path="/event-feedback" element={<EventFeedback />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;