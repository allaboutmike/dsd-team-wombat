# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

# Installation

1. Clone the repo
2. Make sure to move into 'user' directory
3. Install Node: npm install
4. Run the development environment with 'npm run dev' and open browser in localhost

# How to Use the Project

Upon load, user arrives at the landing view with a button that will initiate the webcam view component. With live camera view, a 'capture' button is displayed: upon clicking it will capture current frame and display it to the right as well as a submit button and field. The user may repeat this process until the image is to their liking. When ready, user fills in badgeID and clicks the submit button.

At this point the image is sent to the server/API for verification (Deepface). If the response returns 'true', user view changes to "Success." If response returns 'false', the Admin is notified and sent an option to review the attempt with an option to manually override. If overridden, user view changes to "Success" as well. Otherwise, the authentication has failed and the user will be locked out.

<!-- Screenshots -->

# Credits

<!-- List your collaborators/team members. Links to GitHub profiles and social media.

Tutorials or referenced that might help the user to build that particular project, w links. -->

# Tests

<!-- Tests & code examples and how to run them. -->
