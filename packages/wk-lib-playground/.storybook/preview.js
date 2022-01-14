import { Layout } from './Layout';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';
import { Provider } from 'react-redux';

const withThemeProvider = (Story, context) => {  
  return (
    <Layout>
      <Story {...context} />
    </Layout>
  );
};

// addDecorator(withInfo());
export const parameters = {
  actions: { argTypesRegex: '^on.*' },
}