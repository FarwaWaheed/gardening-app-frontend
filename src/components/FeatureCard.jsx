export default function FeatureCard({ title, button, image }) {
    return (
      <div className="bg-white rounded shadow w-72 overflow-hidden">
        <img src={image} alt={title} className="w-full h-40 object-cover " />
        <div className="p-4">
          <p className="text-sm text-gray-800 mb-4">{title}</p>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">{button}</button>
        </div>
      </div>
    );
  }