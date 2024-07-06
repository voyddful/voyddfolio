import Link from 'next/link'
import { Scroller, Button } from '../components.js' 
import projects from './projects.json'

export default function Projects(){
    
    return(
        <main className=" font-cormorant">
            <section>
                {/*each projest thing */}
                
                <div className=" p-10 text-lemon-100 md:grid md:gap-8  md:grid-cols-3">
                    <div className='-mx-10 md:col-span-3 text-center py-10 bg-black/40  content-center  text-5xl'>My Projects</div>
                    
                    {projects.map(project => {
                        const { Name, Descript, Link, Img } = project
                        return(
                            <Scroller key={1} >
                                
                                    <div className="min-h-72 rounded-t-2xl lg:rounded-2xl bg-black/40">
                                        <img className="rounded-t-2xl lg:rounded-2xl " width={'100%'} src={Img}/>
                                    </div>
                                    <div className="min-h-72 p-10 lg:col-span-2 rounded-b-2xl lg:rounded-2xl bg-black/40">
                                        <h1 className=" mb-5 text-4xl">{Name}</h1>
                                        <p className='text-xl mb-5'>{Descript}</p>

                                        <a href={Link}><Button link={Link}><p  className='rounded-full text-jet-400 my-10 w-fit px-10 py-2 text-center bg-lemon-400 hover:bg-lemon-200 hover:ring-4 hover:ring-gem-200 active:bg-lemon-400 font-bold '> Visit {Name}</p></Button></a>
                                        
                                            
                                    </div>
                                
                            </Scroller>
                        )
                    })}

                   
                </div>
            </section>
        </main>
        
    )
}