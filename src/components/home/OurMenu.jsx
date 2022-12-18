import React from "react";
import Container from "../global/Container";
import FoodCard from "../cards/FoodCard";
import SecTitle from "../global/SecTitle";

function OurMenu() {
  return (
    <div className="our-menu-section">
      <Container>
        <SecTitle
          title="Straight From Kitchen"
          subTitle="our menu"
        />
        <div className="category-box">
          <div className="category-side">
            <FoodCard
              img="/assets/category1.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="222"
            />
            <FoodCard
              img="/assets/category2.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="590"
            />
            <FoodCard
              img="/assets/category3.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="130"
            />
            <FoodCard
              img="/assets/category4.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="135"
            />
            <FoodCard
              img="/assets/category5.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="148"
            />
            <FoodCard
              img="/assets/category6.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="200"
            />
          </div>
          <div className="category-side">
            <FoodCard
              img="/assets/category1.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="222"
            />
            <FoodCard
              img="/assets/category2.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="590"
            />
            <FoodCard
              img="/assets/category3.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="130"
            />
            <FoodCard
              img="/assets/category4.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="135"
            />
            <FoodCard
              img="/assets/category5.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="148"
            />
            <FoodCard
              img="/assets/category6.png"
              alt="category"
              title="Lorem ipsum dolor sit amet"
              desc="Lorem ipsum dolor sit amet"
              number="200"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default OurMenu;
