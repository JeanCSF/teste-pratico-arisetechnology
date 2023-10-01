import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
  }

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </div>
  );
};

export default Container;
