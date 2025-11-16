import { Flexbox } from "bluestar";
import { useCallback, useState } from "react";
import API from "../services/api";

export default function PingPong(): React.ReactElement {
  const [name, setName] = useState<string>('');
  const [response, setResponse] = useState<string | null>(null);

  const onSendClick = useCallback(async () => {
    const res = await API.post<string>('ping', {
      name
    })

    setResponse(res);
  }, [name]);

  return (
    <Flexbox direction="column" gap={8}>
      <h2>Ping Pong</h2>
      <Flexbox gap={16}>
        <input
          value={name}
          onChange={(e) => {
            setResponse(null);
            setName(e.currentTarget.value);
          }}
          />
        <button onClick={onSendClick}>
          Send
        </button>
      </Flexbox>
        <p>Response: {response ?? 'N/A'}</p>
    </Flexbox>
  );
}