import { useEffect } from 'react';

export default function WakeBackend() {
  useEffect(() => {
    fetch("https://hackforpalestineapi.onrender.com/").catch(() => {});
  }, []);

  return null; 
}