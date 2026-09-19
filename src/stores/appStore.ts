import { create } from 'zustand';

export type ViewMode = 
  | 'loading' 
  | 'room' 
  | 'laptop-transition' 
  | 'login' 
  | 'desktop' 
  | 'shutdown';

export type Theme = 'day' | 'night';

interface AppState {
  viewMode: ViewMode;
  theme: Theme;
  loadingProgress: number;
  setViewMode: (mode: ViewMode) => void;
  setTheme: (theme: Theme) => void;
  setLoadingProgress: (progress: number) => void;
}

export const useAppStore = create<AppState>((set) => ({
  viewMode: 'loading',
  theme: 'day',
  loadingProgress: 0,
  setViewMode: (mode) => {
    console.log('[DEBUG] viewMode changing to:', mode, new Error().stack);
    set({ viewMode: mode });
  },
  setTheme: (theme) => set({ theme }),
  setLoadingProgress: (progress) => set({ loadingProgress: progress }),
}));
