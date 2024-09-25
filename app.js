const client_id = '31aa576c2f2340f59a2d748a6f0ece5d'; // Replace with your Spotify Client ID
const redirect_uri = 'http://localhost:8080/callback'; // Replace with your Redirect URI

document.getElementById('login-button').addEventListener('click', () => {
    const scopes = 'user-top-read user-read-private'; // Scope for reading user data
    const authUrl = `https://accounts.spotify.com/authorize?response_type=token&client_id=${client_id}&scope=${encodeURIComponent(scopes)}&redirect_uri=${encodeURIComponent(redirect_uri)}`;
    
    // Redirect user to Spotify login
    window.location.href = authUrl;
});
