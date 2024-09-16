import { LinkDetail, UpdateLinkResponse } from '@/types/types';

/**
 * Updates a user's links by sending a PUT request to the API.
 * Sends the userId and updated links to the server and handles the response.
 * @param {string} userId - The ID of the user.
 * @param {LinkDetail[]} links - An array of link details to be updated.
 * @returns {Promise<UpdateLinkResponse>} A promise that resolves to the API response after updating the links.
 */

const apiUpdateLink = async (
  userId: string,
  links: LinkDetail[]
): Promise<UpdateLinkResponse> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/links`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, links }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      throw new Error(`Failed to update the links: ${errorDetails}`);
    }

    return (await response.json()) as UpdateLinkResponse;
  } catch (error) {
    console.error('Error updating the links:', error);
    throw error;
  }
};

export default apiUpdateLink;
