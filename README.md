# Personal website

## :sparkles:Currently Hosted on

https://ammmmmyl.github.io/profile

- hosted using `gh-pages`

**to update the github page, do:**

1. For **DEV**, set `"homepage": "https://ammmmmyl.github.io` in package.json

2. For **DEPLOY**, set `"homepage": "https://ammmmmyl.github.io/profile` in package.json
3. `npm run deploy`

   - Debugging run `NODE_DEBUG=gh-pages npm run deploy`

## Get Started

- `npm start`

  Runs the app in the development mode.\
   Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- `npm run storybook`

  start Storybook locally on [http://localhost:6006](http://localhost:6006) and output the address.

- `npm run build`
  `serve -s build`
  Create a production build and serve with a static server.

## Notes

- [Storybook](https://storybook.js.org/docs/react/get-started/introduction)
- Typescript
- [Tailwind](https://tailwindcss.com/docs/installation)
- [axios](https://github.com/axios/axios)
- [Routing](https://reactrouter.com/en/main/start/tutorial)

## TODOS

- different themes color for day, night, sunset

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
