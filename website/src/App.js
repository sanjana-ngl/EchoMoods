import React, { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [playlists, setPlaylists] = useState([]);

  function handleGenerate(e) {
    e.preventDefault();
    // here you would call your backend for Gemini + Spotify
    setPlaylists([
      {
        name: "Chill Vibes",
        tracks: [
          {
            
          },
        ],
      },
    ]);
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Mood2Playlist</h1>
        <p>Tell Gemini your mood — get Spotify playlists curated to your vibe.</p>
      </header>

      <form className="prompt-form" onSubmit={handleGenerate}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe a mood, e.g. late-night lo-fi, workout pump-up..."
        />
        <button type="submit">Generate Playlists</button>
      </form>

      <main>
        {playlists.map((pl, idx) => (
          <div className="playlist-card" key={idx}>
            <h2>{pl.name}</h2>
            <ul>
              {pl.tracks.map((t) => (
                <li key={t.id}>
                  <img src={t.albumArt} alt={t.album} />
                  <div>
                    <strong>{t.name}</strong>
                    <div>{t.artists.join(", ")}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
