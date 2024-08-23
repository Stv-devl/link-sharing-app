import { Users } from '../types/types';

/**
 * apiGet function
 * Fetches user data from the API endpoint and returns it. Logs an error if the fetch operation fails.
 * @async
 * @returns {Promise<{ users: Users[] }>} - The data fetched from the API.
 * @throws {Error} - If there is a problem with the fetch operation.
 */
const apiData = async (): Promise<{ users: Users[] }> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Error fetching data from ${url}. Status: ${response.status}`
      );
    }

    const users: Users[] = await response.json();

    return { users };
  } catch (error: unknown) {
    console.error('There has been a problem with your fetch operation:', error);
    throw error;
  }
};

export default apiData;
