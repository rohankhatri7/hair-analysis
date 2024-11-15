import React, { useState, useRef, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaHome, FaCamera, FaChartLine, FaHistory, FaBars } from 'react-icons/fa';
import { useUser } from '@clerk/clerk-react'; 
import { logo, hair } from '../assets/index';
import styles from '../styles/DashboardStyles'; 

const Dashboard: React.FC = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const { user } = useUser();
    const [showSideBar, setShowSideBar] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    const toggleSideBar = () => setShowSideBar(!showSideBar);
    const toggleCard = () => setShowCard((prev) => !prev);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (cardRef.current && !cardRef.current.contains(event.target as Node)) {
          setShowCard(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const maskEmail = (email: string) => {
      const [username, domain] = email.split('@');
      const maskedUsername = username.length > 3 ? `${username.slice(0, 3)}**` : username;
      const maskedDomain = domain.split('.').map((part, index) => (index === 0 ? `${part[0]}**` : part)).join('.');
      return `${maskedUsername}@${maskedDomain}`;
    };

    return (
      <div className={styles.container}>
        {/* Mobile Toggle Button */}
        {!isHomePage && (
          <div className={styles.mobileToggle}>
            <span className={styles.mobileTitle}>Hair Analysis</span>
            <button onClick={toggleSideBar} className={styles.toggleButton}>
              <FaBars className={styles.toggleIcon} />
            </button>
          </div>
        )}

        {/* Sidebar */}
        {!isHomePage && (
          <aside className={`${styles.sidebar} ${showSideBar ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
            <div className={styles.logoContainer}>
              <img src={logo} alt="Logo" className={styles.logoImage} />
              <span className={styles.logoText}>Hair Analysis</span>
            </div>
          </aside>
        )}
      </div>
    );
};

export default Dashboard;
