import { useState } from "react"

const MAX_COLS = 8
const MAX_ROWS = 7

export function Chunk({ index }: { index: number }) {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div 
      className={(isSelected ? "bg-sky-500/10 " : "text-muted ") + "col-span-1 row-span-1 select-none flex justify-center items-center " + (index < MAX_ROWS * (MAX_COLS - 1) ? "border-b " : "") + (index % MAX_COLS !== 0 ? "border-r " : "") +" border-dashed border-slate-400"} 
      onClick={() => setIsSelected(!isSelected)}
    >
      {index}
    </div>
  )
}