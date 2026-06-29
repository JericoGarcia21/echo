import AppV1 from './v1/AppV1';
import AppV2 from './v2/AppV2';

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/v1') {
    return <AppV1 />;
  }

  return <AppV2 />;
}

export default App;
