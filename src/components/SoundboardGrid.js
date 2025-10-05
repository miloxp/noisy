import React, { useState } from "react";
import Images from "../assets/images";
import Sounds from "../assets/sounds";
const soundItems = [
  { id: 1, name: "Bee", image: Images.bee, sound: Sounds.AVEJA, emoji: "🐝" },
  {
    id: 2,
    name: "Bell",
    image: Images.bell,
    sound: Sounds.CAMPANA,
    emoji: "🔔",
  },
  { id: 3, name: "Car", image: Images.car, sound: Sounds.CARRO, emoji: "🚗" },
  { id: 4, name: "Cat", image: Images.cat, sound: Sounds.GATO, emoji: "🐱" },
  { id: 5, name: "Dog", image: Images.dog, sound: Sounds.PERRO, emoji: "🐶" },
  {
    id: 6,
    name: "Donkey",
    image: Images.donkey,
    sound: Sounds.BURRO,
    emoji: "🫏",
  },
  {
    id: 7,
    name: "Drum",
    image: Images.drum,
    sound: Sounds.TAMBOR,
    emoji: "🥁",
  },
  {
    id: 8,
    name: "Guitar",
    image: Images.guitar,
    sound: Sounds.GRITARRA,
    emoji: "🎸",
  },
  { id: 9, name: "Gun", image: Images.gun, sound: Sounds.PISTOLA, emoji: "🔫" },
  {
    id: 10,
    name: "Phone",
    image: Images.phone,
    sound: Sounds.FELEFONO,
    emoji: "📞",
  },
  {
    id: 11,
    name: "Piano",
    image: Images.piano,
    sound: Sounds.PIANO,
    emoji: "🎹",
  },
  { id: 12, name: "Pig", image: Images.pig, sound: Sounds.CERDO, emoji: "🐷" },
  {
    id: 13,
    name: "Santa",
    image: Images.santa,
    sound: Sounds.PAPA_NOEL,
    emoji: "🎅",
  },
  {
    id: 14,
    name: "Saw",
    image: Images.saw,
    sound: Sounds.SERRUCHO,
    emoji: "🪚",
  },
  {
    id: 15,
    name: "Teapot",
    image: Images.teapot,
    sound: Sounds.TETERA,
    emoji: "🫖",
  },
  {
    id: 16,
    name: "Tiger",
    image: Images.tiger,
    sound: Sounds.TIGRE,
    emoji: "🐅",
  },
];

const SoundboardGrid = () => {
  const [playingSound, setPlayingSound] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = (soundFile, itemId) => {
    // Stop any currently playing sound
    if (playingSound) {
      playingSound.pause();
      playingSound.currentTime = 0;
    }

    // Play new sound
    const audio = new Audio(soundFile);

    // Add error handling
    audio.onerror = () => {
      console.warn(`Failed to load sound: ${soundFile}`);
      setPlayingSound(null);
      setIsPlaying(false);
    };

    audio.play().catch((error) => {
      console.warn(`Failed to play sound: ${soundFile}`, error);
      setPlayingSound(null);
      setIsPlaying(false);
    });

    setPlayingSound(audio);
    setIsPlaying(itemId);

    // Reset playing state when sound ends
    audio.onended = () => {
      setPlayingSound(null);
      setIsPlaying(false);
    };
  };

  const stopSound = () => {
    if (playingSound) {
      playingSound.pause();
      playingSound.currentTime = 0;
      setIsPlaying(false);
    }
  };

  // Create 6x6 grid (36 total buttons)
  // We have 16 items, so we'll fill the remaining 20 with placeholder buttons
  const gridItems = [];

  // Add the 16 real items
  soundItems.forEach((item) => {
    gridItems.push(item);
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-noisy-warm rounded-full opacity-20 animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-24 h-24 bg-noisy-cool rounded-full opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-16 h-16 bg-noisy-purple rounded-full opacity-20 animate-float"
          style={{ animationDelay: "1.5s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Interactive <span className="text-noisy-primary">Soundboard</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Click any button to play sounds! Tap, laugh, and repeat.
          </p>
        </div>

        {/* Responsive 6x6 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 max-w-6xl mx-auto">
          {gridItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() =>
                item.isPlaceholder
                  ? null
                  : isPlaying === item.id
                  ? stopSound()
                  : playSound(item.sound, item.id)
              }
              disabled={item.isPlaceholder}
              className={`
                aspect-square rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 transition-all duration-300 transform hover:scale-105 hover:shadow-xl
                ${
                  item.isPlaceholder
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-white hover:bg-gradient-to-br hover:from-noisy-primary/10 hover:to-noisy-secondary/10 shadow-lg hover:shadow-2xl"
                }
                ${
                  isPlaying === item.id
                    ? "ring-2 ring-noisy-primary ring-opacity-50"
                    : ""
                }
              `}
            >
              <div className="flex flex-col items-center justify-center h-full">
                {/* Image or Emoji */}
                <div className="mb-1 sm:mb-2">
                  {item.image && !item.isPlaceholder ? (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                      onError={(e) => {
                        console.warn(`Failed to load image: ${item.image}`);
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="text-xl sm:text-2xl md:text-3xl">
                      {item.emoji}
                    </div>
                  )}
                </div>

                {/* Name */}
                <div className="text-xs sm:text-sm font-semibold text-center leading-tight px-1">
                  {item.name}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 max-w-2xl mx-auto mx-4">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
              How to Use
            </h3>
            <p className="text-sm sm:text-base text-gray-600">
              Click any button to play its sound. The buttons with images are
              ready to use, while the "Coming Soon" buttons will be available in
              future updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SoundboardGrid;
