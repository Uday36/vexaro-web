import { useCountUp } from '../../hooks/useCountUp';
import IconHelper from './IconHelper';

export default function StatCounter({ value, suffix, label, decimal, icon, color }) {
  const { count, ref } = useCountUp(value, 2000, decimal);

  return (
    <div
      ref={ref}
      className="p-6 md:p-8 rounded-[24px] bg-white border border-soft-border/50 shadow-soft hover:shadow-card transition-all duration-300 relative group overflow-hidden"
    >
      <div className="flex items-center justify-between mb-4">
        {icon && (
          <div
            className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
              color === 'orange' ? 'bg-orange-50 text-orange' : 'bg-light-blue text-navy'
            }`}
          >
            <IconHelper name={icon} size={28} />
          </div>
        )}
        <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream border border-soft-border/40">
          <span
            className={`w-2 h-2 rounded-full ${
              color === 'orange' ? 'bg-orange animate-pulse' : 'bg-navy animate-pulse'
            }`}
          />
          <span className="text-[11px] font-bold font-heading uppercase tracking-wider text-graphite/70">
            Live Metric
          </span>
        </div>
      </div>

      <div className="flex items-baseline gap-1">
        <span className="text-4xl md:text-5xl font-black font-heading text-charcoal tracking-tight">
          {decimal ? count.toFixed(1) : count.toLocaleString()}
        </span>
        {suffix && (
          <span
            className={`text-2xl md:text-3xl font-black font-heading ${
              color === 'orange' ? 'text-orange' : 'text-navy'
            }`}
          >
            {suffix}
          </span>
        )}
      </div>

      <p className="mt-2 text-sm md:text-base font-medium text-graphite font-body">
        {label}
      </p>

      {/* Subtle background glow */}
      <div
        className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none ${
          color === 'orange' ? 'bg-orange' : 'bg-navy'
        }`}
      />
    </div>
  );
}
