import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import { useNavigate } from 'react-router-dom';
import CompaniesSection from '../components/CompaniesSection';
import PaymentPlansSection from '../components/PaymentPlanSection';

const Home: React.FC = () => {

    const navigate = useNavigate();
    
  return (
    <div className='min-h-screen bg-gray-900'>
    <Navbar /> 
    <HeroSection />
    <CompaniesSection />
    <PaymentPlansSection />
    </div>
  );
}

export default Home;
