import Body from '../components/body';
import Header from '../components/header';
import GlobalRouter from '../routes/global-router';

function App() {
  return (
    <div className="app">
      <Header></Header>
      <Body>
        <GlobalRouter />
      </Body>
    </div>
  );
}

export default App;
