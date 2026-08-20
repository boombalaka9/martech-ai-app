import Link from "next/link";
import { TopBar } from "@/components/rakmao/topbar";

type ComingSoonProps = {
  title: string;
  icon: string;
  description: string;
};

export function ComingSoon({ title, icon, description }: ComingSoonProps) {
  return (
    <>
      <TopBar title={title} titleIcon={icon} showSearch={false} />

      <div className="flex-1 flex items-center justify-center p-6 md:p-8">
        <div className="max-w-md w-full bg-white rounded-2xl border border-rk-border-subtle p-10 flex flex-col items-center text-center gap-4 rk-fade-up">
          <div className="w-16 h-16 rounded-2xl bg-rk-primary/10 text-rk-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-[36px]">
              {icon}
            </span>
          </div>
          <h2 className="font-serif text-2xl text-rk-primary font-semibold m-0">
            {title}
          </h2>
          <p className="text-sm text-rk-on-surface-variant m-0">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rk-secondary-container/40 text-rk-on-secondary-container text-xs font-medium">
            <span className="material-symbols-outlined text-[16px]">
              construction
            </span>
            อยู่ระหว่างพัฒนา
          </span>
          <Link
            href="/rakmao"
            className="mt-2 inline-flex items-center gap-1.5 px-4 py-2 bg-rk-primary text-white rounded-lg text-sm font-medium hover:bg-rk-primary/90 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>
            กลับสู่ Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
