interface VoucherInfoProps {
    fieldName: string
    fieldValue: string
}

const VoucherInfo: React.FC<VoucherInfoProps> = (props) => {
  return (
    <div className="flex justify-between items-start gap-3 min-w-48">
        <h3 className="font-semibold">{props.fieldName}</h3>
        <div>
            <p>{props.fieldValue}</p>
            <div className="w-56 h-[2px] rounded-lg bg-slate-700 mt-1"></div>
        </div>
    </div>
  )
}

export default VoucherInfo