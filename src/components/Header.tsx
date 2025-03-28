"use client";
import { MaskContainer } from "../components/ui/svg-mask-effect";

export function Header() {
  return (
    <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <p className="mx-auto text-center text-4xl font-bold text-slate-800 p-10 dark:text-white">
            We live in a wonderful world that is full of beauty, charm and adventure. There is no end to the adventures we can have if only we seek them with our eyes open.
          </p>
        }
        className="h-[40rem] 2xl:w-7xl w-full text-white dark:text-black mx-auto"
      >
        We travel,{" "}
        <span className="text-blue-500">some of us forever,</span> to seek other states, other lives,
        <span className="text-blue-500">other souls.</span>.
      </MaskContainer>
    </div>
  );
}
