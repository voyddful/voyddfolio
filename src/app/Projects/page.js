
import { createClient } from '@supabase/supabase-js'
import Link from 'next/link'
import { Scroller, Button } from '../components.js' 

const supabase = createClient("https://mormdczupqgqndyumgof.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcm1kY3p1cHFncW5keXVtZ29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1ODI0NzYsImV4cCI6MjAzNTE1ODQ3Nn0.N6BiIFAETZKSlfpDh6HssTT6yH8z9R2UShChq8a_1Eo")

const { data, error } = await supabase
        .from('projects')
        .select('')

const { count, error2 } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true })

export function Project(){
    
    let arr = []
    for(let numba = 0;numba < count; numba++){
    
    
    arr.push(
        <Scroller >
            <section className='lg:grid my-5 lg:gap-8 lg:grid-cols-3 lg:col-span-3'>
                <div className="min-h-72 rounded-t-2xl lg:rounded-2xl bg-black/40">
                    <img className="rounded-t-2xl lg:rounded-2xl " width={'100%'} src={data[numba]['img']}/>
                </div>
                <div className="min-h-72 p-10 lg:col-span-2 rounded-b-2xl lg:rounded-2xl bg-black/40">
                    <h1 className=" mb-5 text-4xl">{data[numba]['name']}</h1>
                    <p className='text-xl mb-5'>{data[numba]['Descript']}</p>

                    <a href={data[numba]['Link']}><Button link={data[numba]['Link']}><p  className='rounded-full text-jet-400 my-10 w-fit px-10 py-2 text-center bg-lemon-400 hover:bg-lemon-200 hover:ring-4 hover:ring-gem-200 active:bg-lemon-400 font-bold '> Visit {data[numba]['Link']}</p></Button></a>
                    
                        
                </div>
            </section>
        </Scroller>
            
    )
    }
    let stuff = arr.map((project) => <div key="1" className='col-span-3'>{project}</div>)
    return(<div className='col-span-3'>{stuff}</div>)
}


export default function Projects(){
    
    return(
        <main className=" font-cormorant">
            <section>
                {/*each projest thing */}
                
                <div className=" p-10 text-lemon-100 md:grid md:gap-8  md:grid-cols-3">
                    <div className='-mx-10 md:col-span-3 text-center py-10 bg-black/40  content-center  text-5xl'>My Projects</div>

                    <Project/>

                   
                </div>
            </section>
        </main>
        
    )
}