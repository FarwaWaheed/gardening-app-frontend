export default function validateGroupForm(groupData) {
    const errors = {};
  
    // Validate Group Name
    if (!groupData.name || groupData.name.trim() === "") {
      errors.name = "Group name is required.";
    } else if (groupData.name.length < 3) {
      errors.name = "Group name should be at least 3 characters.";
    }
  
    // Validate Description
    if (!groupData.description || groupData.description.trim() === "") {
      errors.description = "Description is required.";
    } else if (groupData.description.length < 10) {
      errors.description = "Description should be at least 10 characters.";
    }
  
    // Validate Location
    if (!groupData.location || groupData.location.trim() === "") {
      errors.location = "Location is required.";
    }
  
    // Validate Interest Tags
    if (!groupData.interestTags || groupData.interestTags.length === 0) {
      errors.interestTags = "Please select at least one interest tag.";
    }
  
    // Validate Members
    if (!groupData.members || groupData.members.length === 0) {
      errors.members = "Please add at least one member.";
    }
  
    // Validate Created By
    if (!groupData.createdBy) {
      errors.createdBy = "Creator information is missing. Please log in.";
    }
  
    return errors;
  }
  