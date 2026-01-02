'use client';

import React, { useState, useEffect } from 'react';
import Demo from '../../pages/demo';

export default function PreviewPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [data, setData] = useState(() => {
    if (typeof window === 'undefined') return null;
    const urlParams = new URLSearchParams(window.location.search);
    const dataParam = urlParams.get('data');
    console.log('PreviewPage: Initializing with dataParam:', dataParam);
    if (dataParam) {
      try {
        const decodedData = atob(dataParam);
        const parsedData = JSON.parse(decodedData);
        console.log('PreviewPage: Loaded initial data from URL:', parsedData);
        return parsedData;
      } catch (error) {
        console.error('PreviewPage: Initial data parsing error:', error);
        return null;
      }
    }
    console.log('PreviewPage: No initial data from URL, waiting for postMessage');
    return null;
  });

  const [hasReceivedInitialData, setHasReceivedInitialData] = useState(() => {
    if (typeof window === 'undefined') return false;
    const urlParams = new URLSearchParams(window.location.search);
    return !!urlParams.get('data');
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleMessage = (event) => {
      console.log('PreviewPage: Received message:', event.data, 'from origin:', event.origin);
      if (event.origin !== window.location.origin) {
        console.log('PreviewPage: Ignoring message from different origin');
        return;
      }

      if (event.data && event.data.type === 'UPDATE_DATA') {
        console.log('PreviewPage: Processing UPDATE_DATA, hasReceivedInitialData:', hasReceivedInitialData);
        setData(event.data.data);
        if (!hasReceivedInitialData) {
          console.log('PreviewPage: Setting initial data flag');
          setHasReceivedInitialData(true);
        }
      } else {
        console.log('PreviewPage: Ignoring non-UPDATE_DATA message');
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [hasReceivedInitialData]);

  if (typeof window !== 'undefined') {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionParam = urlParams.get('section');

    if (!data) {
      return <div style={{
        padding: '20px',
        color: '#666',
        fontFamily: 'monospace',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#0D0D0E'
      }}>
        Waiting for data from editor...
      </div>;
    }

    try {
      console.log('Preview data:', data); // Debug log
      console.log('Rendering FinsaiHomepage with data:', data);
      return <Demo data={data} scrollToSection={sectionParam} />;
    } catch (error) {
      console.error('Preview data rendering error:', error);
      return (
        <div style={{ padding: '20px', color: 'red', fontFamily: 'monospace' }}>
          <h2>Error loading preview data</h2>
          <p>Error: {error.message}</p>
          <details>
            <summary>Data structure</summary>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </details>
        </div>
      );
    }
  }

  return null;
}
