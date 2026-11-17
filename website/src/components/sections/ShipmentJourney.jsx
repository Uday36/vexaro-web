import { Search, Truck, Navigation, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    icon: Search,
    title: 'Book',
    text: 'Book online or call. We schedule pickup at your convenience.',
    color: 'navy',
    point: '10%'
  },
  {
    step: '02',
    icon: Truck,
    title: 'Pickup',
    text: 'Agent arrives at your doorstep with secure packaging materials.',
    color: 'orange',
    point: '38%'
  },
  {
    step: '03',
    icon: Navigation,
    title: 'Transit',
    text: 'Real-time GPS tracking and transit updates through our hubs.',
    color: 'navy',
    point: '66%'
  },
  {
    step: '04',
    icon: CheckCircle2,
    title: 'Delivered',
    text: 'Doorstep delivery with digital proof of delivery & OTP.',
    color: 'orange',
    point: '92%'
  }
];

export default function ShipmentJourney() {
  return (
    <section className="section-padding bg-cream relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-light-blue/50 rounded-full blur-[140px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-light-blue border border-navy/15 text-xs font-bold font-heading uppercase tracking-widest text-navy mb-4">
            <span>Seamless Workflow</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-heading text-charcoal tracking-tight mb-4">
            How Your Parcel <span className="text-orange">Moves</span>
          </h2>
          <p className="text-graphite font-body text-base md:text-lg">
            From doorstep pickup to final delivery handshake — a transparent, technology-driven journey.
          </p>
        </div>

        {/* Desktop Interactive Stepper */}
        <div className="hidden lg:block relative py-12">
          {/* Animated SVG Path connecting the 4 steps */}
          <div className="absolute top-[82px] left-0 right-0 h-1 z-0 px-14">
            <div className="w-full h-1 bg-soft-border relative rounded-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-navy via-orange to-navy w-full opacity-60" />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-8 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              const isOrange = item.color === 'orange';
              return (
                <div key={item.step} className="flex flex-col items-center text-center group">
                  {/* Circle step badge */}
                  <div className="relative mb-6">
                    <div
                      className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-md group-hover:scale-110 ${
                        isOrange
                          ? 'bg-orange text-white shadow-orange'
                          : 'bg-navy text-white shadow-navy'
                      }`}
                    >
                      <Icon size={30} />
                    </div>
                    {/* Step indicator pill */}
                    <span
                      className={`absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[11px] font-black font-heading ${
                        isOrange ? 'bg-charcoal text-white' : 'bg-white text-navy border border-soft-border'
                      }`}
                    >
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold font-heading text-charcoal mb-2 group-hover:text-navy transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-graphite font-body leading-relaxed max-w-[240px]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile / Tablet Vertical Journey */}
        <div className="lg:hidden relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[26px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-navy via-orange to-navy opacity-40 z-0" />

          <div className="space-y-6 relative z-10">
            {steps.map((item) => {
              const Icon = item.icon;
              const isOrange = item.color === 'orange';
              return (
                <div
                  key={item.step}
                  className="flex items-start gap-5 p-5 rounded-2xl bg-white border border-soft-border/60 shadow-sm"
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 shadow-sm ${
                      isOrange ? 'bg-orange text-white' : 'bg-navy text-white'
                    }`}
                  >
                    <Icon size={24} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-black font-heading text-orange">
                        STEP {item.step}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold font-heading text-charcoal mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-graphite font-body leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
