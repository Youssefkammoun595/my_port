/**
 * @copyright 2025 YoussefKammoun
 * @license Apache-2.0
 */


import SkillCard from "./SkillCard";


const skillItem = [
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/figma.svg',
      label: 'Figma',
      desc: 'Design tool'
    },
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/expressjs.svg',
      label: 'ExpressJS',
      desc: 'Node Framework'
    },
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/mongodb.svg',
      label: 'MongoDB',
      desc: 'Database'
    },
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/Henry Clark - Portfolio Images/images/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];


const Skill = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                 Essential Tools I use
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.</p>
            <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    skillItem.map(({imgSrc, label, desc}, key)=>(
                        <SkillCard 
                            key={key}
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            classes="reveal-up"
                        />
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Skill