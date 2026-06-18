import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/mf-logo.png"
      alt="Monk Funnel"
      width={40}
      height={40}
      className={`w-auto ${className || "h-8"}`}
      priority
    />
  );
}
