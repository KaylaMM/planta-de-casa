import {
  useEffect,
  useState,
} from "react";
import "./App.css";
import PlantList from "./components/PlantList/PlantList";
// import Modal from "./components/Modal/Modal";
// import useModal from "./hooks/useModal";

const App = () => {
  const [plants, setPlants] =
    useState([]);

  // const { isOpen, toggle } =
  //   useModal();

  useEffect(() => {
    const dataFetch =
      async () => {
        const data = await (
          await fetch(
            "https://perenual.com/api/species-list?page=1&key=sk-dDOc645d08b22af9c865"
          )
        ).json();

        setPlants(data.data);
        console.log(
          data.data
        );
      };

    dataFetch();
  }, []);

  return (
    <div className="App">
      <PlantList
        plants={plants}
      />
        {" "}
        {/* <Modal
          isOpen={isOpen}
          toggle={toggle}
        /> */}
    
    </div>
  );
};

export default App;
