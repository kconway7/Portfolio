import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { useRef, useState } from 'react';
import {
  EMAIL_PUBLIC_KEY,
  EMAIL_SERVICE_ID,
  EMAIL_TEMPLATE_ID,
} from '../Constants';

import styled from 'styled-components';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import Container from '../ui/Container';
import Heading from '../ui/Heading';
import PhoneEmail from '../ui/PhoneEmail';

const StyledContactMe = styled.form`
  background-color: #0a0d12;
  width: 1000px;
  height: 550px;
  box-shadow: 7px 7px 4px #07090c;
  position: relative;
  padding-bottom: 24px;
`;

const StyledHeader = styled.h2`
  margin-left: 32px;
  padding-top: 32px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledInput = styled.input`
  background-color: #0a0d12;
  width: 40%;
  border: 1px solid #262b31;
  padding: 16px;
  font-size: 1.2rem;
  margin-top: 12px;
`;

const StyledSubject = styled.input`
  background-color: #0a0d12;
  width: 902px;
  border: 1px solid #262b31;
  padding: 16px;
  margin-top: 24px;
  margin-left: 32px;
  font-size: 1.2rem;
`;

const StyledMessage = styled.textarea`
  background-color: #0a0d12;
  width: 902px;
  border: 1px solid #262b31;
  padding: 16px;
  padding-bottom: 140px;
  margin-top: 24px;
  margin-left: 32px;
  font-size: 1.2rem;
  resize: none;
`;

const StyledButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const SpinnerContainer = styled.div`
  padding-top: 150px;
`;

function ContactMe() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    setIsLoading(true);

    emailjs
      .sendForm(
        EMAIL_SERVICE_ID,
        EMAIL_TEMPLATE_ID,
        form.current,
        EMAIL_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          toast.success('Message sent!');
        },
        (error) => {
          setIsLoading(false);
          toast.error('Something went wrong!');
          console.error(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <Section height={'auto'} id="contact">
      <Container>
        <Heading>GET IN TOUCH</Heading>
        <PhoneEmail />
        {isLoading ? (
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        ) : (
          <StyledContactMe ref={form} onSubmit={sendEmail}>
            <StyledHeader>Say Something</StyledHeader>
            <Row>
              <StyledInput
                type="text"
                name="name"
                placeholder="Name *"
                required
              />
              <StyledInput
                type="email"
                name="email"
                placeholder="Email *"
                required
              />
            </Row>
            <StyledSubject
              type="text"
              name="subject"
              placeholder="Subject *"
              required
            />
            <StyledMessage
              type="text"
              name="message"
              placeholder="Message *"
              required
            />
            <StyledButtonBar>
              <Button height={'50px'} width={'90%'}>
                Send Message
              </Button>
            </StyledButtonBar>
          </StyledContactMe>
        )}
      </Container>
    </Section>
  );
}

export default ContactMe;
