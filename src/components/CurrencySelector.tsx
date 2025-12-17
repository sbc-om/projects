import { useCurrency } from "@/contexts/CurrencyContext";
import type { Currency } from "@/contexts/CurrencyContext";
import { DollarSign, ChevronDown, Check } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function CurrencySelector() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  const currencies = [
    { value: "USD", label: "USD - US Dollar", flag: "🇺🇸" },
    { value: "OMR", label: "OMR - Omani Rial", flag: "🇴🇲" },
    { value: "AED", label: "AED - UAE Dirham", flag: "🇦🇪" }
  ];

  const currentCurrency = currencies.find(c => c.value === currency);

  return (
    <div className="flex items-center gap-2">
      <DollarSign className="h-4 w-4 text-muted-foreground" />
      <Popover open={open} onOpenChange={setOpen} modal={false}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[200px] justify-between"
          >
            <span className="flex items-center gap-2">
              <span>{currentCurrency?.flag}</span>
              <span>{currentCurrency?.label}</span>
            </span>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent 
          className="w-[200px] p-0" 
          align="end"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
        >
          <div className="max-h-[300px] overflow-auto p-1">
            {currencies.map((curr) => (
              <button
                key={curr.value}
                onClick={() => {
                  setCurrency(curr.value as Currency);
                  setOpen(false);
                }}
                className="relative flex w-full cursor-pointer items-center rounded-sm px-2 py-2 text-sm outline-hidden hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Check
                  className={`mr-2 h-4 w-4 ${
                    currency === curr.value ? "opacity-100" : "opacity-0"
                  }`}
                />
                <span className="flex items-center gap-2">
                  <span>{curr.flag}</span>
                  <span>{curr.label}</span>
                </span>
              </button>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
