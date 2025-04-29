import { useEffect, useState } from "react";
import { getGroups, leaveGroup } from "../../api/groupApis";

export default function LeaveGroup() {
  const [groups, setGroups] = useState([]);
  const userId = localStorage.getItem("userId");

  // Fetch groups the current user is a member of
  const fetchUserGroups = async () => {
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

  useEffect(() => {
    fetchUserGroups();
  }, [userId]);

  // Handle leaving a group
  const handleLeave = async (groupId) => {
    try {
      await leaveGroup(groupId);
      alert("You have left the group successfully!");
      fetchUserGroups(); // Refresh the list
    } catch (err) {
      console.error("Error leaving group:", err);
      alert("Something went wrong while trying to leave the group.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">👋 Leave a Group</h2>

      {groups.length === 0 ? (
        <p className="text-gray-600">You aren't a member of any groups.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => (
            <div
              key={group._id}
              className="border border-red-600 bg-red-50 rounded-2xl shadow p-4 flex flex-col justify-between hover:shadow-lg transition"
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
              <button
                onClick={() => handleLeave(group._id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Leave Group
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
