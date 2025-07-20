import { useEffect } from 'react';
import BACKEND_URL from '../../pages/constants';

export default function WakeBackend() {
  useEffect(() => {
    const wakeUpBackend = async () => {
      try {
        const visitor_id = localStorage.getItem('visitor_id') || null;
        if (visitor_id !== null) return;

        const res = await fetch(`${BACKEND_URL}/visits`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ visitor_id })
        });

        const data = await res.json();
        // console.log(data);
        if (data.visitor_id) {
          localStorage.setItem('visitor_id', data.visitor_id);
        }
      } catch (error) {
        console.error("Error waking backend:", error);
      }
    };

    wakeUpBackend();
  }, []);

  return null; 
}