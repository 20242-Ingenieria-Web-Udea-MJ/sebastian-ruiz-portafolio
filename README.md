
# Sebastian Ruiz Portfolio

This is a personal portfolio project built with Next.js, React, and TypeScript. It showcases various projects, experiences, and skills.
built for the web enginering class at the University of Antioquia. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Scripts](#scripts)
- [License](#license)

## Features

### Core Features

- **Showcase Projects**: Display a portfolio of projects, including details like descriptions, images, and links to live versions or repositories.
- **Showcase Experience**: Display a list of job, including current and past job descriptions, duration and company.
- **Progression Table**: A dedicated table that dynamically displays progression details about skills and experience.
- **Profile and About Sections**: Well-organized profile and about sections to provide a detailed personal overview.
- **Skill List**: Lists all relevant skills and technologies in a visually appealing way.

### Additional Features

- **Mobile Version**: The portfolio is optimized for mobile devices with a fully functional mobile navigation bar and responsive components that adjust to different screen resolutions.
- **Light/Dark Theme Toggle**: Users can toggle between light and dark themes using a theme toggle button, which preserves the selected theme even after page refreshes.

## Installation

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/imsebarz/Sebastian-Ruiz-Portfolio.git
cd Sebastian-Ruiz-Portfolio
npm install
```

## Usage

To run the development server:

```bash
npm run dev
```

To build the project for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

To lint the code:

```bash
npm run lint
```

- `src/components`: Contains all the React components used in the project.
- `src/lib`: Utility functions and libraries.
- `src/pages`: Next.js pages.
- `src/styles`: Global and component-specific styles.

## Components

### Atoms

- **RoundedLinkButton**: A button component with rounded styling.

### Molecules

- **Footer**: The footer of the portfolio.
- **Header**: The header section of the portfolio.
- **InformationTable**: A table component for displaying information.
- **MobileNavBar**: Navigation bar optimized for mobile devices.
- **Paragraph**: A paragraph component.
- **PortfolioCard**: A card component to showcase portfolio projects.
- **Profile**: Displays user profile information.
- **ProgressionTable**: A table to display progression information.
- **SkillsList**: A component listing various skills.

### Organisms

- **About**: About section of the portfolio.
- **Body**: Main content of the portfolio, including knowledge cards and portfolio cards.
- **Grid**: A grid layout component.
- **Links**: Contains the `ThemeToggleButton` and `RoundedLinkButton` components.
- **List**: A list component for displaying items.
- **Portfolio**: Section that showcases portfolio projects.

### UI

- **UI components**: UI components coming from @shadcn/ui

## License

This project is licensed under the MIT License.
