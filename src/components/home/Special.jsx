import React from "react";
import Container from "../global/Container";
import SecTitle from "../global/SecTitle";
import SpecialCard from "../cards/SpecialCard";

function Special() {
  return (
    <div className="special-section">
      <Container>
        <SecTitle
          title="special"
          subTitle="What makes us special"
        />

        <div className="special-cards-box">
          <SpecialCard
            img="/assets/freshFood.png"
            alt="Fresh Food"
            title="Fresh Food"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
          <SpecialCard
            img="/assets/skilledChef.png"
            specialAlt="Skilled Chef"
            title="Skilled Chef"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
          <SpecialCard
            img="/assets/exoticDishes.png"
            specialAlt="Exotic Dishes"
            title="Exotic Dishes"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. "
          />
        </div>
      </Container>
    </div>
  );
}

export default Special;
