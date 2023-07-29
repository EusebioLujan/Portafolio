import Landing from './components/landing/page';
import NavBar from './components/navbar/page';

export default function Home() {
  return (
    <>
      <main className="min-h-screen   bg-[#0F212E] text-white">
         <NavBar/>
         <Landing/>  
      </main>
    </>
  );
}
