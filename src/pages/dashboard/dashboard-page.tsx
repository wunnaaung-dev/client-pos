import { Box, HandCoins, UsersRound } from "lucide-react"
import { Heading } from "../../components"
import OverviewCard from "../../components/card/OverviewCard"
import SaleChart from "./sale-chart"
import { chartConfig, dailySalesData, monthlySalesData} from "../../mockData/saleMock"

const overalls = [
  {
    subtitle: "Total Products",
    count: "318",
    translation: "စုစုပေါင်း ကုန်ပစ္စည်း",
    icon: <Box />
  },
  {
    subtitle: "Total Revenue",
    count: "16,525,678",
    translation: "စုစုပေါင်း ရောင်းရငွေ",
    icon: <HandCoins />
  },
  {
    subtitle: "Total Quantity",
    count: "14,898",
    translation: "စုစုပေါင်း အရေအတွက်",
    icon: <Box />
  },
  {
    subtitle: "Total Sale",
    count: "1,870",
    translation: "စုစုပေါင်း ရောင်းချရမှု",
    icon: <Box />
  },
  {
    subtitle: "Total Customers",
    count: "3868",
    translation: "",
    icon: <UsersRound />
  },
  {
    subtitle: "Total Suppliers",
    count: "3868",
    translation: "",
    icon: <UsersRound />
  },
]


const Dashboard = () => {
  return (
    <div>
      <Heading title="Dashboard" />
      <section className="grid grid-cols-3 gap-2 mt-2 w-full">
        {overalls.map((overall) => (
          <OverviewCard
            key={overall.subtitle}
            subtitle={overall.subtitle}
            count={overall.count}
            translation={overall.translation}
            icon={overall.icon}
          />
        ))}
      </section>
      <section className="mt-3">
        <SaleChart
          title="Daily Sales Record"
          description="နေ့အလိုက် ရရှိသော ရောင်းရငွေများ"
          chartData={dailySalesData}
          dataKeyX="date"
          dataKeyY="sales"
          config={chartConfig}
          footerContent="Up by 25% this week"
          footerSubContent="Showing daily sales data"
        />
      </section>
      <section className="mt-3">
        <SaleChart
          title="Monthly Sales Record"
          description="လလအလိုက် ရရှိသော ရောင်းရငွေများ"
          chartData={monthlySalesData}
          dataKeyX="month"
          dataKeyY="sales"
          config={chartConfig}
          footerContent="Up by 25% this month"
          footerSubContent="Showing monthly sales data"
        />
      </section>
    </div>
  )
}

export default Dashboard