import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share2,
} from "lucide-react";

export default function DashboardMockup() {
  return (
    <>
      {/* Title bar */}
      <div className="bg-[#242427] border-b border-white/5 px-4 py-2.5 flex items-center gap-2">
        <div className="flex items-center gap-1.5 mr-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <PanelLeft className="w-3.5 h-3.5 text-white/40" />
        <ChevronLeft className="w-3.5 h-3.5 text-white/40" />
        <ChevronRight className="w-3.5 h-3.5 text-white/25" />
        <div className="flex-1 flex justify-center">
          <div className="flex items-center gap-1.5 bg-[#1a1a1c] rounded-md px-6 py-1">
            <Monitor className="w-3 h-3 text-white/60" />
            <span className="text-[10px] text-white/60">monkfunnel.com</span>
          </div>
        </div>
        <RotateCw className="w-3.5 h-3.5 text-white/40" />
        <Share2 className="w-3.5 h-3.5 text-white/40" />
        <Plus className="w-3.5 h-3.5 text-white/40" />
        <Copy className="w-3.5 h-3.5 text-white/40" />
      </div>

      {/* Site preview body */}
      <div style={{ minHeight: 420, background: "#F9F8F6" }}>

        {/* Simulated navbar */}
        <div className="flex items-center justify-between px-8 py-4 bg-white/70 border-b border-gray-100">
          <span className="text-[11px] font-medium text-gray-800 tracking-tight">Monk Funnel</span>
          <div className="hidden sm:flex items-center gap-5">
            {["Services", "Process", "Pricing"].map((l) => (
              <span key={l} className="text-[9px] text-gray-400">{l}</span>
            ))}
            <span className="text-[9px] bg-gray-900 text-white px-3 py-1 rounded-full">Get a free teardown</span>
          </div>
        </div>

        {/* Simulated hero */}
        <div className="flex flex-col items-center text-center px-6 pt-10 pb-8">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-white ring-1 ring-gray-200 px-3 py-1 mb-5">
            <span className="text-[8px] tracking-widest text-gray-400 uppercase">Conversion-First Websites · 21 days</span>
          </div>
          <div className="space-y-1 mb-4">
            <div className="h-5 bg-gray-800 rounded-sm mx-auto" style={{ width: "62%" }} />
            <div className="h-5 bg-gray-800 rounded-sm mx-auto" style={{ width: "48%" }} />
          </div>
          <div className="space-y-1 mb-6">
            <div className="h-2 bg-gray-200 rounded-sm mx-auto" style={{ width: "72%" }} />
            <div className="h-2 bg-gray-200 rounded-sm mx-auto" style={{ width: "60%" }} />
          </div>
          <div className="flex items-center gap-3">
            <div className="h-7 bg-gray-900 rounded-full px-4 flex items-center">
              <span className="text-[8px] text-white whitespace-nowrap">Get a free teardown</span>
            </div>
            <div className="h-2 w-20 bg-gray-300 rounded-sm" />
          </div>
        </div>

        {/* Simulated content strip */}
        <div className="mx-6 mb-6 rounded-xl bg-white ring-1 ring-gray-100 p-5">
          <div className="grid grid-cols-3 gap-4">
            {["Website Build", "SEO", "Paid Ads"].map((label, i) => (
              <div key={label} className="flex flex-col gap-1.5">
                <div className="h-14 rounded-lg bg-gray-50 ring-1 ring-gray-100 flex items-end p-2">
                  <div
                    className="rounded-sm bg-gray-300"
                    style={{ width: "100%", height: `${40 + i * 12}%` }}
                  />
                </div>
                <span className="text-[8px] text-gray-400 text-center">{label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}
