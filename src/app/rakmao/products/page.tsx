import { TopBar } from "@/components/rakmao/topbar";

const channels = [
  { label: "ทุกช่องทาง", active: true },
  { label: "Station", sub: "Station" },
  { label: "BuyNow", sub: "รักษ์เหมา" },
];

const ranges = ["1 สัปดาห์", "2 สัปดาห์", "3 สัปดาห์", "1 เดือน", "2 เดือน", "3 เดือน"];

type Card = {
  name: string;
  phone: string;
  channel: "BUY NOW" | "Station";
  location: string;
  score: number;
  due: string;
  dueWarn: boolean;
  boughtLine: string;
};

type ProductColumn = {
  icon: string;
  title: string;
  siteCount: number;
  suggest: string;
  suggestStrong?: boolean;
  cards: Card[];
};

const columns: ProductColumn[] = [
  {
    icon: "view_in_ar",
    title: "เสาเข็ม",
    siteCount: 2,
    suggest: "เหล็กเส้น + ไม้แบบ",
    suggestStrong: true,
    cards: [
      {
        name: "จ่า กิตินัดดา",
        phone: "0925507193",
        channel: "BUY NOW",
        location: "ต.แสนแสบ อ.มีนบุรี จ.กรุงเทพมหานคร",
        score: 89,
        due: "อีก 4 วัน",
        dueWarn: false,
        boughtLine: "ซื้อเสาเข็ม 10 ส.ค. 69",
      },
      {
        name: "พราว .",
        phone: "0849890488",
        channel: "Station",
        location: "ต.คันนายาว อ.คันนายาว จ.กรุงเทพมหานคร",
        score: 48,
        due: "ค้าง 2 วัน",
        dueWarn: true,
        boughtLine: "ซื้อเสาเข็ม 4 ส.ค. 69",
      },
    ],
  },
  {
    icon: "view_column",
    title: "เหล็กเส้น",
    siteCount: 10,
    suggest: "คอนกรีตผสมเสร็จ",
    cards: [
      {
        name: "ฟ้า หจก.รุ่งทวีเฟอร์นิเจอร์",
        phone: "0989752797",
        channel: "BUY NOW",
        location: "ต.หนองจอก อ.บางปะกง จ.ฉะเชิงเทรา",
        score: 87,
        due: "ค้าง 11 วัน",
        dueWarn: true,
        boughtLine: "ซื้อเหล็กเส้น 30 ก.ค. 69",
      },
      {
        name: "อดิเรก สุดตริคุณ",
        phone: "0987593789",
        channel: "BUY NOW",
        location: "ต.สาโพ อ.บางบัวทอง จ.นนทบุรี",
        score: 87,
        due: "ค้าง 6 วัน",
        dueWarn: true,
        boughtLine: "ซื้อเหล็กเส้น 4 ส.ค. 69",
      },
    ],
  },
  {
    icon: "edit_note",
    title: "ไม้แบบ",
    siteCount: 6,
    suggest: "คอนกรีตผสมเสร็จ",
    cards: [
      {
        name: "ก่อสร้าง เจริญทรัพย์",
        phone: "0812345678",
        channel: "Station",
        location: "ต.บางรักพัฒนา อ.บางบัวทอง จ.นนทบุรี",
        score: 72,
        due: "อีก 2 วัน",
        dueWarn: false,
        boughtLine: "ซื้อไม้แบบ 9 ส.ค. 69",
      },
    ],
  },
];

function ProductCard({ card }: { card: Card }) {
  return (
    <div className="bg-white rounded-lg border border-rk-border-subtle p-4 shadow-sm flex flex-col gap-2 hover:-translate-y-0.5 transition-all">
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
            {card.channel === "BUY NOW" ? (
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
  return (
    <>
      <TopBar
        title="ติดตามรายสินค้า"
        titleIcon="apps"
        showSearch={false}
        subtitle="ตามกลุ่มลูกค้าที่เพิ่งซื้อสินค้ากลุ่มเดียวกัน — เลือกกลุ่มสินค้าและช่วงเวลา"
      />

      <div className="p-6 md:p-8 flex flex-col gap-5 overflow-y-auto rk-scroll rk-fade-up">
        {/* View toggle */}
        <div className="inline-flex items-center gap-1 bg-white border border-rk-border-subtle rounded-lg p-1 w-fit">
          <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors">
            <span className="material-symbols-outlined text-[18px]">layers</span>
            ตามกลุ่มสินค้า
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium bg-rk-primary text-white">
            <span className="material-symbols-outlined text-[18px]">
              view_kanban
            </span>
            Kanban ทุกกลุ่ม
          </button>
        </div>

        {/* Channel + search + group select */}
        <div className="flex flex-wrap items-center gap-3">
          {channels.map((c) => (
            <button
              key={c.label}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                c.active
                  ? "bg-rk-primary text-white"
                  : "bg-white border border-rk-border-subtle text-rk-on-surface-variant hover:bg-rk-surface-container"
              }`}
            >
              {c.sub && (
                <span className="text-xs text-rk-on-surface-variant/70 font-serif italic">
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
              className="w-full pl-9 pr-3 py-2 bg-white rounded-lg border border-rk-border-subtle focus:border-rk-primary outline-none text-sm"
              placeholder="ค้นหาชื่อลูกค้า / เบอร์โทร..."
            />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-[11px] text-rk-on-surface-variant">
              กลุ่มสินค้า
            </span>
            <button className="flex items-center gap-2 px-3 py-2 bg-white border border-rk-border-subtle rounded-lg text-sm text-rk-on-surface-variant hover:bg-rk-surface-container transition-colors min-w-[180px] justify-between">
              เลือกกลุ่มสินค้า...
              <span className="material-symbols-outlined text-[18px]">
                expand_more
              </span>
            </button>
          </div>
        </div>

        {/* Time range chips */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] text-rk-on-surface-variant">
            ช่วงเวลาที่ซื้อย้อนหลัง
          </span>
          <div className="flex flex-wrap items-center gap-2">
            {ranges.map((r, i) => (
              <button
                key={r}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                  i === 0
                    ? "bg-rk-primary text-white"
                    : "bg-white border border-rk-border-subtle text-rk-on-surface-variant hover:bg-rk-surface-container"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Summary line */}
        <div className="text-sm text-rk-on-surface-variant">
          รวม <span className="font-semibold text-rk-primary">354</span>{" "}
          ไซต์ที่ต้องติดตาม ·{" "}
          <span className="font-semibold text-rk-primary">9</span> กลุ่มสินค้า
        </div>

        {/* Kanban columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {columns.map((col) => (
            <div
              key={col.title}
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
                    {col.siteCount} ไซต์
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
              <div className="flex flex-col gap-3 p-3 min-h-[300px]">
                {col.cards.map((card, i) => (
                  <ProductCard key={i} card={card} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
