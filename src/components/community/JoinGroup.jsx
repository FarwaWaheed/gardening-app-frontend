import { useEffect, useState } from "react";
import { getGroups, joinGroup } from "../../api/groupApis";
import { useNotification } from '../../context/NotificationContext';


export default function JoinGroup() {
  const [groups, setGroups] = useState([]);
  const [joinedGroups, setJoinedGroups] = useState([]);
  
  const { addNotification } = useNotification();
  const userRole = localStorage.getItem('userRole');
  
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        const result = await getGroups();
        setGroups(result.data);

        // Pre-mark already joined groups
        const alreadyJoined = result.data
          .filter((group) =>
            group.members.some((member) =>
              typeof member === "object"
                ? member._id === userId
                : member === userId
            )
          )
          .map((group) => group._id);

        setJoinedGroups(alreadyJoined);
      } catch (err) {
        console.error("Error fetching groups:", err);
      }
    };

    fetchGroups();
  }, [userId]);

  const handleJoin = async (groupId) => {
    try {
      await joinGroup(groupId);
      addNotification(userId, userRole, "success", "You have successfully joined the group!");
      setJoinedGroups((prev) => [...prev, groupId]);
    } catch (err) {
      console.error("Error joining group:", err);
      addNotification(userId, userRole, "error", "Failed to join the group. Please try again.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🌿 Join a Community Group</h2>

      {groups.length === 0 ? (
        <p className="text-gray-600">No groups available to join yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group) => {
            const isJoined = joinedGroups.includes(group._id);

            return (
              <div
                key={group._id}
                className={`border rounded-2xl shadow p-4 flex flex-col justify-between transition ${
                  isJoined
                    ? "border-green-600 bg-green-50"
                    : "border-gray-300 hover:shadow-lg"
                }`}
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

                {isJoined ? (
                  <div className="text-green-700 font-semibold flex items-center gap-1">
                    ✅ You are already a member of this group
                  </div>
                ) : (
                  <button
                    onClick={() => handleJoin(group._id)}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  >
                    Join Group
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
