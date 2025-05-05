import { useEffect, useState } from "react";
import { getGroups, updateGroup, deleteGroup } from "../../api/groupApis";

export default function UpdateDeleteGroup() {
  const [groups, setGroups] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    interestTags: [],
  });

  const fetchGroups = async () => {
    try {
      const result = await getGroups();
      setGroups(result.data);
    } catch (err) {
      console.error("Error fetching groups:", err);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleSelectGroup = (group) => {
    setSelectedGroup(group);
    setFormData({
      name: group.name,
      description: group.description,
      location: group.location,
      interestTags: group.interestTags,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTagsChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    setFormData((prev) => ({
      ...prev,
      interestTags: selectedOptions,
    }));
  };

  const handleUpdate = async () => {
    if (!selectedGroup) {
      alert("Select a group first.");
      return;
    }

    try {
      await updateGroup(selectedGroup._id, formData);
      alert("Group updated successfully!");
      fetchGroups();
      setSelectedGroup(null);
      setFormData({
        name: "",
        description: "",
        location: "",
        interestTags: [],
      });
    } catch (err) {
      console.error("Error updating group:", err);
      if (err.response && err.response.status === 403) {
        alert("You are not authorized to update this group.");
      } else {
        alert("Failed to update group.");
      }
    }
  };

  const handleDelete = async () => {
    if (!selectedGroup) {
      alert("Select a group first.");
      return;
    }

    const confirmDelete = window.confirm(
      `Are you sure you want to delete the group "${selectedGroup.name}"?`
    );

    if (!confirmDelete) return;

    try {
      await deleteGroup(selectedGroup._id);
      alert("Group deleted successfully!");
      fetchGroups();
      setSelectedGroup(null);
      setFormData({
        name: "",
        description: "",
        location: "",
        interestTags: [],
      });
    } catch (err) {
      console.error("Error deleting group:", err);
      if (err.response && err.response.status === 403) {
        alert("You are not authorized to update this group.");
      } else {
        alert("Failed to update group.");
      }
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">🛠️ Update or Delete a Group</h2>

      <div className="mb-6">
        <label className="font-semibold mb-2 block">Select Group:</label>
        <select
          onChange={(e) =>
            handleSelectGroup(
              groups.find((g) => g._id === e.target.value) || null
            )
          }
          value={selectedGroup ? selectedGroup._id : ""}
          className="border p-2 rounded w-full"
        >
          <option value="">-- Choose a Group --</option>
          {groups.map((group) => (
            <option key={group._id} value={group._id}>
              {group.name}
            </option>
          ))}
        </select>
      </div>

      {selectedGroup && (
        <div className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Group Name"
            className="border p-2 rounded w-full"
          />

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Group Description"
            className="border p-2 rounded w-full"
          />

          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="border p-2 rounded w-full"
          />

          <label className="block font-semibold">Interest Tags:</label>
          <select
            multiple
            value={formData.interestTags}
            onChange={handleTagsChange}
            className="border p-2 rounded w-full h-32"
          >
            {[
              "Vegetable Gardening",
              "Indoor Plants",
              "Succulents",
              "Flower Beds",
              "Hydroponics",
              "Ornamental Plants",
              "Terrace Gardening",
            ].map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>

          <div className="flex space-x-4 pt-4">
            <button
              onClick={handleUpdate}
              className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
            >
              Update Group
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            >
              Delete Group
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
