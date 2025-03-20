import { useRef, useState, useEffect } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState(targetTime*1000);
  const isTimerActive = remainingTime > 0 && remainingTime < (targetTime*1000);

  useEffect(() => {
    if (remainingTime <= 0) {
      clearInterval(timer.current);
      setShowModal(true);
    }
  }, [remainingTime]);

  function handleStartTimer(){
    timer.current = setInterval(() => {
      setRemainingTime(prev => prev - 10);
    }, 10);
  }

  function handleReset(){
    setRemainingTime(targetTime*1000);
    setShowModal(false);
  }

  function handleStopTimer(){
    clearInterval(timer.current);
    setShowModal(true);
    console.log(isTimerActive);
  }

  return (
    <>
      {showModal && <ResultModal 
        remainingTime={remainingTime}
        targetTime={targetTime} 
        onReset={handleReset} />}
      <section className="w-full h-full bg-cold-dark-grey flex items-center justify-center flex-col p-8 space-y-7 shadow-stripe rounded-xl">
        <div className="flex items-center justify-center flex-col space-y-2">
          <h1 className="font-bold text-2xl uppercase">{title}</h1>
          <p className="border-[1.2px] border-slate-600 text-slate-600 px-1 py-0.5 text-sm font-medium">{targetTime} second{targetTime > 1 ? 's' : ''}</p>
        </div>
        <div>
          <button onClick={isTimerActive ? handleStopTimer : handleStartTimer} className="px-3 py-2 bg-cold-dark-blue text-cold-light-grey text-lg rounded-xl hover:bg-slate-950 transition-colors shadow-stripe">{isTimerActive ? 'Stop' : 'Start'} Challenge</button>
        </div>
        <div>
          <p className="font-medium text-slate-600">Timer {isTimerActive ? 'is running' : 'inactive'}</p>
        </div>
      </section>
    </>
  )
}
