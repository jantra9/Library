import React, { useState } from 'react'

const ImageUpload = () => {
        const [image, setImage] = useState<string | null>(null);
        const [imageName, setImageName] = useState<string | null>(null);
        const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const file = event.target.files?.[0];
          if (file) {
            const imageUrl = URL.createObjectURL(file); // Generate a preview URL
            setImage(imageUrl);
            setImageName(file.name);
          }
        };
  return (
    <div className='py-2'>
        <input
        type="file"
        accept="image/*"
        className="hidden"
        id="fileInput"
        onChange={handleImageChange}
        />
        <label
            htmlFor="fileInput"
            className="cursor-pointer px-8 py-2 bg-[#e7c9a5] text-black font-semibold rounded-md"
        >
            Choose Image
        </label>
        {imageName && <p className="text-white-700 mt-3">Selected Image: <strong>{imageName}</strong></p>}
    </div>
  )
}

export default ImageUpload
