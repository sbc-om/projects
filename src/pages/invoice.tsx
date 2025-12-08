import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useCart } from "@/contexts/CartContext";
import { Download, ArrowLeft, Printer } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useRef, useState, useMemo } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export function InvoicePage() {
  const { items, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const invoiceRef = useRef<HTMLDivElement>(null);
  const [discountPercent, setDiscountPercent] = useState<string>("0");

  const subtotal = getTotalPrice();
  const discount = useMemo(() => {
    const percent = parseFloat(discountPercent) || 0;
    return (subtotal * percent) / 100;
  }, [subtotal, discountPercent]);
  const total = subtotal - discount;

  const generatePDF = async () => {
    if (!invoiceRef.current) return;

    try {
      // Wait a bit for any images to load
      await new Promise(resolve => setTimeout(resolve, 100));

      const canvas = await html2canvas(invoiceRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        logging: false,
        onclone: (clonedDoc) => {
          // Ensure all images are loaded in the cloned document
          const images = clonedDoc.getElementsByTagName('img');
          Array.from(images).forEach(img => {
            if (img.src.endsWith('.svg')) {
              // Force inline style for SVG images
              img.style.display = 'block';
            }
          });
        }
      });
      
      const imgData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // Handle multi-page if needed
      if (pdfHeight > pageHeight) {
        let heightLeft = canvas.height;
        let position = 0;
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;
        
        // First page
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight * (canvas.width / pdfWidth);
        
        // Add additional pages if needed
        while (heightLeft > 0) {
          position = -(pdf.internal.pageSize.getHeight() * (canvas.width / pdfWidth) - heightLeft);
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight * (canvas.width / pdfWidth);
        }
      } else {
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      }
      
      pdf.save(`SBC-Proforma-Invoice-${Date.now()}.pdf`);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try using the Print button instead.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="p-8 text-center max-w-md">
          <h2 className="text-2xl font-bold mb-4">No Items in Cart</h2>
          <p className="text-muted-foreground mb-6">
            Add projects to your cart to generate an invoice
          </p>
          <Button onClick={() => navigate("/")}>
            Browse Projects
          </Button>
        </Card>
      </div>
    );
  }

  const today = new Date();
  const invoiceNumber = `INV-${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, "0")}${String(today.getDate()).padStart(2, "0")}-${Math.random().toString(36).substr(2, 6).toUpperCase()}`;
  
  return (
    <div className="min-h-screen bg-background">
      {/* Header Actions */}
      <div className="border-b bg-background print:hidden">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Button variant="ghost" onClick={() => navigate(-1)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handlePrint}>
                <Printer className="h-4 w-4 mr-2" />
                Print
              </Button>
              <Button onClick={generatePDF}>
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice Content */}
      <div className="container mx-auto px-4 py-4">
        <Card 
          ref={invoiceRef}
          className="max-w-4xl mx-auto p-4 md:p-6 bg-white print:shadow-none print:p-4"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-4 pb-3 border-b">
            <div className="flex items-center gap-2">
              <div className="h-12 w-12 shrink-0 flex items-center justify-center bg-[#0098EA] rounded-full">
                <svg width="48" height="48" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="512" cy="512" r="512" fill="#0098EA"/>
                  <path d="M909.301 460.562C910.304 466.384 905.649 471.489 899.741 471.489H848.53C843.505 471.489 839.353 467.729 838.076 462.869C837.036 458.914 835.651 455.206 833.92 451.744C830.985 445.873 827.102 440.854 822.273 436.687C817.443 432.521 811.714 429.348 805.085 427.17C798.551 424.898 791.307 423.761 783.352 423.761C769.242 423.761 757.074 427.218 746.847 434.131C736.714 441.044 728.902 451.034 723.409 464.102C718.011 477.17 715.312 492.985 715.312 511.545C715.312 530.864 718.059 547.057 723.551 560.125C729.138 573.098 736.951 582.9 746.989 589.528C757.121 596.063 769.1 599.33 782.926 599.33C790.691 599.33 797.746 598.335 804.091 596.347C810.53 594.358 816.165 591.47 820.994 587.682C825.919 583.799 829.943 579.112 833.068 573.619C834.978 570.306 836.537 566.742 837.748 562.929C839.223 558.28 843.314 554.749 848.192 554.778L899.832 555.088C905.707 555.123 910.325 560.208 909.136 565.961C907.237 575.146 904.04 584.233 899.545 593.222C893.39 605.722 884.915 617.133 874.119 627.455C863.324 637.682 850.161 645.826 834.631 651.886C819.195 657.947 801.487 660.977 781.506 660.977C755.18 660.977 731.6 655.201 710.767 643.648C690.028 632 673.646 615.049 661.619 592.795C649.593 570.542 643.58 543.458 643.58 511.545C643.58 479.538 649.687 452.407 661.903 430.153C674.119 407.9 690.644 390.996 711.477 379.443C732.311 367.89 755.653 362.114 781.506 362.114C799.119 362.114 815.407 364.576 830.369 369.5C845.331 374.33 858.494 381.432 869.858 390.807C881.222 400.087 890.455 411.498 897.557 425.04C903.138 435.682 907.053 447.523 909.301 460.562Z" fill="white"/>
                  <path d="M391.08 657C385.557 657 381.08 652.523 381.08 647V376.091C381.08 370.568 385.557 366.091 391.08 366.091H502.386C524.167 366.091 542.396 369.169 557.074 375.324C571.847 381.479 582.926 390.097 590.313 401.176C597.794 412.256 601.534 425.087 601.534 439.67C601.534 450.75 599.214 460.646 594.574 469.358C589.934 477.975 583.542 485.125 575.398 490.807C567.579 496.262 558.582 500.146 548.406 502.458C547.664 502.627 547.131 503.283 547.131 504.044C547.131 504.904 547.806 505.61 548.664 505.669C559.819 506.43 570.15 509.572 579.659 515.097C589.697 520.873 597.746 528.922 603.807 539.244C609.867 549.472 612.898 561.593 612.898 575.608C612.898 591.233 608.92 605.201 600.966 617.511C593.011 629.727 581.506 639.386 566.449 646.489C551.392 653.496 533.116 657 511.619 657H391.08ZM451.392 590.324C451.392 595.847 455.869 600.324 461.392 600.324H494.858C510.104 600.324 521.326 597.436 528.523 591.659C535.814 585.883 539.46 577.833 539.46 567.511C539.46 560.03 537.708 553.591 534.205 548.193C530.701 542.701 525.729 538.487 519.29 535.551C512.85 532.521 505.133 531.006 496.136 531.006H461.392C455.869 531.006 451.392 535.483 451.392 541.006V590.324ZM451.392 475.693C451.392 481.216 455.869 485.693 461.392 485.693H490.313C497.983 485.693 504.801 484.415 510.767 481.858C516.733 479.301 521.373 475.608 524.688 470.778C528.097 465.949 529.801 460.125 529.801 453.307C529.801 443.553 526.345 435.883 519.432 430.295C512.519 424.708 503.191 421.915 491.449 421.915H461.392C455.869 421.915 451.392 426.392 451.392 431.915V475.693Z" fill="white"/>
                  <path d="M283.393 453.307C278.221 453.307 274.08 449.286 272.466 444.372C270.42 438.139 266.805 433.021 261.619 429.017C254.233 423.146 243.674 420.21 229.943 420.21C220.852 420.21 213.277 421.394 207.216 423.761C201.155 426.129 196.61 429.396 193.58 433.562C190.549 437.634 188.987 442.322 188.892 447.625C188.703 451.981 189.555 455.816 191.449 459.131C193.437 462.445 196.278 465.381 199.972 467.937C203.759 470.4 208.305 472.578 213.608 474.472C218.911 476.366 224.877 478.023 231.506 479.443L256.506 485.125C270.9 488.25 283.589 492.417 294.574 497.625C305.653 502.833 314.934 509.036 322.415 516.233C329.991 523.43 335.72 531.716 339.602 541.091C343.485 550.466 345.473 560.977 345.568 572.625C345.473 590.996 340.833 606.763 331.648 619.926C322.462 633.089 309.252 643.174 292.017 650.182C274.877 657.189 254.186 660.693 229.943 660.693C205.606 660.693 184.394 657.047 166.307 649.756C148.22 642.464 134.157 631.384 124.119 616.517C115.611 603.915 110.606 588.489 109.106 570.239C108.649 564.686 113.19 560.125 118.762 560.125H166.554C171.842 560.125 176.082 564.284 177.285 569.434C178.539 574.8 180.608 579.51 183.494 583.562C187.945 589.812 194.053 594.547 201.818 597.767C209.678 600.987 218.769 602.597 229.091 602.597C238.561 602.597 246.61 601.318 253.239 598.761C259.962 596.205 265.123 592.653 268.722 588.108C272.32 583.562 274.167 578.354 274.261 572.483C274.167 566.991 272.462 562.303 269.148 558.42C265.833 554.443 260.72 551.034 253.807 548.193C246.989 545.258 238.276 542.559 227.67 540.097L197.273 532.994C172.083 527.218 152.244 517.89 137.756 505.011C123.267 492.038 116.07 474.519 116.165 452.455C116.07 434.462 120.9 418.695 130.653 405.153C140.407 391.612 153.902 381.053 171.136 373.477C188.371 365.901 208.021 362.114 230.085 362.114C252.623 362.114 272.178 365.949 288.75 373.619C305.417 381.195 318.343 391.848 327.528 405.58C334.967 416.699 339.456 429.247 340.995 443.223C341.604 448.753 337.049 453.307 331.486 453.307H283.393Z" fill="white"/>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900 mb-1">Senior Blockchain LLC</h1>
                <p className="text-xs text-slate-600">Muscat, Oman | info@sbc.om</p>
                <p className="text-xs text-slate-600">+968 9120 0634 | sbc.om</p>
              </div>
            </div>
            <div className="text-right">
              <h2 className="text-lg font-bold text-primary mb-2">PROFORMA INVOICE</h2>
              <p className="text-xs text-slate-600">Invoice #: {invoiceNumber}</p>
              <p className="text-xs text-slate-600">Date: {today.toLocaleDateString()}</p>
            </div>
          </div>

          {/* Items Table */}
          <div className="mb-4">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-300">
                  <th className="text-left py-1.5 px-2 font-semibold text-sm">#</th>
                  <th className="text-left py-1.5 px-2 font-semibold text-sm">Project / Service</th>
                  <th className="text-right py-1.5 px-2 font-semibold text-sm">Amount</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, index) => (
                  <tr key={item.projectId} className="border-b border-slate-200">
                    <td className="py-2 px-2 text-sm">{index + 1}</td>
                    <td className="py-2 px-2">
                      <div>
                        <p className="font-medium text-sm">{item.projectTitle}</p>
                        <p className="text-xs text-slate-500">Custom Software Development</p>
                      </div>
                    </td>
                    <td className="py-2 px-2 text-right font-medium text-sm">
                      {item.currency} {item.finalPrice.toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Totals */}
          <div className="flex justify-end mb-4">
            <div className="w-72">
              <div className="flex justify-between py-1.5 border-t border-slate-200">
                <span className="text-slate-600 text-sm">Subtotal:</span>
                <span className="font-medium text-sm">
                  {items[0]?.currency} {subtotal.toLocaleString()}
                </span>
              </div>
              
              <div className="flex justify-between items-center py-1.5 border-t border-slate-200 print:hidden">
                <div className="flex items-center gap-2">
                  <Label htmlFor="discount" className="text-slate-600 text-sm">Discount:</Label>
                  <div className="flex items-center gap-1">
                    <Input
                      id="discount"
                      type="number"
                      min="0"
                      max="100"
                      step="0.1"
                      value={discountPercent}
                      onChange={(e) => setDiscountPercent(e.target.value)}
                      className="w-20 h-8 text-right"
                    />
                    <span className="text-sm">%</span>
                  </div>
                </div>
                <span className="font-medium text-red-600 text-sm">
                  -{items[0]?.currency} {discount.toLocaleString()}
                </span>
              </div>

              {parseFloat(discountPercent) > 0 && (
                <div className="hidden print:flex justify-between py-1.5 border-t border-slate-200">
                  <span className="text-slate-600 text-sm">Discount ({discountPercent}%):</span>
                  <span className="font-medium text-red-600 text-sm">
                    -{items[0]?.currency} {discount.toLocaleString()}
                  </span>
                </div>
              )}
              
              <div className="flex justify-between py-2 border-t-2 border-slate-900">
                <span className="font-bold text-base">Total:</span>
                <span className="font-bold text-base text-primary">
                  {items[0]?.currency} {total.toLocaleString()}
                </span>
              </div>
            </div>
          </div>

          {/* Terms */}
          <div className="pt-3 border-t text-xs text-slate-600">
            <h3 className="font-semibold mb-1.5 text-sm">Terms & Conditions:</h3>
            <ul className="space-y-0.5 text-xs">
              <li>• 50% payment required before project commencement</li>
              <li>• Final 50% payment upon project completion</li>
              <li>• Delivery timeline subject to requirements clarity</li>
              <li>• Post-launch support included for 30 days</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-3 pt-3 border-t text-center text-xs text-slate-500">
            <p>Thank you for your business!</p>
            <p className="mt-2">Senior Blockchain LLC | Building Digital Excellence</p>
          </div>
        </Card>

        {/* Actions */}
        <div className="max-w-4xl mx-auto mt-6 text-center print:hidden">
          <Button 
            variant="outline" 
            onClick={() => {
              clearCart();
              navigate("/");
            }}
          >
            Clear Cart & Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
}
