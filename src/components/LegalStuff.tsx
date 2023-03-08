import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  ListItem,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  UnorderedList,
  useDisclosure
} from '@chakra-ui/react';

function LegalStuff() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} variant='ghost' color='gray.500'>
        Legal Notice & Privacy Policy
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxWidth={{ base: '90%', md: '70%', lg: '50%', xl: '40%' }}>
          <ModalHeader>Legal Notice & Privacy Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      Legal Notice (German Law)
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>According to § 5 TMG </Text>
                  <Text fontWeight='bolder'>Contact:</Text>
                  <Text mb={4}>
                    Judith Böhlert <br />
                    Nazarethkirchstr. 43 <br />
                    13347 Berlin <br />
                    Germany <br />
                    Phone: +49 (0)176 84879910 <br />
                    Email: judith.boehlert@mailbox.org
                    <br />
                    Germany
                  </Text>
                  <Text fontWeight='bolder'>
                    Responsible for the contents according to § 55 Abs. 2 RStV:
                  </Text>
                  <Text mb={4}>
                    Judith Böhlert <br />
                    Nazarethkirchstr.43 <br />
                    13347 Berlin <br />
                    Germany
                  </Text>
                  <Text fontSize='smaller'>
                    Generated with Impressum Generator der Kanzlei Hasselbach, Rechtsanwälte für
                    Arbeitsrecht und Familienrecht
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      Privacy Policy
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text>
                    At judicodes, accessible from judicodes.com, one of our main priorities is the
                    privacy of our visitors. This Privacy Policy document contains types of
                    information that is collected and recorded by judicodes and how we use it.
                  </Text>
                  <Text>
                    If you have additional questions or require more information about our Privacy
                    Policy, do not hesitate to contact us. Our Privacy Policy was generated with the
                    help of
                    <a href='https://www.gdprprivacynotice.com/' target='_blank' rel='noreferrer'>
                      GDPR Privacy Policy Generator from GDPRPrivacyNotice.com
                    </a>
                  </Text>
                  <Text fontWeight='bolder' mt={4}>
                    General Data Protection Regulation (GDPR)
                  </Text>
                  <Text>We are a Data Controller of your information.</Text>
                  <Text>
                    judicodes legal basis for collecting and using the personal information
                    described in this Privacy Policy depends on the Personal Information we collect
                    and the specific context in which we collect the information:
                  </Text>
                  <UnorderedList>
                    <ListItem>judicodes needs to perform a contract with you</ListItem>
                    <ListItem>You have given judicodes permission to do so</ListItem>
                    <ListItem>
                      Processing your personal information is in judicodes legitimate interests
                    </ListItem>
                    <ListItem>judicodes needs to comply with the law</ListItem>
                  </UnorderedList>
                  <Text>
                    judicodes will retain your personal information only for as long as is necessary
                    for the purposes set out in this Privacy Policy. We will retain and use your
                    information to the extent necessary to comply with our legal obligations,
                    resolve disputes, and enforce our policies.
                  </Text>
                  <Text>
                    If you are a resident of the European Economic Area (EEA), you have certain data
                    protection rights. If you wish to be informed what Personal Information we hold
                    about you and if you want it to be removed from our systems, please contact us.
                  </Text>
                  <Text>
                    In certain circumstances, you have the following data protection rights:
                  </Text>
                  <UnorderedList>
                    <ListItem>
                      The right to access, update or to delete the information we have on you.
                    </ListItem>
                    <ListItem>The right of rectification.</ListItem>
                    <ListItem>The right to object.</ListItem>
                    <ListItem>The right of restriction.</ListItem>
                    <ListItem>The right to data portability</ListItem>
                    <ListItem>The right to withdraw consent</ListItem>
                  </UnorderedList>
                  <Text fontWeight='bolder' mt={4}>
                    Log Files
                  </Text>
                  <Text>
                    judicodes is hosted on
                    <a href='https://www.netlify.com/' target='_blank' rel='noreferrer'>
                      Netlify
                    </a>
                    which follows a standard procedure of using log files. These files log visitors
                    when they visit websites. All hosting companies do this and a part of hosting
                    services&apos; analytics. The information collected by log files include
                    internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
                    date and time stamp, referring/exit pages, and possibly the number of clicks.
                    These are not linked to any information that is personally identifiable. The
                    purpose of the information is for analyzing trends, administering the site,
                    tracking users&apos; movement on the website, and gathering demographic
                    information. The information will be stored for less than 30 days.
                  </Text>

                  <Text fontWeight='bolder' mt={4}>
                    Third Party Privacy Policies
                  </Text>

                  <Text>
                    judicodes&apos;s Privacy Policy does not apply to other advertisers or websites.
                    Thus, we are advising you to consult the respective Privacy Policies of these
                    third-party ad servers for more detailed information. It may include their
                    practices and instructions about how to opt-out of certain options.
                  </Text>

                  <Text>
                    You can choose to disable cookies through your individual browser options. To
                    know more detailed information about cookie management with specific web
                    browsers, it can be found at the browsers&apos; respective websites.
                  </Text>

                  <Text fontStyle='italic' mt={4}>
                    Online Privacy Policy Only
                  </Text>

                  <Text>
                    Our Privacy Policy applies only to our online activities and is valid for
                    visitors to our website with regards to the information that they shared and/or
                    collect in judicodes. This policy is not applicable to any information collected
                    offline or via channels other than this website.
                  </Text>

                  <Text fontStyle='italic' mt={4}>
                    Consent
                  </Text>

                  <Text>
                    By using our website, you hereby consent to our Privacy Policy and agree to its
                    terms.
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as='span' flex='1' textAlign='left'>
                      Terms of Service
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Text fontWeight='bolder' mt={4}>
                    1. Terms
                  </Text>

                  <Text>
                    By accessing this Website, accessible from judicodes.com, you are agreeing to be
                    bound by these Website Terms and Conditions of Use and agree that you are
                    responsible for the agreement with any applicable local laws. If you disagree
                    with any of these terms, you are prohibited from accessing this site. The
                    materials contained in this Website are protected by copyright and trade mark
                    law.
                  </Text>

                  <Text fontWeight='bolder' mt={4}>
                    2. Use License
                  </Text>

                  <Text>
                    Permission is granted to temporarily download one copy of the materials on
                    judicodes&apos;s Website for personal, non-commercial transitory viewing only.
                    This is the grant of a license, not a transfer of title, and under this license
                    you may not:
                  </Text>

                  <UnorderedList>
                    <ListItem>modify or copy the materials;</ListItem>
                    <ListItem>
                      use the materials for any commercial purpose or for any public display;
                    </ListItem>
                    <ListItem>
                      attempt to reverse engineer any software contained on judicodes&apos;s
                      Website;
                    </ListItem>
                    <ListItem>
                      remove any copyright or other proprietary notations from the materials; or
                    </ListItem>
                    <ListItem>
                      transferring the materials to another person or &quot;mirror&quot; the
                      materials on any other server.
                    </ListItem>
                  </UnorderedList>

                  <Text>
                    This will let judicodes to terminate upon violations of any of these
                    restrictions. Upon termination, your viewing right will also be terminated and
                    you should destroy any downloaded materials in your possession whether it is
                    printed or electronic format.
                  </Text>
                  <Text fontSize='smaller' mt={4}>
                    These Terms of Service has been created with the help of the
                    <a
                      href='https://www.termsofservicegenerator.net'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Terms Of Service Generator
                    </a>
                    .
                  </Text>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default LegalStuff;
