/**
 * @copyright 2025 YoussefKammoun
 * @license Apache-2.0
 */

const Hero = () => {
  return (
    <section  id="Home" className="pt-28 lg:pt-36">
    
        <div className="container lg:grid lg:grid-cols-2 items-center lg:gap-10">
            <div>
                <div className="flex items-center gap-3">
                    <figure className="img-box w-9 h-9 rounded-lg">
                        <img src="/Henry Clark - Portfolio Images/images/avatar-1.jpg" width={40} height={40} alt="portrait" className="img-cover"/>
                    </figure>
                    <div className="flex items-center gab-1.5 trxt-zinc-400 text-sm tracking-wide">
                        <span className="">
                            <span className=""></span>
                        </span>
                        Available for work
                    </div>
                </div>
                <h2 className="">
                    Building Scalable Modern Websites for the Future 
                </h2>
                <div className="">
                    ButtonPrimary

                    ButtonOutline
                </div>
            </div>

            <div className="">
                <figure className="">
                    <img src="/Henry Clark - Portfolio Images/images/hero-banner.png" width={656} height={800} alt="lboss" className="w-full" />
                </figure>
            </div>


        </div>

    </section>
  )
}

export default Hero