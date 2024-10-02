# Portfolio


## How to Run

There are 2 ways to run the project:
### I. Online
Go to 

### II. Locally
1. Clone the repository.
2. Run `yarn dev`.
3. Go to https://localhost:3000

## Project Structure

This project is using atomic design. This means that it is decomposed in different parts, based on the size of the components.
The smaller components are atoms. Then an aggregation of atoms makes a molecule. The aggregation of molecules and atoms makes organisms. Those components are composing pages.
The project is also using Tailwind for the style.

- `public/img`: Here are all the images used in the project
- `src/components`: You can find here the different layers of components (from atom to organism).
- `src/components/ui`: Those are the shadcn atomic components.
- `src/pages`: The index.tsx file is the only page here, it uses the organisms.

## License

This project is licensed under the MIT License.