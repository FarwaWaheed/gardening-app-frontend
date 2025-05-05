// components/PlantForm.jsx
import React from 'react';
import FormTextInput from './FormTextInput';

export default function PlantForm({ formData, errors, handleChange, handleSubmit, loading, isUpdate = false }) {
  return (
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow space-y-4">
          <FormTextInput label="Name" name="name" value={formData.name} onChange={handleChange} error={errors.name}/>
          <FormTextInput label="Scientific Name" name="scientificName" value={formData.scientificName}
                         onChange={handleChange} error={errors.scientificName}/>

          <select name="category" value={formData.category} onChange={handleChange}
                  className="w-full border px-3 py-2 rounded">
              <option value="vegetable">Vegetable</option>
              <option value="fruit">Fruit</option>
              <option value="flower">Flower</option>
          </select>

          <FormTextInput label="Climate" name="climate" value={formData.climate} onChange={handleChange}
                         error={errors.climate}/>
          <FormTextInput label="Soil Type" name="soil" value={formData.soil} onChange={handleChange}
                         error={errors.soil}/>
          <FormTextInput label="Sunlight" name="sunlight" value={formData.sunlight} onChange={handleChange}
                         error={errors.sunlight}/>
          <FormTextInput label="Watering Frequency" name="wateringFrequency" value={formData.wateringFrequency}
                         onChange={handleChange} error={errors.wateringFrequency}/>
          <FormTextInput label="Growth Type" name="growthType" value={formData.growthType} onChange={handleChange}
                         error={errors.growthType}/>

          <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full border px-3 py-2 rounded"
          />
          <div className="mb-4">
              <label className="block mb-1 text-sm font-medium text-gray-700">Upload Image</label>
              <input
                  type="file"
                  name="image"
                  accept="image/*"
                  onChange={handleChange}
                  className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer focus:outline-none"
              />
              {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>
          {/*<FormTextInput label="Image URL" name="imageUrl" value={formData.imageUrl} onChange={handleChange} error={errors.imageUrl} />*/}

          <button
              type="submit"
              disabled={loading}
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition disabled:opacity-50"
          >
              {loading ? 'Submitting...' : isUpdate ? 'Update Plant' : 'Submit Plant'}
          </button>
      </form>
  );
}
