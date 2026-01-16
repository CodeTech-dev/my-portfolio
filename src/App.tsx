import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-background-dark min-h-screen font-display text-white">
      <Navbar />
      
      {/* Temporary sections for testing scroll */}
      <main className="pt-20">
        <section id="hero" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl">Hero Section</h1>
        </section>
        
        <section id="work" className="min-h-screen flex items-center justify-center bg-surface-darker">
          <h1 className="text-4xl">Work Section</h1>
        </section>
        
        <section id="about" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl">About Section</h1>
        </section>
        
        <section id="stack" className="min-h-screen flex items-center justify-center bg-surface-darker">
          <h1 className="text-4xl">Stack Section</h1>
        </section>
      </main>
    </div>
  );
}

export default App;