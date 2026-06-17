import {
  ChevronLeft,
  ChevronRight,
  Compass,
  Copy,
  LayoutGrid,
  Layers,
  ListTodo,
  Monitor,
  PanelLeft,
  Plus,
  RotateCw,
  Share2,
  Sparkles,
} from "lucide-react";
import Logo from "./Logo";

const recentItems = [
  "NovaSpark — Google Ads Q3 2026",
  "Orbitly — Meta retargeting refresh",
  "Scalr Labs — SEO content calendar",
  "Fyndr.io — landing page A/B test",
  "Launchpad HQ — email drip setup",
];

const stats = [
  { label: "CAMPAIGNS", value: "40+", sub: "Live now" },
  { label: "CLIENTS", value: "18", sub: "Active" },
  { label: "LEADS", value: "12,400", sub: "Generated" },
  { label: "ROAS", value: "4.8x", sub: "Avg. return" },
];

const channels = [
  { name: "SEO", articles: 24, sub: "8 articles ranking" },
  { name: "Meta Ads", articles: 18, sub: "5 campaigns live" },
  { name: "Google Ads", articles: 12, sub: "4 ad groups active" },
];

const tableRows = [
  { keyword: "Best digital marketing agency for startups India", volume: "8,200", difficulty: "Low", status: "Ready" },
  { keyword: "How to run Google Ads for SaaS companies", volume: "12,400", difficulty: "Medium", status: "Drafting" },
  { keyword: "Performance marketing agency Delhi", volume: "4,600", difficulty: "Low", status: "Ready" },
  { keyword: "Meta ads strategy for D2C brands India 2026", volume: "9,800", difficulty: "Medium", status: "Drafting" },
  { keyword: "Sales funnel for tech startups", volume: "6,300", difficulty: "Low", status: "Ready" },
];

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

      {/* Dashboard body */}
      <div className="flex" style={{ minHeight: 420 }}>
        {/* Sidebar */}
        <div
          className="border-r border-white/5 bg-[#1e1e21] px-3 py-3.5 flex flex-col gap-4 shrink-0"
          style={{ width: "22%" }}
        >
          {/* Logo + grid */}
          <div className="flex items-center justify-between">
            <Logo className="w-4 h-4 text-white/70" />
            <LayoutGrid className="w-3.5 h-3.5 text-white/30" />
          </div>

          {/* Workspace badge */}
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-[#6366f1] flex items-center justify-center shrink-0">
              <span className="text-[8px] font-medium text-white leading-none">N</span>
            </div>
            <span className="text-[10px] text-white/80 truncate">NovaSpark</span>
          </div>

          {/* Nav items */}
          <div className="flex flex-col gap-0.5">
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] text-white/60 hover:bg-white/5 transition-colors text-left">
              <Compass className="w-3 h-3 shrink-0" />
              Campaigns
            </button>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] text-white/70 bg-white/[0.06]">
              <Layers className="w-3 h-3 shrink-0" />
              Funnels
            </button>
            <button className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[10px] text-white/60 hover:bg-white/5 transition-colors text-left">
              <ListTodo className="w-3 h-3 shrink-0" />
              Reports
            </button>
          </div>

          {/* Recent items */}
          <div className="flex flex-col gap-0.5">
            <span className="text-[8px] text-white/30 uppercase tracking-wider px-2 mb-1">
              Recent
            </span>
            {recentItems.map((item) => (
              <div key={item} className="flex items-center gap-1.5 px-2 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28c840]/70 shrink-0" />
                <span className="text-[9px] text-white/50 truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 px-5 py-4 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-[#6366f1] flex items-center justify-center shrink-0">
                <span className="text-base font-medium text-white leading-none">N</span>
              </div>
              <div>
                <div className="text-sm font-medium text-white">NovaSpark</div>
                <div className="text-[10px] text-white/45">Performance marketing strategy</div>
              </div>
            </div>
            <button className="flex items-center gap-1.5 bg-white/[0.08] hover:bg-white/[0.12] transition-colors px-3 py-1.5 rounded-full">
              <Sparkles className="w-3 h-3 text-white/70" />
              <span className="text-[11px] text-white/70">Generate</span>
            </button>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-4 divide-x divide-white/5 rounded-xl bg-white/[0.03] ring-1 ring-white/5 mb-4">
            {stats.map((stat) => (
              <div key={stat.label} className="py-4 px-3 text-center">
                <div className="text-[8px] tracking-wider text-white/35 uppercase mb-1">
                  {stat.label}
                </div>
                <div className="text-xl font-medium text-white">{stat.value}</div>
                <div className="text-[8px] text-white/35 mt-0.5">{stat.sub}</div>
              </div>
            ))}
          </div>

          {/* Channel cards */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {channels.map((ch) => (
              <div
                key={ch.name}
                className="rounded-lg bg-white/[0.03] ring-1 ring-white/5 px-3 py-2.5"
              >
                <div className="text-[11px] font-medium text-white/80 mb-1">
                  {ch.name}
                </div>
                <div className="text-[9px] text-white/40">{ch.sub}</div>
              </div>
            ))}
          </div>

          {/* Keyword opportunities table */}
          <div>
            <div className="text-[9px] text-white/30 uppercase tracking-wider mb-2">
              Keyword Opportunities
            </div>
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left text-[8px] text-white/30 pb-2 font-normal">
                    Keyword
                  </th>
                  <th className="text-right text-[8px] text-white/30 pb-2 font-normal">
                    Volume
                  </th>
                  <th className="text-right text-[8px] text-white/30 pb-2 pl-4 font-normal">
                    Difficulty
                  </th>
                  <th className="text-right text-[8px] text-white/30 pb-2 pl-4 font-normal">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/[0.03] last:border-0">
                    <td className="py-2 pr-4 text-[10px] text-white/60 max-w-[260px]">
                      <span className="line-clamp-1">{row.keyword}</span>
                    </td>
                    <td className="py-2 text-right text-[10px] text-white/45 tabular-nums whitespace-nowrap">
                      {row.volume}
                    </td>
                    <td className="py-2 pl-4 text-right text-[10px] text-white/45 whitespace-nowrap">
                      {row.difficulty}
                    </td>
                    <td
                      className={`py-2 pl-4 text-right text-[10px] whitespace-nowrap ${
                        row.status === "Drafting"
                          ? "text-[#febc2e]/80"
                          : "text-[#28c840]/70"
                      }`}
                    >
                      {row.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
