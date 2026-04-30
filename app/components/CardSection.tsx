import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartNoAxesColumn } from "lucide-react";
import { StarIcon } from "lucide-react";

type CardProps = {
  icon?: React.ElementType
  rightIcon?: React.ElementType
  rating?: number
  title?: string
  description?: string
  name?: string
  position?: string
  value?: string
}

export function CardSection({
  icon: Icon,
  rightIcon: RightIcon,
  rating,
  title,
  description,
  name,
  position,
  value,
}: CardProps) {
  return (
    <Card size="sm" className="w-full rounded-md hover:border-primary/50 hover:shadow-lg transition-all duration-300">
      <CardHeader>
        {rating !== undefined && (
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${i < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
                  }`}
              />
            ))}
          </div>
        )}
        <div className="flex items-center justify-between">
          {Icon && (
            <Icon className="h-8 w-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2" />
          )}
          {(RightIcon || value) && (
            <div className="flex items-center bg-[#3b82f6]/20 p-2 rounded-full gap-2">
              {RightIcon && <RightIcon className="h-3 w-3 text-[#3b82f6]" />}
              {value && <span className="text-xs text-[#3b82f6]">{value}</span>}
            </div>
          )}
        </div>
        <CardTitle>
          <div className="flex items-center justify-between">
            {title}
          </div>
        </CardTitle>
        <CardDescription className="">
          {description}
        </CardDescription>
        <CardFooter className="flex flex-col items-start gap-1 mt-4">
          <p className="font-bold">{name}</p>
          <p>{position}</p>
        </CardFooter>
      </CardHeader>
    </Card>
  )
}
