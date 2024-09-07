import { LinkDetail, UpdateLinkResponse } from '@/types/types';

/**.
 * @throws Will throw an error if the request fails.
 */
const apiUpdateLink = async (
  userId: string,
  links: LinkDetail[]
): Promise<UpdateLinkResponse> => {
  console.log('apiupdate', userId, links);

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
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
