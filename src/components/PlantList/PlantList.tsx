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
              Common Name: {
                plant.common_name
              }
              <li>
                Cycle: {plant.cycle}
              </li>
              <img className="plant-list_img"
                src={
                  plant
                    .default_image
                    .small_url
                }
              />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PlantList;
