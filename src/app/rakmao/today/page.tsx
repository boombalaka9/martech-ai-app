"use client";

import { useMemo, useState } from "react";
import { TopBar } from "@/components/rakmao/topbar";
import { leads as seedLeads, type Channel, type Lead, type Stage } from "@/lib/rakmao/data";

const channelFilters: { key: Channel | "all"; label: string }[] = [
  { key: "all", label: "ทุกช่องทาง" },
  { key: "station", label: "Station" },
  { key: "buynow", label: "BuyNow" },
];

const stageMeta: Record<
  Stage,
  { title: string; dot: string; next?: Stage; prev?: Stage }
> = {
  immediate: { title: "ติดตามทันที", dot: "bg-rk-danger", next: "quoting" },
  quoting: {
    title: "รอเสนอราคา",
    dot: "bg-rk-secondary-container",
    next: "deciding",
    prev: "immediate",
  },
  deciding: { title: "รอตัดสินใจ", dot: "bg-rk-warning", prev: "quoting" },
};

const stageOrder: Stage[] = ["immediate", "quoting", "deciding"];

function LeadCard({
  lead,
  onMove,
}: {
  lead: Lead;
  onMove: (id: string, dir: "next" | "prev") => void;
}) {
  const meta = stageMeta[lead.stage];
  return (
    <div className="bg-white rounded-lg border-l-4 border-rk-secondary-container border border-rk-border-subtle p-4 shadow-sm flex flex-col gap-2 rk-fade-up">
      <div className="flex justify-between items-start gap-2">
        <div className="flex items-start gap-2 min-w-0">
          <span className="material-symbols-outlined text-rk-primary text-[20px] shrink-0">
            business
          </span>
          <div className="min-w-0">
            <div className="font-semibold text-sm text-rk-on-surface truncate">
              {lead.company}
            </div>
            <div className="flex items-center gap-1 text-xs text-rk-on-surface-variant mt-0.5">
              <span className="material-symbols-outlined text-[14px]">call</span>
              {lead.phone}
            </div>
          </div>
        </div>
        <span className="shrink-0 flex flex-col items-end">
          {lead.channel === "buynow" ? (
            <>
              <span className="text-[9px] text-rk-info font-semibold leading-none">
                รักษ์เหมา
              </span>
              <span className="bg-rk-secondary-container text-rk-on-secondary-container text-[9px] font-bold px-1.5 py-0.5 rounded mt-0.5">
                BUY NOW
              </span>
            </>
          ) : (
            <span className="px-1.5 py-0.5 rounded border border-rk-border-subtle text-rk-primary text-[9px] font-serif italic font-semibold">
              Station
            </span>
          )}
        </span>
      </div>

      <div className="flex items-start gap-1 text-xs text-rk-on-surface-variant">
        <span className="material-symbols-outlined text-[14px] shrink-0">
          location_on
        </span>
        <span>{lead.location}</span>
      </div>

      <div className="flex justify-between items-center text-xs">
        <span className="text-rk-on-surface-variant">
          ซื้อล่าสุด {lead.lastBuy}
        </span>
        <span className="text-rk-primary font-medium">{lead.offer}</span>
      </div>

      {lead.campaign && (
        <div className="flex items-center gap-1 text-xs text-rk-info">
          <span className="material-symbols-outlined text-[14px]">campaign</span>
          {lead.campaign}
        </div>
      )}

      <div className="flex justify-between items-center pt-2 border-t border-rk-border-subtle/60">
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-rk-danger/10 text-rk-danger text-xs font-medium">
          {lead.importance} {lead.score}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-rk-danger/10 text-rk-danger text-xs font-medium">
          <span className="material-symbols-outlined text-[14px]">
            calendar_today
          </span>
          {lead.due}
        </span>
      </div>

      {/* Move controls */}
      <div className="flex items-center justify-between pt-2">
        <button
          disabled={!meta.prev}
          onClick={() => onMove(lead.id, "prev")}
          className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-rk-on-surface-variant hover:bg-rk-surface-container disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          <span className="material-symbols-outlined text-[16px]">
            chevron_left
          </span>
          ย้อนกลับ
        </button>
        <button
          disabled={!meta.next}
          onClick={() => onMove(lead.id, "next")}
          className="flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium text-rk-primary hover:bg-rk-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
        >
          ถัดไป
          <span className="material-symbols-outlined text-[16px]">
            chevron_right
          </span>
        </button>
      </div>
    </div>
  );
}

export default function TodayPage() {
  const [leads, setLeads] = useState<Lead[]>(seedLeads);
  const [channel, setChannel] = useState<Channel | "all">("all");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((l) => {
      if (channel !== "all" && l.channel !== channel) return false;
      if (q && !(`${l.company} ${l.phone}`.toLowerCase().includes(q)))
        return false;
      return true;
    });
  }, [leads, channel, query]);

  const byStage = (stage: Stage) => filtered.filter((l) => l.stage === stage);

  const channelCount = (key: Channel | "all") =>
    key === "all"
      ? leads.length
      : leads.filter((l) => l.channel === key).length;

  const move = (id: string, dir: "next" | "prev") => {
    setLeads((prev) =>
      prev.map((l) => {
        if (l.id !== id) return l;
        const target = dir === "next" ? stageMeta[l.stage].next : stageMeta[l.stage].prev;
        return target ? { ...l, stage: target } : l;
      })
    );
  };

  const overdue = leads.filter((l) => l.stage === "immediate").length;

  const stats = [
    { value: String(overdue), label: "ค้างติดตาม", icon: "warning", accent: true },
    { value: String(byStage("immediate").length), label: "ต้องติดตามวันนี้", icon: "event_available" },
    { value: String(byStage("quoting").length), label: "รอเสนอราคา / ตัดสินใจ", icon: "autorenew" },
    { value: String(byStage("deciding").length), label: "รอตัดสินใจ", icon: "emoji_events" },
  ];

  return (
    <>
      <TopBar
        title="ติดตามวันนี้"
        titleIcon="calendar_today"
        showSearch={false}
        subtitle="บอร์ดงานติดตาม — กดปุ่มเพื่อย้ายการ์ด"
      />

      <div className="p-6 md:p-8 flex flex-col gap-6 overflow-y-auto rk-scroll">
        {/* Stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`bg-white p-5 rounded-xl border ${
                s.accent
                  ? "border-rk-danger/30 bg-rk-danger/5"
                  : "border-rk-border-subtle"
              } flex flex-col gap-1`}
            >
              <span
                className={`font-serif text-3xl font-bold ${
                  s.accent ? "text-rk-danger" : "text-rk-primary"
                }`}
              >
                {s.value}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-rk-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">
                  {s.icon}
                </span>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Channel tabs + search */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            {channelFilters.map((c) => (
              <button
                key={c.key}
                onClick={() => setChannel(c.key)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  channel === c.key
                    ? "bg-rk-primary text-white"
                    : "bg-white border border-rk-border-subtle text-rk-on-surface-variant hover:bg-rk-surface-container"
                }`}
              >
                {c.label}
                <span
                  className={`text-xs ${
                    channel === c.key
                      ? "text-white/80"
                      : "text-rk-on-surface-variant/70"
                  }`}
                >
                  {channelCount(c.key)}
                </span>
              </button>
            ))}
          </div>
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-rk-outline text-[18px]">
              search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-rk-border-subtle focus:border-rk-primary outline-none text-sm"
              placeholder="ค้นหาชื่อลูกค้า / เบอร์โทร..."
            />
          </div>
        </div>

        {/* Kanban columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {stageOrder.map((stage) => {
            const items = byStage(stage);
            const meta = stageMeta[stage];
            return (
              <div
                key={stage}
                className="flex flex-col bg-rk-surface-low/50 rounded-xl border border-rk-border-subtle"
              >
                <div className="flex items-center justify-between px-4 py-3 border-b border-rk-border-subtle">
                  <span className="flex items-center gap-2 font-serif font-semibold text-rk-primary">
                    <span className={`w-2.5 h-2.5 rounded-full ${meta.dot}`} />
                    {meta.title}
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-rk-surface-container text-rk-on-surface-variant text-xs font-semibold">
                    {items.length}
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-3 min-h-[400px]">
                  {items.length === 0 ? (
                    <div className="flex-1 flex items-center justify-center text-sm text-rk-on-surface-variant/60 py-20">
                      ไม่มีงานในช่องนี้
                    </div>
                  ) : (
                    items.map((lead) => (
                      <LeadCard key={lead.id} lead={lead} onMove={move} />
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
