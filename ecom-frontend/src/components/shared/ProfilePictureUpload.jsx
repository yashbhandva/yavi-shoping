import { useState, useRef } from 'react';
import { FaCamera, FaUser, FaUpload } from 'react-icons/fa';

const ProfilePictureUpload = ({ currentImage, onImageUpload, size = 'md' }) => {
  const [preview, setPreview] = useState(currentImage);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-20 h-20',
    lg: 'w-32 h-32',
    xl: 'w-40 h-40'
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('File size must be less than 5MB');
        return;
      }

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target.result);
      };
      reader.readAsDataURL(file);

      // Upload file
      if (onImageUpload) {
        setIsUploading(true);
        onImageUpload(file)
          .finally(() => setIsUploading(false));
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative inline-block">
      <div 
        className={`${sizeClasses[size]} rounded-full overflow-hidden border-2 theme-border bg-gray-100 dark:bg-gray-700 cursor-pointer hover-scale transition-all duration-300 relative group`}
        onClick={triggerFileInput}
      >
        {preview ? (
          <img 
            src={preview} 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center theme-text-secondary">
            <FaUser className="text-2xl" />
          </div>
        )}
        
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
            {isUploading ? (
              <div className="animate-spin">
                <FaUpload />
              </div>
            ) : (
              <FaCamera />
            )}
          </div>
        </div>
      </div>

      {/* Camera icon for upload */}
      <button
        onClick={triggerFileInput}
        className="absolute -bottom-1 -right-1 bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 transition-colors duration-300 micro-bounce"
        disabled={isUploading}
      >
        <FaCamera className="text-xs" />
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};

export default ProfilePictureUpload;