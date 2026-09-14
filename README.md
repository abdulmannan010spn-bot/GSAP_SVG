# 🎸 Interactive String

A minimal, satisfying interactive SVG "string" that bends toward your cursor and snaps back with a smooth elastic animation — built with plain JS, SVG, and GSAP.

![License](https://img.shields.io/badge/license-MIT-green) ![Made with](https://img.shields.io/badge/made%20with-GSAP-88CE02)

## ✨ Demo

Move your mouse across the string — it curves toward your pointer in real time. Move away, and it springs back into a straight line with an elastic bounce, just like plucking a real string.

## 🚀 Features

- Smooth, physics-like elastic snap-back animation
- Real-time SVG path manipulation using a quadratic Bézier curve
- Lightweight — no build tools, frameworks, or dependencies beyond GSAP
- Powered by GSAP's animation engine for buttery-smooth interpolation

## 🛠️ Tech Stack

- **HTML5** & **SVG** — for the string's shape
- **CSS3** — layout and styling
- **JavaScript (Vanilla)** — mouse tracking and interaction logic
- **[GSAP](https://gsap.com/)** — animation and easing (`power3.out` on hover, `elastic.out` on release)

## 📁 Project Structure

```
.
├── index.html      # Markup with the SVG string element
├── index.css       # Base styling and layout
├── index.js        # Mouse tracking + GSAP animation logic
└── README.md
```

## ⚙️ How It Works

- The SVG path starts as a flat quadratic curve: `M 0 100 Q 750 100 1500 100`
- On `mousemove`, the curve's control point is updated to the cursor's `x, y` position, bending the string toward it
- On `mouseleave`, GSAP animates the control point back to its resting position using an elastic ease, creating a springy "twang" effect

## 🎨 Customization

| What                     | Where to change it                  |
|--------------------------|--------------------------------------|
| String thickness         | `stroke-width` in `index.css`        |
| String color             | `stroke` attribute in `index.html`   |
| Snap-back speed/bounce   | `duration` / `elastic.out(1, 0.2)` in `index.js` |
| Follow responsiveness    | `duration` / `power3.out` in `index.js` |
| String length/canvas size| `width` / `height` on the `<svg>`    |

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with 🎶 and GSAP.
