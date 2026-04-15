import { cn } from "@/lib/cn";

type ContainerProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

const sizeMap = {
  narrow: "max-w-3xl",
  default: "max-w-6xl",
  wide: "max-w-7xl",
};

export function Container({
  children,
  as: Tag = "div",
  className,
  size = "default",
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full px-6 md:px-10", sizeMap[size], className)}>
      {children}
    </Tag>
  );
}
