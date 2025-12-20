import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useMemo, useState } from "react";
import { useCart } from "@/contexts/CartContext";
import { useCurrency } from "@/contexts/CurrencyContext";
import { ShoppingCart, Check } from "lucide-react";

interface AddToCartDialogProps {
  projectId: number;
  projectTitle: string;
  projectSlug: string;
  basePrice?: number;
  initialPrice?: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddToCartDialog({
  projectId,
  projectTitle,
  projectSlug,
  basePrice,
  initialPrice,
  open,
  onOpenChange,
}: AddToCartDialogProps) {
  const initialValue = useMemo(() => {
    if (typeof initialPrice === "number" && Number.isFinite(initialPrice) && initialPrice > 0) {
      return String(initialPrice);
    }
    return "";
  }, [initialPrice]);

  const [finalPrice, setFinalPrice] = useState(initialValue);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();
  const { currency, getCurrencySymbol } = useCurrency();

  const handleAddToCart = () => {
    const price = parseFloat(finalPrice);
    if (isNaN(price) || price <= 0) {
      return;
    }

    addToCart({
      projectId,
      projectTitle,
      projectSlug,
      finalPrice: price,
      currency: getCurrencySymbol(),
    });

    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onOpenChange(false);
    }, 1500);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add to Cart</DialogTitle>
          <DialogDescription>
            Enter the final agreed price for "{projectTitle}"
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="finalPrice">Final Price ({currency})</Label>
            <Input
              id="finalPrice"
              type="number"
              step="0.01"
              min="0"
              value={finalPrice}
              onChange={(e) => setFinalPrice(e.target.value)}
              placeholder="Enter final price"
              className="text-lg"
            />
            {typeof basePrice === "number" && Number.isFinite(basePrice) && basePrice > 0 ? (
              <p className="text-xs text-muted-foreground">
                Base estimate: {getCurrencySymbol()} {basePrice.toLocaleString()}
              </p>
            ) : (
              <p className="text-xs text-muted-foreground">
                Enter the agreed amount to use it in the cart and invoice.
              </p>
            )}
          </div>
        </div>

        <DialogFooter>
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Cancel
          </Button>
          <Button
            type="button"
            onClick={handleAddToCart}
            disabled={isAdded}
            className="min-w-32"
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4 mr-2" />
                Added!
              </>
            ) : (
              <>
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
