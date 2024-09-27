import React from 'react';
import styled from 'styled-components';

export const frontmatter = {
  navbar: {
    hide: true,
  },
  footer: {
    hide: true,
  }
};

export default function() {
  return (
    <>
      <HeroSection>
        <h1>Welcome to Mock SaaS</h1>
        <p>The product isn't real, but the landing page is</p>
        <Button>Get Started</Button>
      </HeroSection>

      <FeaturesSection>
        <Feature>
          <FeatureIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#0250c5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="16"></line>
              <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
          </FeatureIcon>
          <h3>Feature 1</h3>
          <p>What an amazing feature 1</p>
        </Feature>
        <Feature>
          <FeatureIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6a1c9d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </FeatureIcon>
          <h3>Feature 2</h3>
          <p>Very impressive feature 2</p>
        </Feature>
        <Feature>
          <FeatureIcon>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d43f8d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </FeatureIcon>
          <h3>Feature 3</h3>
          <p>Don't forget feature 3</p>
        </Feature>
      </FeaturesSection>

      <TestimonialsSection>
        <TestimonialQuote>
          "Dad, why did you 3D print a save icon?"
        </TestimonialQuote>
        <p>- Some 7 year old after seeing a floppy disk</p>
      </TestimonialsSection>

      <PricingSection>
        <PricingPlan>
          <h4>Basic</h4>
          <p>$3.99/month</p>
          <ul>
            <li>Feature 1</li>
            <li>Feature 2</li>
            <li>Feature 3</li>
          </ul>
          <Button>Choose Plan</Button>
        </PricingPlan>
        <PricingPlan>
          <h4>Advanced</h4>
          <p>$8.99/month</p>
          <ul>
            <li>All Basic features</li>
            <li>Wool socks</li>
            <li>Half a box of cereal</li>
          </ul>
          <Button>Choose Plan</Button>
        </PricingPlan>
      </PricingSection>

      <NewsletterSection>
        <h2>Stay Updated</h2>
        <NewsletterForm>
          <input type="email" placeholder="Enter your email" />
          <NewsletterButton type="submit">Subscribe</NewsletterButton>
        </NewsletterForm>
      </NewsletterSection>
    </>
  );
};

const HeroSection = styled.section`
  text-align: center;
  padding: 4rem 0;
  background-image: linear-gradient(to right, #0250c5 0%, #d43f8d 100%);
  color: white;
`;

const Button = styled.button`
  background-color: #007bff;
  border-radius: 4px;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

const FeaturesSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
`;

const Feature = styled.div`
  text-align: center;
  max-width: 300px;
`;

const FeatureIcon = styled.div`
  margin-bottom: 1rem;
  svg {
    width: 48px;
    height: 48px;
    color: #007bff;
  }
`;

const TestimonialsSection = styled.section`
  background-color: #f9f9f9;
  padding: 2rem 0;
  text-align: center;

  & p {
    margin-bottom: 0px;
  }
`;

const TestimonialQuote = styled.blockquote`
  font-size: 1.5rem;
  font-style: italic;
  max-width: 800px;
  margin: 0 auto 1rem;
`;

const PricingSection = styled.section`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const PricingPlan = styled.div`
  border: 1px solid #ddd;
  padding: 2rem;
  margin: 0 1rem;
  text-align: center;

  & ul {
    text-align: left;
  }
`;

const NewsletterSection = styled.section`
  background-color: #007bff;
  color: white;
  padding: 2rem;
  text-align: center;

  h2 {
    margin-bottom: 1rem;
  }
`;

const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  input {
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    border-radius: 4px;
    width: 200px;
  }
`;

const NewsletterButton = styled(Button)`
  background-color: #28a745;

  &:hover {
    background-color: #218838;
  }
`;