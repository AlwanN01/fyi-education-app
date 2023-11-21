import { Logo } from "@/app/(landing-page)/navbar/_components/logo";
import { NavigationMenuBar } from "@/app/(landing-page)/navbar/_components/menu";
import { BurgerActionButtons } from "@/app/(landing-page)/navbar/_components/burger";

const Navbar = () => {
  return (
    <div className={'p-4'}>
      <div className={"items-center flex flex-wrap justify-between"}>
        <Logo />
        <NavigationMenuBar  />
          <BurgerActionButtons />

      </div>
    </div>
  );
};

export default Navbar;
