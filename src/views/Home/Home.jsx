import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import StatisticSection from '../../components/StatisticSection/StatisticSection';
import GeneralSales from '../../components/GeneralSales/GeneralSales';
import { getData } from '../../services/vindevApi';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Header } from '../../components/Header/Header';

import { Container, Wrapper } from './Home.styled';

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

  return (
    <Suspense>
      <Container>
        <Sidebar />
        <Wrapper>
          <Header />
          <StatisticSection statisticsData={statisticsData} />
          <GeneralSales statisticsData={statisticsData} />
        </Wrapper>
      </Container>
    </Suspense>
  );
};

export default Home;
