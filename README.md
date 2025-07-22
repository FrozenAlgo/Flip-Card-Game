# 🎮 Emoji Flip Card Memory Game

A fun and interactive browser-based memory game where players flip cards to find matching emoji pairs. Built with modern web technologies and featuring smooth animations, confetti celebrations, and a built-in timer.

## ✨ Features

- **🃏 16 Card Grid**: 4x4 grid with 8 unique emoji pairs
- **⏱️ Timer**: Track your completion time with MM:SS format
- **🎯 Matching Logic**: Flip two cards to find matching pairs
- **✨ Animations**: Smooth card flip animations with CSS transforms
- **🎉 Victory Celebration**: Confetti animation and fireworks on completion
- **🔄 Auto Reset**: Game automatically resets after 3 seconds of winning
- **📱 Responsive Design**: Works on desktop and mobile devices
- **🎨 Modern UI**: Glassmorphism effects with backdrop blur
- **🌊 Gradient Backgrounds**: Beautiful cyan color scheme

## 🎯 How to Play

1. Click on any card to flip it and reveal the emoji
2. Click on a second card to find its match
3. If the emojis match, both cards stay flipped
4. If they don't match, both cards flip back after 1 second
5. Continue until all 8 pairs are found
6. Try to complete the game in the shortest time possible!

## 🚀 Getting Started

### Prerequisites

- Modern web browser (Chrome, Firefox, Safari, Edge)
- Node.js and npm (for development)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/FrozenAlgo/Flip-Card-Game.git
   cd Flip-Card-Game
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Build CSS (if making changes)**

   ```bash
   npx tailwindcss -i ./style.css -o ./output.css --watch
   ```

4. **Open the game**
   - Simply open `index.html` in your browser
   - Or use a live server extension in your code editor

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Custom animations and transitions
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Vanilla JavaScript**: Game logic and DOM manipulation
- **Animate.CSS**: Pre-built CSS animations
- **Canvas Confetti**: Celebration effects library

## 📁 Project Structure

```
emoji-memory-game/
├── node_modules   # Node Modules
├── index.html          # Main HTML file
├── script.js           # Game logic and functionality
├── style.css           # Source CSS with Tailwind directives
├── output.css          # Compiled Tailwind CSS
├── tailwind.config.js  # Tailwind configuration
├── package.json        # Project dependencies
├── package-lock.json        # Project dependencies
└── README.md          # Project documentation
```

## 🎨 Game Elements

### Emojis Used

- 😀 Smiley Face
- 🐶 Dog
- 🍕 Pizza
- 🚗 Car
- 🌟 Star
- 🐱 Cat
- 🎈 Balloon
- 🧠 Brain

### Animations

- **Card Flip**: 3D rotation effect using CSS transforms
- **Fade In**: Smooth entrance animations
- **Confetti**: Particle celebration on game completion
- **Fireworks**: Additional victory effects

## 🔧 Customization

### Adding New Emojis

Edit the `emojiList` array in `script.js`:

```javascript
var emojiList = [
  "😀",
  "🐶",
  "🍕",
  "🚗",
  "🌟",
  "🐱",
  "🎈",
  "🧠",
  // Add your emojis here
];
```

### Changing Colors

Modify the Tailwind classes in `index.html` or add custom CSS in `style.css`.

### Adjusting Difficulty

- Change grid size in HTML (currently 4x4)
- Adjust the flip-back delay in `script.js` (currently 1000ms)

## 🎯 Game Mechanics

1. **Card Shuffling**: Uses `Math.random()` to randomize card positions
2. **Match Detection**: Compares `data-emoji` attributes
3. **Flip Animation**: CSS `rotateY(180deg)` transformation
4. **Timer**: Incremental counter starting on page load
5. **Victory Condition**: All 16 cards successfully matched

## 🌟 Future Enhancements

- [ ] Difficulty levels (3x3, 4x4, 5x5 grids)
- [ ] High score tracking with localStorage
- [ ] Sound effects for flips and matches
- [ ] Theme selection (animals, food, etc.)
- [ ] Multiplayer mode

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Animate.CSS](https://animate.style/) for smooth animations
- [Canvas Confetti](https://github.com/catdad/canvas-confetti) for celebration effects
- Emoji graphics provided by the system fonts

## 📞 Contact

Your Name - [@FrozenAlgo](https://portfolio-kappa-nine-204xtzt9as.vercel.app/) - arhamrehan427@gmail.com

Project Link: [https://github.com/FrozenAlgo/Flip-Card-Game](https://github.com/FrozenAlgo/Flip-Card-Game)

---

⭐ **Star this repo if you found it helpful!** ⭐
