AI Mood-Based Playlist Generator
ECHO MOODS

An AI-powered web app that generates personalized Spotify playlists based on your mood prompts.
It uses Google Gemini to interpret natural-language mood descriptions and Spotify API to fetch curated playlists and tracks.

Screenshots

<img width="1913" height="918" alt="image" src="https://github.com/user-attachments/assets/f45cab13-dc71-4c88-8976-e92f4e5cd5a5" />
<img width="1914" height="914" alt="image" src="https://github.com/user-attachments/assets/bc2335c3-eb7c-47aa-929c-4e9294b78bc9" />
<img width="1916" height="928" alt="image" src="https://github.com/user-attachments/assets/0d3c3074-d09b-4292-944a-f65775dd7ded" />
<img width="1910" height="918" alt="image" src="https://github.com/user-attachments/assets/42c9789d-803a-4995-ac50-cc795e260489" />
<img width="1919" height="916" alt="image" src="https://github.com/user-attachments/assets/6d78321e-e61d-4e53-a6a0-9ec6343d211f" />
<img width="1919" height="923" alt="image" src="https://github.com/user-attachments/assets/17f13049-bcb0-4276-8952-a65b8f7979b8" />
<img width="1919" height="917" alt="image" src="https://github.com/user-attachments/assets/090daccc-2697-48d5-8da1-6bcc38654ab8" />


Project Description

This project allows users to input a mood or activity (e.g., “energetic workout”, “chill study vibes”, “late-night drive”) and automatically generates a Spotify playlist that matches the mood.

The backend uses Google Gemini to interpret prompts into 2–3 keywords.

It then queries the Spotify API to find playlists/tracks that align with those keywords.

The frontend displays the generated playlist with album art, song previews, and links to open in Spotify.

Tech Stack

Frontend

React.js (CRA)

CSS

Backend

Node.js 

Google Gemini API (Generative Language API)

Spotify Web API

dotenv (for environment variables)

node-fetch

Other Tools

Git & GitHub

npm

Features

✔️ Enter any mood/activity prompt in natural language
✔️ AI interprets the mood into concise keywords
✔️ Spotify API fetches relevant playlists and tracks
✔️ Display playlist with:
Song names
Artists
Album art

✔️ Responsive frontend interface
✔️ Clean error handling for missing tracks

Setup Instructions
1. Clone Repository
git clone 
cd 

2. Install Dependencies
# Install frontend
cd frontend
npm install

# Install backend
cd ../backend
npm install

3. Create .env file in backend/
PORT=5000
GEMINI_API_KEY=your_google_gemini_api_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret

4. Run Backend
cd backend
npm start


Backend should run on http://localhost:5000.

5. Run Frontend
cd frontend
npm start


Frontend should run on http://localhost:3000.

Future Improvements

Add user authentication (Spotify login for personal playlists)

Allow saving playlists directly to user’s Spotify account

Add “regenerate playlist” button for variety
