import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useCurrency } from "@/contexts/CurrencyContext";
import type { Currency } from "@/contexts/CurrencyContext";
import { DollarSign } from "lucide-react";

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();

  const currencies = [
    { value: "USD", label: "USD - US Dollar", flag: "🇺🇸" },
    { value: "OMR", label: "OMR - Omani Rial", flag: "🇴🇲" },
    { value: "AED", label: "AED - UAE Dirham", flag: "🇦🇪" },
    { value: "IRT", label: "IRT - Toman", flag: "🇮🇷" }
  ];

  return (
    <div className="flex items-center gap-2">
      <DollarSign className="h-4 w-4 text-muted-foreground" />
      <Select value={currency} onValueChange={(value) => setCurrency(value as Currency)}>
        <SelectTrigger className="w-[200px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {currencies.map((curr) => (
            <SelectItem key={curr.value} value={curr.value}>
              <span className="flex items-center gap-2">
                <span>{curr.flag}</span>
                <span>{curr.label}</span>
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
