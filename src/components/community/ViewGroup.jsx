import { useState, useEffect } from "react";
import { getGroups } from "../../api/groupApis"; 

export default function ViewGroup() {
  const [groups, setGroups] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  const [tagFilter, setTagFilter] = useState("");

  const locations = 
    ["Karachi",
    "Lahore",
    "Islamabad",
    "Rawalpindi",
    "Faisalabad",
    "Peshawar",
    "Multan",
    "Quetta",
  ];

  const tags = [
    "Vegetable Gardening",
    "Indoor Plants",
    "Succulents",
    "Flower Beds",
    "Hydroponics",
    "Ornamental Plants",
    "Terrace Gardening",
  ];

  useEffect(() => {
    const fetchGroups = async () => {
      const result = await getGroups({
        location: locationFilter,
        tag: tagFilter,
      });
      console.log(`location: ${locationFilter}, tag: ${tagFilter}`);
      setGroups(result.data);
    };
    fetchGroups();
  }, [locationFilter, tagFilter]);

  return (
    <div className="p-6">
      <h2 className="text-4xl font-bold mb-8 text-green-800">🌱 Community Groups</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 mb-6 items-center">
        
        <select
          value={locationFilter}
          onChange={(e) => setLocationFilter(e.target.value)}
          className="border p-2 rounded w-60"
        >
          <option value="">All Locations</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>

         {/* Interest Tag Dropdown  */}
        <select
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="border p-2 rounded w-60"
        >
          <option value="">All Interest Tags</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        <button
          onClick={() => {
            setLocationFilter("");
            setTagFilter("");
          }}
          className="bg-gray-300 text-gray-800 px-3 py-2 rounded hover:bg-gray-400"
        >
          Reset Filters
        </button>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {groups.map((group) => (
          <div
            key={group._id}
            className="bg-white rounded-2xl shadow-md border hover:shadow-xl transition duration-300 p-5 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-green-700 mb-2">{group.name}</h3>
              <p className="text-gray-600 mb-3">{group.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {group.interestTags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-500 mb-2">
                📍 <strong>Location:</strong> {group.location || "N/A"}
              </p>

              <p className="text-sm text-gray-500 mb-2">
                👥 <strong>Members:</strong> {group.members.length}
              </p>

              <p className="text-sm text-gray-500 mb-2">
                📝 <strong>Created by:</strong> {group.createdBy?.name || "Unknown"}
              </p>
            </div>

            <div className="mt-4 text-sm text-gray-400">
              Created {new Date(group.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
