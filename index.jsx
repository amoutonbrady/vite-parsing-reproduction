import { render } from "solid-js/web";
import { MetaProvider, Title } from "solid-meta";

const App = () => (
  <>
    <Title>Hello vite!</Title>
    <h1>Hello vite!</h1>
  </>
);

render(() => (
  <MetaProvider>
    <App />
  </MetaProvider>
));
