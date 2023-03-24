# Goal of the project

The project was an Alpha to explore the practicalities and technical requirements of a digital service for Heat Network regulation.

The technical focus in the alpha phase project was to gain an understanding of the business needs and policies to create a conceptual solution design for a digital solution using a risk-driven approach that supports Ofgem in the regulation of the Heat Network Sector.

The conceptual solution design was produced using an understanding of the processes associated with the service, how users will interact with a digital solution and the data that is required.

To maximise the opportunity for a successful delivery of the service with a digital solution; design assumptions were tested with the goal of identified risks being mitigated, and user and business needs being better understood.

To support the development of the conceptual solution design the following needed to be understood:

High-level processes associated with the regulatory activities
How a digital solution could support the regulatory processes
What data will be managed by the system and how that would be processed
Constraints on the digital solution
Conceptual solution and architecture for the digital solution

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
It also leverages [govuk-react](https://github.com/govuk-react/govuk-react).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Server Side Rendering (No JavaScript)

This prototype application makes use of JavaScript, JavaScript must be enabled on the clients browser in order to use this application.

In a production environment Server Side Rendering technology must be utilised in order to remove the dependancy on JavaScript.
For more information on how this can be acheived using ReactJS see [ReactDOMServer](https://reactjs.org/docs/react-dom-server.html)
This is highlighted due to the guidelines from the [government service manual](https://www.gov.uk/service-manual/technology/using-progressive-enhancement#do-not-assume-users-turn-off-css-or-javascript) which states:
"You should not assume the reason for designing a service that works without CSS or JavaScript is because a user chooses to switch these off...
Some users turn off features in their browsers deliberately. You should respect their decision and make sure those users can still use your service."
