import { Card, CardBody, CardHeader, Divider, Heading, useColorModeValue } from '@chakra-ui/react';

export interface CustomCardProps {
  title: string;
  content: React.ReactElement;
}

function CustomCard({ title, content }: CustomCardProps) {
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Card width='xl' bg={bgColor} borderRadius='3xl' variant='elevated'>
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
