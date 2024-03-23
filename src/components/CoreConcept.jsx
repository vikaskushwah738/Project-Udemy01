

const CoreConcept = ({image, title, description}) => {
  return (
    <li className='w-72 pb-10 '>
        <div className='flex justify-center'>
        <img src={image} alt={title} height={250} width={150} />
        </div>
        <h1 className='text-2xl pt-3 pb-3 font-medium text-center'>{title}</h1>
        <h3 className='text-center'>{description}</h3>
        
    </li>
  )
}

export default CoreConcept