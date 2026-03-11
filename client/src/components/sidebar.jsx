import { Search, Building2 } from "lucide-react";

function Sidebar({ startups, onSelect, selected }) {
  return (
    <div className="w-[400px] h-full bg-[#0a0a0a]/90 backdrop-blur-2xl border-r border-white/10 flex flex-col z-[500] shadow-2xl relative">
      <div className="p-6 border-b border-white/10 shrink-0">
        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-6">
          Startups
        </h2>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input 
            type="text"
            placeholder="Search companies..."
            className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-200 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors placeholder:text-gray-500"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 custom-scrollbar">
        {startups?.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s)}
            className={`w-full text-left p-4 rounded-xl transition-all duration-200 border flex items-start gap-4 ${
              selected?.id === s.id 
                ? "bg-white/10 border-white/20 shadow-lg scale-[1.02]" 
                : "bg-transparent border-transparent hover:bg-white/5 hover:border-white/10"
            }`}
          >
            <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
              <Building2 className="w-5 h-5 text-gray-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-100">{s.name}</h3>
              <p className="text-sm text-gray-500 line-clamp-1 mt-1">
                {s.roles?.length || 0} open roles
              </p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
