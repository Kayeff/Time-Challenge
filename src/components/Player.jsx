import { useRef, useState } from "react"

export default function Player() {
    const [playerName, setPlayerName] = useState('');
    const player = useRef('');

    function handleClick(){
        setPlayerName(player.current.value);
        player.current.value = "";
    }

  return (
    <section className="w-[80%] p-2 flex items-center justify-center flex-col space-y-2">
        <h1 className="text-2xl tracking-tight">{playerName ? `Welcome ${playerName} !` : ''}</h1>
        <div className="flex items-center justify-center space-x-1">
            <input 
                ref={player}
                type="text" 
                className="px-3 py-2 outline-hidden border border-cold-dark-grey bg-transparent rounded-xl" 
                placeholder="Enter your name.." />
            <button 
                onClick={handleClick}
                className="px-3 py-2 bg-cold-dark-grey font-semibold shadow-stripe hover:bg-cold-light-grey text-cold-dark-blue rounded-xl"
                >Set Name</button>
        </div>
    </section>
  )
}
