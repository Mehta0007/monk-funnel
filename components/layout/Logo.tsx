import Image from "next/image";

export default function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/mf-logo.png"
      alt="Monk Funnel"
      width={32}
      height={32}
      className={className}
      style={{ width: "auto", height: "32px", objectFit: "contain" }}
      priority
    />
  );
}
