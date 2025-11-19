import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

export default function Container({ children }: ContainerProps) {
  return <div className="max-w-[1440px] px-[40px] mx-auto">{children}</div>;
}
