type BannerProps = {
    bannerImg: string
}

function Banner({bannerImg}: BannerProps) {
  return (
    <div className="my-5">
        <img src={bannerImg} alt=""  className="rounded-xl"/>
    </div>
  )
}

export default Banner