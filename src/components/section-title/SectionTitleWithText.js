import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Black Dot</h1>
          <h1>India’s waste management problem and it’s digital application solution</h1>
    
          <h1>PROBLEM</h1>

       <p>
         
         

       One alarming spillover of India’s remarkable growth story is the fact that its growing population, coupled with rapid urbanization and industrialization, has resulted in spiraling levels of civic and industrial waste being generated.

With an average annual growth rate of 4%, this inextricably intertwined byproduct of industrialization poses far reaching ramifications of urban pollution, public health and hygiene. The US Public Health Service has identified 22 human diseases that are linked to improper solid waste management. Multiple studies have demonstrated a link between garbage burning and diseases such as asthma, bronchitis, emphysema and heart attack. Garbage burning, which is classified as the third biggest cause of greenhouse emission in the country, is responsible for releasing carbon monoxide, nitrogen oxide, sulfur dioxide and carcinogenic hydrocarbons, along with particulate matter into the air. 
India, the world’s fifth-largest economy, currently generates 62 million tons of waste (both recyclable and non-recyclable) every year, according to the Ministry of Environment, Forest and Climate Change (GoI).
Currently India generates 70 million metrics of municipal solid wastes, of which only 20% is recycled and rest 80% ends up in landfills and oceans affecting humans, marine life and destroying the environment

</p>
<h1>Solution</h1>
<p>
BLACK DOT LLP is aimed at addressing this health menace, we offer a unique set of solutions. The idea is to disrupt the existing waste and recyclables space by leveraging digital technology and connect waste generators like businesses and consumers with waste aggregators and recyclers.
“Waste management in India is a $15 billion opportunity in India. Idea is to provide cloud-based full service waste and recycle enabling platform. It's focused on buying and selling recyclable, connecting recyclable generators like customers, businesses, manufacturers, and waste collectors to a network of recyclers, who are facing a shortage of reliable supply in this informal industry,”
<br/>
<b>What is the uniqueness of your solution –</b>
<br/>

Waste management, one of the world's oldest industries, has been awaiting digital disruption. Apart from being a business idea, transforming the waste management space can lead to a social, environmental and economic impact,”
We can bring a change in the way India recycles and thinks about waste management. “The current waste value chain consisting of waste generators, waste aggregators, waste processors and recyclers work in their own silos that remain disconnected. Also, the industry is dominated by the informal workforce where the majority of the transactions are carried out offline, leaving no traceability of materials.



</p>
        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
