import { useState } from "react";
import startups from "../data/startups";
import MapView from "../components/mapview";
import Sidebar from "../components/sidebar";
import CompanyPanel from "../components/CompanyPanel";

function DashboardPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex h-screen w-full bg-[#0a0a0a] overflow-hidden text-[#E0E0E0]">
      {/* 
        Changing layout to have map on the left, sidebar on the right 
        or sidebar floating. For now, sidebar fixed width left.
      */}
      <Sidebar startups={startups} onSelect={setSelected} selected={selected} />
      
      <MapView startups={startups} onSelect={setSelected} />

      {selected && (
        <CompanyPanel company={selected} close={() => setSelected(null)} />
      )}
    </div>
  );
}

export default DashboardPage;
