import Player from "./Player.jsx";
import TimerChallenge from "./TimerChallenge.jsx";

export default function Container() {
  return (
    <div className="w-full max-w-[45rem] flex items-center justify-center flex-col p-8 bg-cold-dark-blue text-cold-light-grey space-y-4 hover:cursor-default font-Switzer">
      <div className="flex items-center justify-center flex-col space-y-2">
        <h1 className="text-4xl font-medium tracking-tight uppercase">the <span className="text-cold-dark-grey">almost</span> final countdown</h1>
        <p className="text-lg">Stop the timer once you estimate the time is (almost) up</p>
      </div>
      <Player />
      <div className="text-cold-light-grey w-full p-4 flex items-center justify-center flex-col space-y-4">
          <h1 className="font-Satoshi font-medium uppercase text-3xl text-center">Challenges</h1>
          <div className="w-full max-w-[45rem] grid grid-cols-2 bg-cold-dark-blue text-cold-dark-blue gap-4">
            <TimerChallenge title={'easy'} targetTime={1} />
            <TimerChallenge title={'normal'} targetTime={5} />
            <TimerChallenge title={'hard'} targetTime={10} />
            <TimerChallenge title={'very-hard'} targetTime={15} />
          </div>
        </div>
    </div>
  )
}
