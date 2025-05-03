import { Link } from "react-router-dom";

export default function FeatureCard({ title, description, button, image , link, isInternal}) {
    return (
      <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl ">
      
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <div className="p-4">
          <h1 className=" font-bold text-gray-800 mb-2">{title}</h1>
          <p className="text-sm text-left text-gray-800 mb-4">{description}</p>
          
          {isInternal ? (
          <Link
            to={link}
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {button}
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            {button}
          </a>
        )}
            
        </div>
     
      </div>
     
    );
  }