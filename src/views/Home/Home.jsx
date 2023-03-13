import { Suspense } from 'react';
import { useState, useEffect } from 'react';
import StatisticSection from 'components/StatisticSection/StatisticSection';
import GeneralSales from 'components/GeneralSales/GeneralSales';
import { getData } from 'services/vindevApi';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';

import { Container, Wrapper } from './Home.styled';
import { ModalWindow } from 'components/Modal/Modal';
import { ModalList } from 'components/ModalList/ModalList';

const Home = () => {
  const [statisticsData, setStatisticsData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getData()
      .then(setStatisticsData)
      .catch(err => console.log(err));
  }, []);

  if (!statisticsData) {
    return <h2>Loading...</h2>;
  }

  const onBackdropClick = e => {
    if (e.target.type === 'button') {
      setShowModal(prevState => !prevState);
      return;
    }
    if (!showModal) {
      return;
    }
    if (e.currentTarget !== e.target) {
      setShowModal(prevState => !prevState);
    }
  };

  return (
    <Suspense>
      <Container>
        <Sidebar />
        <Wrapper>
          <Header />
          <StatisticSection statisticsData={statisticsData} />
          <GeneralSales
            showModal={showModal}
            statisticsData={statisticsData}
            onBackdropClick={onBackdropClick}
          >
            {showModal && (
              <ModalWindow
                onCloseModal={() => setShowModal(prevState => !prevState)}
              >
                {<ModalList />}
              </ModalWindow>
            )}
          </GeneralSales>
        </Wrapper>
      </Container>
    </Suspense>
  );
};

export default Home;
