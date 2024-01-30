import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <PrettyChatWindow
      projectId="19f7d8c8-ddf7-4cd0-916e-301a6a03d2f8"
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: "100vh" }}
    />
  );
};
export default ChatsPage;
