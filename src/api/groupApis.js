import api from "./apiInstance";

// Create a new group
export const createGroup = (groupData) => {
  return api.post("/group", groupData);
};

// Get all groups (with optional query filters)
export const getGroups = (filters = {}) => {
  // Remove any empty string values from filters
  const cleanedFilters = {};
  Object.keys(filters).forEach((key) => {
    if (filters[key] !== "") {
      cleanedFilters[key] = filters[key];
    }
  });

  return api.get("/group", { params: cleanedFilters });
};


// Get a group by ID
export const getGroupById = (id) => {
  return api.get(`/group/${id}`);
};

// Join a group
export const joinGroup = (id) => {
  return api.post(`/group/${id}/join`);
};

// Leave a group
export const leaveGroup = (id) => {
  return api.post(`/group/${id}/leave`);
};

// Delete a group
export const deleteGroup = (id) => {
  return api.delete(`/group/${id}`);
};

// Update a group
export const updateGroup = (id, groupData) => {
  return api.put(`/group/${id}/update`, groupData);
};
