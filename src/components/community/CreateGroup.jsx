import { useState, useEffect } from "react";
import { createGroup } from "../../api/groupApis";
import {getAllUsers} from "../../api/userApis";
import { useNavigate } from "react-router-dom";
import validateGroupForm from "../../utils/validateGroupForm";
import { useNotification } from '../../context/NotificationContext';

export default function CreateGroup() {
  const { addNotification } = useNotification();
  const userRole = localStorage.getItem('userRole');
  const userId = localStorage.getItem('userId');

  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [interestTags, setInterestTags] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch existing users to display in members selection
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getAllUsers();
        setAllUsers(response);  // adjust if your API returns differently
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  const interestOptions = [
    "Vegetable Gardening",
    "Indoor Plants",
    "Succulents",
    "Flower Beds",
    "Hydroponics",
    "Ornamental Plants",
    "Terrace Gardening",
  ];

  const handleCreate = async () => {
    const createdByUser = localStorage.getItem("userId");

    if (!createdByUser) {
      alert("Please log in to create a group.");
      return;
    }

    const groupData = {
      name: groupName,
      description,
      location,
      interestTags,
      members: selectedMembers,
      createdBy: createdByUser,
    };

    const errors = validateGroupForm(groupData);

        if (Object.keys(errors).length > 0) {
            console.log("Validation errors:", errors);
            alert("Please fix the form errors before submitting.");
            return;
        }

    try {
      await createGroup(groupData);
      addNotification(userId, userRole, "success", `${groupData.name} Group created Successfully!`);
      navigate("/home/community"); 
    } catch (error) {
      console.error("Error creating group:", error);
      addNotification(userId, userRole, "error", `Failed to create ${groupData.name} group! `);
    }
  };

   

  // For interest tags selection
  const toggleTag = (tag) => {
    setInterestTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // For member selection
  const toggleMember = (userId) => {
    setSelectedMembers((prev) =>
      prev.includes(userId)
        ? prev.filter((id) => id !== userId)
        : [...prev, userId]
    );
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">➕ Create New Group</h2>

      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Group Name"
        className="border p-2 mb-4 w-full rounded"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Group Description"
        className="border p-2 mb-4 w-full rounded"
      />

      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="border p-2 mb-4 w-full rounded"
      />

      <div className="mb-4">
        <p className="font-medium mb-2">Interest Tags:</p>
        <div className="flex flex-wrap gap-2">
          {interestOptions.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1 rounded border ${
                interestTags.includes(tag)
                  ? "bg-green-700 text-white"
                  : "bg-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <p className="font-medium mb-2">Add Members:</p>
        <div className="flex flex-wrap gap-2">
          {allUsers.map((user) => (
            <button
              key={user._id}
              onClick={() => toggleMember(user._id)}
              className={`px-3 py-1 rounded border ${
                selectedMembers.includes(user._id)
                  ? "bg-green-700 text-white"
                  : "bg-white"
              }`}
            >
              {user.name}
            </button>
          ))}
        </div>
      </div>


      <button
        onClick={handleCreate}
        className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
      >
        Create Group
      </button>
    </div>
  );
}
