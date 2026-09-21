import Link from "next/link";
import type { ReactNode } from "react";

export function DirectionMark({ reverse = false }: { reverse?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={reverse ? "direction-mark reverse" : "direction-mark"}
    >
      <svg fill="none" viewBox="0 0 24 24">
        <path d="M4 12h15m-6-6 6 6-6 6" />
      </svg>
    </span>
  );
}

type ActionProps = {
  href: string;
  label: string;
  className?: string;
  children?: ReactNode;
};

export function OtoAction({ href, label, className = "n-link oto-action" }: ActionProps) {
  return (
    <Link className={className} href={href}>
      <DirectionMark />
      <span className="oto-action-label">{label}</span>
    </Link>
  );
}
