# 🍅 Nightshade - Modern Pomodoro Timer

A beautiful, simple, and configurable Pomodoro timer app built with modern web technologies.

## ✨ Features

- **Classic Pomodoro Technique**: 25-minute work sessions followed by short breaks
- **Automatic Progress Tracking**: Visual indicator showing your progress through the Pomodoro cycle
- **Long Breaks**: After 4 work sessions, enjoy a longer 15-minute break
- **Beautiful UI**: Modern design with smooth animations and color transitions
- **Responsive**: Works perfectly on desktop and mobile devices
- **Simple Controls**: Click the timer to start/pause, with reset and skip buttons

## 🛠️ Tech Stack

- **[Vite](https://vitejs.dev/)** - Lightning-fast build tool and dev server
- **[React 18](https://react.dev/)** - Modern React with hooks and concurrent features
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Beautiful component library for Tailwind
- **[Lucide React](https://lucide.dev/)** - Modern icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

The app will open automatically at `http://localhost:3000`

### Build

Create a production build:
```bash
npm run build
```

### Preview

Preview the production build:
```bash
npm run preview
```

## 🎨 Customization

### Changing Timer Durations

Edit the constants in `src/App.tsx`:

```typescript
const WORK = 1500;        // 25 minutes in seconds
const SHORT_BREAK = 300;  // 5 minutes in seconds
const LONG_BREAK = 900;   // 15 minutes in seconds
```

### Theming

The app uses a custom DaisyUI theme defined in `tailwind.config.js`. You can customize the colors to match your preferences:

```javascript
pomodoro: {
  "primary": "#FE4869",    // Work session color
  "secondary": "#40C355",  // Break color
  "accent": "#22AC38",     // Active work color
  "error": "#EB1649",      // Default timer color
}
```

## 📝 How to Use

1. **Start a session**: Click on the timer display to start counting down
2. **Pause**: Click again to pause the timer
3. **Reset**: Click the reset button (↻) to restart the current session
4. **Skip**: Click the skip button (⏭) to move to the next session
5. **Track progress**: Watch the dots at the top to see how many work sessions you've completed

## 🔄 The Pomodoro Cycle

1. Work (25 min) → Short Break (5 min)
2. Work (25 min) → Short Break (5 min)
3. Work (25 min) → Short Break (5 min)
4. Work (25 min) → Short Break (5 min)
5. Work (25 min) → **Long Break (15 min)** ← Cycle repeats

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with modern React and Vite for optimal performance
- Styled with Tailwind CSS and DaisyUI for a beautiful, responsive UI
- Icons from Lucide React

---

**Happy productivity! 🚀**
