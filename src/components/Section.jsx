
const Section = ({title, children, ...props}) => {
  return (
    <section {...props}>
     <h2 className="marker:text-4xl text-white">{title}</h2>
      {children}
    </section>
  )
}

export default Section