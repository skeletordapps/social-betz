import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";
import { routes } from "@/consts";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <main className="flex flex-col pt-[70px] xl:pt-[100px] pb-[60px] px-[26px] lg:px-[52px] justify-center items-center w-full bg-purple-betz max-w-[1920px] shadow-inner">
      <div className="flex flex-col w-full max-w-[1920px] gap-4">
        <div className="flex flex-row justify-between items-center border-b border-white/20 pb-[20px] w-full px-[10px] text-white">
          <div className="flex flex-row items-center gap-5 text-sm xl:text-md">
            {routes
              .filter((_, filterIndex) => filterIndex <= 2)
              .map((item, index) => (
                <Link
                  key={"top-" + index}
                  href={item.href}
                  className="hover:opacity-75"
                >
                  {item.title}
                </Link>
              ))}
          </div>
        </div>
        <div className="flex flex-row justify-between items-center w-full px-[10px] text-white">
          <div className="flex flex-row items-center gap-5 text-sm xl:text-md">
            {routes
              .filter((_, filterIndex) => filterIndex > 2)
              .map((item, index) => (
                <Link
                  key={"bottom-" + index}
                  href={item.href}
                  className="hover:opacity-75"
                >
                  {item.title}
                </Link>
              ))}
          </div>
          <div className="flex flex-row items-center gap-2">
            {/* <Link href="/" className="hover:opacity-75">
              <Image src="/sui-icon.svg" width={15} height={15} alt="social" />
            </Link>
            <Link href="/" className="hover:opacity-75">
              <Image src="/sui-icon.svg" width={15} height={15} alt="social" />
            </Link>
            <Link href="/" className="hover:opacity-75">
              <Image src="/sui-icon.svg" width={15} height={15} alt="social" />
            </Link> */}
          </div>
        </div>
        <div className="flex flex-col xl:flex-row justify-between items-center w-full px-[10px] mt-[50px] xl:mt-[100px] text-[14px]">
          <span className={`text-white tracking-[3px] ${roboto.className}`}>
            2023 © Social Betz
          </span>
          <Link
            href="/"
            className="text-white border-b border-white hover:opacity-75"
          >
            Legal Disclaimer
          </Link>
        </div>
      </div>
    </main>
  );
}
