import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Heading,
  Text,
  useColorModeValue
} from '@chakra-ui/react';

export interface CustomCardProps {
  title: string;
  content: string;
}

function CustomCard({ title, content }: CustomCardProps) {
  const bgColor = useColorModeValue('white', 'gray.900');

  return (
    <Card width='xl' bg={bgColor} borderRadius='3xl'>
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
