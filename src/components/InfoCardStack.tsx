import { VStack } from '@chakra-ui/react';
import CustomCard, { CustomCardProps } from './CustomCard';

function InfoCardStack({ ...rest }) {
  const cards: CustomCardProps[] = [
    {
      title: "Hi, I'm Judith.",
      content: "I'm a full-stack developer based in Berlin."
    },
    {
      title: 'Tech Stack',
      content:
        'HTML - CSS - JavaScript/TypeScript - React - Vue.js - Angular - Node.js - Golang - Docker - AWS'
    },
    {
      title: 'Currently Learning',
      content: 'Kubernetes - Three.js - Patience'
    },
    {
      title: 'Things I like',
      content:
        'Books - Motorcycles - The Ocean - Linux - Croissants - Hummingbirds - Keeping things neat and simple'
    }
  ];

  return (
    <VStack spacing={8} {...rest}>
      {cards.map((card, index) => (
        <CustomCard key={index} title={card.title} content={card.content} />
      ))}
    </VStack>
  );
}

export default InfoCardStack;
