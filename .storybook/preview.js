import '../src/index.css';

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
//parameters are typically used to control the behavior of Storybook's features and addons. 
//Configure how the actions (mocked callbacks) are handled appear in the actions panel of the Storybook UI when clicked. 
//Eg. a pin button, we’ll be able to determine in the test UI if a button click is successful.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
