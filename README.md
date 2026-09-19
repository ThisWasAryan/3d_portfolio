# Interactive 3D Portfolio

An interactive, 3D web-based portfolio representing my personal room and workspace. 

Built with:
- React 18
- Vite
- Three.js & React Three Fiber (R3F)
- GSAP (for animations)
- Zustand (for state management)
- react-rnd (for draggable desktop windows)

## Architecture

The application acts as a state machine managing different `viewModes`:
1. `loading`: Initial load screen with CSS animations.
2. `room`: 3D representation of the room with a parallax depth shader.
3. `laptop-transition`: GSAP animation moving the camera into the laptop screen.
4. `login`: Mock OS login screen.
5. `desktop`: Fully functional mock OS environment with a window manager, taskbar, and applications.
6. `shutdown`: Reverse GSAP animation moving the camera out of the laptop screen and closing the lid.

## How to run locally

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```
