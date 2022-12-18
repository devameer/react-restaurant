import React from "react";
import Blogs from "../components/home/Blogs";
import Counter from "../components/home/Counter";
import Footer from "../components/home/Footer";
import GeneralSection from "../components/home/GeneralSection";
import Greeting from "../components/home/Greeting";
import JoinUs from "../components/home/JoinUs";
import OurMenu from "../components/home/OurMenu";
import Reviews from "../components/home/Reviews";
import Special from "../components/home/Special";

function Home() {
  return (
    <>
      <Greeting className="greeting-section" />
      <GeneralSection
        title="about us"
        subTitle="Discover the taste of worldclass vegan dishes from the kitchen of Go Green Dine"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
        img="/assets/aboutUs.png"
        alt="About Us"
      />
      <Special />

      <OurMenu />
      <JoinUs
        title="Come join us for a lunch this weekend and enjoy"
        flatOff="10"
      />
      <GeneralSection
        title="Cooking ingredients"
        subTitle="What goes in"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin hendrerit a amet viverra. Nunc pretium in amet at mattis cras. Quisque commodo mattis ornare a nec odio. Pulvinar orci, egestas eget nulla duis at iaculis nunc, elit. Nibh auctor purus nunc tellus pellentesque nibh mattis. Malesuada integer consectetur. Imperdiet aliquam quam mauris semper suscipit. Molestie maecenas interdum pharetra id velit sed nec.tetur sit sagittis pretium eget vitae semper pellentesque pellentesque."
        imgClass="cooking-img"
        img="/assets/cooking.png"
        alt="Cooking ingredients"
      />
      <Counter />
      <Reviews />
      <Blogs />
      <Footer />
    </>
  );
}

export default Home;
