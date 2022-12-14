import { Card, CardBody, CardHeader, Divider, Heading, Text } from '@chakra-ui/react';

export interface CustomCardProps {
  title: string;
  content: string;
}

function CustomCard({ title, content }: CustomCardProps) {
  return (
    <Card width='xl' bg='white'>
      <CardHeader>
        <Heading as='h2' size='lg' fontWeight='thin'>
          {title}
        </Heading>
      </CardHeader>
      <Divider />
      <CardBody>
        <Text fontSize='large'> {content}</Text>
      </CardBody>
    </Card>
  );
}

export default CustomCard;
