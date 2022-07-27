import { Button } from 'components/Button/Button';
import { HeroBg, HeroBox, HeroWrap, Title } from './Hero.styled';

export const Hero = () => {
  return (
    <HeroBg>
      <HeroBox>
        <HeroWrap>
          <Title>Test assignment for front-end developer</Title>
          <p>
            What defines a good front-end developer is one that has skilled
            knowledge of HTML, CSS, JS with a vast understanding of User design
            thinking as they'll be building web interfaces with accessibility in
            mind. They should also be excited to learn, as the world of
            Front-End Development keeps evolving.
          </p>
        </HeroWrap>
        <Button text={'Sign Up'} />
      </HeroBox>
    </HeroBg>
  );
};
