# React Setup from Scratch using Functional Components and with AirBnB and A11y (Accessibility) ESLint Rules

## How to Install

- **IMPORTANT:** This setup uses JavaScript and NOT TypeScript.
- Install [VS Code](https://code.visualstudio.com/) (Visual Studio Code)
- Install the the following VS Code extensions and activate them:
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- Checkout this repo
- In your terminal in the root directory do:  
  `npm i`

## How to View Basic React Demo

- In your terminal in the root directory do:  
  `npm start`
- To build your app:
  - In the root directory do `npm run build`
  - In VS Code open the **index.html** file inside the **dist** folder, right click on the middle of the open file, and choose **Open with Live Server** from the drop-down and you will go to a URL like the example below to see your built app:  
    `http://127.0.0.1:5500/dist/index.html`

## Prettier Extension Details

- When saving JS and JSX files (and maybe other ones like HTML files) Prettier will sometimes make changes automatically, like indenting some lines or deleting lines so this is expected

## Using ESLint to Format and Check JS and JSX Files

- To format JS and JSX files using ESLint and Prettier rules in your terminal in the root directory do:  
  `npm run format`
- To run ESLint against your JS and JSX files in the root directory do:  
  `npm run lint`
- To allow class components (and not ONLY function components) on the **.eslintrc.json** file in the `"rules"` entry add a `"react/prefer-stateless-function": false` property value like the example below (which also forces you to make semicolons not optional):

```
  "rules": {
    "semi": "error",
    "react/prefer-stateless-function": false
  }
```

## AirBnB React ESLint Rules for JS and JSX

- With the current setup in this repo, functional components will need to use normal functions and NOT arrow functions. A good example is below:
  ```
  // good
  function Listing({ hello }) {
    return <div>{hello}</div>;
  }
  ```
- Any file using JSX must have a **.jsx** extension and NOT a **.js** extension. Example below:

  ```
  function App() {
    return (
      <div>
        <h1>{lowerCase('My React + Webpack Template')}</h1>
      </div>
    );
  }

  export default App;
  ```

- For a largest list of rules see:  
  [Airbnb JavaScript Style Guide (React)](https://airbnb.io/javascript/react/)

## A11y (Accessibility Rules)

- Added from the [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) npm package
- This includes standard accessibility rules and is applied to JSX, like on an `<img />` tag always adding an `alt` attribute that contains an empty or non-empty string
