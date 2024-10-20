import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface CardWrapperProps {
  title: string;
  backTitle: string;
  backHref: string;
  children: React.ReactNode;
}

const CardWrapper = ({
  title,
  backHref,
  backTitle,
  children,
}: CardWrapperProps) => {
  return (
    <Card className="w-full max-w-[500px]">
      <CardHeader>
        <CardTitle className="flex w-full flex-col items-center justify-center gap-2">
          <p className="text-3xl">🔐 Auth</p>
          <p className="font-semibold">{title}</p>
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <Link href={backHref}>{backTitle}</Link>
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
