import { Outlet } from 'react-router-dom';
import SearchHeader from './components/common/header/SearchHeader';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <SearchHeader />
      <Layout>
        <Outlet />
      </Layout>
    </>
  );
}

export default App;
