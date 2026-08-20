"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  icon: string;
  href: string;
};

type NavSection = {
  heading?: string;
  items: NavItem[];
};

const sections: NavSection[] = [
  {
    items: [{ label: "Dashboard", icon: "dashboard", href: "/rakmao" }],
  },
  {
    heading: "ติดตามการขาย",
    items: [
      { label: "ติดตามวันนี้", icon: "calendar_today", href: "/rakmao/today" },
      {
        label: "ติดตามรายลูกค้า",
        icon: "account_circle",
        href: "/rakmao/customers",
      },
      {
        label: "ติดตามรายสินค้า",
        icon: "inventory_2",
        href: "/rakmao/products",
      },
    ],
  },
  {
    heading: "ข้อมูลลูกค้า",
    items: [
      { label: "ข้อมูลลูกค้า", icon: "group", href: "/rakmao/customer-data" },
      { label: "กราฟกลุ่มลูกค้า", icon: "grid_view", href: "/rakmao/segments" },
      { label: "กราฟความสัมพันธ์", icon: "hub", href: "/rakmao/relations" },
      {
        label: "ประวัติการซื้อสินค้า",
        icon: "history",
        href: "/rakmao/purchase-history",
      },
    ],
  },
  {
    heading: "ตั้งค่า",
    items: [
      { label: "ประวัติแชท", icon: "chat", href: "/rakmao/chats" },
      { label: "ข้อมูลสินค้า", icon: "package_2", href: "/rakmao/product-data" },
      { label: "แคมเปญ", icon: "campaign", href: "/rakmao/campaigns" },
      { label: "AI Content", icon: "edit_note", href: "/rakmao/ai-content" },
      { label: "AI Model", icon: "psychology", href: "/rakmao/ai-model" },
      { label: "จัดการผู้ใช้", icon: "manage_accounts", href: "/rakmao/users" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col bg-rk-primary text-rk-on-primary z-50">
      {/* Brand header */}
      <div className="px-6 py-8 flex items-center gap-3 border-b border-white/10">
        <div className="w-10 h-10 shrink-0 rounded-lg bg-rk-secondary-container flex items-center justify-center text-rk-primary font-serif font-bold">
          RM
        </div>
        <div className="font-serif font-bold text-lg leading-tight uppercase tracking-wide">
          Rakmao
          <br />
          Martech
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 overflow-y-auto rk-scroll px-3 py-4 flex flex-col gap-4">
        {sections.map((section, i) => (
          <div key={i} className="flex flex-col gap-1">
            {section.heading && (
              <div className="text-[11px] text-white/50 px-2 py-1 uppercase tracking-wider font-medium">
                {section.heading}
              </div>
            )}
            {section.items.map((item) => {
              const active =
                item.href === "/rakmao"
                  ? pathname === "/rakmao"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-2.5 py-2 flex items-center gap-3 text-sm font-medium transition-colors",
                    active
                      ? "bg-rk-primary-container text-white"
                      : "text-white/70 hover:text-white hover:bg-rk-primary-container/50"
                  )}
                >
                  <span className="material-symbols-outlined text-[20px]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Footer user card */}
      <div className="px-4 pb-5 pt-3 border-t border-white/10 flex flex-col gap-3">
        <div className="text-white/40 text-[11px] px-2">Build 2026081135</div>
        <div className="bg-rk-primary-container/40 rounded-lg p-3 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-rk-secondary-container flex items-center justify-center text-rk-on-secondary-container font-bold shrink-0">
            ออ
          </div>
          <div className="min-w-0">
            <div className="text-white text-sm truncate">
              อาจารย์ อนันต์เกษมสันต์
            </div>
            <div className="text-white/60 text-xs truncate">เจ้าหน้าที่</div>
          </div>
          <span className="material-symbols-outlined text-white/60 ml-auto text-[20px]">
            more_vert
          </span>
        </div>
      </div>
    </nav>
  );
}
