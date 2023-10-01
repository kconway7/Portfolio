import styled from 'styled-components';
import Project from '../ui/Project';
import Section from '../ui/Section';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 28px;
  margin-left: 80px;
`;

const Heading = styled.h1`
  color: #f0e7fb;
  text-align: center;
  font-size: 3.6rem;
  position: relative;
  font-weight: 400;

  &:before {
    width: 100px;
    height: 3px;
    background-color: #6812da;
    position: absolute;
    left: 690px;
    top: 70px;

    content: '';
  }

  &:after {
    width: 10px;
    height: 10px;
    background-color: #6812da;
    position: absolute;
    left: 790px;
    top: 66px;
    border-radius: 50%;

    content: '';
  }
`;

function Projects() {
  return (
    <Section height={'1080px'} id="projects">
      <Heading>PROJECTS</Heading>
      <Grid>
        <Project
          pictures={[
            '/ProjectPics/Bookshelf1.png',
            '/ProjectPics/Bookshelf2.png',
            '/ProjectPics/Bookshelf3.png',
          ]}
          description={
            'An E-commerce site for selling books in bulk, includes product/user management and payment/order processing.'
          }
          name="THE BOOKSHELF"
          tech="C#, ASP.NET"
        />
        <Project
          pictures={[
            '/ProjectPics/Omnifood1.png',
            '/ProjectPics/Omnifood2.png',
            '/ProjectPics/Omnifood3.png',
          ]}
          description={
            'A static page for a meal ordering service, including a hero section, testimonials and a call to action.'
          }
          name="OMNIFOOD"
          tech="HTML, CSS, JavaScript"
        />
        <Project
          pictures={[
            '/ProjectPics/WildOasis1.png',
            '/ProjectPics/WildOasis2.png',
            '/ProjectPics/WildOasis3.png',
          ]}
          description={
            'Dummy in-house software used to replicate a cabin lodging companies need to manage their cabins, guests and bookings.'
          }
          name="THE WILD OASIS"
          tech="React, Supabase"
        />
        <Project
          pictures={[
            '/ProjectPics/Natours1.png',
            '/ProjectPics/Natours2.png',
            '/ProjectPics/Natours3.png',
          ]}
          description={
            'Website for users to users to read, book and review nature tours. Built back-end first with Node.js and tied to MongoDB.'
          }
          name="NATOURS"
          tech="Node.js, MongoDB"
        />
        <Project
          pictures={[
            '/ProjectPics/Realtor1.png',
            '/ProjectPics/Realtor2.png',
            '/ProjectPics/Realtor3.png',
          ]}
          description={
            'A simplistic-clone of Realtor.com, allows users to sign-up and register properties for sale as well as contact other users.'
          }
          name="REALTOR CLONE"
          tech="React, Firebase"
        />
        <Project
          pictures={['/ProjectPics/Forkify1.png', '/ProjectPics/Forkify2.png']}
          description={
            'A simplistic website that allows a user to search for recipes and upload their own custom recipes.'
          }
          name="FORKIFY"
          tech="JavaScript"
        />
      </Grid>
    </Section>
  );
}

export default Projects;
