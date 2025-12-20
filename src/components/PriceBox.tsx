import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, ShoppingCart } from "lucide-react";
import { useCurrency } from "@/contexts/CurrencyContext";
import { AddToCartDialog } from "@/components/AddToCartDialog";
import { useState } from "react";

interface PriceBoxProps {
  deliveryTime: string;
  features: string[];
  projectTitle: string;
  projectId: number;
  projectSlug: string;
}

export function PriceBox({ deliveryTime, features, projectTitle, projectId, projectSlug }: PriceBoxProps) {
  const { getWhatsAppLink } = useCurrency();
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="sticky top-24">
      <Card className="border-2">
        <CardHeader className="space-y-4 pb-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Pricing</p>
            <CardTitle className="text-2xl font-bold">On request</CardTitle>
            <p className="text-sm text-muted-foreground">
              Every project is scoped based on your requirements. Request a quote to get a tailored estimate.
            </p>
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
          <Button size="lg" variant="outline" className="w-full" onClick={() => setShowDialog(true)}>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>

          <Button size="lg" className="w-full" asChild>
            <a href={getWhatsAppLink(projectTitle)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Request Quote
            </a>
          </Button>
        </CardFooter>
      </Card>

      <AddToCartDialog
        key={`add-to-cart-${projectId}-${showDialog ? "open" : "closed"}`}
        open={showDialog}
        onOpenChange={setShowDialog}
        projectId={projectId}
        projectTitle={projectTitle}
        projectSlug={projectSlug}
      />
    </div>
  );
}
