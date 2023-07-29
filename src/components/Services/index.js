import React from "react";
import Icon1 from '../../images/workout.svg'
import Icon2 from '../../images/workout1.svg'
import Icon3 from '../../images/workout5.svg'
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesIcon,
  ServicesH2,
  ServicesP,
  ServicesWrapper,
} from "./ServicesStyles";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            Train with the best For Less!!!
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Online Classes </ServicesH2>
          <ServicesP>
            You can access our platform anywhere in the world
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            Unlock our special card and Get maximum benefits
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
