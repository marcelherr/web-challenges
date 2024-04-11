import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 1, name: "Living Room", isOn: false },
    { id: 2, name: "Kitchen", isOn: false },
    { id: 3, name: "Bedroom", isOn: false },
    { id: 4, name: "Bathroom", isOn: false },
    { id: 5, name: "Garage", isOn: false },
    { id: 6, name: "Proch", isOn: false },
    { id: 7, name: "Garden", isOn: false },
    { id: 8, name: "Office", isOn: false },
  ]);

  function handleToggle(id) {
    const mutatedLights = lights.map((light) => {
      return light.id !== id
        ? light
        : {
            ...light,
            isOn: !light.isOn,
          };
    });
    setLights(mutatedLights);
  }

  function handleAllLightsOff() {
    console.log("Turn all lights off");
    const allLightsOff = lights.map((light) => ({
      ...light,
      isOn: false,
    }));
    setLights(allLightsOff);
  }

  function handleAllLightsOn() {
    console.log("Turn all lights on");
    const allLightsOn = lights.map((light) => ({
      ...light,
      isOn: true,
    }));
    setLights(allLightsOn);
  }

  const numberOfLightsOn = lights.filter((ligths) => ligths.isOn).length;

  const isDimmed = numberOfLightsOn === 0 ? true : false;

  console.log(numberOfLightsOn);

  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        handleToggle={handleToggle}
        numberOfLightsOn={numberOfLightsOn}
        handleAllLightsOff={handleAllLightsOff}
        handleAllLightsOn={handleAllLightsOn}
      />
    </Layout>
  );
}
