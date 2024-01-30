import { useState } from "react";
import "./App.css";

import AuthPage from "./auth/AuthPage";
import ChatsPage from "./chatpage/ChatsPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;