export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1440px] px-[40px] mx-auto">{children}</div>;
}
