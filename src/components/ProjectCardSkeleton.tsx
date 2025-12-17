import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function ProjectCardSkeleton() {
  return (
    <Card className="overflow-hidden">
      {/* Image Skeleton */}
      <Skeleton className="w-full aspect-4/3" />
      
      <CardHeader className="p-4 pb-3">
        {/* Category Badge */}
        <Skeleton className="h-5 w-24 mb-2" />
        {/* Description */}
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-3/4" />
      </CardHeader>
      
      <CardContent className="p-4 pt-0">
        <div className="space-y-2.5">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-20" />
            <Skeleton className="h-5 w-14" />
          </div>
          
          {/* Bottom Section */}
          <div className="flex items-center justify-between pt-2">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-6 w-24" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function ProjectGridSkeleton({ count = 12 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProjectCardSkeleton key={i} />
      ))}
    </div>
  );
}
