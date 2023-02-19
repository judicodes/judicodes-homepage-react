import { IconButton, useColorModeValue } from '@chakra-ui/react';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface ConfettiHeartProps {
  showConfetti: () => void;
}

function ConfettiHeart({ showConfetti }: ConfettiHeartProps) {
  const color = useColorModeValue('customBlue.700', 'customPink.200');
  const [heartBeat, setHeartBeat] = useState(false);
  const heartIcon = <FontAwesomeIcon icon={faHeart} beat={heartBeat} size='4x' />;
  const party = () => {
    showConfetti();
    setHeartBeat(true);
    setTimeout(() => {
      setHeartBeat(false);
    }, 5000);
  };

  return (
    <>
      <IconButton
        aria-label='Click for a surprise'
        icon={heartIcon}
        color={color}
        variant='unstyled'
        onClick={party}
      />
    </>
  );
}

export default ConfettiHeart;
