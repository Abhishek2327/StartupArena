import { X, ExternalLink, MapPin } from "lucide-react";

function CompanyPanel({ company, close }) {
  if (!company) return null;

  return (
    <div className="fixed top-0 right-0 w-[450px] h-screen bg-[#111111]/95 backdrop-blur-3xl border-l border-white/10 shadow-2xl z-[1000] flex flex-col animate-slide-in">
      <div className="p-6 border-b border-white/10 flex items-center justify-between shrink-0">
        <div>
          <h2 className="text-2xl font-bold text-white">{company.name}</h2>
          <div className="flex items-center gap-1 text-sm text-gray-400 mt-1">
            <MapPin className="w-3.5 h-3.5" />
            <span>Bangalore</span>
          </div>
        </div>
        <button 
          onClick={close}
          className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4">Open Roles</h3>
          <div className="space-y-3">
            {company.roles?.map((r, i) => (
              <div 
                key={i} 
                onClick={() => window.open(r.link, "_blank")}
                className="group p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer flex items-center justify-between"
              >
                <div>
                  <h4 className="font-semibold text-gray-200 group-hover:text-white">{r.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">{r.type || "Full-time"}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
              </div>
            ))}
            {(!company.roles || company.roles.length === 0) && (
              <div className="text-center py-8 text-gray-500 text-sm">
                No open roles listed currently.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyPanel;
