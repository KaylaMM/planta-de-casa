import {
  useEffect,
  useState,
} from "react";
import "./App.css";
import PlantList from "./components/PlantList/PlantList";

const App = () => {
  const [plants, setPlants] =
    useState([]);

  useEffect(() => {
    const dataFetch =
      async () => {
        const data = await (
          await fetch(
            "https://perenual.com/api/species-list?page=1&key=sk-dDOc645d08b22af9c865"
          )
        ).json();

        setPlants(data.data);
        console.log(data.data)
      };

    dataFetch();
  }, []);

  return (
    <div className="App">
      <PlantList
        plants={plants}
      />
    </div>
  );
};

export default App;
