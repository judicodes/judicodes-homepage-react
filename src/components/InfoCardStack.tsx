import { ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import CustomCard, { CustomCardProps } from './CustomCard';

function InfoCardStack({ ...rest }) {
  const fontSize = 'large';
  const cards: CustomCardProps[] = [
    {
      title: "Hi, I'm Judith.",
      content: (
        <Text fontSize={fontSize}>
          I&apos;m a full-stack developer based in Berlin and I like to build things on the
          internet.
        </Text>
      )
    },
    {
      title: 'Tech Stack',
      content: (
        <Text fontSize={fontSize}>
          HTML - CSS - JavaScript/TypeScript - React - Vue.js - Angular - Node.js - Docker - AWS
        </Text>
      )
    },
    {
      title: 'Things I like',
      content: (
        <Text fontSize={fontSize}>
          Books - Motorcycles - The Ocean - Linux - Croissants - Hummingbirds - Keeping things neat
          and simple
        </Text>
      )
    },
    {
      title: 'Some book recommendations',
      content: (
        <Text fontSize={fontSize} as='span'>
          <UnorderedList>
            <ListItem> So Good They Can&apos;t Ignore You (Cal Newport) </ListItem>
            <ListItem> Circe (Madeline Miller) </ListItem>
            <ListItem> Clean Code (Robert Martin) </ListItem>
            <ListItem> Almost anything by Haruki Murakami </ListItem>
            <ListItem> Almost anything by T.C. Boyle </ListItem>
          </UnorderedList>
        </Text>
      )
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
