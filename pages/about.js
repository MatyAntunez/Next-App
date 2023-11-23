import { DarkLayout } from '@/components/layaouts/DarkLayout'
import { MainLayaout } from '@/components/layaouts/MainLayaout'



export default function About() {
  return (
    <>
        <main >
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Get started by editing&nbsp;
              <code className="font-mono font-bold">pages/index.js</code>
            </p>

            <h1>ABOUT PAGE</h1>
          </div>
        </main>
      
    </>
  )
};

About.getLayaout = function getLayaout(page) {
  return (
    <MainLayaout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayaout>
  )
};



