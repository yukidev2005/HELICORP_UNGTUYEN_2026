export default function Header() {
  return (
    <header className='  fixed top-0  bg-green-50  left-0 w-dvw py-4 z-10'>
      <LeftHeader />
    </header>
  );
}

const LeftHeader = () => {
  return <h1 className='font-bold h-full ml-5  text-2xl'>PMO</h1>;
};
