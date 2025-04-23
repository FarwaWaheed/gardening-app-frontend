export default function CategoryCard({ name, image }) {
  return (
    <div  className="flex flex-col items-center bg-green-50 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-200 w-60 h-60">
      <img
        src={image}
        alt={name}
        className="w-40 h-40 object-cover mb-3 rounded-xl"
      />
      <h3 className="text-lg font-medium text-gray-800">{name}</h3>
    </div>
  );
}

