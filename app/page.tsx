import Image from "next/image";
import { Roboto_Condensed } from "next/font/google";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-[1920px]">
      {/* TOP BANNER */}
      <section className="flex flex-col">
        <div className="flex justify-between items-center py-[70px] px-[26px] xl:px-[100px]">
          <div className="flex flex-col gap-12 text-white z-10 bg-black/80 xl:bg-transparent max-w-[920px]">
            <p className="font-semibold text-[40px] xl:text-[70px] leading-[50px] xl:leading-[70px] 2xl:leading-[40px]">
              <span className="text-purple-betz">Bet.</span> Post.{" "}
              <span className="text-purple-betz-2">Earn.</span>
            </p>
            <p
              className={`font-thin text-[22px] xl:text-[28px] 2xl:text-[32px] leading-[35px] 2xl:leading-[45px] ${roboto.className}`}
            >
              Welcome to Social Betz - the first Web3 social sports betting
              platform. You can be an enthusiast, amateur or professional, it's
              a place for all.
            </p>
            <button
              className={`transition-all bg-purple-betz w-[140px] h-[39px] flex justify-center items-center rounded-lg text-white text-[16px] font-medium hover:scale-[1.02] ${roboto.className}`}
            >
              Learn More
            </button>
          </div>
          <Image
            src="/sb-lightening.svg"
            alt="logo"
            width={314}
            height={646}
            blurDataURL="/sb-lightening.svg"
            placeholder="blur"
            className="mr-[26px] xl:mr-[52px] drop-shadow-2xl"
          />
        </div>
      </section>

      {/* WHATS IS SOCIAL BETZ */}
      <section className="bg-black bg-section bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[60px] leading-[40px] bg-green-fss px-[26px] xl:px-[100px] py-6 bg-purple-betz-2 shadow-inner border-b border-t border-black">
          <Image
            src="/lightening.svg"
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL="/lightening.svg"
            alt="game modes"
            className="w-[40px] xl:w-[80px]"
          />
          <p className="text-black/70">What is Social Betz?</p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between items-center xl:px-[100px] xl:mt-16 relative">
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] bg-black/80 xl:bg-transparent px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                <span className="text-indigo-400">Social Betz</span> is a place
                for sports betting enthusiasts, both amateur and professional,
                to meet, socialize, share sports betting alpha and content… and{" "}
                <span className="text-indigo-400">earn!</span>
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                Why should sports betting content and predictions be confined to
                major players in the sports book world?
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                <span className="text-indigo-400">Social Betz</span> allows YOU
                to become a sports prognosticator and content creator to earn
                cold, hard crypto for your efforts.
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                With <span className="text-indigo-400">Social Betz</span>, users
                are incentivized to share their sports bets, sports betting
                strategies, and sports betting content in a decentralized
                environment in order to gain a strong following and earn!
              </p>
            </div>
            <div className="flex w-[500px] justify-center items-center ">
              <Image
                src="/vertical-letters.svg"
                width={133}
                height={439}
                placeholder="blur"
                blurDataURL="/vertical-letters.svg"
                alt="social betz"
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-black bg-inverted bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[60px] leading-[40px] bg-green-fss px-[26px] xl:px-[100px] py-6 bg-purple-betz-2 shadow-inner border-b border-t border-black">
          <Image
            src="/lightening.svg"
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL="/lightening.svg"
            alt="game modes"
            className="w-[40px] xl:w-[80px]"
          />
          <p className="text-black/70">How Social Betz Works</p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between items-center xl:px-[100px] xl:mt-16 relative">
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] bg-black/80 xl:bg-transparent px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                <span className="text-indigo-400">Social Betz</span> is a place
                for sports betting enthusiasts, both amateur and professional,
                to meet, socialize, share sports betting alpha and content… and{" "}
                <span className="text-indigo-400">earn!</span>
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                Why should sports betting content and predictions be confined to
                major players in the sports book world?
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                <span className="text-indigo-400">Social Betz</span> allows YOU
                to become a sports prognosticator and content creator to earn
                cold, hard crypto for your efforts.
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                With <span className="text-indigo-400">Social Betz</span>, users
                are incentivized to share their sports bets, sports betting
                strategies, and sports betting content in a decentralized
                environment in order to gain a strong following and earn!
              </p>
            </div>
            <div className="flex w-[500px] justify-center items-center ">
              <Image
                src="/vertical-letters.svg"
                width={133}
                height={439}
                placeholder="blur"
                blurDataURL="/vertical-letters.svg"
                alt="social betz"
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-black bg-section bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[60px] leading-[40px] bg-green-fss px-[26px] xl:px-[100px] py-6 bg-purple-betz-2 shadow-inner border-b border-t border-black">
          <Image
            src="/lightening.svg"
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL="/lightening.svg"
            alt="game modes"
            className="w-[40px] xl:w-[80px]"
          />
          <p className="text-black/70">How Social Betz Works</p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between items-center xl:px-[100px] xl:mt-16 relative">
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] bg-black/80 xl:bg-transparent px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                <span className="text-indigo-400">Social Betz</span> is a place
                for sports betting enthusiasts, both amateur and professional,
                to meet, socialize, share sports betting alpha and content… and{" "}
                <span className="text-indigo-400">earn!</span>
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                Why should sports betting content and predictions be confined to
                major players in the sports book world?
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                <span className="text-indigo-400">Social Betz</span> allows YOU
                to become a sports prognosticator and content creator to earn
                cold, hard crypto for your efforts.
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                With <span className="text-indigo-400">Social Betz</span>, users
                are incentivized to share their sports bets, sports betting
                strategies, and sports betting content in a decentralized
                environment in order to gain a strong following and earn!
              </p>
            </div>
            <div className="flex w-[500px] justify-center items-center ">
              <Image
                src="/vertical-letters.svg"
                width={133}
                height={439}
                placeholder="blur"
                blurDataURL="/vertical-letters.svg"
                alt="social betz"
                className="drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
