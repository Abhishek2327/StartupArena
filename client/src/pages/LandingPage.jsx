import { useNavigate } from "react-router-dom";
import { MoveRight, MapPin, Building2, Users } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/20 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

      <main className="z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto space-y-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 mb-4 transition-transform hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
          <span>Refreshed daily</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gradient pb-2">
          BANGALORE STARTUP ARENA
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 max-w-2xl font-light">
          The most direct way to find startup roles in Bangalore. Zero friction, visual first.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
          <button 
            onClick={() => navigate("/dashboard")}
            className="group relative px-8 py-4 bg-white text-black font-semibold rounded-full overflow-hidden transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
          >
            <span>Explore Arena</span>
            <MoveRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-20 text-left">
          <div className="p-6 rounded-2xl glass-card transition-all hover:border-white/20 hover:-translate-y-1">
            <Building2 className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No Sign-in</h3>
            <p className="text-gray-500 text-sm">Jump straight into the map without creating an account. Zero friction.</p>
          </div>
          <div className="p-6 rounded-2xl glass-card transition-all hover:border-white/20 hover:-translate-y-1">
            <MapPin className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Visual First</h3>
            <p className="text-gray-500 text-sm">See exactly where the companies are located in Bangalore's tech hubs.</p>
          </div>
          <div className="p-6 rounded-2xl glass-card transition-all hover:border-white/20 hover:-translate-y-1">
            <Users className="w-8 h-8 text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Free Forever</h3>
            <p className="text-gray-500 text-sm">No paywalls, no premium tiers. Just open access to the startup ecosystem.</p>
          </div>
        </div>
      </main>

      <footer className="absolute bottom-8 text-sm text-gray-600 flex items-center gap-6">
        <a href="#" className="hover:text-gray-300 transition-colors">Advertise</a>
        <a href="#" className="hover:text-gray-300 transition-colors">Waitlist</a>
        <span>•</span>
        <span>Made with ❤️</span>
      </footer>
    </div>
  );
}

export default LandingPage;
