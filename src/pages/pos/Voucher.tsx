import { Separator } from "../../components/ui/separator"
import usePOSHook from "../../hooks/usePOSHook"
import useSaleHook from "../../hooks/useSaleHook"
import VoucherDetails from "./VoucherDetails"
import VoucherInfo from "./VoucherInfo"

const Voucher = () => {
    const { buyer } = usePOSHook()
    const {voucherNo} = useSaleHook()
    
    const formatDate = (date: Date) => {
        const day = String(date.getDate()).padStart(2, "0")
        const month = date.toLocaleString("en-US", { month: "short" })
        const year = date.getFullYear()
        return `${day}-${month}-${year}`
    }
    
    const currentDate = formatDate(new Date())
    
    return (
        <>
            <div id="print-section" className="print:m-0 print:p-0">
                <section className="text-red-500 text-center space-y-2">
                    <h1 className="text-2xl font-semibold">ဦးကျော်စိန်</h1>
                    <h2>ပီနံမိုးရေကာဖျင်နှင့် ပလပ်စတစ်ပစ္စည်းအမျိုးမျိုး လက်လီလက်ကား ရောင်းဝယ်ရေး</h2>
                    <p>အမှတ်(၆၄၀)၊ မဟာဗန္ဓုလလမ်း၊ (၂၂) လမ်းထိပ်၊ လသာမြို့နယ်၊ ရန်ကုန်မြို့</p>
                    <p>Ph : 01-8241188, 01-8384088, 09-799224488, 09-960061188, 09-5065635, 09-5050852</p>
                    <h2>"အာကာမိုး" မိုးရေကာဖျင်ရောင်းဝယ်ရေး</h2>
                    <p>အမှတ်(၅)၊ သီရိမွန်လမ်းမကြီး၊ သီရိမွန်ပလာဇာဝင်း၊ ဘုရင့်နောင်တံတားအနီး၊ မရမ်းကုန်းမြို့နယ်၊ ရန်ကုန်မြို့။</p>
                    <p>Ph : 09 - 5505406, 09 - 73120388</p>
                </section>
                <Separator />
                <section className="flex justify-between items-start mt-3">
                    <div className="space-y-2">
                        <VoucherInfo fieldName="ဝယ်ယူသူအမည်" fieldValue={buyer?.name as string} />
                        <VoucherInfo fieldName="လိပ်စာ" fieldValue={buyer?.address as string} />
                    </div>
                    <div className="space-y-2">
                        <VoucherInfo fieldName="နေ့စွဲ" fieldValue={currentDate} />
                        <VoucherInfo fieldName="ဘောင်ချာနံပါတ်" fieldValue={voucherNo} />
                    </div>
                </section>
                <section className="mt-5">
                    <VoucherDetails />
                </section>
            </div>
           
        </>
    )
}

export default Voucher