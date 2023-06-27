import Image from "next/image";

export default function Home() {
  return (
    <main className="xl:justify-center xl:flex xl:flex-col xl:items-center xl:h-screen">
      <div className="flex flex-col h-screen xl:flex-row xl:relative xl:items-center xl:w-[900px] xl:h-[520px]">
        {/* Result Component*/}
        <div className="bg-gradient-to-t from-gradientDark to-gradientLight h-[420px] xl:h-full w-full xl:absolute rounded-b-[35px] xl:shadow-2xl xl:rounded-3xl xl:w-[50%] xl:gap-5 xl:justify-center flex flex-col items-center py-6 px-14 xl:px-20 gap-4">
          <h1 className="text-lg xl:text-2xl text-levander font-semibold">
            Your Result
          </h1>
          <div className="rounded-full bg-gradient-to-b from-cicrcleLight to-circleDark xl:w-[200px] xl:my-4 xl:h-[200px] w-[150px] h-[150px] flex flex-col items-center justify-center gap-2">
            <p className="text-5xl xl:text-7xl font-bold text-pale">76</p>
            <p className="text-sm xl:text-base text-levander font-semibold">
              of 100
            </p>
          </div>
          <h2 className="text-2xl xl:text-3xl font-medium xl:font-semibold text-pale">
            Great
          </h2>
          <p className="text-center text-base xl:text-lg text-levander">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
        {/* Summary Component */}
        <div className="flex flex-col p-8 xl:w-[100%] xl:h-[520px] xl:rounded-l-3xl xl:items-end xl:rounded-r-3xl xl:shadow-2xl">
          <div className="xl:w-[45%]">
            <h1 className="text-black font-semibold text-xl xl:text-2xl mb-6">
              Summary
            </h1>
            <div className="flex flex-col gap-5">
              <div className="flex justify-between px-4 text-lg bg-redish bg-opacity-10 rounded-xl py-4">
                <div className="flex gap-4">
                  <Image
                    priority
                    src={"icon-reaction.svg"}
                    height={24}
                    width={24}
                    alt="Reaction title icon"
                  ></Image>
                  <p className="text-redish font-semibold">Reaction</p>
                </div>
                <div className="flex gap-1 text-levander">
                  <p className="text-dblue font-bold">80</p>
                  <p>/</p>
                  <p>100</p>
                </div>
              </div>
              <div className="flex justify-between px-4 text-lg bg-yellowy bg-opacity-10 rounded-xl py-4">
                <div className="flex gap-4">
                  <Image
                    priority
                    src={"icon-memory.svg"}
                    height={24}
                    width={24}
                    alt="Reaction title icon"
                  ></Image>
                  <p className="text-yellowy font-semibold">Memory</p>
                </div>
                <div className="flex gap-1 text-levander">
                  <p className="text-dblue font-bold">92</p>
                  <p>/</p>
                  <p>100</p>
                </div>
              </div>
              <div className="flex justify-between px-4 text-lg bg-teal bg-opacity-10 rounded-xl py-4">
                <div className="flex gap-4">
                  <Image
                    priority
                    src={"icon-verbal.svg"}
                    height={24}
                    width={24}
                    alt="Reaction title icon"
                  ></Image>
                  <p className="text-teal font-semibold">Verbal</p>
                </div>
                <div className="flex gap-1 text-levander">
                  <p className="text-dblue font-bold">61</p>
                  <p>/</p>
                  <p>100</p>
                </div>
              </div>
              <div className="flex justify-between px-4 text-lg bg-bluey bg-opacity-10 rounded-xl py-4">
                <div className="flex gap-4">
                  <Image
                    priority
                    src={"icon-visual.svg"}
                    height={24}
                    width={24}
                    alt="Reaction title icon"
                  ></Image>
                  <p className="text-bluey font-semibold">Visual</p>
                </div>
                <div className="flex gap-1 text-levander">
                  <p className="text-dblue font-bold">72</p>
                  <p>/</p>
                  <p>100</p>
                </div>
              </div>
              {/* Continue button */}
              <button className="bg-dblue mx-8 py-4 text-white text-lg font-medium rounded-full mb-4 xl:mt-4">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
