import UserProfile from './components/userprofile'
import './styles/App.css'


function App() {

  return (
    <>
      hey
      <div>
        <div className='answer-container'>
          <p>Qn.1</p>
          <UserProfile name="Ashwin" age={23} email="aswinbaral2@gmail.com" />
          <UserProfile name="Barsha" age={31} email="varshakoirala@gmail.com" />
        </div>
        <div className="answer-container">
          <p>Q.2</p>
        </div>
      </div>
    </>
  )
}

export default App
