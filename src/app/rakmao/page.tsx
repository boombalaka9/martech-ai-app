import { TopBar } from "@/components/rakmao/topbar";

const kpis = [
  {
    label: "Total Revenue",
    value: "฿12.5M",
    icon: "payments",
    iconClass: "bg-rk-primary/10 text-rk-primary",
    trend: "+15% vs last month",
    trendIcon: "trending_up",
    trendClass: "text-rk-success",
  },
  {
    label: "Active Campaigns",
    value: "24",
    icon: "campaign",
    iconClass: "bg-rk-secondary-container/30 text-rk-on-secondary-container",
    trend: "3 ending this week",
    trendIcon: "schedule",
    trendClass: "text-rk-on-surface-variant",
  },
  {
    label: "Total Customers",
    value: "1,224",
    icon: "groups",
    iconClass: "bg-rk-info/10 text-rk-info",
    trend: "+42 new this week",
    trendIcon: "trending_up",
    trendClass: "text-rk-success",
  },
  {
    label: "Conversion Rate",
    value: "8.5%",
    icon: "stacked_line_chart",
    iconClass: "bg-rk-primary/10 text-rk-primary",
    trend: "-0.2% vs last month",
    trendIcon: "trending_down",
    trendClass: "text-rk-danger",
    decoration: "percent",
  },
];

const pipeline = [
  { label: "Follow-up Needed", value: 38, width: "25%", color: "bg-rk-warning" },
  { label: "Quoting", value: 19, width: "15%", color: "bg-rk-info" },
  {
    label: "Decision Pending",
    value: 12,
    width: "10%",
    color: "bg-rk-secondary-container",
  },
  { label: "Closed", value: 85, width: "70%", color: "bg-rk-success" },
];

const products = [
  {
    name: "Ready-Mix Concrete",
    icon: "apartment",
    volume: "฿4.2M",
    growth: "12.5%",
    up: true,
  },
  {
    name: "Structural Steel",
    icon: "hardware",
    volume: "฿3.8M",
    growth: "8.2%",
    up: true,
  },
  {
    name: "Cement Bags",
    icon: "inventory_2",
    volume: "฿2.1M",
    growth: "3.4%",
    up: true,
  },
  {
    name: "Timber & Wood",
    icon: "forest",
    volume: "฿1.4M",
    growth: "1.1%",
    up: false,
  },
];

export default function DashboardPage() {
  return (
    <>
      <TopBar breadcrumb={["Dashboard", "Overview"]} />

      <div className="p-6 md:p-8 flex flex-col gap-6 overflow-y-auto rk-scroll rk-fade-up">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-rk-primary font-semibold m-0">
              Performance Overview
            </h2>
            <p className="text-sm text-rk-on-surface-variant mt-1">
              ภาพรวมตัวชี้วัดและกิจกรรมล่าสุดของ Rakmao Martech
            </p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-rk-border-subtle bg-white rounded-lg text-sm font-medium text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">
                calendar_month
              </span>
              This Month
            </button>
            <button className="px-4 py-2 bg-rk-primary text-white rounded-lg text-sm font-medium hover:bg-rk-primary/90 transition-colors shadow-sm">
              Export Report
            </button>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="relative overflow-hidden bg-white p-6 rounded-xl border border-rk-border-subtle flex flex-col justify-between hover:shadow-[0_4px_12px_rgba(0,0,0,0.05)] transition-shadow"
            >
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="text-xs font-semibold text-rk-on-surface-variant uppercase tracking-wider">
                  {k.label}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${k.iconClass}`}
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {k.icon}
                  </span>
                </div>
              </div>
              <div className="relative z-10">
                <div className="font-serif text-4xl text-rk-primary font-bold">
                  {k.value}
                </div>
                <div
                  className={`flex items-center gap-1 mt-2 text-xs font-medium ${k.trendClass}`}
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {k.trendIcon}
                  </span>
                  <span>{k.trend}</span>
                </div>
              </div>
              {k.decoration && (
                <div className="absolute -right-4 -bottom-4 opacity-5 pointer-events-none">
                  <span className="material-symbols-outlined text-[120px]">
                    {k.decoration}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Sales performance */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-rk-border-subtle flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-serif text-2xl text-rk-primary font-semibold m-0">
                Sales Performance
              </h3>
              <div className="flex gap-3">
                <span className="inline-flex items-center gap-1 text-xs text-rk-on-surface-variant">
                  <span className="w-3 h-3 rounded-full bg-rk-primary inline-block" />
                  Actual
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-rk-on-surface-variant">
                  <span className="w-3 h-3 rounded-full border-2 border-dashed border-rk-border-subtle inline-block" />
                  Target
                </span>
              </div>
            </div>
            <div className="relative h-[300px] w-full bg-rk-surface-low rounded-lg overflow-hidden border border-rk-border-subtle/50">
              <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-rk-primary/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-between py-4 px-8 opacity-20">
                {[0, 1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-full border-b border-rk-border-subtle" />
                ))}
              </div>
              <svg
                className="absolute inset-0 w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <path
                  className="text-rk-primary"
                  d="M 0 80 Q 15 70 25 50 T 50 45 T 75 25 T 100 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  className="text-rk-outline-variant"
                  d="M 0 90 L 25 72 L 50 58 L 75 40 L 100 22"
                  fill="none"
                  stroke="currentColor"
                  strokeDasharray="2 2"
                  strokeWidth="1"
                />
                {[
                  [25, 50],
                  [50, 45],
                  [75, 25],
                  [100, 12],
                ].map(([cx, cy], i) => (
                  <circle
                    key={i}
                    className="text-rk-primary"
                    cx={cx}
                    cy={cy}
                    fill="white"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="0.5"
                  />
                ))}
              </svg>
              <div className="absolute bottom-2 left-0 w-full flex justify-between px-8 text-xs text-rk-on-surface-variant">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map((m) => (
                  <span key={m}>{m}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Lead source doughnut */}
          <div className="bg-white p-6 rounded-xl border border-rk-border-subtle flex flex-col">
            <h3 className="font-serif text-2xl text-rk-primary font-semibold m-0 mb-6">
              Lead Source
            </h3>
            <div className="flex-1 flex flex-col items-center justify-center relative min-h-[250px]">
              <div
                className="relative w-48 h-48 rounded-full mb-6"
                style={{
                  background:
                    "conic-gradient(#00355a 0% 65%, #fec30a 65% 100%)",
                }}
              >
                <div className="absolute inset-6 bg-white rounded-full flex flex-col items-center justify-center">
                  <span className="font-serif text-xl text-rk-primary font-bold">
                    1,224
                  </span>
                  <span className="text-xs text-rk-on-surface-variant">
                    Total Leads
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-full mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rk-primary" />
                    <span className="text-sm text-rk-on-surface">Station</span>
                  </div>
                  <span className="text-sm text-rk-primary font-bold">65%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rk-secondary-container" />
                    <span className="text-sm text-rk-on-surface">BuyNow</span>
                  </div>
                  <span className="text-sm text-rk-primary font-bold">35%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline + products */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Pipeline summary */}
          <div className="lg:col-span-1 bg-white p-6 rounded-xl border border-rk-border-subtle">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-xl text-rk-primary font-semibold m-0">
                Pipeline Summary
              </h3>
              <button className="text-rk-on-surface-variant hover:text-rk-primary transition-colors">
                <span className="material-symbols-outlined text-[20px]">
                  more_vert
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              {pipeline.map((stage) => (
                <div key={stage.label} className="group cursor-pointer">
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-sm text-rk-on-surface flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${stage.color}`}
                      />
                      {stage.label}
                    </span>
                    <span className="text-sm font-bold text-rk-on-surface-variant group-hover:text-rk-primary transition-colors">
                      {stage.value}
                    </span>
                  </div>
                  <div className="w-full bg-rk-surface-container rounded-full h-2 overflow-hidden">
                    <div
                      className={`${stage.color} h-2 rounded-full`}
                      style={{ width: stage.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top products */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-rk-border-subtle">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-xl text-rk-primary font-semibold m-0">
                Top Performing Products
              </h3>
              <button className="px-3 py-1.5 border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors flex items-center gap-1">
                This Month
                <span className="material-symbols-outlined text-[18px]">
                  expand_more
                </span>
              </button>
            </div>
            <div className="overflow-x-auto rk-scroll">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-xs text-rk-on-surface-variant uppercase tracking-wider border-b border-rk-border-subtle">
                    <th className="py-2 font-semibold">Product Category</th>
                    <th className="py-2 font-semibold">Sales Volume</th>
                    <th className="py-2 font-semibold text-right">Growth</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((p) => (
                    <tr
                      key={p.name}
                      className="border-b border-rk-border-subtle/60 last:border-0"
                    >
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-rk-surface-container flex items-center justify-center text-rk-on-surface-variant">
                            <span className="material-symbols-outlined text-[20px]">
                              {p.icon}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-rk-on-surface">
                            {p.name}
                          </span>
                        </div>
                      </td>
                      <td className="py-3 text-sm font-semibold text-rk-on-surface">
                        {p.volume}
                      </td>
                      <td className="py-3 text-right">
                        <span
                          className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                            p.up
                              ? "bg-rk-success/10 text-rk-success"
                              : "bg-rk-danger/10 text-rk-danger"
                          }`}
                        >
                          <span className="material-symbols-outlined text-[14px]">
                            {p.up ? "arrow_upward" : "arrow_downward"}
                          </span>
                          {p.growth}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
