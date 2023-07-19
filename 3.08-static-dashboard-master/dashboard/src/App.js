import './App.css';
import Sidebar from './Sidebar';
import Reviews from './Reviews'
import AverageRating from './AverageRating';
import WebsiteVisitors from './WebsiteVisitors';
import SentimentAnalysis from './SentimentAnalysis';

function App() {
  return (
    <>
      <Sidebar />
      <Reviews />
      <AverageRating />
      <SentimentAnalysis />
      <WebsiteVisitors />
    </>
  );
}

export default App;
