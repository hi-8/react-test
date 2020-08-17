import React from 'react';
import './App.css';

type Props = {
  message:string
}

const Child: React.FC<Props> = props => {
  return(
    <p>
      { props.message }
    </p>
  )
}

const App: React.FC = () => {
  return(
    <div className="App">
      {/* コンポーネントとして吐き出す時、ここのmessageってコンポーネント内に書かない方がスマートなのでは説 */}
      <Child message="これは文字1" />
      <Child message="これは文字2" />
      <Child message="これは文字3" />
    </div>
  )
}

export default App
