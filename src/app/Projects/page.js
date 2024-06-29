import { createClient } from '@supabase/supabase-js'

const supabase = createClient("https://mormdczupqgqndyumgof.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1vcm1kY3p1cHFncW5keXVtZ29mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1ODI0NzYsImV4cCI6MjAzNTE1ODQ3Nn0.N6BiIFAETZKSlfpDh6HssTT6yH8z9R2UShChq8a_1Eo")

const { data, error } = await supabase
        .from('projects')
        .select('')

export function Project(){
    
    let arr = []
    for(let numba = 1;numba < 4; numba++){
    
    
    arr.push(
        <section className='grid my-5 gap-8 grid-cols-3 col-span-3'>
            <div className="min-h-72 rounded-2xl bg-black/40">
                <img className="rounded-2xl " width={'100%'} src={data[numba-1]['img']}/>
            </div>
            <div className="min-h-72 p-10 col-span-2 rounded-lg bg-black/40">
                <h1 className=" mb-5 text-4xl">{data[numba-1]['name']}</h1>
                <p>{data[numba-1]['Descript']}</p>
                    
            </div>
        </section>
        
            
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