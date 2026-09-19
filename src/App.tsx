import React from 'react';
import { useAppStore } from './stores/appStore';
import { LoadingScreen } from './loading/LoadingScreen';
import { RoomCanvas } from './scene/RoomCanvas';
import { LoginScreen } from './os/LoginScreen';
import { Desktop } from './os/Desktop';

function App() {
  const viewMode = useAppStore((state) => state.viewMode);
  const theme = useAppStore((state) => state.theme);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // R3F canvas is alive during room interaction and transitions.
  // It is UNMOUNTED during desktop mode to free all GPU memory.
  const show3D = viewMode === 'loading' || viewMode === 'room' || viewMode === 'laptop-transition' || viewMode === 'login' || viewMode === 'shutdown';
  
  // Canvas is visually visible only when the user should see the room
  const canvasVisible = viewMode === 'loading' || viewMode === 'room' || viewMode === 'laptop-transition' || viewMode === 'shutdown';

  return (
    <>
      {viewMode === 'loading' && <LoadingScreen />}
      
      {show3D && (
        <div style={{ 
          opacity: canvasVisible ? 1 : 0, 
          pointerEvents: canvasVisible ? 'auto' : 'none',
          transition: 'opacity 0.5s ease'
        }}>
          <RoomCanvas />
        </div>
      )}

      {viewMode === 'login' && <LoginScreen />}
      {viewMode === 'desktop' && <Desktop />}
    </>
  );
}

export default App;
