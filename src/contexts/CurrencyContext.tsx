import { useState, createContext, useContext } from "react";
import type { ReactNode } from "react";

export type Currency = "USD" | "OMR" | "AED" | "IRT";

interface CurrencyContextType {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  convertPrice: (usdPrice: number) => string;
  getCurrencySymbol: () => string;
  getWhatsAppLink: (projectTitle?: string) => string;
  isLoading: boolean;
}

const EXCHANGE_RATES: Record<Currency, number> = {
  USD: 1,
  OMR: 0.385,
  AED: 3.67,
  IRT: 124000
};

const CURRENCY_SYMBOLS: Record<Currency, string> = {
  USD: "$",
  OMR: "OMR",
  AED: "AED",
  IRT: "Toman"
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => {
    const saved = localStorage.getItem("selectedCurrency");
    return (saved as Currency) || "USD";
  });
  const [exchangeRates] = useState(EXCHANGE_RATES);
  const [isLoading] = useState(false);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("selectedCurrency", newCurrency);
  };

  const convertPrice = (usdPrice: number): string => {
    const converted = usdPrice * exchangeRates[currency];
    
    if (currency === "IRT") {
      return new Intl.NumberFormat('en-US', {
        maximumFractionDigits: 0
      }).format(converted);
    }
    
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(converted);
  };

  const getCurrencySymbol = (): string => {
    return CURRENCY_SYMBOLS[currency];
  };

  const getWhatsAppLink = (projectTitle?: string): string => {
    const phone = "96891200634";
    const message = projectTitle 
      ? `Hello, I'm interested in the ${projectTitle} project. Could you please provide more details and a custom quote?`
      : "Hello, I'm interested in your services. Could you please provide more information?";
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convertPrice, getCurrencySymbol, getWhatsAppLink, isLoading }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
