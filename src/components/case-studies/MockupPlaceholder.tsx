import { cn } from "@/lib/utils";
import { Smartphone, Watch, BarChart3, Bell, Calendar, ShoppingBag } from "lucide-react";

interface MockupPlaceholderProps {
  title: string;
  description: string;
  icon: "phone" | "watch" | "chart" | "notification" | "calendar" | "shop";
  className?: string;
}

const icons = {
  phone: Smartphone,
  watch: Watch,
  chart: BarChart3,
  notification: Bell,
  calendar: Calendar,
  shop: ShoppingBag,
};

export function MockupPlaceholder({ title, description, icon, className }: MockupPlaceholderProps) {
  const Icon = icons[icon];
  
  return (
    <div className={cn(
      "relative bg-gradient-to-br from-[#E8F5F3] to-[#D4EDE9] rounded-2xl p-8 aspect-[4/5] flex flex-col items-center justify-center text-center border border-[#4AA8A0]/20 group hover:shadow-lg transition-all duration-300",
      className
    )}>
      {/* Decorative elements */}
      <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-[#4AA8A0]/40" />
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#4AA8A0]/40" />
      <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full bg-[#4AA8A0]/40" />
      <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full bg-[#4AA8A0]/40" />
      
      <div className="w-16 h-16 rounded-2xl bg-[#4AA8A0]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-[#2D7A73]" />
      </div>
      <h4 className="font-display text-lg text-[#2D7A73] mb-2">{title}</h4>
      <p className="text-sm text-[#4AA8A0]/80">{description}</p>
    </div>
  );
}
