import { Card, CardBody, CardHeader, Divider, Heading } from '@chakra-ui/react';

export interface CustomCardProps {
  title: string;
  content: string;
}

function CustomCard({ title, content }: CustomCardProps) {
  return (
    <Card width='xl' bg='white'>
      <CardHeader>
        <Heading as='h2' size='lg' fontWeight='hairline'>
          {title}
        </Heading>
      </CardHeader>
      <Divider />
      <CardBody>{content}</CardBody>
    </Card>
  );
}

export default CustomCard;
