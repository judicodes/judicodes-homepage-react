import { Card, CardBody, CardHeader, Divider, Heading, useColorModeValue } from '@chakra-ui/react';

export interface CustomCardProps {
  title: string;
  content: React.ReactElement;
}

function CustomCard({ title, content }: CustomCardProps) {
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Card
      width={{ base: '90%', md: '70%', lg: '50%', xl: '30%' }}
      bg={bgColor}
      borderRadius='3xl'
      variant='elevated'
    >
      <CardHeader>
        <Heading as='h2' size='lg' fontWeight='thin'>
          {title}
        </Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <> {content}</>
      </CardBody>
    </Card>
  );
}

export default CustomCard;
