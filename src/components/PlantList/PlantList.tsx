import "./PlantList.css";

type Plant = {
  id: number;
  common_name: string;
  cycle: string;
  default_image: {
    small_url;
  };
};

type Plants = Array<Plant>;

interface PlantListProps {
  plants: Plants;
}

const PlantList = ({
  plants,
}: PlantListProps) => {

const openModal = () => {
  
}
  return (
    <div>
      <h1 className="plant-list_header">
        Plant List
      </h1>

      <ul className="plant-list">
        {plants.map(
          (plant) => (
            <li
              className="plant-list_item"
              key={plant.id}
            >
              Common Name:{" "}
              {
                plant.common_name
              }
              <li>
                Cycle:{" "}
                {plant.cycle}
              </li>
              <img
                className="plant-list_img"
                alt="plant-img"
                src={
                  plant
                    .default_image
                    ?.small_url
                }
              />
              <button onClick={openModal}>
                Click for
                Details
              </button>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PlantList;
