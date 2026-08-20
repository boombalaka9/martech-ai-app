import { ReactNode } from "react";
import { TopBar } from "@/components/rakmao/topbar";

const stats = [
  {
    value: "38",
    label: "ค้างติดตาม",
    icon: "warning",
    accent: true,
  },
  { value: "19", label: "ต้องติดตามวันนี้", icon: "event_available" },
  { value: "0", label: "รอเสนอราคา / ตัดสินใจ", icon: "autorenew" },
  { value: "0", label: "ปิดการขายได้ 30 วันล่าสุด", icon: "emoji_events" },
];

const channels = [
  { label: "ทุกช่องทาง", count: "328", active: true },
  { label: "Station", count: "91" },
  { label: "BuyNow", count: "237" },
];

type Lead = {
  company: string;
  phone: string;
  channel: "BUY NOW" | "STATION";
  location: string;
  lastBuy: string;
  offer: string;
  campaign?: string;
  score: number;
  scoreLabel: string;
  due: string;
};

const immediate: Lead[] = [
  {
    company: "บริษัท ไอที แฟคทอรี จำกัด",
    phone: "0954281856",
    channel: "BUY NOW",
    location: "ต.มีนบุรี อ.มีนบุรี จ.กรุงเทพมหานคร",
    lastBuy: "ปูนก่อ-ฉาบ · 27 ก.ค. 69",
    offer: "เสนอขายฝ้ายิปซัม",
    score: 91,
    scoreLabel: "สำคัญมาก",
    due: "10 ส.ค. 69",
  },
  {
    company: "บริษัท ไอที แฟคทอรี จำกัด",
    phone: "0954281856",
    channel: "BUY NOW",
    location: "ต.มีนบุรี อ.มีนบุรี จ.กรุงเทพมหานคร",
    lastBuy: "ปูนก่อ-ฉาบ · 27 ก.ค. 69",
    offer: "เสนอขายสี",
    score: 91,
    scoreLabel: "สำคัญมาก",
    due: "10 ส.ค. 69",
  },
  {
    company: "ชุมพิเชฐ สุขประเสริฐ",
    phone: "0648327107",
    channel: "BUY NOW",
    location: "ต.สำโรงเหนือ อ.เมืองสมุทรปราการ จ.สมุทรปราการ",
    lastBuy: "อิฐ · 10 ส.ค. 69",
    offer: "เสนอขายปูนก่อ",
    campaign: "ProThaicon 5 วัน · ซื้อแล้ว",
    score: 89,
    scoreLabel: "สำคัญมาก",
    due: "10 ส.ค. 69",
  },
];

function LeadCard({ lead }: { lead: Lead }) {
  return (
    <div className="bg-white rounded-lg border-l-4 border-rk-secondary-container border border-rk-border-subtle p-4 shadow-sm flex flex-col gap-2 hover:-translate-y-0.5 transition-all">
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
          <span className="text-[9px] text-rk-info font-semibold leading-none">
            รักษ์เหมา
          </span>
          <span className="bg-rk-secondary-container text-rk-on-secondary-container text-[9px] font-bold px-1.5 py-0.5 rounded mt-0.5">
            {lead.channel}
          </span>
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
          {lead.scoreLabel} {lead.score}
        </span>
        <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-rk-danger/10 text-rk-danger text-xs font-medium">
          <span className="material-symbols-outlined text-[14px]">
            calendar_today
          </span>
          {lead.due}
        </span>
      </div>
    </div>
  );
}

function Column({
  title,
  dotClass,
  count,
  warn,
  children,
  empty,
}: {
  title: string;
  dotClass: string;
  count: number | string;
  warn?: number;
  children?: ReactNode;
  empty?: boolean;
}) {
  return (
    <div className="flex flex-col bg-rk-surface-low/50 rounded-xl border border-rk-border-subtle min-w-[300px]">
      <div className="flex items-center justify-between px-4 py-3 border-b border-rk-border-subtle">
        <span className="flex items-center gap-2 font-serif font-semibold text-rk-primary">
          <span className={`w-2.5 h-2.5 rounded-full ${dotClass}`} />
          {title}
        </span>
        <div className="flex items-center gap-1.5">
          {warn !== undefined && (
            <span className="px-2 py-0.5 rounded-md bg-rk-danger/10 text-rk-danger text-xs font-semibold">
              ⚠ {warn}
            </span>
          )}
          <span className="px-2 py-0.5 rounded-md bg-rk-surface-container text-rk-on-surface-variant text-xs font-semibold">
            {count}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-3 min-h-[400px]">
        {empty ? (
          <div className="flex-1 flex items-center justify-center text-sm text-rk-on-surface-variant/60 py-20">
            ไม่มีงานในช่องนี้
          </div>
        ) : (
          children
        )}
      </div>
    </div>
  );
}

export default function TodayPage() {
  return (
    <>
      <TopBar
        title="ติดตามวันนี้"
        titleIcon="calendar_today"
        showSearch={false}
        subtitle="บอร์ดงานติดตาม — การ์ดย้าย"
      />

      <div className="p-6 md:p-8 flex flex-col gap-6 overflow-y-auto rk-scroll rk-fade-up">
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

        {/* Channel tabs */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            {channels.map((c) => (
              <button
                key={c.label}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  c.active
                    ? "bg-rk-primary text-white"
                    : "bg-white border border-rk-border-subtle text-rk-on-surface-variant hover:bg-rk-surface-container"
                }`}
              >
                {c.label}
                <span
                  className={`text-xs ${
                    c.active ? "text-white/80" : "text-rk-on-surface-variant/70"
                  }`}
                >
                  {c.count}
                </span>
              </button>
            ))}
          </div>
          <div className="relative flex-1 min-w-[200px] max-w-xs">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-rk-outline text-[18px]">
              search
            </span>
            <input
              className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-rk-border-subtle focus:border-rk-primary outline-none text-sm"
              placeholder="ค้นหาชื่อลูกค้า / เบอร์โทร..."
            />
          </div>
          <button className="flex items-center gap-1 px-3 py-2 bg-white border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors">
            ประเภทงานทั้งหมด
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-rk-on-surface-variant">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rk-secondary-container" />
            Phase งาน / กลุ่มสินค้า
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rk-info" />
            กลุ่มลูกค้า (Win back)
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rk-outline-variant" />
            แคมเปญ
          </span>
        </div>

        {/* Kanban columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <Column
            title="ติดตามทันที"
            dotClass="bg-rk-danger"
            count="328"
            warn={38}
          >
            {immediate.map((lead, i) => (
              <LeadCard key={i} lead={lead} />
            ))}
          </Column>
          <Column
            title="รอเสนอราคา"
            dotClass="bg-rk-secondary-container"
            count={0}
            empty
          />
          <Column
            title="รอตัดสินใจ"
            dotClass="bg-rk-warning"
            count={0}
            empty
          />
        </div>
      </div>
    </>
  );
}
