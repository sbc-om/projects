import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { ArrowRightLeft } from "lucide-react";

// Exchange rates (relative to USD)
const EXCHANGE_RATES = {
  USD: 1,
  OMR: 0.385, // Omani Rial
  AED: 3.67,  // UAE Dirham
  IRR: 42000  // Iranian Rial (approximate)
};

type Currency = keyof typeof EXCHANGE_RATES;

export function CurrencyConverter() {
  const [amount, setAmount] = useState<string>("1000");
  const [fromCurrency, setFromCurrency] = useState<Currency>("USD");
  const [toCurrency, setToCurrency] = useState<Currency>("OMR");

  const convertCurrency = (value: string, from: Currency, to: Currency): string => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "0";
    
    // Convert to USD first, then to target currency
    const inUSD = numValue / EXCHANGE_RATES[from];
    const result = inUSD * EXCHANGE_RATES[to];
    
    return result.toLocaleString('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const getCurrencyLabel = (currency: Currency): string => {
    const labels = {
      USD: "USD - US Dollar",
      OMR: "OMR - Omani Rial",
      AED: "AED - UAE Dirham",
      IRR: "IRR - Iranian Rial"
    };
    return labels[currency];
  };

  return (
    <Card className="border-2">
      <CardContent className="p-4">
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 items-end">
          {/* From Currency */}
          <div className="space-y-2">
            <Label htmlFor="amount" className="text-xs text-muted-foreground">
              Amount
            </Label>
            <Input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-lg font-semibold"
              placeholder="Enter amount"
            />
            <Select value={fromCurrency} onValueChange={(value) => setFromCurrency(value as Currency)}>
              <SelectTrigger className="text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(EXCHANGE_RATES).map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {getCurrencyLabel(currency as Currency)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Swap Button */}
          <button
            onClick={handleSwap}
            className="p-2 rounded-lg hover:bg-muted transition-colors mb-8 md:mb-0"
            aria-label="Swap currencies"
          >
            <ArrowRightLeft className="h-5 w-5 text-muted-foreground" />
          </button>

          {/* To Currency */}
          <div className="space-y-2">
            <Label className="text-xs text-muted-foreground">
              Converted Amount
            </Label>
            <div className="h-10 flex items-center px-3 rounded-md border bg-muted/30">
              <span className="text-lg font-bold text-primary">
                {convertCurrency(amount, fromCurrency, toCurrency)}
              </span>
            </div>
            <Select value={toCurrency} onValueChange={(value) => setToCurrency(value as Currency)}>
              <SelectTrigger className="text-sm">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.keys(EXCHANGE_RATES).map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    {getCurrencyLabel(currency as Currency)}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <p className="text-xs text-muted-foreground text-center mt-3">
          Exchange rates are approximate and for estimation purposes only
        </p>
      </CardContent>
    </Card>
  );
}
