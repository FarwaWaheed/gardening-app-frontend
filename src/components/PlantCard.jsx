import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from 'react-icons/md';

export default function PlantCard({ name, botanicalName, image , id, category}) {
  return (
    <Link to={`/home/category/${category}/${id}`} className="hover:no-underline">
    <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-[200px] text-center hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="h-30 w-48 object-cover mb-3 rounded"
      />
      <h3 className="text-sm font-medium">{name}</h3>
      <p className="text-xs text-gray-500 italic">{botanicalName}</p>
      <div className="mt-2 flex justify-center items-center gap-2">
        <span className="underline text-sm text-green-700">
          View Details
        </span>
        <button className="bg-green-600 text-white rounded-full p-2 hover:bg-green-700 transition">
          <MdArrowForwardIos size={14} />
        </button>
      </div>
    </div>
    </Link>
  );
}
