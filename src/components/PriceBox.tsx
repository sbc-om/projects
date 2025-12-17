import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ShoppingCart } from "lucide-react";
import { PriceDisplay, extractBasePrice } from "@/components/PriceDisplay";
import { useCurrency } from "@/contexts/CurrencyContext";
import { AddToCartDialog } from "@/components/AddToCartDialog";
import { useState } from "react";

interface PriceBoxProps {
  price: string;
  deliveryTime: string;
  features: string[];
  projectTitle: string;
  projectId: number;
  projectSlug: string;
}

export function PriceBox({ price, deliveryTime, features, projectTitle, projectId, projectSlug }: PriceBoxProps) {
  const { getWhatsAppLink, convertPrice } = useCurrency();
  const [showDialog, setShowDialog] = useState(false);
  const basePrice = extractBasePrice(price);
  const convertedPrice = parseFloat(convertPrice(basePrice).replace(/,/g, ''));

  return (
    <div className="sticky top-24">
      <Card className="border-2">
        <CardHeader className="space-y-4 pb-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Starting from</p>
            <CardTitle className="text-4xl font-bold">
              <PriceDisplay basePrice={extractBasePrice(price)} />
            </CardTitle>
          </div>
          
          <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border dark:border-white/5">
            <Calendar className="h-5 w-5 text-primary" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Delivery</p>
              <p className="font-semibold">{deliveryTime}</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <p className="font-semibold text-sm">Included Features</p>
            <ul className="space-y-2.5">
              {features.slice(0, 5).map((feature, index) => (
                <li key={index} className="text-sm flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      
        <CardFooter className="flex-col gap-3 pt-4">
          <Button 
            size="lg" 
            className="w-full"
            onClick={() => setShowDialog(true)}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          
          <Button size="lg" variant="outline" className="w-full" asChild>
            <a href={getWhatsAppLink(projectTitle)} target="_blank" rel="noopener noreferrer">
              Request Quote
            </a>
          </Button>
        </CardFooter>
      </Card>
      
      <AddToCartDialog
        open={showDialog}
        onOpenChange={setShowDialog}
        projectId={projectId}
        projectTitle={projectTitle}
        projectSlug={projectSlug}
        basePrice={convertedPrice}
      />
    </div>
  );
}
