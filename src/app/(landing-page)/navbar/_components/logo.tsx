import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href={"/"} className={"flex items-center gap-3"}>
      <Image
        src={"/images/logo.png"}
        alt={"logo"}
        width={60}
        height={60}
      />
      <span className="text-xl md:text-2xl font-extrabold tracking-tight">
        FYI Education
      </span>
    </Link>
  );
};
