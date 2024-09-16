import { ProfilDetail, UpdateProfileResponse } from '@/types/types';

/**
 * Updates a user's profile by sending a PUT request with profile data.
 * Handles image uploads if provided.
 * @param {string} userId - The ID of the user.
 * @param {ProfilDetail} updatedProfile - The updated profile details.
 * @returns {Promise<UpdateProfileResponse>} The response from the API after updating the profile.
 */

const apiUpdateProfile = async (
  userId: string,
  updatedProfile: ProfilDetail
): Promise<UpdateProfileResponse> => {
  try {
    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('firstname', updatedProfile.firstname || '');
    formData.append('lastname', updatedProfile.lastname || '');
    formData.append('email', updatedProfile.email || '');

    if (updatedProfile.image && updatedProfile.image instanceof File) {
      formData.append('image', updatedProfile.image);
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: 'PUT',
      body: formData,
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to update the profile: ${errorDetails}`);
    }

    return (await response.json()) as UpdateProfileResponse;
  } catch (error) {
    console.error('Error updating the profile:', error);
    throw error;
  }
};

export default apiUpdateProfile;
