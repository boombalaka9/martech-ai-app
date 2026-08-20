// Shared mock data for the Rakmao Martech app.
// All names are generic placeholders.

export type Channel = "station" | "buynow";
export type TimeRange = "week" | "month" | "quarter";

export const channelLabel: Record<Channel, string> = {
  station: "Station",
  buynow: "BuyNow",
};

/* ----------------------------- Customers ----------------------------- */

export type Customer = {
  id: string;
  name: string;
  group: string;
  channel: Channel;
  revenue: string;
  purchases: number;
  lastPurchaseDays: number;
  overdueDays: number; // 0 = ปกติ
  location: string;
  boughtBefore: string;
  offerNext: string;
  score: number;
  importance: "ปานกลาง" | "สำคัญ" | "สำคัญมาก";
  phone: string;
  note: string;
};

export const customers: Customer[] = [
  {
    id: "c1",
    name: "ธนาวัฒน์ มาสถิตย์ทรัพย์",
    group: "กลุ่ม 1",
    channel: "station",
    revenue: "฿259,075",
    purchases: 9,
    lastPurchaseDays: 0,
    overdueDays: 13,
    location: "ต.ไผ่ลิง อ.พระนครศรีอยุธยา จ.พระนครศรีอยุธยา",
    boughtBefore: "อิฐ",
    offerNext: "ปูนฉาบ",
    score: 75,
    importance: "สำคัญ",
    phone: "0891234567",
    note: "ลูกค้าประจำ ซื้อสม่ำเสมอทุกเดือน เหมาะเสนอโปรปูนฉาบชุดใหญ่",
  },
  {
    id: "c2",
    name: "บริษัท ทองวรัญญ์ จำกัด",
    group: "กลุ่ม 1",
    channel: "station",
    revenue: "฿145,971",
    purchases: 5,
    lastPurchaseDays: 20,
    overdueDays: 13,
    location: "ต.สามเสนนอก อ.ห้วยขวาง จ.กรุงเทพมหานคร",
    boughtBefore: "ฝ้ายิปซัม",
    offerNext: "สี",
    score: 88,
    importance: "สำคัญมาก",
    phone: "0827654321",
    note: "โครงการรับเหมาต่อเนื่อง มีแนวโน้มสั่งสีจำนวนมากในไตรมาสหน้า",
  },
  {
    id: "c3",
    name: "หจก. รุ่งเรืองวัสดุก่อสร้าง",
    group: "กลุ่ม 2",
    channel: "buynow",
    revenue: "฿98,420",
    purchases: 4,
    lastPurchaseDays: 8,
    overdueDays: 5,
    location: "ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ",
    boughtBefore: "เหล็กเส้น",
    offerNext: "คอนกรีตผสมเสร็จ",
    score: 82,
    importance: "สำคัญ",
    phone: "0863456789",
    note: "สนใจคอนกรีตผสมเสร็จ รอใบเสนอราคางวดถัดไป",
  },
  {
    id: "c4",
    name: "สมชาย ผลิตภัณฑ์คอนกรีต",
    group: "กลุ่ม 3",
    channel: "buynow",
    revenue: "฿61,300",
    purchases: 3,
    lastPurchaseDays: 32,
    overdueDays: 0,
    location: "ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา",
    boughtBefore: "เสาเข็ม",
    offerNext: "เหล็กเส้น",
    score: 64,
    importance: "ปานกลาง",
    phone: "0845678901",
    note: "ซื้อไม่บ่อย ควร win-back ด้วยโปรเหล็กเส้น",
  },
  {
    id: "c5",
    name: "บริษัท ศิลาทองก่อสร้าง จำกัด",
    group: "กลุ่ม 1",
    channel: "station",
    revenue: "฿312,600",
    purchases: 12,
    lastPurchaseDays: 3,
    overdueDays: 2,
    location: "ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น",
    boughtBefore: "คอนกรีตผสมเสร็จ",
    offerNext: "เหล็กเส้น",
    score: 93,
    importance: "สำคัญมาก",
    phone: "0812223344",
    note: "ลูกค้ารายใหญ่สุดของภาคอีสาน ดูแลใกล้ชิด",
  },
  {
    id: "c6",
    name: "จันทร์เพ็ญ วัสดุภัณฑ์",
    group: "กลุ่ม 2",
    channel: "buynow",
    revenue: "฿54,110",
    purchases: 2,
    lastPurchaseDays: 45,
    overdueDays: 21,
    location: "ต.สุเทพ อ.เมืองเชียงใหม่ จ.เชียงใหม่",
    boughtBefore: "สี",
    offerNext: "ฝ้ายิปซัม",
    score: 58,
    importance: "ปานกลาง",
    phone: "0898887766",
    note: "หายไปนาน ควรโทรถามความต้องการก่อนเสนอ",
  },
  {
    id: "c7",
    name: "บริษัท เมกาบิลด์ จำกัด",
    group: "กลุ่ม 1",
    channel: "station",
    revenue: "฿198,750",
    purchases: 7,
    lastPurchaseDays: 11,
    overdueDays: 0,
    location: "ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี",
    boughtBefore: "ไม้แบบ",
    offerNext: "เสาเข็ม",
    score: 79,
    importance: "สำคัญ",
    phone: "0801112233",
    note: "งานโครงการหมู่บ้าน กำลังขึ้นโครงเฟสใหม่",
  },
  {
    id: "c8",
    name: "อารดา คอนสตรัคชั่น",
    group: "กลุ่ม 3",
    channel: "buynow",
    revenue: "฿37,900",
    purchases: 2,
    lastPurchaseDays: 6,
    overdueDays: 6,
    location: "ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา",
    boughtBefore: "เหล็กเส้น",
    offerNext: "คอนกรีตผสมเสร็จ",
    score: 70,
    importance: "สำคัญ",
    phone: "0873334455",
    note: "ลูกค้าใหม่ภาคใต้ ตอบไวมีโอกาสปิดการขายสูง",
  },
];

/* --------------------------- Today follow-up --------------------------- */

export type Stage = "immediate" | "quoting" | "deciding";

export type Lead = {
  id: string;
  company: string;
  phone: string;
  channel: Channel;
  location: string;
  lastBuy: string;
  offer: string;
  campaign?: string;
  score: number;
  importance: "สำคัญ" | "สำคัญมาก";
  due: string;
  stage: Stage;
};

export const leads: Lead[] = [
  {
    id: "l1",
    company: "บริษัท ไอที แฟคทอรี จำกัด",
    phone: "0954281856",
    channel: "buynow",
    location: "ต.มีนบุรี อ.มีนบุรี จ.กรุงเทพมหานคร",
    lastBuy: "ปูนก่อ-ฉาบ · 27 ก.ค. 69",
    offer: "เสนอขายฝ้ายิปซัม",
    score: 91,
    importance: "สำคัญมาก",
    due: "10 ส.ค. 69",
    stage: "immediate",
  },
  {
    id: "l2",
    company: "บริษัท สยามคอนกรีต จำกัด",
    phone: "0954281857",
    channel: "buynow",
    location: "ต.มีนบุรี อ.มีนบุรี จ.กรุงเทพมหานคร",
    lastBuy: "ปูนก่อ-ฉาบ · 27 ก.ค. 69",
    offer: "เสนอขายสี",
    score: 91,
    importance: "สำคัญมาก",
    due: "10 ส.ค. 69",
    stage: "immediate",
  },
  {
    id: "l3",
    company: "ชุมพิเชฐ สุขประเสริฐ",
    phone: "0648327107",
    channel: "buynow",
    location: "ต.สำโรงเหนือ อ.เมืองสมุทรปราการ จ.สมุทรปราการ",
    lastBuy: "อิฐ · 10 ส.ค. 69",
    offer: "เสนอขายปูนก่อ",
    campaign: "ProThaicon 5 วัน · ซื้อแล้ว",
    score: 89,
    importance: "สำคัญมาก",
    due: "10 ส.ค. 69",
    stage: "immediate",
  },
  {
    id: "l4",
    company: "หจก. บ้านสวยวัสดุ",
    phone: "0917778899",
    channel: "station",
    location: "ต.ท่าศาลา อ.เมืองเชียงใหม่ จ.เชียงใหม่",
    lastBuy: "เหล็กเส้น · 2 ส.ค. 69",
    offer: "เสนอขายคอนกรีต",
    score: 84,
    importance: "สำคัญ",
    due: "11 ส.ค. 69",
    stage: "immediate",
  },
  {
    id: "l5",
    company: "บริษัท พรีเมียมโฮม จำกัด",
    phone: "0955512340",
    channel: "station",
    location: "ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา",
    lastBuy: "ฝ้ายิปซัม · 29 ก.ค. 69",
    offer: "รออนุมัติใบเสนอราคา",
    score: 80,
    importance: "สำคัญ",
    due: "12 ส.ค. 69",
    stage: "quoting",
  },
  {
    id: "l6",
    company: "อารดา คอนสตรัคชั่น",
    phone: "0873334455",
    channel: "buynow",
    location: "ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา",
    lastBuy: "เหล็กเส้น · 5 ส.ค. 69",
    offer: "เสนอราคาคอนกรีตแล้ว",
    score: 70,
    importance: "สำคัญ",
    due: "13 ส.ค. 69",
    stage: "quoting",
  },
  {
    id: "l7",
    company: "บริษัท ศิลาทองก่อสร้าง จำกัด",
    phone: "0812223344",
    channel: "station",
    location: "ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น",
    lastBuy: "คอนกรีต · 6 ส.ค. 69",
    offer: "ลูกค้ากำลังตัดสินใจ",
    score: 93,
    importance: "สำคัญมาก",
    due: "14 ส.ค. 69",
    stage: "deciding",
  },
];

/* ----------------------------- Products ----------------------------- */

export type ProductCard = {
  id: string;
  name: string;
  phone: string;
  channel: Channel;
  location: string;
  score: number;
  due: string;
  dueWarn: boolean;
  boughtLine: string;
  boughtDaysAgo: number; // for time-range filtering
};

export type ProductGroup = {
  id: string;
  icon: string;
  title: string;
  suggest: string;
  suggestStrong?: boolean;
  cards: ProductCard[];
};

export const productGroups: ProductGroup[] = [
  {
    id: "p1",
    icon: "view_in_ar",
    title: "เสาเข็ม",
    suggest: "เหล็กเส้น + ไม้แบบ",
    suggestStrong: true,
    cards: [
      {
        id: "pc1",
        name: "จ่า กิตินัดดา",
        phone: "0925507193",
        channel: "buynow",
        location: "ต.แสนแสบ อ.มีนบุรี จ.กรุงเทพมหานคร",
        score: 89,
        due: "อีก 4 วัน",
        dueWarn: false,
        boughtLine: "ซื้อเสาเข็ม 10 ส.ค. 69",
        boughtDaysAgo: 4,
      },
      {
        id: "pc2",
        name: "พราว วนิดา",
        phone: "0849890488",
        channel: "station",
        location: "ต.คันนายาว อ.คันนายาว จ.กรุงเทพมหานคร",
        score: 48,
        due: "ค้าง 2 วัน",
        dueWarn: true,
        boughtLine: "ซื้อเสาเข็ม 4 ส.ค. 69",
        boughtDaysAgo: 10,
      },
      {
        id: "pc3",
        name: "บริษัท เมกาบิลด์ จำกัด",
        phone: "0801112233",
        channel: "station",
        location: "ต.คลองหนึ่ง อ.คลองหลวง จ.ปทุมธานี",
        score: 79,
        due: "อีก 1 วัน",
        dueWarn: false,
        boughtLine: "ซื้อเสาเข็ม 12 ส.ค. 69",
        boughtDaysAgo: 2,
      },
    ],
  },
  {
    id: "p2",
    icon: "view_column",
    title: "เหล็กเส้น",
    suggest: "คอนกรีตผสมเสร็จ",
    cards: [
      {
        id: "pc4",
        name: "ฟ้า หจก.รุ่งทวีเฟอร์นิเจอร์",
        phone: "0989752797",
        channel: "buynow",
        location: "ต.หนองจอก อ.บางปะกง จ.ฉะเชิงเทรา",
        score: 87,
        due: "ค้าง 11 วัน",
        dueWarn: true,
        boughtLine: "ซื้อเหล็กเส้น 30 ก.ค. 69",
        boughtDaysAgo: 15,
      },
      {
        id: "pc5",
        name: "อดิเรก สุดตริคุณ",
        phone: "0987593789",
        channel: "buynow",
        location: "ต.สาโพ อ.บางบัวทอง จ.นนทบุรี",
        score: 87,
        due: "ค้าง 6 วัน",
        dueWarn: true,
        boughtLine: "ซื้อเหล็กเส้น 4 ส.ค. 69",
        boughtDaysAgo: 10,
      },
      {
        id: "pc6",
        name: "หจก. รุ่งเรืองวัสดุก่อสร้าง",
        phone: "0863456789",
        channel: "buynow",
        location: "ต.บางพลีใหญ่ อ.บางพลี จ.สมุทรปราการ",
        score: 82,
        due: "อีก 3 วัน",
        dueWarn: false,
        boughtLine: "ซื้อเหล็กเส้น 9 ส.ค. 69",
        boughtDaysAgo: 5,
      },
    ],
  },
  {
    id: "p3",
    icon: "edit_note",
    title: "ไม้แบบ",
    suggest: "คอนกรีตผสมเสร็จ",
    cards: [
      {
        id: "pc7",
        name: "ก่อสร้าง เจริญทรัพย์",
        phone: "0812345678",
        channel: "station",
        location: "ต.บางรักพัฒนา อ.บางบัวทอง จ.นนทบุรี",
        score: 72,
        due: "อีก 2 วัน",
        dueWarn: false,
        boughtLine: "ซื้อไม้แบบ 9 ส.ค. 69",
        boughtDaysAgo: 5,
      },
      {
        id: "pc8",
        name: "บริษัท พรีเมียมโฮม จำกัด",
        phone: "0955512340",
        channel: "station",
        location: "ต.ในเมือง อ.เมืองนครราชสีมา จ.นครราชสีมา",
        score: 80,
        due: "ค้าง 3 วัน",
        dueWarn: true,
        boughtLine: "ซื้อไม้แบบ 1 ส.ค. 69",
        boughtDaysAgo: 13,
      },
    ],
  },
  {
    id: "p4",
    icon: "grain",
    title: "คอนกรีตผสมเสร็จ",
    suggest: "เหล็กเส้น",
    cards: [
      {
        id: "pc9",
        name: "บริษัท ศิลาทองก่อสร้าง จำกัด",
        phone: "0812223344",
        channel: "station",
        location: "ต.บ้านเป็ด อ.เมืองขอนแก่น จ.ขอนแก่น",
        score: 93,
        due: "อีก 5 วัน",
        dueWarn: false,
        boughtLine: "ซื้อคอนกรีต 13 ส.ค. 69",
        boughtDaysAgo: 1,
      },
      {
        id: "pc10",
        name: "อารดา คอนสตรัคชั่น",
        phone: "0873334455",
        channel: "buynow",
        location: "ต.หาดใหญ่ อ.หาดใหญ่ จ.สงขลา",
        score: 70,
        due: "ค้าง 6 วัน",
        dueWarn: true,
        boughtLine: "ซื้อคอนกรีต 5 ส.ค. 69",
        boughtDaysAgo: 9,
      },
    ],
  },
];

export const productGroupNames = [
  "ทั้งหมด",
  ...productGroups.map((g) => g.title),
];

/* --------------------------- Dashboard --------------------------- */

export type Kpi = {
  key: string;
  label: string;
  value: string;
  icon: string;
  iconClass: string;
  trend: string;
  trendIcon: string;
  trendClass: string;
  decoration?: string;
};

export type PipelineStage = {
  label: string;
  value: number;
  width: string;
  color: string;
};

export type TopProduct = {
  name: string;
  icon: string;
  volume: string;
  growth: string;
  up: boolean;
};

export type DashboardData = {
  kpis: Kpi[];
  chart: { actual: string; target: string; labels: string[] };
  leadSource: { station: number; buynow: number; total: string };
  pipeline: PipelineStage[];
  products: TopProduct[];
};

const ICON = {
  revenue: "bg-rk-primary/10 text-rk-primary",
  campaign: "bg-rk-secondary-container/30 text-rk-on-secondary-container",
  customers: "bg-rk-info/10 text-rk-info",
  conversion: "bg-rk-primary/10 text-rk-primary",
};

export const dashboardByRange: Record<TimeRange, DashboardData> = {
  week: {
    kpis: [
      {
        key: "revenue",
        label: "Total Revenue",
        value: "฿3.1M",
        icon: "payments",
        iconClass: ICON.revenue,
        trend: "+6% vs last week",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
      },
      {
        key: "campaigns",
        label: "Active Campaigns",
        value: "8",
        icon: "campaign",
        iconClass: ICON.campaign,
        trend: "2 ending soon",
        trendIcon: "schedule",
        trendClass: "text-rk-on-surface-variant",
      },
      {
        key: "customers",
        label: "Total Customers",
        value: "312",
        icon: "groups",
        iconClass: ICON.customers,
        trend: "+18 new",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
      },
      {
        key: "conversion",
        label: "Conversion Rate",
        value: "9.1%",
        icon: "stacked_line_chart",
        iconClass: ICON.conversion,
        trend: "+0.4% vs last week",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
        decoration: "percent",
      },
    ],
    chart: {
      actual: "M 0 85 L 20 60 L 40 65 L 60 40 L 80 30 L 100 15",
      target: "M 0 90 L 20 75 L 40 60 L 60 48 L 80 32 L 100 20",
      labels: ["จ", "อ", "พ", "พฤ", "ศ", "ส"],
    },
    leadSource: { station: 58, buynow: 42, total: "312" },
    pipeline: [
      { label: "Follow-up Needed", value: 12, width: "30%", color: "bg-rk-warning" },
      { label: "Quoting", value: 6, width: "18%", color: "bg-rk-info" },
      { label: "Decision Pending", value: 4, width: "12%", color: "bg-rk-secondary-container" },
      { label: "Closed", value: 22, width: "60%", color: "bg-rk-success" },
    ],
    products: [
      { name: "Ready-Mix Concrete", icon: "grain", volume: "฿1.1M", growth: "9.2%", up: true },
      { name: "Structural Steel", icon: "view_column", volume: "฿0.9M", growth: "5.1%", up: true },
      { name: "Cement Bags", icon: "inventory_2", volume: "฿0.6M", growth: "2.0%", up: true },
      { name: "Timber & Wood", icon: "forest", volume: "฿0.4M", growth: "0.8%", up: false },
    ],
  },
  month: {
    kpis: [
      {
        key: "revenue",
        label: "Total Revenue",
        value: "฿12.5M",
        icon: "payments",
        iconClass: ICON.revenue,
        trend: "+15% vs last month",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
      },
      {
        key: "campaigns",
        label: "Active Campaigns",
        value: "24",
        icon: "campaign",
        iconClass: ICON.campaign,
        trend: "3 ending this week",
        trendIcon: "schedule",
        trendClass: "text-rk-on-surface-variant",
      },
      {
        key: "customers",
        label: "Total Customers",
        value: "1,224",
        icon: "groups",
        iconClass: ICON.customers,
        trend: "+42 new this week",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
      },
      {
        key: "conversion",
        label: "Conversion Rate",
        value: "8.5%",
        icon: "stacked_line_chart",
        iconClass: ICON.conversion,
        trend: "-0.2% vs last month",
        trendIcon: "trending_down",
        trendClass: "text-rk-danger",
        decoration: "percent",
      },
    ],
    chart: {
      actual: "M 0 80 Q 15 70 25 50 T 50 45 T 75 25 T 100 12",
      target: "M 0 90 L 25 72 L 50 58 L 75 40 L 100 22",
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    },
    leadSource: { station: 65, buynow: 35, total: "1,224" },
    pipeline: [
      { label: "Follow-up Needed", value: 38, width: "25%", color: "bg-rk-warning" },
      { label: "Quoting", value: 19, width: "15%", color: "bg-rk-info" },
      { label: "Decision Pending", value: 12, width: "10%", color: "bg-rk-secondary-container" },
      { label: "Closed", value: 85, width: "70%", color: "bg-rk-success" },
    ],
    products: [
      { name: "Ready-Mix Concrete", icon: "grain", volume: "฿4.2M", growth: "12.5%", up: true },
      { name: "Structural Steel", icon: "view_column", volume: "฿3.8M", growth: "8.2%", up: true },
      { name: "Cement Bags", icon: "inventory_2", volume: "฿2.1M", growth: "3.4%", up: true },
      { name: "Timber & Wood", icon: "forest", volume: "฿1.4M", growth: "1.1%", up: false },
    ],
  },
  quarter: {
    kpis: [
      {
        key: "revenue",
        label: "Total Revenue",
        value: "฿38.9M",
        icon: "payments",
        iconClass: ICON.revenue,
        trend: "+22% vs last quarter",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
      },
      {
        key: "campaigns",
        label: "Active Campaigns",
        value: "61",
        icon: "campaign",
        iconClass: ICON.campaign,
        trend: "9 ending this month",
        trendIcon: "schedule",
        trendClass: "text-rk-on-surface-variant",
      },
      {
        key: "customers",
        label: "Total Customers",
        value: "3,540",
        icon: "groups",
        iconClass: ICON.customers,
        trend: "+310 new",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
      },
      {
        key: "conversion",
        label: "Conversion Rate",
        value: "8.9%",
        icon: "stacked_line_chart",
        iconClass: ICON.conversion,
        trend: "+0.6% vs last quarter",
        trendIcon: "trending_up",
        trendClass: "text-rk-success",
        decoration: "percent",
      },
    ],
    chart: {
      actual: "M 0 88 L 20 72 L 40 55 L 60 50 L 80 28 L 100 10",
      target: "M 0 92 L 20 80 L 40 66 L 60 52 L 80 36 L 100 24",
      labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6"],
    },
    leadSource: { station: 61, buynow: 39, total: "3,540" },
    pipeline: [
      { label: "Follow-up Needed", value: 96, width: "28%", color: "bg-rk-warning" },
      { label: "Quoting", value: 54, width: "20%", color: "bg-rk-info" },
      { label: "Decision Pending", value: 33, width: "14%", color: "bg-rk-secondary-container" },
      { label: "Closed", value: 240, width: "78%", color: "bg-rk-success" },
    ],
    products: [
      { name: "Ready-Mix Concrete", icon: "grain", volume: "฿13.4M", growth: "15.1%", up: true },
      { name: "Structural Steel", icon: "view_column", volume: "฿11.2M", growth: "10.4%", up: true },
      { name: "Cement Bags", icon: "inventory_2", volume: "฿6.8M", growth: "4.9%", up: true },
      { name: "Timber & Wood", icon: "forest", volume: "฿4.1M", growth: "2.3%", up: false },
    ],
  },
};

export const timeRangeLabel: Record<TimeRange, string> = {
  week: "This Week",
  month: "This Month",
  quarter: "This Quarter",
};
