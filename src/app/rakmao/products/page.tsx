"use client";

import { useMemo, useState } from "react";
import { TopBar } from "@/components/rakmao/topbar";
import {
  productGroups,
  productGroupNames,
  type Channel,
  type ProductCard as CardType,
} from "@/lib/rakmao/data";

const channelFilters: { key: Channel | "all"; label: string; sub?: string }[] = [
  { key: "all", label: "ทุกช่องทาง" },
  { key: "station", label: "Station", sub: "Station" },
  { key: "buynow", label: "BuyNow", sub: "รักษ์เหมา" },
];

const rangeChips: { label: string; days: number }[] = [
  { label: "1 สัปดาห์", days: 7 },
  { label: "2 สัปดาห์", days: 14 },
  { label: "3 สัปดาห์", days: 21 },
  { label: "1 เดือน", days: 30 },
  { label: "2 เดือน", days: 60 },
  { label: "3 เดือน", days: 90 },
];

function ProductCardView({ card }: { card: CardType }) {
  return (
    <div className="bg-white rounded-lg border border-rk-border-subtle p-4 shadow-sm flex flex-col gap-2 rk-fade-up">
      <div className="flex items-start gap-3">
        <span className="flex flex-col items-center justify-center w-11 h-11 rounded-lg bg-rk-secondary-container/60 text-rk-on-secondary-container shrink-0">
          <span className="font-bold text-sm leading-none">{card.score}</span>
          <span className="text-[9px] leading-none mt-0.5">คะแนน</span>
        </span>
        <div className="min-w-0 flex-1">
          <div className="font-semibold text-sm text-rk-on-surface truncate">
            {card.name}
          </div>
          <div className="flex items-center gap-2 mt-1">
            {card.channel === "buynow" ? (
              <span className="inline-flex flex-col leading-none">
                <span className="text-[8px] text-rk-info font-semibold">
                  รักษ์เหมา
                </span>
                <span className="text-[9px] font-bold text-rk-primary">
                  BUY NOW
                </span>
              </span>
            ) : (
              <span className="px-2 py-0.5 rounded border border-rk-border-subtle text-rk-primary text-[10px] font-serif italic font-semibold">
                Station
              </span>
            )}
            <span className="text-xs text-rk-on-surface-variant">
              {card.phone}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-start gap-1 text-xs text-rk-on-surface-variant">
        <span className="material-symbols-outlined text-[14px] shrink-0">
          location_on
        </span>
        <span>{card.location}</span>
      </div>

      <div className="flex items-center gap-2 text-xs pt-1">
        <span
          className={`px-2 py-1 rounded font-medium ${
            card.dueWarn
              ? "bg-rk-danger text-white"
              : "bg-rk-info/10 text-rk-info"
          }`}
        >
          {card.due}
        </span>
        <span className="text-rk-on-surface-variant">{card.boughtLine}</span>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const [view, setView] = useState<"group" | "kanban">("kanban");
  const [channel, setChannel] = useState<Channel | "all">("all");
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("ทั้งหมด");
  const [rangeDays, setRangeDays] = useState(7);

  const columns = useMemo(() => {
    const q = query.trim().toLowerCase();
    return productGroups
      .filter((g) => group === "ทั้งหมด" || g.title === group)
      .map((g) => ({
        ...g,
        cards: g.cards.filter((c) => {
          if (channel !== "all" && c.channel !== channel) return false;
          if (c.boughtDaysAgo > rangeDays) return false;
          if (q && !(`${c.name} ${c.phone}`.toLowerCase().includes(q)))
            return false;
          return true;
        }),
      }))
      .filter((g) => g.cards.length > 0);
  }, [channel, query, group, rangeDays]);

  const totalSites = columns.reduce((sum, g) => sum + g.cards.length, 0);

  return (
    <>
      <TopBar
        title="ติดตามรายสินค้า"
        titleIcon="apps"
        showSearch={false}
        subtitle="ตามกลุ่มลูกค้าที่เพิ่งซื้อสินค้ากลุ่มเดียวกัน — เลือกกลุ่มสินค้าและช่วงเวลา"
      />

      <div className="p-6 md:p-8 flex flex-col gap-5 overflow-y-auto rk-scroll">
        {/* View toggle */}
        <div className="inline-flex items-center gap-1 bg-white border border-rk-border-subtle rounded-lg p-1 w-fit">
          <button
            onClick={() => setView("group")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              view === "group"
                ? "bg-rk-primary text-white"
                : "text-rk-on-surface-variant hover:bg-rk-surface-container"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">layers</span>
            ตามกลุ่มสินค้า
          </button>
          <button
            onClick={() => setView("kanban")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              view === "kanban"
                ? "bg-rk-primary text-white"
                : "text-rk-on-surface-variant hover:bg-rk-surface-container"
            }`}
          >
            <span className="material-symbols-outlined text-[18px]">
              view_kanban
            </span>
            Kanban ทุกกลุ่ม
          </button>
        </div>

        {/* Channel + search + group select */}
        <div className="flex flex-wrap items-center gap-3">
          {channelFilters.map((c) => (
            <button
              key={c.key}
              onClick={() => setChannel(c.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                channel === c.key
                  ? "bg-rk-primary text-white"
                  : "bg-white border border-rk-border-subtle text-rk-on-surface-variant hover:bg-rk-surface-container"
              }`}
            >
              {c.sub && (
                <span
                  className={`text-xs font-serif italic ${
                    channel === c.key
                      ? "text-white/70"
                      : "text-rk-on-surface-variant/70"
                  }`}
                >
                  {c.sub}
                </span>
              )}
              {c.label}
            </button>
          ))}
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
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-rk-on-surface-variant">
              กลุ่มสินค้า
            </span>
            <select
              value={group}
              onChange={(e) => setGroup(e.target.value)}
              className="px-3 py-2 bg-white border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors outline-none focus:border-rk-primary min-w-[180px]"
            >
              {productGroupNames.map((g) => (
                <option key={g} value={g}>
                  {g === "ทั้งหมด" ? "เลือกกลุ่มสินค้า..." : g}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Time range chips */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] text-rk-on-surface-variant">
            ช่วงเวลาที่ซื้อย้อนหลัง
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {rangeChips.map((r) => (
              <button
                key={r.label}
                onClick={() => setRangeDays(r.days)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  rangeDays === r.days
                    ? "bg-rk-primary text-white"
                    : "bg-white border border-rk-border-subtle text-rk-on-surface-variant hover:bg-rk-surface-container"
                }`}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* Summary line */}
        <div className="text-sm text-rk-on-surface-variant">
          รวม <span className="font-semibold text-rk-primary">{totalSites}</span>{" "}
          ไซต์ที่ต้องติดตาม ·{" "}
          <span className="font-semibold text-rk-primary">{columns.length}</span>{" "}
          กลุ่มสินค้า
        </div>

        {/* Columns / groups */}
        {columns.length === 0 ? (
          <div className="bg-white rounded-xl border border-rk-border-subtle py-16 text-center text-sm text-rk-on-surface-variant/60">
            ไม่พบไซต์ที่ตรงกับเงื่อนไข ลองปรับช่วงเวลาหรือช่องทาง
          </div>
        ) : (
          <div
            className={
              view === "kanban"
                ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
                : "flex flex-col gap-5"
            }
          >
            {columns.map((col) => (
              <div
                key={col.id}
                className="flex flex-col bg-rk-surface-low/50 rounded-xl border border-rk-border-subtle"
              >
                <div className="p-4 border-b border-rk-border-subtle">
                  <div className="flex items-center justify-between mb-2">
                    <span className="flex items-center gap-2 font-serif font-semibold text-rk-primary text-lg">
                      <span className="material-symbols-outlined text-[22px]">
                        {col.icon}
                      </span>
                      {col.title}
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-rk-primary text-white text-xs font-semibold">
                      {col.cards.length} ไซต์
                    </span>
                  </div>
                  <div
                    className={`text-xs rounded-md px-3 py-2 ${
                      col.suggestStrong
                        ? "bg-rk-secondary-container/30 text-rk-on-surface"
                        : "bg-rk-info/10 text-rk-on-surface"
                    }`}
                  >
                    เสนอ{" "}
                    <span
                      className={`font-semibold ${
                        col.suggestStrong ? "text-rk-danger" : "text-rk-info"
                      }`}
                    >
                      {col.suggest}
                    </span>
                  </div>
                </div>
                <div
                  className={
                    view === "kanban"
                      ? "flex flex-col gap-3 p-3 min-h-[200px]"
                      : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 p-3"
                  }
                >
                  {col.cards.map((card) => (
                    <ProductCardView key={card.id} card={card} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
