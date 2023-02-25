import React, { useEffect, useState } from "react";

function App() {
  const [backendResp, setBackendResp] = useState<string | null>();

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetch("http://localhost:8000/api/").then((resp) =>
        resp.json()
      );
      setBackendResp(resp.message);
    };

    fetchData();
  }, []);

  return <div className="App">{backendResp ?? "Loading..."}</div>;
}

export default App;
