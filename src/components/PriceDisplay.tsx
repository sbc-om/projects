import { useCurrency } from "@/contexts/CurrencyContext";

interface PriceDisplayProps {
  basePrice: number;
  className?: string;
}

export function PriceDisplay({ basePrice, className = "" }: PriceDisplayProps) {
  const { convertPrice, getCurrencySymbol } = useCurrency();

  return (
    <span className={className}>
      {getCurrencySymbol() === "$" ? "$" : ""}{convertPrice(basePrice)}{getCurrencySymbol() !== "$" ? ` ${getCurrencySymbol()}` : ""}
    </span>
  );
}

// Helper function to extract numeric value from price string like "From $2,500"
export function extractBasePrice(priceString: string): number {
  const match = priceString.match(/[\d,]+/);
  if (match) {
    return parseInt(match[0].replace(/,/g, ""), 10);
  }
  return 0;
}
