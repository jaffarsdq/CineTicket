
function MovieTitleBanner({state}) {
  return (
    <div className="h-40 text-white bg-slate-800 flex justify-center items-end">
        <div className="w-9/12 pb-6">
            <h1 className="text-4xl tracking-wide font-medium pb-6">{state && state.movieName && state.movieName}</h1>
            <div className="flex gap-5 ms-[1px] text-xs items-center">
                <p className="h-7 border-2 border-slate-400/95 text-white/90 rounded-full w-[29px] flex justify-center items-center text-center font-medium">UA</p>
                <p className="h-5 border-2 border-slate-400/60 text-white/80 rounded-full w-fit px-2 text-center uppercase">drama</p>  
                <p className="h-5 border-2 border-slate-400/60 text-white/80 rounded-full w-fit px-2 text-center uppercase">thriller</p>  
                
            </div>
        </div>
    </div>
  )
}

export default MovieTitleBanner