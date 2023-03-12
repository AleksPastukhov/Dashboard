// import { Suspense } from 'react';
import { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
import StatisticSection from '../../components/StatisticSection/StatisticSection';
import { getData } from '../../services/vindevApi';

import {} from './Home.styled';

const Home = () => {
  const [statisticsData, setStatisticsData] = useState(null);

  useEffect(() => {
    getData()
      .then(setStatisticsData)
      .catch(err => console.log(err));
  }, []);

  if (!statisticsData) {
    return <h2>Loading...</h2>;
  }

  return <StatisticSection statisticsData={statisticsData} />;
};

export default Home;
