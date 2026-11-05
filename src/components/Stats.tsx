import { stats } from '@/data/site';

export function Stats() {
  return (
    <section aria-label="Stats" className="bg-background pb-20 md:pb-32">
      <dl className="container-custom grid grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="border-t border-line pt-4">
            <dd className="display text-4xl sm:text-6xl lg:text-8xl font-semibold text-primary tabular-nums">
              {stat.value}
              <span className="text-accent">{stat.suffix}</span>
            </dd>
            <dt className="label text-secondary mt-2">{stat.label}</dt>
          </div>
        ))}
      </dl>
    </section>
  );
}
