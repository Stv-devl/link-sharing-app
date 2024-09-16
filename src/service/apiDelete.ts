/**
 * Deletes a user's link based on userId and linkKey.
 * Sends a DELETE request to the API and handles the response.
 * @param {string} userId - The ID of the user.
 * @param {string} linkKey - The key of the link to delete.
 * @returns {Promise<void>} A promise that resolves when the deletion is complete.
 */

async function apiDelete(userId: string, linkKey: string) {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, linkKey }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message);
    } else {
      const errorData = await response.json();
      console.error(errorData.message);
    }
  } catch (error) {
    console.error('Error deleting Link:', error);
  }
}

export default apiDelete;
