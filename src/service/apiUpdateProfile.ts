import {
  ProfilDetail,
  UpdateLinkResponse,
  UpdateProfileResponse,
} from '@/types/types';

const apiUpdateProfile = async (
  userId: string,
  updatedProfile: ProfilDetail
): Promise<UpdateProfileResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, updatedProfile }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to update the profile: ${errorDetails}`);
    }

    return (await response.json()) as UpdateLinkResponse;
  } catch (error) {
    console.error('Error updating the profile:', error);
    throw error;
  }
};

export default apiUpdateProfile;
