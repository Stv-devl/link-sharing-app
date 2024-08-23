/**
 * Verifies the user's authentication status by sending a GET request to the server.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the user is authenticated, or `false` if not.
 * @throws {Error} If the verification request fails.
 */

const apiVerify = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/verify`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error verifying authentication:', error);
    return false;
  }
};

export default apiVerify;
