import { useEffect } from "react";
import { message } from "antd";

function Message({ text }) {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    text && messageApi.info(text);
  }, [messageApi, text]);

  return <>{contextHolder}</>;
}

export default Message;
