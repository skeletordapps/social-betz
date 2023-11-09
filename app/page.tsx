import Image from "next/image";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const prognosticators = [
  "Create your own SocialBets Zone",
  "Post your sports bets and create interesting sports betting content",
  "Achieve a high betting win rate",
  "Gain Followers",
  "Earn",
];

const bettors = [
  "Create a SocialBets Account",
  "Choose your subscription level",
  "Join top Sports Prognosticators' SocialBets Zones",
  "Achieve a high sports betting win rate",
];

export default function Home() {
  return (
    <main className="flex flex-col w-full max-w-[1920px]">
      {/* TOP BANNER */}
      {/* <section className="flex flex-col">
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
      </section> */}

      <section className="flex flex-col py-16">
        <div className="flex items-center py-[70px] px-[26px] xl:px-[100px] gap-10">
          <Image
            src="/socialbets-v1-dark-logo.svg"
            width={248}
            height={243}
            placeholder="blur"
            blurDataURL="/socialbets-v1-dark-logo.svg"
            alt="logo"
          />

          <div className="flex flex-col gap-12 text-white z-10 bg-black/80 xl:bg-transparent max-w-[920px]">
            <div className="font-bold text-[40px] xl:text-[120px] leading-[50px] xl:leading-[70px] 2xl:leading-[110px]">
              <p className="text-purple-betz">Bet.</p> <p>Post.</p>
              <p className="text-purple-betz-2">Earn.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pb-[70px] px-[26px] xl:px-[100px] text-white gap-10 max-w-[1000px]">
          <p
            className={`font-medium text-[22px] xl:text-[28px] 2xl:text-[52px] leading-[35px] 2xl:leading-[65px] ${roboto.className}`}
          >
            Welcome to SocialBetz.io - the first Web3 social sports betting
            platform.
          </p>
        </div>
      </section>

      {/* WHATS IS SOCIAL BETZ */}
      <section className="bg-black bg-numbers bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[60px] leading-[40px]  px-[26px] xl:px-[100px] py-6 bg-purple-betz-2 shadow-inner border-b border-t border-black">
          <Image
            src="/lightening-white.svg"
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL="/lightening-white.svg"
            alt="game modes"
            className="w-[40px] xl:w-[80px]"
          />
          <p className="text-white/70">What is Social Betz?</p>
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
              <p
                className={`text-[28px] leading-[46px] text-indigo-400 ${roboto.className} `}
              >
                Why should sports betting content and predictions be confined to
                major players in the sports book world?
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                <span className="text-indigo-400">Social Betz</span> allows{" "}
                <span className="text-indigo-400">YOU</span> to become a sports
                prognosticator and content creator to earn cold, hard{" "}
                <span className="text-indigo-400">crypto</span> for your
                efforts.
              </p>
              <p className={`text-[28px] leading-[46px] ${roboto.className} `}>
                With <span className="text-indigo-400">Social Betz</span>, users
                are incentivized to share their{" "}
                <span className="text-indigo-400">
                  sports bets, sports betting strategies
                </span>
                , and{" "}
                <span className="text-indigo-400">sports betting content</span>{" "}
                in a decentralized environment in order to gain a strong
                following and <span className="text-indigo-400">earn!</span>
              </p>
            </div>
            {/* <div className="flex w-[500px] justify-center items-center ">
              <Image
                src="/vertical-letters.svg"
                width={133}
                height={439}
                placeholder="blur"
                blurDataURL="/vertical-letters.svg"
                alt="social betz"
                className="drop-shadow-xl"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-black bg-soccer bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[60px] leading-[40px] px-[26px] xl:px-[100px] py-6 bg-purple-betz-2 shadow-inner border-b border-t border-black">
          <Image
            src="/lightening-white.svg"
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL="/lightening-white.svg"
            alt="game modes"
            className="w-[40px] xl:w-[80px]"
          />
          <p className="text-white/80">How Social Betz Works</p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between  xl:px-[100px] xl:mt-16 relative gap-16">
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] bg-black/80 xl:bg-transparent px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <div className="p-8 pl-2 font-medium text-purple-betz-2 text-4xl border-b border-purple-betz-2/50">
                For Sports Prognosticators
              </div>
              {prognosticators.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <ChevronDoubleRightIcon className="w-10 text-indigo-300 inline" />
                  <p
                    className={`text-[28px] text-indigo-200 leading-[46px] ${roboto.className} `}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] bg-black/80 xl:bg-transparent px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <div className="p-8 pl-2 font-medium text-indigo-400 text-4xl border-b border-purple-betz/50">
                For Sports Bettors
              </div>
              {bettors.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <ChevronDoubleRightIcon className="w-10 text-indigo-300 inline" />
                  <p
                    className={`text-[28px] text-indigo-200 leading-[46px] ${roboto.className} `}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-black bg-section bg-no-repeat bg-center">
        <div className="flex items-center gap-5 xl:gap-8 font-semibold text-[24px] xl:text-[60px] leading-[40px]  px-[26px] xl:px-[100px] py-6 bg-purple-betz-2 shadow-inner border-b border-t border-black">
          <Image
            src="/lightening-white.svg"
            width={80}
            height={80}
            placeholder="blur"
            blurDataURL="/lightening-white.svg"
            alt="game modes"
            className="w-[40px] xl:w-[80px]"
          />
          <p className="text-white/80">Partners</p>
        </div>

        <div className="flex gap-24 items-center xl:px-[100px] xl:mt-16 relative py-24">
          <div className="flex justify-center items-center w-[350px] h-[350px] bg-purple-betz border transition-all hover:scale-[1.02] hover:bg-purple-betz-2">
            <Image
              src="/jugz-logo.png"
              width={300}
              height={439}
              placeholder="blur"
              blurDataURL="/jugz-logo.png"
              alt="social betz"
              className="drop-shadow-xl"
            />
          </div>

          <div className="flex justify-center items-center w-[350px] h-[350px] bg-purple-betz border transition-all hover:scale-[1.02] hover:bg-purple-betz-2">
            <Image
              src="/slance-logo-350px.png"
              width={300}
              height={439}
              placeholder="blur"
              blurDataURL="/slance-logo-350px.png"
              alt="social betz"
              className="drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
