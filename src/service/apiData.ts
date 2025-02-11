import { Users } from '../types/types';

/**
 * apiGet function
 * Fetches user data from the API endpoint and returns it. Logs an error if the fetch operation fails.
 * @async
 * @returns {Promise<{ users: Users[] }>} - The data fetched from the API.
 * @throws {Error} - If there is a problem with the fetch operation.
 */
const apiGetUsers = async (userId: string): Promise<Users | null> => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/users?userId=${userId}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error fetching user. Status: ${response.status}`);
    }

    const user: Users = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

export default apiGetUsers;
