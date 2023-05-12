type Plant = {
  id: number;
  common_name: string;
  cycle: string;
  default_image: object;
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
      Plant List
      <ul>
        {plants.map(
          (plant) => (
            <li
              key={plant.id}
            >
              {
                plant.common_name
              }
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default PlantList;
