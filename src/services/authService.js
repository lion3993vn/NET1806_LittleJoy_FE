
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }
  
  const response = await fetch('https://littlejoyapi.azurewebsites.net/api/authen/refresh-token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(refreshToken)
  });

  const data = await response.json();
  console.log(data);
  if (response.ok) {
    localStorage.setItem('accessToken', data.accessToken);
    return data.accessToken;
  } else {
    throw new Error('Failed to refresh token');
  }
};