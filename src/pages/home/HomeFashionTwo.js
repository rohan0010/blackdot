import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
// import BannerOne from "../../wrappers/banner/BannerOne";
// import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import TabProductFive from "../../wrappers/product/TabProductFive";

const HomeFashionTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>BlackDot </title>
        <meta
          name="description"
          // content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <div className="container">
        <div className="welcome-content text-center">
          
       <h1>Lets Shape the future out of waste </h1>
        </div>
        </div>
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        <div className="container mt-5">
        <div className=" text-center">
          <p>
            <b><h1>Our mission is consist of  three important words “let’s”, “clean” and “the world”</h1></b>
<br/>
<h4>The world is getting smarter! Gone are the days of good-old garbage bins that only helped in storage….


The first word “let’s” emphasizes that our mission is achieved together, through collaboration and teamwork. We operates as a network of companies and people who all play an important role in solving different problems. By working together, the network can reach faster and achieve more than its individual members. 

The second word, “clean”, refers to what our network will do. Part of the network works directly with boots on the ground, while other parts participate indirectly through different support functions. 

Finally, “the world” refers to holistic view of our mission. We will responds anywhere without boundaries based on politics, culture or religion.  

As a whole, the sentence spells out our mission and enthusiasm for working together to make the world a better place!</h4>
<br/>


<b><h1>Values : </h1></b>
<br/>

<h4>we operate on the principles of passion, innovation and trust. Our passion, cleaning the world, is made possible through innovative technologies that makes cleaning the world possible. 


We are proud of our mission and invite anyone who shares our values to join us!</h4>

<br/>




</p>
          </div>
        </div>
        {/* banner */}
        {/* <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" /> */}
        {/* tab product */}
        <TabProductFive spaceBottomClass="pb-60" category="accessories" />
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
