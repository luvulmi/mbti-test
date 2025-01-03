import { useNavigate } from 'react-router-dom';
import '../assets/css/style.css';


const Home = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/qna");
  }

  return (
    <div className="container">
      <button className="start-btn" onClick={handleStartTest}>시작하기</button>
    </div>
  );
}

export default Home;
