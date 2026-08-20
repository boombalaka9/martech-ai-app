"use client";

import { useMemo, useState } from "react";
import { TopBar } from "@/components/rakmao/topbar";
import { customers as seed, type Channel, type Customer } from "@/lib/rakmao/data";

const channelFilters: { key: Channel | "all"; label: string }[] = [
  { key: "all", label: "ทุกช่องทาง" },
  { key: "station", label: "Station" },
  { key: "buynow", label: "BuyNow" },
];

const groups = ["ทุกกลุ่มลูกค้า", "กลุ่ม 1", "กลุ่ม 2", "กลุ่ม 3"];

function CustomerRow({ c }: { c: Customer }) {
  const [open, setOpen] = useState(false);
  const overdue = c.overdueDays > 0;
  return (
    <>
      <tr
        onClick={() => setOpen((o) => !o)}
        className="border-b border-rk-border-subtle/60 hover:bg-rk-surface-low/40 transition-colors cursor-pointer"
      >
        <td className="px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-sm text-rk-on-surface">
              {c.name}
            </span>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rk-secondary-container/40 text-rk-on-secondary-container text-[11px] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-rk-secondary" />
              {c.group}
            </span>
          </div>
          <div className="text-xs text-rk-on-surface-variant mt-1">
            {c.revenue} · {c.purchases} ครั้ง · ล่าสุด {c.lastPurchaseDays} วันก่อน
          </div>
        </td>
        <td className="px-5 py-4">
          <span className="px-2.5 py-1 rounded-md border border-rk-border-subtle text-rk-primary text-xs font-serif italic font-semibold">
            {c.channel === "station" ? "Station" : "BuyNow"}
          </span>
        </td>
        <td className="px-5 py-4">
          <span
            className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
              overdue
                ? "bg-rk-danger text-white"
                : "bg-rk-success/10 text-rk-success"
            }`}
          >
            {overdue ? `ค้าง ${c.overdueDays} วัน` : "ปกติ"}
          </span>
        </td>
        <td className="px-5 py-4">
          <span className="flex items-center gap-1 text-sm text-rk-on-surface-variant max-w-[220px] truncate">
            <span className="material-symbols-outlined text-[16px] shrink-0">
              location_on
            </span>
            {c.location}
          </span>
        </td>
        <td className="px-5 py-4">
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-1 rounded bg-rk-surface-container text-rk-on-surface-variant">
              {c.boughtBefore}
            </span>
            <span className="material-symbols-outlined text-[16px] text-rk-on-surface-variant">
              arrow_forward
            </span>
            <span className="px-2 py-1 rounded bg-rk-primary/10 text-rk-primary font-medium">
              {c.offerNext}
            </span>
          </div>
        </td>
        <td className="px-5 py-4">
          <div className="flex items-center gap-2">
            <span className="flex flex-col items-center justify-center w-11 h-11 rounded-lg bg-rk-secondary-container/60 text-rk-on-secondary-container">
              <span className="font-bold text-sm leading-none">{c.score}</span>
              <span className="text-[9px] leading-none mt-0.5">คะแนน</span>
            </span>
            <span
              className={`px-2 py-1 rounded-full text-[11px] font-medium ${
                c.importance === "สำคัญมาก"
                  ? "bg-rk-danger/10 text-rk-danger"
                  : c.importance === "สำคัญ"
                    ? "bg-rk-warning/10 text-rk-warning"
                    : "bg-rk-info/10 text-rk-info"
              }`}
            >
              {c.importance}
            </span>
          </div>
        </td>
        <td className="px-5 py-4 text-right">
          <span
            className={`material-symbols-outlined text-rk-on-surface-variant transition-transform ${
              open ? "rotate-180" : ""
            }`}
          >
            expand_more
          </span>
        </td>
      </tr>
      {open && (
        <tr className="bg-rk-surface-low/60">
          <td colSpan={7} className="px-5 py-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 rk-fade-up">
              <div>
                <div className="text-[11px] uppercase tracking-wider text-rk-on-surface-variant">
                  เบอร์โทร
                </div>
                <div className="text-sm text-rk-on-surface font-medium mt-1 flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    call
                  </span>
                  {c.phone}
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-rk-on-surface-variant">
                  ยอดซื้อสะสม
                </div>
                <div className="text-sm text-rk-on-surface font-medium mt-1">
                  {c.revenue} · {c.purchases} ครั้ง
                </div>
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-rk-on-surface-variant">
                  ซื้อล่าสุด
                </div>
                <div className="text-sm text-rk-on-surface font-medium mt-1">
                  {c.lastPurchaseDays} วันก่อน
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-[11px] uppercase tracking-wider text-rk-on-surface-variant">
                  บันทึกจาก AI
                </div>
                <div className="text-sm text-rk-on-surface mt-1">{c.note}</div>
              </div>
              <div className="md:col-span-4 flex gap-2 pt-1">
                <button className="px-3 py-1.5 bg-rk-primary text-white rounded-lg text-xs font-medium hover:bg-rk-primary/90 transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    call
                  </span>
                  โทรหาลูกค้า
                </button>
                <button className="px-3 py-1.5 border border-rk-border-subtle rounded-lg text-xs font-medium text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    edit_note
                  </span>
                  สร้างสคริปต์เสนอขาย
                </button>
              </div>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default function CustomersPage() {
  const [channel, setChannel] = useState<Channel | "all">("all");
  const [group, setGroup] = useState("ทุกกลุ่มลูกค้า");
  const [query, setQuery] = useState("");
  const [script, setScript] = useState<"ครับ" | "ค่ะ">("ค่ะ");
  const [updatedAt, setUpdatedAt] = useState("11 ส.ค. 69 08:51");
  const [nonce, setNonce] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = seed.filter((c) => {
      if (channel !== "all" && c.channel !== channel) return false;
      if (group !== "ทุกกลุ่มลูกค้า" && c.group !== group) return false;
      if (q && !(`${c.name} ${c.phone}`.toLowerCase().includes(q))) return false;
      return true;
    });
    // "อัปเดตคิว" reshuffles: sort by score desc when nonce is even, by overdue when odd
    return [...list].sort((a, b) =>
      nonce % 2 === 0 ? b.score - a.score : b.overdueDays - a.overdueDays
    );
  }, [channel, group, query, nonce]);

  const channelCount = (key: Channel | "all") =>
    key === "all" ? seed.length : seed.filter((c) => c.channel === key).length;

  const refresh = () => {
    setNonce((n) => n + 1);
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, "0");
    const mm = String(now.getMinutes()).padStart(2, "0");
    setUpdatedAt(`11 ส.ค. 69 ${hh}:${mm}`);
  };

  return (
    <>
      <TopBar
        title="ติดตามรายลูกค้า"
        titleIcon="grid_view"
        showSearch={false}
        subtitle="AI จัดลำดับว่าวันนี้ควรติดตามลูกค้าคนไหนก่อน และควรเสนอสินค้ากลุ่มไหนต่อ"
      />

      <div className="p-6 md:p-8 flex flex-col gap-5 overflow-y-auto rk-scroll">
        {/* Channel tabs */}
        <div className="flex items-center gap-2">
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
              {c.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded ${
                  channel === c.key
                    ? "bg-white/20 text-white"
                    : "bg-rk-surface-container text-rk-on-surface-variant"
                }`}
              >
                {channelCount(c.key)}
              </span>
            </button>
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3">
          <select
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            className="px-3 py-2 bg-white border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors outline-none focus:border-rk-primary"
          >
            {groups.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
          <div className="relative flex-1 min-w-[220px] max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-rk-outline text-[18px]">
              search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-rk-border-subtle focus:border-rk-primary outline-none text-sm"
              placeholder="ค้นหาชื่อลูกค้า / เบอร์โทร"
            />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant">
            คำลงท้ายสคริปต์
            {(["ครับ", "ค่ะ"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setScript(s)}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  script === s
                    ? "bg-rk-primary text-white"
                    : "bg-rk-surface-container text-rk-on-surface-variant"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          <span className="text-xs text-rk-on-surface-variant ml-auto">
            อัปเดตล่าสุด {updatedAt}
          </span>
          <button
            onClick={refresh}
            className="flex items-center gap-1.5 px-4 py-2 bg-rk-primary text-white rounded-lg text-sm font-medium hover:bg-rk-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              refresh
            </span>
            อัปเดตคิว
          </button>
        </div>

        {/* Result count */}
        <div className="text-sm text-rk-on-surface-variant">
          พบ <span className="font-semibold text-rk-primary">{filtered.length}</span>{" "}
          ลูกค้า
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-rk-border-subtle overflow-hidden">
          <div className="overflow-x-auto rk-scroll">
            <table className="w-full text-left min-w-[900px]">
              <thead>
                <tr className="text-xs text-rk-on-surface-variant uppercase tracking-wider border-b border-rk-border-subtle bg-rk-surface-low/50">
                  <th className="px-5 py-3 font-semibold">ลูกค้า</th>
                  <th className="px-5 py-3 font-semibold">ช่องทาง</th>
                  <th className="px-5 py-3 font-semibold">สถานะ</th>
                  <th className="px-5 py-3 font-semibold">หน้างาน</th>
                  <th className="px-5 py-3 font-semibold">เคยซื้อ → เสนอต่อ</th>
                  <th className="px-5 py-3 font-semibold">คะแนน</th>
                  <th className="px-5 py-3 font-semibold" />
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-5 py-12 text-center text-sm text-rk-on-surface-variant/60"
                    >
                      ไม่พบลูกค้าที่ตรงกับเงื่อนไข
                    </td>
                  </tr>
                ) : (
                  filtered.map((c) => (
                    <CustomerRow key={`${c.id}-${nonce}`} c={c} />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
