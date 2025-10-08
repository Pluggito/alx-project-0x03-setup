// Button component props
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// Page route props for navigation
export interface PageRouteProps {
  pageRoute: string;
}

// Layout component props
export interface LayoutProps {
  children: React.ReactNode;
}