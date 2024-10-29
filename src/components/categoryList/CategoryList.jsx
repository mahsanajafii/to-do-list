import { Link } from "react-router-dom";
import { useContext } from "react";
import { TodoContext } from "../../contexs/TodoProvider";


const CategoryList = () => {
  const categories = ["Groceries", "College", "Payments"];
  const { setFilter } =
    useContext(TodoContext);

  return (
    <ul>
      <li className="mb-6 text-xl w-28 font-extrabold text-center rounded-2xl hover:bg-orange-300">
        <Link to="All" onClick={() => setFilter("")} >
          All
        </Link>
      </li>

      {categories.map((category) => (
        <li
          key={category}
          className="mb-6 w-24 cursor-pointer text-center font-bold rounded-2xl hover:bg-orange-300"
        >
          <Link to={category}
            onClick={() => setFilter(category)}
            
          >
            {category}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;


