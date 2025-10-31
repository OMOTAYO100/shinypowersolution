import React from 'react'

function CardsSection({title, subtitle, bg = 'bg-slate-100', icon}) {
  return (
    <div className={`border ${bg} flex  flex-col items-center space-y-4 p-8 rounded-b-3xl shadow-md font-Figtree `}>
      <div className={`text-4xl border bg-green-500 p-4 rounded-full text-white`}>{icon && <>{icon}</>}</div>
        <h2 className='text-2xl font-semibold'>{title}</h2>
        <p className='text-center'>{subtitle}</p>

    </div>
  )
}

export default CardsSection