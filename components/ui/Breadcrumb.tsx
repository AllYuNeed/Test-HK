import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 flex-wrap">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          {i > 0 && <ChevronRight size={12} className="text-steel-400" />}
          {item.href ? (
            <Link
              href={item.href}
              className="text-[11px] tracking-widest uppercase text-steel-400 hover:text-[#1e6bff] transition-colors"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="text-[11px] tracking-widest uppercase text-white"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}
