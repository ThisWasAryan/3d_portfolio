import React from 'react';
import { Rnd } from 'react-rnd';
import { CloudRain, Sun, Play, SkipBack, SkipForward, Folder, User, Mail } from 'lucide-react';
import { useOSStore } from '../stores/osStore';
import { CollageWidget } from './CollageWidget';
import './Widgets.css';

// SVG Data URIs for realistic icons
const FOLDER_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%238bb9f5' d='M10,85 l0,-60 l25,0 l10,-10 l45,0 l0,70 z'/%3E%3Cpath fill='%23a1cbf5' d='M10,85 l0,-50 l80,0 l0,50 z'/%3E%3C/svg%3E";
const NOTE_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath fill='%23fef3c7' d='M15,15 h70 v60 l-20,20 h-50 z'/%3E%3Cpath fill='%23fde68a' d='M85,75 h-20 v20 z'/%3E%3C/svg%3E";
const ID_CARD_ICON = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect x='20' y='10' width='60' height='80' rx='5' fill='%23f3f4f6' stroke='%23d1d5db' stroke-width='2'/%3E%3Crect x='35' y='25' width='30' height='30' rx='2' fill='%239ca3af'/%3E%3Crect x='30' y='65' width='40' height='4' fill='%239ca3af'/%3E%3Crect x='30' y='75' width='25' height='4' fill='%239ca3af'/%3E%3Cpath d='M40,5 l20,0 l0,10 l-20,0 z' fill='%23374151'/%3E%3C/svg%3E";

const AppIcon = ({ imageSrc, color1, color2, label, onClick }: any) => (
  <div className="desktop-app-icon" onDoubleClick={onClick} style={{ pointerEvents: 'auto' }}>
    <div className="app-icon-squircle" style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}>
       <img src={imageSrc} style={{ width: '60px', height: '60px', objectFit: 'contain' }} alt={label} draggable="false" />
    </div>
    <div className="app-icon-label">{label}</div>
  </div>
);

export const Widgets: React.FC = () => {
  const { openWindow } = useOSStore();
  const [weather, setWeather] = React.useState<{ temp: number; text: string } | null>(null);
  const isMobile = window.innerWidth <= 768;

  React.useEffect(() => {
    // Fetch weather for Kattankulathur, Chennai, India (latitude: 12.82, longitude: 80.04)
    fetch('https://api.open-meteo.com/v1/forecast?latitude=12.82&longitude=80.04&current_weather=true')
      .then(res => res.json())
      .then(data => {
        if (data && data.current_weather) {
          const w = data.current_weather;
          let text = 'Clear';
          if (w.weathercode >= 1 && w.weathercode <= 3) text = 'Cloudy';
          if (w.weathercode >= 51 && w.weathercode <= 67) text = 'Rainy';
          if (w.weathercode >= 71 && w.weathercode <= 77) text = 'Snow';
          setWeather({ temp: Math.round(w.temperature), text });
        }
      })
      .catch(err => console.error("Weather fetch failed", err));
  }, []);

  return (
    <div className="widgets-layer">
      
      {/* Desktop App Icons */}
      <div className="desktop-apps-container" style={{
        display: isMobile ? 'flex' : 'block',
        flexDirection: isMobile ? 'row' : 'column',
        justifyContent: isMobile ? 'center' : 'flex-start',
        gap: isMobile ? '20px' : '0',
        width: isMobile ? '100%' : 'auto',
        marginTop: isMobile ? '20px' : '0',
        zIndex: 50
      }}>
        {isMobile ? (
          <>
            <AppIcon imageSrc="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4c2.svg" color1="#4facfe" color2="#00f2fe" label="Projects" onClick={() => openWindow('projects', 'Projects')} />
            <AppIcon imageSrc="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f468-200d-1f4bb.svg" color1="#f6d365" color2="#fda085" label="About Me" onClick={() => openWindow('about', 'About Me')} />
            <AppIcon imageSrc="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e7.svg" color1="#84fab0" color2="#8fd3f4" label="Contact" onClick={() => openWindow('contact', 'Contact')} />
          </>
        ) : (
          <>
            <Rnd default={{ x: 60, y: 60, width: 110, height: 120 }} enableResizing={false} bounds="parent" style={{ pointerEvents: 'auto' }}>
              <AppIcon imageSrc="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4c2.svg" color1="#4facfe" color2="#00f2fe" label="Projects" onClick={() => openWindow('projects', 'Projects')} />
            </Rnd>

            <Rnd default={{ x: 60, y: 200, width: 110, height: 120 }} enableResizing={false} bounds="parent" style={{ pointerEvents: 'auto' }}>
              <AppIcon imageSrc="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f468-200d-1f4bb.svg" color1="#f6d365" color2="#fda085" label="About Me" onClick={() => openWindow('about', 'About Me')} />
            </Rnd>

            <Rnd default={{ x: 60, y: 340, width: 110, height: 120 }} enableResizing={false} bounds="parent" style={{ pointerEvents: 'auto' }}>
              <AppIcon imageSrc="https://cdn.jsdelivr.net/gh/twitter/twemoji@latest/assets/svg/1f4e7.svg" color1="#84fab0" color2="#8fd3f4" label="Contact" onClick={() => openWindow('contact', 'Contact')} />
            </Rnd>
          </>
        )}
      </div>

      <CollageWidget />

      {/* Right Side Widgets */}
      <div className="right-widgets">
        {/* Weather Widget */}
        <div className="widget weather-widget" style={{ padding: '20px', background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.2)' }}>
          <div className="weather-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span className="weather-location" style={{ fontSize: '14px', opacity: 0.8 }}>Chennai, IN</span>
            {weather?.text === 'Rainy' ? <CloudRain size={20} /> : <Sun size={20} />}
          </div>
          <div className="weather-temp" style={{ fontSize: '36px', fontWeight: 'bold' }}>{weather ? weather.temp : '--'}°</div>
          <div className="weather-desc" style={{ fontSize: '16px', opacity: 0.9 }}>{weather ? weather.text : 'Loading...'}</div>
        </div>
      </div>
      
    </div>
  );
};
