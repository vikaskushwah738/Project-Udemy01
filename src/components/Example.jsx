import TabButton from './TabButton.jsx'
import { useState } from 'react'
import {EXAMPLES} from '../data.js'
import Section from './Section.jsx';
const Example = () => {
    const [selectedTopic, setSelectedTopic] =useState();
    function handleClick(selectedButton){
      //selected Button jsx, componetnts, props, state  
      setSelectedTopic(selectedButton);
      console.log(selectedTopic)
     }
     
  return (
    <Section className='px-20 pb-10 text-white' title={Example}>
    <menu className='flex gap-20'>
     <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleClick("components")}>Components</TabButton>
     <TabButton isSelected={selectedTopic === 'jsx'}  onSelect={() => handleClick("jsx")}>Jsx</TabButton>
     <TabButton isSelected={selectedTopic === 'props'}  onSelect={() => handleClick("props")}>Props</TabButton>
     <TabButton isSelected={selectedTopic === 'state'}  onSelect={() => handleClick("state")}>State</TabButton>
    </menu>
    {!selectedTopic ? (
    <p>Please selecte a topic</p>
    ) : (
      <div className='border-2 p-8 rounded-md bg-purple-950'>
       <h3 className='text-4xl font-light pb-4'>{EXAMPLES[selectedTopic].title}</h3>
       <p>{EXAMPLES[selectedTopic].description}</p>
       <pre>
        <code>{EXAMPLES[selectedTopic].code} </code>
       </pre>
    </div>
    )}
    </Section>
    
    
    

  )
}

export default Example