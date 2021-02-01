import "./App.css";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from './components/ChatFeed';

function App() {
  return (
    <ChatEngine
      height="100vh"
      userName="shariq"
      projectID="b1657712-4c69-4a75-93b2-80c82d652fc8"
      userSecret="123123"
      renderChatFeed={(chatProps) => <ChatFeed {...chatProps} />}
    />
  );
}

export default App;
