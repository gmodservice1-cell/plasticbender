import { Download, Printer, Target, Shield } from 'lucide-react';

const propositions = [
  { icon: Download, text: 'Instant Download' },
  { icon: Printer, text: 'Print-Ready Files' },
  { icon: Target, text: 'Realism-Focused Design' },
  { icon: Shield, text: 'Tactical Grade' },
];

export default function ValuePropStrip() {
  return (
    <section className="bg-[#0F1215] border-y border-white/5 py-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-x-auto gap-8 px-6">
        {propositions.map((prop, index) => (
          <div key={index} className="flex items-center gap-3 text-[#C8A96E] whitespace-nowrap">
            <prop.icon size={24} />
            <span className="text-sm font-bold tracking-wide uppercase">{prop.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
