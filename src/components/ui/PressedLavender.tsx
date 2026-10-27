import Image from "next/image";

import lavender from "@/assets/pressed-lavender.png";
import { cn } from "@/lib/utils";

type PressedLavenderProps = {
  className?: string;
  sizes: string;
};

export function PressedLavender({ className, sizes }: PressedLavenderProps) {
  return (
    <Image
      src={lavender}
      alt=""
      sizes={sizes}
      className={cn(
        "pointer-events-none object-contain select-none",
        className,
      )}
    />
  );
}
