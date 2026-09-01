import { CheckCircle2, Clock, Circle, Calendar } from 'lucide-react';
import { CONSTRUCTION_STEPS, CONSTRUCTION_IMAGE_1, CONSTRUCTION_IMAGE_2, CONSTRUCTION_IMAGE_3, PROJECT } from '@/lib/content';
import SectionHeading from './SectionHeading';
import { useReveal } from '@/lib/hooks';

export default function ConstructionUpdate() {
  const { ref, visible } = useReveal();
  return (
    <section id="construction" className="py-16 md:py-24 bg-cloud-100">
      <div className="section-pad max-w-[1400px] mx-auto">
        <SectionHeading
          eyebrow="Construction Update"
          title={<>Track Our <span className="text-gradient-royal">Progress</span></>}
          subtitle="Transparent, real-time construction milestones so you always know where your home stands."
        />

        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-14`}>
          {/* Timeline */}
          <div>
            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-cloud-300" />
              {[...CONSTRUCTION_STEPS]
                .sort((a, b) => {
                  const order: Record<string, number> = { 'Completed': 1, 'In Progress': 2 };
                  const aOrder = order[a.statu as string] || 3;
                  const bOrder = order[b.statu as string] || 3;
                  return aOrder - bOrder;
                })
                .map((step, i) => {
                const isCompleted = step.statu === 'Completed';
                const isInProgress = step.statu === 'In Progress';
                const Icon = isCompleted ? CheckCircle2 : isInProgress ? Clock : Circle;
                return (
                  <div key={step.phase} className="relative mb-8 last:mb-0" style={{ transitionDelay: `${i * 80}ms` }}>
                    <div className={`absolute -left-8 w-7 h-7 rounded-full flex items-center justify-center ${
                      isCompleted ? 'bg-green-500' : isInProgress ? 'bg-royal-500' : 'bg-cloud-300'
                    }`}>
                      <Icon className={`w-4 h-4 ${isCompleted ? 'text-white' : isInProgress ? 'text-white animate-pulse' : 'text-ink-muted'}`} />
                    </div>
                    <div className={`premium-card p-5 ${isInProgress ? 'ring-2 ring-royal-200' : ''}`}>
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-display text-base text-ink font-semibold">{step.phase}</h3>
                        <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                          isCompleted ? 'bg-green-50 text-green-700' :
                          isInProgress ? 'bg-royal-50 text-royal-600' : 'bg-cloud-200 text-ink-muted'
                        }`}>
                          {isCompleted ? 'Completed' : isInProgress ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-ink-muted">
                        <Calendar className="w-4 h-4" />
                        {step.date}
                      </div>
                      {isInProgress && (
                        <div className="mt-3">
                          <div className="h-2 rounded-full bg-cloud-200 overflow-hidden">
                            <div className="h-full bg-royal-500 rounded-full transition-all duration-1000" style={{ width: `${step.progress}%` }} />
                          </div>
                          <div className="text-xs text-royal-600 font-semibold mt-1">{step.progress}% Complete</div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-soft group">
                <img src={CONSTRUCTION_IMAGE_1} alt="Construction site progress" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"  width="800" height="600" />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-soft group">
                <img src={CONSTRUCTION_IMAGE_2} alt="Tower construction update" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"  width="800" height="600" />
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-soft group">
              <img src={CONSTRUCTION_IMAGE_3} alt="Aerial construction view" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy"  width="800" height="600" />
            </div>
            <div className="premium-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-royal-50 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-royal-600" />
              </div>
              <div>
                <div className="text-sm text-ink-muted">Expected Possession</div>
                <div className="font-display text-xl text-ink font-bold">{PROJECT.possession}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
