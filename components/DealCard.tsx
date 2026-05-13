interface DealCardProps {
  type: string
  location: string
  year: number
  value: string
  descriptor: string
  index?: number
}

export default function DealCard({ type, location, year, value, descriptor, index = 0 }: DealCardProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6 border-t border-[#E8E4DC] group hover:bg-[#F5F3EE] transition-colors duration-300 px-2 -mx-2">
      <div>
        <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B] mb-1">Type</p>
        <p className="font-cormorant text-lg font-light text-[#1A1A1A]">{type}</p>
      </div>
      <div>
        <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B] mb-1">Location</p>
        <p className="font-dm text-sm text-[#1A1A1A]">{location}</p>
      </div>
      <div>
        <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B] mb-1">Year</p>
        <p className="font-dm text-sm text-[#1A1A1A]">{year}</p>
      </div>
      <div>
        <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B] mb-1">Value</p>
        <p className="font-dm text-sm text-gold font-medium">{value}</p>
      </div>
      <div className="col-span-2 md:col-span-1">
        <p className="font-dm text-[10px] tracking-[0.15em] uppercase text-[#6B6B6B] mb-1">Notes</p>
        <p className="font-dm text-sm text-[#6B6B6B] italic">{descriptor}</p>
      </div>
    </div>
  )
}
