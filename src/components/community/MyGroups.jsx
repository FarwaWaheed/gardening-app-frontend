import { useEffect, useState } from "react";
import { getGroups } from "../../api/groupApis";

export default function MyGroups() {
  const [groups, setGroups] = useState([]);
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchMyGroups = async () => {
      try {
        const result = await getGroups();
        const myGroups = result.data.filter((group) =>
          group.members.some((member) =>
            typeof member === "object"
              ? member._id === userId
              : member === userId
          )
        );
        setGroups(myGroups);
      } catch (err) {
        console.error("Error fetching groups:", err);
      }
    };

    fetchMyGroups();
  }, [userId]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🌱 My Groups</h2>

      {groups.length === 0 ? (
        <p className="text-gray-600">You haven't joined any groups yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group._id}
              className="border border-green-600 bg-green-50 rounded-2xl shadow p-4 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <h3 className="text-xl font-bold mb-2">{group.name}</h3>
                <p className="text-gray-700 mb-2">{group.description}</p>
                <p className="text-sm text-gray-600 mb-2">
                  📍 {group.location}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Tags: {group.interestTags?.join(", ")}
                </p>
              </div>
              <div className="text-green-700 font-semibold flex items-center gap-1">
                ✅ You're a member
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
