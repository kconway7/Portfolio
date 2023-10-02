import styled from 'styled-components';
import Project from '../ui/Project';
import Section from '../ui/Section';
import Container from '../ui/Container';
import Heading from '../ui/Heading';

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 28px;

  @media screen and (max-width: 1730px) {
    grid-template-columns: auto;
    margin-bottom: auto;
  }
`;

function Projects() {
  return (
    <Section height={'auto'} id="projects">
      <Container>
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
            hrefDemo="https://thebookshelfwebproject.azurewebsites.net/"
            hrefCode="https://github.com/kconway7/TheBookshelf_MVC"
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
            hrefDemo="https://omnifood-conway.netlify.app/"
            hrefCode="https://github.com/kconway7/Omnifood"
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
            hrefDemo="https://wild-oasis-practice-9r2u1nx6z-kconway7.vercel.app/login"
            hrefCode="https://github.com/kconway7/wild-oasis-practice"
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
            hrefDemo="https://natours-practice-conway-xexd.onrender.com/"
            hrefCode="https://github.com/kconway7/natours-practice"
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
            hrefDemo="https://realtor-clone-react-ktkk486oq-kconway7.vercel.app/"
            hrefCode="https://github.com/kconway7/realtor-clone-react"
          />
          <Project
            pictures={[
              '/ProjectPics/Forkify1.png',
              '/ProjectPics/Forkify2.png',
            ]}
            description={
              'A simplistic website that allows a user to search for recipes and upload their own custom recipes.'
            }
            name="FORKIFY"
            tech="JavaScript"
            hrefDemo="https://forkify-conway.netlify.app/"
            hrefCode="https://github.com/kconway7/forkify-practice-project"
          />
        </Grid>
      </Container>
    </Section>
  );
}

export default Projects;
