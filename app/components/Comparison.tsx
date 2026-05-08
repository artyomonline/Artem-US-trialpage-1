import { Fragment, ReactNode } from 'react'

interface Row {
  label: string
  school: ReactNode
  tutor: ReactNode
  mes: ReactNode
}

const ROWS: Row[] = [
  {
    label: 'Class size',
    school: '30 kids',
    tutor: '1:1',
    mes: 'Group class, every question answered',
  },
  {
    label: 'Teacher',
    school: 'Rotates',
    tutor: 'Inconsistent',
    mes: (
      <span className="text-brand-green font-bold">Same teacher, every lesson</span>
    ),
  },
  {
    label: 'Schedule',
    school: 'Fixed school hours',
    tutor: 'You arrange',
    mes: 'Live twice a week',
  },
  {
    label: 'Pace',
    school: 'Fixed',
    tutor: 'Variable',
    mes: "Your child's pace",
  },
  {
    label: 'Recordings',
    school: 'No',
    tutor: 'No',
    mes: 'Every session recorded',
  },
  {
    label: 'HW help',
    school: 'No',
    tutor: 'Extra cost',
    mes: 'AI coach included',
  },
  {
    label: 'Cost',
    school: 'Free',
    tutor: '$640+/mo',
    mes: (
      <>$149/mo · <span className="text-brand-green font-bold">$7 to start</span></>
    ),
  },
]

export default function Comparison() {
  return (
    <section className="bg-brand-blue px-4 sm:px-6 py-16 sm:py-24 text-white">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-12 text-center">
          How MyEdSpace compares to everything else you've tried
        </h2>

        {/* Mobile: label once per row, values in 3 cols below */}
        <div className="sm:hidden">
          {/* Column headers */}
          <div className="grid grid-cols-3 gap-px bg-white/20 mb-4">
            <div className="bg-brand-blue px-3 py-3">
              <p className="text-[10px] font-black text-white uppercase tracking-wide leading-tight">School</p>
            </div>
            <div className="bg-brand-blue px-3 py-3">
              <p className="text-[10px] font-black text-white uppercase tracking-wide leading-tight">Private Tutor</p>
            </div>
            <div className="bg-brand-green px-3 py-3">
              <p className="text-[10px] font-black text-brand-dark uppercase tracking-wide leading-tight">MyEdSpace</p>
            </div>
          </div>

          {/* Rows */}
          <div className="space-y-4">
            {ROWS.map((row, i) => (
              <div key={i}>
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/50 mb-1.5 px-1">
                  {row.label}
                </p>
                <div className="grid grid-cols-3 gap-px bg-white/20">
                  <div className="bg-brand-blue px-3 py-3">
                    <p className="text-xs text-white leading-snug">{row.school}</p>
                  </div>
                  <div className="bg-brand-blue px-3 py-3">
                    <p className="text-xs text-white leading-snug">{row.tutor}</p>
                  </div>
                  <div className="bg-white px-3 py-3">
                    <p className="text-xs text-brand-dark font-semibold leading-snug">{row.mes}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: standard table, labels on left */}
        <div className="hidden sm:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-white/20">
                <th className="text-left py-4 pr-8 w-[150px]" />
                <th className="text-left py-4 px-5 text-white font-black text-base uppercase tracking-wide">
                  School
                </th>
                <th className="text-left py-4 px-5 text-white font-black text-base uppercase tracking-wide">
                  Private Tutor
                </th>
                <th className="text-left py-4 px-5 text-brand-green font-black text-base uppercase tracking-wide bg-white/10">
                  MyEdSpace
                </th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-white/10 ${i % 2 !== 0 ? 'bg-white/[0.03]' : ''}`}
                >
                  <td className="py-4 pr-8 text-white font-bold text-sm uppercase tracking-wider">
                    {row.label}
                  </td>
                  <td className="py-4 px-5 text-white text-base">{row.school}</td>
                  <td className="py-4 px-5 text-white text-base">{row.tutor}</td>
                  <td className="py-4 px-5 text-white font-semibold text-base bg-white/10">{row.mes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}
