import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';
import ProfilePictureUpload from '../shared/ProfilePictureUpload';
import toast from 'react-hot-toast';

const UserProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '',
    email: user?.email || '',
    profilePicture: user?.profilePicture || ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleProfilePictureUpload = async (file) => {
    // Simulate upload - replace with actual API call
    return new Promise((resolve) => {
      setTimeout(() => {
        const imageUrl = URL.createObjectURL(file);
        setFormData(prev => ({ ...prev, profilePicture: imageUrl }));
        toast.success('Profile picture updated!');
        resolve();
      }, 1000);
    });
  };

  const handleSave = () => {
    // Simulate save - replace with actual API call
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setFormData({
      username: user?.username || '',
      email: user?.email || '',
      profilePicture: user?.profilePicture || ''
    });
    setIsEditing(false);
  };

  return (
    <div className="theme-bg-primary min-h-screen py-8">
      <div className="lg:px-14 sm:px-8 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="theme-bg-card rounded-lg shadow-lg p-8 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold theme-text-primary mb-2 animate-bounce-in">
                User Profile
              </h1>
              <p className="theme-text-secondary">
                Manage your account settings and preferences
              </p>
            </div>

            <div className="flex flex-col items-center mb-8 animate-slide-in-left">
              <ProfilePictureUpload
                currentImage={formData.profilePicture}
                onImageUpload={handleProfilePictureUpload}
                size="xl"
              />
              <h2 className="text-xl font-semibold theme-text-primary mt-4">
                {formData.username}
              </h2>
              <p className="theme-text-secondary">{formData.email}</p>
            </div>

            <div className="space-y-6 animate-slide-in-right">
              <div>
                <label className="block text-sm font-medium theme-text-primary mb-2">
                  Username
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg theme-bg-primary theme-text-primary theme-border border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                ) : (
                  <p className="px-4 py-2 theme-bg-secondary theme-text-primary rounded-lg">
                    {formData.username}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium theme-text-primary mb-2">
                  Email
                </label>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg theme-bg-primary theme-text-primary theme-border border focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                ) : (
                  <p className="px-4 py-2 theme-bg-secondary theme-text-primary rounded-lg">
                    {formData.email}
                  </p>
                )}
              </div>

              <div className="flex justify-center space-x-4 pt-6">
                {isEditing ? (
                  <>
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all duration-300 btn-animated micro-bounce"
                    >
                      <FaSave />
                      <span>Save Changes</span>
                    </button>
                    <button
                      onClick={handleCancel}
                      className="flex items-center space-x-2 px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-all duration-300 btn-animated micro-bounce"
                    >
                      <FaTimes />
                      <span>Cancel</span>
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300 btn-animated micro-bounce hover-scale"
                  >
                    <FaEdit />
                    <span>Edit Profile</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;