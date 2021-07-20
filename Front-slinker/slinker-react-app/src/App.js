import './App.css';
import FacebookLogin from 'react-facebook-login'

function App() {
  const fbResponse = (response) => {
    console.log(response);
  } 

  return (
    <div className="App">
       <FacebookLogin
          textButton="LOGIN WITH FACEBOOK"
          appId= "962023414341219"
          callback={fbResponse}
        />

    </div>
  );
}

export default App;
