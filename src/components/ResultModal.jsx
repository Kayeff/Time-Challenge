import {createPortal} from 'react-dom';

export default function ResultModal({ remainingTime, targetTime, onReset }) {
  const userLost = remainingTime <= 0;
  const formattedTime = (remainingTime/1000);
  const result = Math.round((1 - remainingTime/(targetTime*1000)) * 100);

  return createPortal(
    <div className="w-full h-full fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[rgba(0,0,0,0.5)] flex items-center justify-center transition-all z-50">
        <div className="bg-cold-light-grey flex items-start justify-start flex-col space-y-4 p-8 text-cold-dark-blue rounded-xl transition-all w-full max-w-[30rem]">
          <h1 className="text-4xl tracking-tighter font-bold">{userLost ? 'You Lost' : `Your score: ${result}`}!</h1>
          <div className="font-medium tracking-tight">
              <h2 className="text-lg">The target time was: <strong className='text-xl'>{targetTime} second{targetTime > 1 ? 's' : ''}</strong></h2>
              <h2 className="text-lg">{formattedTime === 0 ? <span>You did not stop the timer at all!</span> : <strong>You stopped the timer with {formattedTime} seconds left!</strong>}</h2> 
          </div>
          <form className="flex items-center justify-end w-full pt-4" onSubmit={onReset}>
              <button
                className="px-3 py-2 bg-cold-dark-blue text-cold-light-grey font-semibold rounded-xl hover:bg-slate-950 transition-colors text-lg" autoFocus>Close</button>
          </form>
        </div>
    </div>,
    document.getElementById('modal')
  )
}