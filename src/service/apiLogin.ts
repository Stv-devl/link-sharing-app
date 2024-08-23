/**
 * apiLogin to authenticate a user.
 * Sends a POST request to the server with the user's credentials.
 * @param {string} email - The user's email.
 * @param {string} password - The user's password.
 * @returns {Promise<{ token: string, userId: string }>} - A promise with the user's token and userId if login is successful.
 * @throws {Error} - Throws an error if the login request fails or if the response status is not 200.
 */

const apiLogin = async (
  email: string,
  password: string
): Promise<{ token: string; userId: string }> => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      console.log('Login successful');
      const data = await response.json();
      const { token, userId } = data;

      return { token, userId };
    } else {
      console.error('Login failed with status', response.status);
      throw new Error('Login failed');
    }
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export default apiLogin;
