import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card"

interface Props {
    subtitle: string
    count: string
    translation: string
    icon: React.ReactNode
}

const OverviewCard: React.FC<Props> = (props) => {
  return (
    <Card className=" bg-[#F5EFFF] shadow-md">
        <CardHeader>
            <CardTitle className="font-medium">{props.subtitle}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-xl font-semibold">{props.count}</p>
        </CardContent>
        <CardFooter className="space-x-1">
            <p>{props.translation}</p>
            {props.icon}
        </CardFooter>
    </Card>
  )
}

export default OverviewCard