import * as React from 'react';
import styled from 'styled-components';
import { Button } from '@redocly/theme/components/Button/Button';
import { Link } from '@redocly/theme/components/Link/Link';
import { breakpoints } from '@redocly/theme/core/utils';

export const frontmatter = {
  seo: {
    title: 'Demo React Page',
  },
  // Uncomment to hide navbar and footer
  // navbar: {
  //   hide: true,
  // },
  // footer: {
  //   hide: true,
  // }
};

export default function () {
  return (
    <LandingWrapper>
      <Jumbotron
        p="130px 180px 130px 180px"
        // bgImage={require('images/hero-bg.png')}
      >
        <LandingHeader>Redocly training</LandingHeader>
        <LandingSubheader>A starter developer portal with training exercises</LandingSubheader>
        <ButtonContainer display="flex" mt="16px">
          <Button variant="primary" size="xl" tone="brand" to="/developer-portal">
            Get started
          </Button>
        </ButtonContainer>
      </Jumbotron>
      <Box>
        <SectionHeader>
          Create your <strong> developer portal </strong> today!
        </SectionHeader>
        <Tiles>
          <Tile to="#" icon={<img src={require('images/rock.svg')} />} header="Rock">
            Lorem ipsum dolor sit amet, pri putent oportere quaerendum in, ea mea justo invenire aliquando. Usu modo
            suavitate ea. Et sed labitur epicurei adipiscing. Nibh zril labitur an usu.Lorem ipsum dolor sit amet, pri
            putent oportere quaerendum in, ea mea justo invenire aliquando.
          </Tile>
          <Tile to="#" icon={<img src={require('images/paper.png')} />} header="Paper">
            Lorem ipsum dolor sit amet, pri putent oportere quaerendum in, ea mea justo invenire aliquando. Usu modo
            suavitate ea. Et sed labitur epicurei adipiscing. Nibh zril labitur an usu.
          </Tile>
          <Tile to="#" icon={<img src={require('images/scissors.png')} />} header="Scissors">
            Lorem ipsum dolor sit amet, pri putent oportere quaerendum in, ea mea justo invenire aliquando. Usu modo
            suavitate ea. Et sed labitur epicurei adipiscing. Nibh zril labitur an usu.
          </Tile>
        </Tiles>
        <SectionHeader>
          <strong>Need help?</strong> Try our training exercises.
          {/*
            !Uncomment if you want to show the contact us button
            <ButtonContainer display="flex" p="40px">
              <Button variant="primary" size="xl" tone="brand" to="/contact/">
                Let's talk!
              </Button>
            </ButtonContainer>
          */}
        </SectionHeader>

        <Box mb="40px">
          <Tiles justifyContent="space-around" flexWrap="wrap" type="wide">
            <Tile to="/developer-portal" header="Rock" textAlign="left">
              Lorem ipsum dolor sit amet, pri putent oportere quaerendum in, ea mea justo invenire aliquando. Usu modo
              suavitate ea. Et sed labitur epicurei adipiscing. Nibh zril labitur an usu.
            </Tile>
            <Tile to="/developer-portal" header="Paper" textAlign="left">
              Lorem ipsum dolor sit amet, pri putent oportere quaerendum in, ea mea justo invenire aliquando. Usu modo
              suavitate ea. Et sed labitur epicurei adipiscing. Nibh zril labitur an usu.
            </Tile>
            <Tile to="/developer-portal" header="Scissors" textAlign="left">
              Lorem ipsum dolor sit amet, pri putent oportere quaerendum in, ea mea justo invenire aliquando. Usu modo
              suavitate ea. Et sed labitur epicurei adipiscing. Nibh zril labitur an usu.
            </Tile>
            <Tile to="/developer-portal" header="Go" textAlign="left">
              Lorem ipsum dolor sit amet, pri putent oportere quaerendum in, ea mea justo invenire aliquando. Usu modo
              suavitate ea. Et sed labitur epicurei adipiscing. Nibh zril labitur an usu.
            </Tile>
          </Tiles>
        </Box>
      </Box>
    </LandingWrapper>
  );
}

const LandingWrapper = styled.div`
  --color-gradient-1: #1677ff;
  --color-gradient-2: #ba99ff;
  --color-brand: #8d5bff;
  --color-brand-hover: #7a4dd0;
  --color-brand-active: #663eb1;
  .button-tone-brand {
    color: white;
    border-color: var(--color-brand);
    background-color: var(--color-brand);
    &:hover {
      color: white;
      border-color: var(--color-brand-hover);
      background-color: var(--color-brand-hover);
    }
    &:active {
      color: white;
      border-color: var(--color-brand-active);
      background-color: var(--color-brand-active);
    }
  }
  & .button-size-xl {
    --button-padding: var(--spacing-sm) var(--spacing-xxl);
    font-size: var(--font-size-lg);
  }
  & .button-tone-brand {
    --button-background: var(--color-primary);
    --button-color: var(--text-color-inverse);
  }
`;

function Tile({
  icon,
  header,
  children,
  to,
  textAlign = 'center',
}: {
  icon?: React.ReactNode;
  header: string;
  children: React.ReactNode;
  to: string;
  textAlign?: 'left' | 'center' | 'right';
}) {
  return (
    <TileWrapper to={to} textAlign={textAlign}>
      {icon && <IconWrapper>{icon}</IconWrapper>}

      <TileHeader>{header}</TileHeader>

      <TileDescription>{children}</TileDescription>
    </TileWrapper>
  );
}

const Tiles = styled.div<{ type?: 'wide' }>`
  display: grid;
  grid-template-columns: ${({ type }) =>
    type === 'wide' ? 'repeat(auto-fit, minmax(450px, 1fr))' : 'repeat(auto-fit, minmax(250px, 1fr))'};
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 60px;
`;

const TileWrapper = styled(Link)<{ textAlign?: 'left' | 'center' | 'right' }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(35, 35, 35, 0.1) 0px 10px 30px 0px;
  padding: 30px 20px;
  gap: 20px;
  width: 100%;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  text-align: ${({ textAlign }) => textAlign || 'center'};
  text-decoration: none;
  &:hover {
    transform: translateY(-2px);
    box-shadow: rgba(35, 35, 35, 0.1) 0px 20px 60px 0px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
  width: 90px;
  object-fit: contain;
  background-color: var(--color-primary);
  img,
  svg {
    width: 100%;
  }
`;

const TileHeader = styled.h3`
  font-size: var(--font-size-xl);
  margin-bottom: 10px;
  color: var(--text-color-primary);
  margin: 0;
  width: 100%;
`;

const TileDescription = styled.p`
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
  color: var(--text-color-secondary);
  margin: 0;
`;

export const SectionHeader = styled.h2`
  color: var(--text-color-primary);
  font-size: 28px;
  font-weight: 300;
  text-align: center;
  margin: 2.65em 0;
  padding: 0px 20px;
`;

export const Box = styled.div<{ display?: string; mt?: string; mb?: string; my?: string; p?: string }>`
  display: ${({ display }) => display};
  margin-top: ${({ mt, my }) => mt || my};
  margin-bottom: ${({ mb, my }) => mb || my};
  padding: ${({ p }) => p};
`;

export const Flex = styled(Box)<{ mt?: string; p?: string; justifyContent?: string }>`
  display: flex;
  align-items: center;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
`;

export const LandingHeader = styled.h1`
  text-align: center;
  font-size: 56px;
  line-height: 80px;
  display: inline-block;
  margin: 50px 0 0.2em 0;
`;

export const LandingSubheader = styled.div`
  font-size: 30px;
  font-weight: 300;
  text-align: center;
  margin-top: 0;
  margin-bottom: 60px;
`;

export const ButtonContainer = styled(Box)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${Button} {
    margin-bottom: 10px;
  }
  @media screen and (min-width: ${breakpoints.medium}) {
    flex-direction: row;
  }
`;

export const Jumbotron = styled(Box)<{ bgImage?: string }>`
  background: linear-gradient(-63.43000000000001deg, var(--color-gradient-1) 15%, var(--color-gradient-2) 85%);
  color: var(--text-color-inverse);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ bgImage }) =>
    bgImage &&
    `
    background: url(${bgImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  `}
`;