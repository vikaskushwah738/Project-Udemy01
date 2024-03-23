import CoreConcept from './CoreConcept'
import {CORE_CONCEPTS } from '../data.js'
const CoreConcepts = () => {
  return (
    <>
    <section className='px-20 text-white pt-11 pb-10'>
          <div className='bg-purple-950 rounded-md '>
            <h2 className='text-4xl pt-10 pb-20 text-center'>Core Concepts</h2>
            <ul className='flex items-center px-5 gap-7 '>

              {CORE_CONCEPTS.map((conceptItem) =>
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
              )}
              {/* <CoreConcept title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}  /> */}
              
            </ul>
          </div>
        </section>
    </>
  )
}

export default CoreConcepts