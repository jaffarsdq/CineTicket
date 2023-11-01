
function MovieTitleBanner() {
  return (
    <div className="h-40 text-white bg-slate-800 flex justify-center items-end">
        <div className="w-9/12 pb-6">
            <h1 className="text-5xl pb-6">Leo - Tamil</h1>
            <div className="flex gap-5 ms-[1px]">
                <p className="border-2 border-white text-sm rounded-full min-w-[30px] p-1 text-center font-medium">UA</p>
                <p className="border-2 p-[5px] border-slate-400/60 text-white/80 text-xs rounded-full min-w-[50px] text-center uppercase">thriller</p>  
                <p className="border-2 p-[5px] border-slate-400/60 text-white/80 text-xs rounded-full min-w-[50px] text-center uppercase">action</p>  
            </div>
        </div>
    </div>
  )
}

export default MovieTitleBanner