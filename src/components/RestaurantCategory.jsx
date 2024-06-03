import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data } = props;
  console.log(data);
  return (
    <div className="flex align-middle justify-center">
      <div className="w-6/12 bg-slate-100 rounded-md p-4 my-2 shadow-md">
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span> ⬇️ </span>
        </div>
              <ItemList items={ data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
