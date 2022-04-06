
# Three JS MasonaryImage Gallery with Sprite Animation

This dynamic image gallery showcases a seamless integration of static images within a 3D environment, enhanced by sprite PNG animations to mimic GIF-like dynamics on a canvas. Initially designed to fetch images dynamically from Unsplash, the project has pivoted to static images for improved consistency and control. A unique feature includes calculating the camera's Z-position to maintain an accurate unit-to-pixel ratio, ensuring images are displayed realistically in 3D space.

## Features

- **Curated Static Image Gallery:** Offers a handpicked selection of images for a consistent and controlled display.
- **Sprite PNG Animation:** Simulates GIF animations on canvas, bypassing the limitation of GIFs in 3D environments.
- **Responsive 3D Grid Layout:** Adapts to various screen sizes and orientations, providing an optimal viewing experience across devices.
- **Custom Camera Positioning:** Utilizes a specially formulated calculation to accurately position the camera within the 3D space, preserving the intended scale and proportions of images.

## Demo

Check out the live demo of the project here: [Live Demo](https://threejs-masonary-grid.netlify.app/)

## Getting Started

To set up the project locally for development:

### Prerequisites

Before you begin, ensure you have the following software installed on your system:

- **Node.js**: This project requires Node.js version 16.13.0, is recommended for the best compatibility and performance.
- A package manager [yarn](https://yarnpkg.com/en/docs/getting-started)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TBCDimash/threejs-masonry.git

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

