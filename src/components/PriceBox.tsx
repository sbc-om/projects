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
    <Card className="shadow-md border-2 hover:shadow-lg transition-shadow">
      <CardHeader className="text-center space-y-3 pb-4">
        <div>
          <CardTitle className="text-3xl font-bold text-primary mb-1">
            <span className="text-sm font-normal text-muted-foreground block mb-1">Starting from</span>
            <PriceDisplay basePrice={extractBasePrice(price)} />
          </CardTitle>
          <CardDescription className="text-xs">Investment Estimate</CardDescription>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-5">
        <div className="space-y-2">
          <div className="flex items-center gap-3 p-3 rounded-md bg-muted/40 border">
            <Calendar className="h-4 w-4 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Delivery Time</p>
              <p className="font-semibold text-sm">{deliveryTime}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-md bg-muted/40 border">
            <TrendingUp className="h-4 w-4 text-primary shrink-0" />
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground">Complexity</p>
              <Badge variant="secondary" className="mt-0.5 text-xs">
                {difficultyLevel}
              </Badge>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <h4 className="font-semibold mb-3 flex items-center gap-2 text-sm">
            <Clock className="h-3.5 w-3.5" />
            What's Included
          </h4>
          <ul className="space-y-2">
            {features.slice(0, 5).map((feature, index) => (
              <li key={index} className="text-xs flex items-start gap-2 leading-relaxed">
                <span className="text-primary mt-0.5 text-sm">✓</span>
                <span className="flex-1">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      
      <CardFooter className="flex-col gap-2 pt-4">
        <Button size="lg" className="w-full h-11 font-medium" asChild>
          <a href={getWhatsAppLink(projectTitle)} target="_blank" rel="noopener noreferrer">
            Request Custom Quote
          </a>
        </Button>
        <Button size="lg" variant="outline" className="w-full h-11" asChild>
          <a href={getWhatsAppLink(projectTitle)} target="_blank" rel="noopener noreferrer">
            Schedule Consultation
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
