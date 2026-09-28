<div align="center">

# 🎸 Interactive String

A minimal, satisfying interactive SVG "string" that bends toward your cursor and snaps back with a smooth elastic animation — built with plain JS, SVG, and GSAP.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Demo

Move your mouse across the string and it curves toward your pointer in real time. Move away, and it springs back into a straight line with an elastic bounce, just like plucking a real string.

> Add a GIF or a live link here (e.g. `![Demo](demo.gif)`) — motion projects like this shine with a preview.

## ✨ Features

- 🌀 Smooth, physics-like elastic snap-back animation
- 📐 Real-time SVG path manipulation using a quadratic Bézier curve
- 🪶 Lightweight — no build tools, frameworks, or dependencies beyond GSAP
- ⚡ Powered by GSAP's animation engine for buttery-smooth interpolation

## 🚀 Getting Started

### Prerequisites

Just a web browser and an internet connection (GSAP loads from a CDN).

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/interactive-string.git

# Navigate into the project directory
cd interactive-string

# Open the page directly
open index.html        # macOS
start index.html         # Windows
xdg-open index.html       # Linux
```

Or serve it with any static file server:

```bash
npx serve .
```

## 📁 Project Structure

```
.
├── index.html      # Markup with the SVG string element
├── index.css       # Base styling and layout
├── index.js        # Mouse tracking + GSAP animation logic
└── README.md
```

## ⚙️ How It Works

1. The SVG path starts as a flat quadratic curve: `M 0 100 Q 750 100 1500 100`.
2. On `mousemove`, the curve's control point is updated to the cursor's `x, y` position, bending the string toward it (eased with `power3.out`).
3. On `mouseleave`, GSAP animates the control point back to its resting position using `elastic.out`, creating a springy "twang" effect.

```
Rest:     M 0 100  Q 750 100  1500 100     (straight line)
Hovering: M 0 100  Q cursorX cursorY 1500 100   (curved toward pointer)
```

## 🎨 Customization

| What                      | Where to change it                                |
|---------------------------|-----------------------------------------------------|
| String thickness          | `stroke-width` in `index.css`                       |
| String color              | `stroke` attribute in `index.html`                  |
| Snap-back speed / bounce  | `duration` / `elastic.out(1, 0.2)` in `index.js`    |
| Follow responsiveness     | `duration` / `power3.out` in `index.js`             |
| String length / canvas size | `width` / `height` on the `<svg>`                 |

## 🛠️ Tech Stack

| Layer     | Technology                                                     |
|-----------|------------------------------------------------------------------|
| Shape     | HTML5 & SVG                                                     |
| Styling   | CSS3                                                            |
| Logic     | Vanilla JavaScript — mouse tracking and interaction             |
| Animation | [GSAP](https://gsap.com/) — `power3.out` on hover, `elastic.out` on release |

## 🗺️ Possible Improvements

- [ ] Add touch support (`touchmove` / `touchend`) for mobile
- [ ] Map cursor coordinates through the SVG's `viewBox` so the curve stays accurate on any screen size
- [ ] Add multiple strings, or make them playable with sound (Web Audio API)
- [ ] Make the string responsive to window resizing
- [ ] Add a `prefers-reduced-motion` fallback

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or pull request.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

<div align="center">
Made with 🎶 and GSAP
</div>
