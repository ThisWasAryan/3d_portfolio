import { create } from 'zustand';

export interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number | string; height: number | string };
}

interface OSState {
  windows: Record<string, WindowState>;
  activeWindowId: string | null;
  highestZIndex: number;
  openWindow: (id: string, defaultTitle?: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindowPosition: (id: string, position: { x: number; y: number }) => void;
  updateWindowSize: (id: string, size: { width: number | string; height: number | string }) => void;
}

export const useOSStore = create<OSState>((set, get) => ({
  windows: {},
  activeWindowId: null,
  highestZIndex: 100,

  openWindow: (id, defaultTitle = 'Window') => {
    set((state) => {
      const windowExists = !!state.windows[id];
      const newZIndex = state.highestZIndex + 1;
      
      if (windowExists) {
        return {
          windows: {
            ...state.windows,
            [id]: { ...state.windows[id], isOpen: true, isMinimized: false, zIndex: newZIndex },
          },
          highestZIndex: newZIndex,
          activeWindowId: id,
        };
      }

      // Default spawn position exactly in center (adjusted for mobile)
      const isMobile = window.innerWidth <= 768;
      const winWidth = isMobile ? window.innerWidth * 0.95 : window.innerWidth * 0.55;
      const winHeight = isMobile ? window.innerHeight * 0.75 : window.innerHeight * 0.65;
      const spawnX = (window.innerWidth - winWidth) / 2;
      const spawnY = isMobile ? window.innerHeight * 0.05 : (window.innerHeight - winHeight) / 2;
      
      return {
        windows: {
          ...state.windows,
          [id]: {
            id,
            title: defaultTitle,
            isOpen: true,
            isMinimized: false,
            zIndex: newZIndex,
            position: { x: spawnX, y: spawnY },
            size: { width: winWidth, height: winHeight },
          },
        },
        highestZIndex: newZIndex,
        activeWindowId: id,
      };
    });
  },

  closeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false },
      },
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  minimizeWindow: (id) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: true },
      },
      activeWindowId: state.activeWindowId === id ? null : state.activeWindowId,
    }));
  },

  focusWindow: (id) => {
    set((state) => {
      const newZIndex = state.highestZIndex + 1;
      return {
        windows: {
          ...state.windows,
          [id]: { ...state.windows[id], isMinimized: false, zIndex: newZIndex },
        },
        highestZIndex: newZIndex,
        activeWindowId: id,
      };
    });
  },

  updateWindowPosition: (id, position) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], position },
      },
    }));
  },

  updateWindowSize: (id, size) => {
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], size },
      },
    }));
  },
}));
