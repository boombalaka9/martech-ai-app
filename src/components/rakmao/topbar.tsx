import { ReactNode } from "react";

type TopBarProps = {
  /** Breadcrumb trail, last item is highlighted */
  breadcrumb?: string[];
  /** Optional title shown with an icon (used on inner pages) */
  title?: string;
  titleIcon?: string;
  /** Optional right-aligned subtitle text */
  subtitle?: ReactNode;
  /** Show the search box (default true) */
  showSearch?: boolean;
};

export function TopBar({
  breadcrumb,
  title,
  titleIcon,
  subtitle,
  showSearch = true,
}: TopBarProps) {
  return (
    <header className="bg-white text-rk-primary flex justify-between items-center w-full px-6 py-3 border-b border-rk-border-subtle sticky top-0 z-40">
      <div className="flex items-center gap-6 flex-1 min-w-0">
        {title && (
          <div className="flex items-center gap-2 shrink-0">
            {titleIcon && (
              <span className="material-symbols-outlined text-[22px]">
                {titleIcon}
              </span>
            )}
            <span className="font-serif font-semibold text-lg">{title}</span>
          </div>
        )}

        {breadcrumb && (
          <div className="hidden sm:flex items-center gap-2 text-rk-on-surface-variant text-sm font-medium whitespace-nowrap">
            {breadcrumb.map((crumb, i) => {
              const last = i === breadcrumb.length - 1;
              return (
                <span key={i} className="flex items-center gap-2">
                  <span
                    className={
                      last
                        ? "text-rk-primary font-bold"
                        : "text-rk-on-surface-variant/60"
                    }
                  >
                    {crumb}
                  </span>
                  {!last && (
                    <span className="material-symbols-outlined text-[16px] text-rk-on-surface-variant/40">
                      chevron_right
                    </span>
                  )}
                </span>
              );
            })}
          </div>
        )}

        {showSearch && (
          <div className="relative w-full max-w-md hidden md:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-rk-outline text-[20px]">
              search
            </span>
            <input
              className="w-full pl-10 pr-4 py-2 bg-rk-surface rounded-full border border-rk-border-subtle focus:border-rk-primary focus:ring-1 focus:ring-rk-primary text-sm transition-shadow outline-none text-rk-on-surface placeholder:text-rk-outline-variant"
              placeholder="ค้นหาลูกค้า, แคมเปญ..."
              type="text"
            />
          </div>
        )}
      </div>

      <div className="flex items-center gap-2 shrink-0">
        {subtitle && (
          <span className="hidden lg:block text-sm text-rk-on-surface-variant mr-2">
            {subtitle}
          </span>
        )}
        <button className="p-2 text-rk-on-surface-variant hover:text-rk-primary hover:bg-rk-surface-container rounded-full transition-colors relative">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rk-danger rounded-full border-2 border-white" />
        </button>
        <button className="p-2 text-rk-on-surface-variant hover:text-rk-primary hover:bg-rk-surface-container rounded-full transition-colors hidden sm:block">
          <span className="material-symbols-outlined">history</span>
        </button>
        <button className="p-2 text-rk-on-surface-variant hover:text-rk-primary hover:bg-rk-surface-container rounded-full transition-colors hidden sm:block">
          <span className="material-symbols-outlined">download</span>
        </button>
        <div className="h-8 w-px bg-rk-border-subtle mx-1 hidden sm:block" />
        <button className="w-10 h-10 rounded-full bg-rk-secondary-container text-rk-on-secondary-container font-bold flex items-center justify-center hover:opacity-80 transition-opacity">
          ออ
        </button>
      </div>
    </header>
  );
}
