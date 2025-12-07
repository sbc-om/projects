import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp } from "lucide-react";
import { PriceDisplay, extractBasePrice } from "@/components/PriceDisplay";
import { useCurrency } from "@/contexts/CurrencyContext";

interface PriceBoxProps {
  price: string;
  deliveryTime: string;
  difficultyLevel: string;
  features: string[];
  projectTitle: string;
}

export function PriceBox({ price, deliveryTime, difficultyLevel, features, projectTitle }: PriceBoxProps) {
  const { getWhatsAppLink } = useCurrency();

  return (
    <Card className="sticky top-24 shadow-lg border-2">
      <CardHeader className="text-center space-y-4">
        <div>
          <CardTitle className="text-4xl font-bold text-primary mb-2">
            <span className="text-lg font-normal text-muted-foreground">From </span>
            <PriceDisplay basePrice={extractBasePrice(price)} />
          </CardTitle>
          <CardDescription>Investment Estimate</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <Calendar className="h-5 w-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Delivery Time</p>
              <p className="font-semibold">{deliveryTime}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <TrendingUp className="h-5 w-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">Complexity</p>
              <Badge variant="secondary" className="mt-1">
                {difficultyLevel}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3 flex items-center gap-2">
            <Clock className="h-4 w-4" />
            What's Included
          </h4>
          <ul className="space-y-2">
            {features.slice(0, 5).map((feature, index) => (
              <li key={index} className="text-sm flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="flex-col gap-2">
        <Button size="lg" className="w-full" asChild>
          <a href={getWhatsAppLink(projectTitle)} target="_blank" rel="noopener noreferrer">
            Request Custom Quote
          </a>
        </Button>
        <Button size="lg" variant="outline" className="w-full" asChild>
          <a href={getWhatsAppLink(projectTitle)} target="_blank" rel="noopener noreferrer">
            Schedule Consultation
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
