import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--container)] px-5 sm:px-8 lg:px-12 ${className}`}
    >
      {children}
    </div>
  );
}
