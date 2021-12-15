import React, { useEffect, useState } from 'react';
import './App.css';

const useHttpGet = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [ip, setIp] = useState("")
  const [forceUpdate, setForceUpdate] = useState(0)

  useEffect(() => {
    const loadContent = async () => {
      const response = await fetch(url)
      const data = await response.json();
      setIp(data.origin);
      setIsLoading(!isLoading)
    }
    loadContent()
  }, [forceUpdate])

  return [isLoading, ip, setForceUpdate, setIsLoading]
}

function MyIp() {
  const [isLoading, ip, setForceUpdate, setIsLoading] = useHttpGet("https://httpbin.org/delay/1")

  return (
    <>
      { isLoading && 
        <span>Loading content...</span>
      }  
      { !isLoading && 
        <>
          <span 
            style={{ fontFamily: "Arial, sans-serif", fontSize: "2em" }}>
              MY IP: {ip}
          </span>
          <br/>
          <button onClick={() => {
            setIsLoading(!isLoading)
            setForceUpdate((value) => value + 1)
          }}
          >Force update</button>
          </>
      }    
    </>
  );
}

export default MyIp;
