const geeting = ['Nameste', 'Hi', 'Good_Morning', 'Radhe_Radhe'];
import Logo from './../assets/logo.png';
function ramRamdomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}
export default function Header() {
    const descriptionp = geeting[ramRamdomInt(3)];
    return (
      <header className='bg-blue-950'>
        <div className='flex justify-center pt-6'>
        <img src={Logo} alt="logo" />
        </div>
       
         <h1 className='text-4xl text-white text-center pt-10'>React Essentials</h1>
        <p className='text-center text-white pt-6 text-xl'>{descriptionp} i am welcome all of you my team</p>
      </header>
    );
  }