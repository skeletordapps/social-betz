import Image from "next/image";
import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";
import { ChevronDoubleRightIcon } from "@heroicons/react/24/outline";

const roboto = Roboto_Condensed({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const prognosticators = [
  "Create your SocialBetz Zone ",
  "Post your sports bets, sports betting strategies, and related content ",
  "Achieve a high betting win rate ",
  "Gain a following",
  "Earn crypto rewards",
];

const bettors = [
  "Create a SocialBetz Account",
  "Choose a SocialBetz Zone subscription level",
  "Follow top Social Prognosticator's SocialBetz Zones",
  "Copy bet top Social Prognosticators directly on site",
  "Achieve an amazing sports betting win rate ",
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

      <section className="flex flex-col py-16 gap-10 xl:gap-0">
        <div className="flex justify-center sm:justify-start items-center xl:py-[70px] px-[26px] xl:px-[100px] gap-4 xl:gap-10">
          <Image
            src="/socialbetz-v1-dark-logo.svg"
            width={118}
            height={113}
            placeholder="blur"
            blurDataURL="/socialbetz-v1-dark-logo.svg"
            alt="logo"
            className="xl:hidden"
          />
          <Image
            src="/socialbetz-v1-dark-logo.svg"
            width={248}
            height={243}
            placeholder="blur"
            blurDataURL="/socialbetz-v1-dark-logo.svg"
            alt="logo"
            className="hidden xl:block"
          />

          <div className="flex flex-col text-white z-10 max-w-[920px]">
            <div className="font-bold text-[50px] xl:text-[120px] leading-[46px] xl:leading-[110px]">
              <p className="text-purple-betz">Bet.</p> <p>Post.</p>
              <p className="text-purple-betz-2">Earn.</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col xl:pb-[70px] px-[26px] xl:px-[100px] text-white gap-10 max-w-[500px] lg:max-w-[900px] 2xl:max-w-[1000px]">
          <p
            className={`font-medium text-[26px] xl:text-[52px] leading-[35px] xl:leading-[60px] 2xl:leading-[65px] ${roboto.className}`}
          >
            Welcome to SocialBetz.io - the first Web3 social sports betting
            platform.
          </p>
        </div>
      </section>

      {/* WHATS IS SOCIAL BETZ */}
      <section className="bg-black bg-section xl:bg-numbers bg-no-repeat bg-center">
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
          <p className="text-white/70">What is SocialBetz?</p>
        </div>
        <div className="flex flex-col  gap-16 text-white xl:pb-24">
          <div className="flex justify-between items-center xl:px-[100px] xl:mt-16 relative">
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <p
                className={` text-[24px] xl:text-[32px] font-bold xl:leading-[46px] text-white ${roboto.className} `}
              >
                Why should sports betting content and predictions be confined to
                major players in the sports book world?
              </p>
              <p
                className={`text-[24px] xl:text-[28px] xl:leading-[46px] ${roboto.className} `}
              >
                <span className="text-indigo-400">SocialBetz</span> allows{" "}
                <span className="text-indigo-400">YOU</span> to become a sports
                prognosticator and sports betting content creator to earn cold,
                hard crypto in return.
              </p>
              <p
                className={`text-[24px] xl:text-[28px] xl:leading-[46px] ${roboto.className} `}
              >
                With <span className="text-indigo-400">SocialBetz</span>, our
                community is incentivized to publish their sports bets, sports
                betting strategies, and sports betting-related content in a
                decentralized environment to gain a following and{" "}
                <span className="text-indigo-400">EARN.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-black bg-inverted bg-cover xl:bg-soccer bg-no-repeat bg-center">
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
          <p className="text-white/80">How SocialBetz Works</p>
        </div>
        <div className="flex flex-col gap-16 text-white xl:pb-24">
          <div className="flex flex-col xl:flex-row xl:justify-between xl:px-[100px] xl:mt-16 relative gap-16">
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] px-[22px] xl:px-0 pt-10 pb-10 z-10">
              <div className="pb-8 xl:p-8 xl:pl-2 font-medium text-white xl:text-purple-betz-2 text-2xl xl:text-4xl border-b xl:border-purple-betz-2/50">
                For Sports Prognosticators
              </div>
              {prognosticators.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="flex justify-center items-center text-white font-medium text-3xl bg-purple-betz min-w-[50px] min-h-[50px] rounded-[8px]">
                    {index + 1}
                  </span>
                  <p
                    className={`max-w-[290px] md:max-w-full text-[20px] xl:text-[28px] text-indigo-200 leading-[24px] md:leading-[32px] ${roboto.className}`}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col font-thin gap-10 w-full xl:max-w-[1000px] xl:bg-transparent px-[22px] xl:px-0 xl:pt-10 pb-10 z-10">
              <div className="pb-8 xl:p-8 xl:pl-2 font-medium text-white xl:border-purple-betz/50 text-2xl xl:text-4xl border-b">
                For Sports Bettors
              </div>
              {bettors.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  {/* <span className="flex items-center justify-center md:text-3xl w-10 h-10 md:w-14 md:h-14 rounded-full bg-purple-betz/50 text-white font-medium shadow-lg">
                    {index + 1}
                  </span> */}
                  <span className="flex justify-center items-center text-white font-medium text-3xl bg-purple-betz min-w-[50px] min-h-[50px] rounded-[8px]">
                    {index + 1}
                  </span>
                  <p
                    className={`max-w-[290px] md:max-w-full text-[20px] xl:text-[28px] text-indigo-200 leading-[24px] md:leading-[32px] ${roboto.className} `}
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

        <div className="hidden md:flex gap-24 items-center flex-wrap px-[26px] xl:px-[100px] xl:mt-16 relative py-24">
          <div className="flex justify-center items-center w-[200px] h-[200px] xl:w-[350px] xl:h-[350px] bg-white border transition-all hover:scale-[1.02] hover:bg-purple-betz-2">
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

        <div className="flex md:hidden flex-col items-center justify-center gap-10 py-10">
          <div className="p-4 bg-white">
            <Image
              src="/slance-logo-350px.png"
              width={200}
              height={339}
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
