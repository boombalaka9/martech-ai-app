import { TopBar } from "@/components/rakmao/topbar";

const channels = [
  { label: "ทุกช่องทาง", count: "1,224", active: true },
  { label: "Station", count: "240" },
  { label: "BuyNow", count: "984" },
];

type Customer = {
  name: string;
  group: string;
  revenue: string;
  purchases: string;
  lastPurchase: string;
  channel: string;
  status: string;
  location: string;
  boughtBefore: string;
  offerNext: string;
  score: number;
  importance: string;
  importanceStrong?: boolean;
};

const customers: Customer[] = [
  {
    name: "ธนาวัฒน์ มาสถิตย์ทรัพย์",
    group: "กลุ่ม 1",
    revenue: "฿259,075",
    purchases: "9 ครั้ง",
    lastPurchase: "ล่าสุด 0 วันก่อน",
    channel: "Station",
    status: "ค้าง 13 วัน",
    location: "ต.ไผ่ลิง อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา",
    boughtBefore: "อิฐ",
    offerNext: "ปูนฉาบ",
    score: 75,
    importance: "สำคัญ",
  },
  {
    name: "บริษัท ทองวรัญญ์ จำกัด",
    group: "กลุ่ม 1",
    revenue: "฿145,971",
    purchases: "5 ครั้ง",
    lastPurchase: "ล่าสุด 20 วันก่อน",
    channel: "Station",
    status: "ค้าง 13 วัน",
    location: "ต.สามเสนนอก อ.ห้วยขวาง จ.กรุงเทพมหานคร",
    boughtBefore: "ฝ้ายิปซัม",
    offerNext: "สี",
    score: 88,
    importance: "สำคัญมาก",
    importanceStrong: true,
  },
  {
    name: "หจก. รุ่งเรืองวัสดุก่อสร้าง",
    group: "กลุ่ม 2",
    revenue: "฿98,420",
    purchases: "4 ครั้ง",
    lastPurchase: "ล่าสุด 8 วันก่อน",
    channel: "BuyNow",
    status: "ค้าง 5 วัน",
    location: "ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ",
    boughtBefore: "เหล็กเส้น",
    offerNext: "คอนกรีตผสมเสร็จ",
    score: 82,
    importance: "สำคัญ",
  },
  {
    name: "สมชาย ผลิตภัณฑ์คอนกรีต",
    group: "กลุ่ม 3",
    revenue: "฿61,300",
    purchases: "3 ครั้ง",
    lastPurchase: "ล่าสุด 32 วันก่อน",
    channel: "BuyNow",
    status: "ปกติ",
    location: "ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา",
    boughtBefore: "เสาเข็ม",
    offerNext: "เหล็กเส้น",
    score: 64,
    importance: "ปานกลาง",
  },
];

export default function CustomersPage() {
  return (
    <>
      <TopBar
        title="ติดตามรายลูกค้า"
        titleIcon="grid_view"
        showSearch={false}
        subtitle="AI จัดลำดับว่าวันนี้ควรติดตามลูกค้าคนไหนก่อน และควรเสนอสินค้ากลุ่มไหนต่อ"
      />

      <div className="p-6 md:p-8 flex flex-col gap-5 overflow-y-auto rk-scroll rk-fade-up">
        {/* Channel tabs */}
        <div className="flex items-center gap-2">
          {channels.map((c) => (
            <button
              key={c.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                c.active
                  ? "bg-rk-primary text-white"
                  : "bg-white border border-rk-border-subtle text-rk-on-surface-variant hover:bg-rk-surface-container"
              }`}
            >
              {c.label}
              <span
                className={`text-xs px-1.5 py-0.5 rounded ${
                  c.active
                    ? "bg-white/20 text-white"
                    : "bg-rk-surface-container text-rk-on-surface-variant"
                }`}
              >
                {c.count}
              </span>
            </button>
          ))}
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 px-3 py-2 bg-white border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors">
            ทุกกลุ่มลูกค้า: 100
            <span className="material-symbols-outlined text-[18px]">
              expand_more
            </span>
          </button>
          <div className="relative flex-1 min-w-[220px] max-w-sm">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-rk-outline text-[18px]">
              search
            </span>
            <input
              className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-rk-border-subtle focus:border-rk-primary outline-none text-sm"
              placeholder="ค้นหาชื่อลูกค้า / เบอร์โทร"
            />
          </div>
          <div className="flex items-center gap-2 px-3 py-2 bg-white border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant">
            คำลงท้ายสคริปต์
            <span className="px-2 py-0.5 rounded bg-rk-surface-container text-rk-on-surface-variant text-xs">
              ครับ
            </span>
            <span className="px-2 py-0.5 rounded bg-rk-primary text-white text-xs">
              ค่ะ
            </span>
          </div>
          <span className="text-xs text-rk-on-surface-variant ml-auto">
            อัปเดตล่าสุด 11 ส.ค. 69 08:51
          </span>
          <button className="flex items-center gap-1.5 px-4 py-2 bg-rk-primary text-white rounded-lg text-sm font-medium hover:bg-rk-primary/90 transition-colors">
            <span className="material-symbols-outlined text-[18px]">
              refresh
            </span>
            อัปเดตคิว
          </button>
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl border border-rk-border-subtle overflow-hidden">
          <div className="overflow-x-auto rk-scroll">
            <table className="w-full text-left min-w-[860px]">
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
                {customers.map((c, i) => (
                  <tr
                    key={i}
                    className="border-b border-rk-border-subtle/60 last:border-0 hover:bg-rk-surface-low/40 transition-colors"
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
                        {c.revenue} · {c.purchases} · {c.lastPurchase}
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <span className="px-2.5 py-1 rounded-md border border-rk-border-subtle text-rk-primary text-xs font-serif italic font-semibold">
                        {c.channel}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span
                        className={`px-2.5 py-1 rounded-md text-xs font-semibold ${
                          c.status.startsWith("ค้าง")
                            ? "bg-rk-danger text-white"
                            : "bg-rk-success/10 text-rk-success"
                        }`}
                      >
                        {c.status}
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
                          <span className="font-bold text-sm leading-none">
                            {c.score}
                          </span>
                          <span className="text-[9px] leading-none mt-0.5">
                            คะแนน
                          </span>
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-[11px] font-medium ${
                            c.importanceStrong
                              ? "bg-rk-danger/10 text-rk-danger"
                              : "bg-rk-danger/5 text-rk-danger/80"
                          }`}
                        >
                          {c.importance}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="text-rk-on-surface-variant hover:text-rk-primary transition-colors">
                        <span className="material-symbols-outlined">
                          expand_more
                        </span>
                      </button>
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
