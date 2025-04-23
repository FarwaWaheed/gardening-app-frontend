const validatePlantForm = (formData, setErrors) => {
  const newErrors = {};

  if (!formData.name.trim()) newErrors.name = 'Name is required';
  if (!formData.scientificName.trim()) newErrors.scientificName = 'Scientific name is required';
  if (!formData.category) newErrors.category = 'Category is required';
  if (!['vegetable', 'fruit', 'flower'].includes(formData.category))
    newErrors.category = 'Category must be vegetable, fruit, or flower';

  if (!formData.climate.trim()) newErrors.climate = 'Climate info is required';
  if (!formData.soil.trim()) newErrors.soil = 'Soil info is required';
  if (!formData.sunlight.trim()) newErrors.sunlight = 'Sunlight info is required';
  if (!formData.wateringFrequency.trim()) newErrors.wateringFrequency = 'Watering info is required';
  if (!formData.growthType.trim()) newErrors.growthType = 'Growth type is required';
  if (!formData.description.trim()) newErrors.description = 'Description is required';

  if (!formData.imageUrl.trim()) {
    newErrors.imageUrl = 'Image URL is required';
  } else if (!/^https?:\/\/.+/i.test(formData.imageUrl)) {
    newErrors.imageUrl = 'Please enter a valid image URL';
  }
  

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

export default validatePlantForm;
