import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Cover Letter Generator | Javari AI',
  description: 'Create personalized, compelling cover letters with AI. Tailored to each job application.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
