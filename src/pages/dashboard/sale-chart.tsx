/* eslint-disable @typescript-eslint/no-explicit-any */
import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../../components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "../../components/ui/chart"

interface ChartProps {
    title: string
    description?: string
    footerContent?: string
    footerSubContent?: string
    chartData: Record<string, any>[]
    dataKeyX: string
    dataKeyY: string
    config: ChartConfig
    color?: string
    tickFormatter?: (value: any) => string
}

const SaleChart: React.FC<ChartProps> = ({
    title,
    description,
    footerContent,
    footerSubContent,
    chartData,
    dataKeyX,
    dataKeyY,
    config,
    color = "hsl(var(--chart-3))",
}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <ChartContainer config={config} className="w-full h-[40vh]">
                    <LineChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey={dataKeyX}
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            // tickFormatter={tickFormatter}
                        />
                        <YAxis 
                            dataKey={dataKeyY}
                            tickLine={false}
                            axisLine={false}
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent />}
                        />
                        <Line
                            dataKey={dataKeyY}
                            type="linear"
                            stroke={color}
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
            {(footerContent || footerSubContent) && (
                <CardFooter className="flex-col items-start gap-2 text-sm">
                    {footerContent && (
                        <div className="flex gap-2 font-medium leading-none">
                            {footerContent} <TrendingUp className="h-4 w-4" />
                        </div>
                    )}
                    {footerSubContent && (
                        <div className="leading-none text-muted-foreground">
                            {footerSubContent}
                        </div>
                    )}
                </CardFooter>
            )}
        </Card>
    )
}

export default SaleChart