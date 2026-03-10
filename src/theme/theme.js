export const theme = {
  colors: {
    primary: '#33CCCC',
    primaryDark: '#29A3A3',
    primaryLight: '#5DD9D9',
    secondary: '#29A3A3',
    white: '#FFFFFF',
    black: '#0A0A0A',
    dark: '#111827',
    darkGray: '#1F2937',
    gray: '#6B7280',
    lightGray: '#F3F4F6',
    border: '#E5E7EB',
    textPrimary: '#111827',
    textSecondary: '#6B7280',
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
  },
  gradients: {
    primary: 'linear-gradient(135deg, #33CCCC, #29A3A3)',
    dark: 'linear-gradient(135deg, #111827, #1F2937)',
    hero: 'linear-gradient(135deg, #0A0A0A 0%, #111827 50%, #1a2a2a 100%)',
  },
  fonts: {
    primary: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    heading: "'Inter', sans-serif",
  },
  shadows: {
    sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    md: '0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06)',
    lg: '0 10px 25px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.08)',
    xl: '0 20px 40px rgba(0,0,0,0.15)',
    glow: '0 0 20px rgba(51, 204, 204, 0.4)',
  },
  borderRadius: {
    sm: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
  },
};

export default theme;
