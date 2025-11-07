import Resume from '@/components/Resume';

export const metadata = {
  title: 'Resume | Faizan Ali',
  description: 'Professional resume and CV preview for Faizan Ali.',
  openGraph: {
    title: 'Resume | Faizan Ali',
    description: 'Professional resume and CV preview for Faizan Ali.',
    type: 'profile'
  }
};

export default function ResumePage() {
  return <Resume />;
}