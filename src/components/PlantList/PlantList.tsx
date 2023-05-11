interface Plants {
  data: [
    id: number,
    common_name: string,
    cycle: string,
    default_image: object
  ];
}

export default function PlantList(
  plants: Plants
) {
  return (
    <div>Plant List</div>
  );
}

// "https://perenual.com/api/species-list?page=1&key=sk-dDOc645d08b22af9c865"
