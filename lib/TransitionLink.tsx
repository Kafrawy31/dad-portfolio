"use client";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "./animations";

interface Props {
  href: string;
  label?: string;
  className?: string;
  children?: React.RefAttributes<HTMLAnchorElement>;
}

const TransitionLink = ({ href, label, className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (pathname !== href) {
      animatePageOut(href, router);
    }
  };

  return (
    <a
      onClick={handleClick}
      className={className} // Apply the passed className prop here
    >
      {children}
    </a>
  );
};

export default TransitionLink;
