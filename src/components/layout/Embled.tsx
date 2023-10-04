import React from "react";

function Embled() {
  return (
    <div className="w-10/12 m-10">
      <iframe
        className="rounded-xl"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZjqjZMudx9T?utm_source=generator"
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Embled;
