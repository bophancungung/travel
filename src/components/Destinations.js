import { useState, useContext } from "react";
import DestinationsContext from "../context/DestinationsContext";
import DestinationsList from "./DestinationsList";
const Destinations = () => {
  const {
    destinationsData: { destinations },
  } = useContext(DestinationsContext);

  const [state] = useState({
    heading:
      "Mekong River are one of among strong and largest coconut producers and exporters in Vietnam with more than ten years experience.",
    paragraph:
      "We have factories in Ben Tre province, the main erea of planting and producing coconut of Vietnam, with well-equipped production technology and strict quality management, so our products can export to Europe, America, Midde East... with ISO 9001:2000, GMP, HACCP, HALAL, KOSHER, ORGANIC certification. Our daily capacity is 80 tons per day. Our office is located in Ho Chi Minh City, the main export centre of Vietnam. With these advantages, we're proud of fulfilling all your needs with best quality products and competative prices and stable supply. Our products are various from fresh coconut, desiccated coconut, coconut fibre, coconut charcoal, coconut oil, coconut milks and other products from coconut fibre…",
  });
  return (
    <div className="destinations">
      <div className="container">
        <div className="row ml-minus-15 mr-minus-15">
          <div className="col-6 p-15">
            <h3 className="destinations__heading animation">{state.heading}</h3>
          </div>
          <div className="col-6 p-15">
            <p className="destinations__paragraph animation">
              {state.paragraph}
            </p>
          </div>
        </div>
        <div className="destinations__block">
          <div className="row ml-minus-15 mr-minus-15">
            {destinations.map((destination) => (
              <DestinationsList
                destination={destination}
                key={destination.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destinations;
