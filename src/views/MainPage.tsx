import { Box, useColorModeValue } from '@chakra-ui/react';
import { useState } from 'react';
import Confetti from 'react-confetti';
import { useWindowSize } from 'usehooks-ts';
import ConfettiHeart from '../components/ConfettiHeart';
import CustomHeader from '../components/CustomHeader';
import InfoCardStack from '../components/InfoCardStack';
import NavBar from '../components/NavBar';

function MainPage() {
  const bgGradient = useColorModeValue(
    'linear(to-b, gray.50 0%, gray.50 50%, gray.100 50%)',
    'linear(to-b, gray.600 0%, gray.600 50%, gray.700 50%)'
  );
  const { width, height } = useWindowSize();

  const [isConfettiVisible, setIsConfettiVisible] = useState(false);
  const [confettiCount, setConfettiCount] = useState(200);
  const confettiParty = () => {
    const durationInMs = 5000;
    setConfettiCount(200);
    setIsConfettiVisible(true);
    setTimeout(() => {
      setConfettiCount(0);
    }, durationInMs);
  };

  const partyIsOver = () => {
    setIsConfettiVisible(false);
  };

  return (
    <>
      <Box
        bgGradient={bgGradient}
        position='fixed'
        top={0}
        overflowY='scroll'
        height='full'
        width='full'
        minHeight='100vh'
      >
        <NavBar />
        <CustomHeader paddingTop={8} paddingBottom={36} />
        <InfoCardStack paddingBottom={8} marginTop={-24} />
      </Box>
      <Box position='fixed' bottom={16} right={16}>
        <ConfettiHeart showConfetti={confettiParty} />
      </Box>
      {isConfettiVisible && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={confettiCount}
          onConfettiComplete={partyIsOver}
        />
      )}
    </>
  );
}

export default MainPage;
