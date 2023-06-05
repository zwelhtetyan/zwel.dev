import Image from "next/image";
import { ComponentProps } from "react";

export interface SkillIconProps {
  path: string;
  title: string;
  className?: ComponentProps<"img">["className"];
}

export default function SkillIcon({ path, title, className }: SkillIconProps) {
  return (
    <Image
      src={path}
      alt={title}
      width={100}
      height={100}
      className={className}
    />
  );
}
