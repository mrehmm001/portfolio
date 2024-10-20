import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface IHeading {
  children: React.ReactNode;
  className?: string;
  alignment?: "left" | "middle" | "right";
}

function SectionHeading({ children, className, alignment = "left" }: IHeading) {
  if (alignment === "left") {
    return (
      <div className="over flex items-center gap-3">
        <Separator className="bg-muted/50 w-32" />
        <h2
          className={cn(className, "text-nowrap text-3xl font-bold uppercase")}
        >
          {children}
        </h2>
        <Separator className="bg-muted/50 flex-1" />
      </div>
    );
  }

  if (alignment === "middle") {
    return (
      <div className="over flex items-center gap-3 overflow-hidden">
        <Separator className="bg-muted/50 flex-1" />
        <h2
          className={cn(className, "text-nowrap text-3xl font-bold uppercase")}
        >
          {children}
        </h2>
        <Separator className="bg-muted/50 flex-1" />
      </div>
    );
  }

  if (alignment === "right") {
    return (
      <div className="over flex items-center gap-3">
        <Separator className="bg-muted/50 flex-1" />
        <h2
          className={cn(className, "text-nowrap text-3xl font-bold uppercase")}
        >
          {children}
        </h2>
        <Separator className="bg-muted/50 w-32" />
      </div>
    );
  }
}

export default SectionHeading;
