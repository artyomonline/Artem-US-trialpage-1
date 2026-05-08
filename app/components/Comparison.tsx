const ROWS = [
  { label: 'Same teacher every time', school: false, tutor: false, mes: true },
  { label: 'Live classes',            school: false, tutor: true,  mes: true },
  { label: 'Recordings included',     school: false, tutor: false, mes: true },
  { label: 'Homework help',           school: false, tutor: false, mes: true },
  { label: "Your child's pace",       school: false, tutor: false, mes: true },
  { label: 'Under $200/month',        school: true,  tutor: false, mes: true },
  { label: 'Start for $7',            school: false, tutor: false, mes: true },
]

const Check = () => (
  <span className="text-brand-green font-bold text-[20px] leading-none">✓</span>
)

const Cross = () => (
  <span className="font-bold text-[20px] leading-none" style={{ color: '#F8375A' }}>✗</span>
)

export default function Comparison() {
  return (
    <section className="bg-brand-blue px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-5xl mx-auto">

        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-12 text-white text-center">
          How MyEdSpace compares to everything else you've tried
        </h2>

        <table
          className="w-full table-fixed border-collapse"
          style={{ border: '2px solid #101626' }}
        >
          <thead>
            <tr>
              <th
                className="w-[110px] sm:w-[200px] bg-brand-blue p-4"
                style={{ borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}
              />
              <th
                className="p-4 text-center text-brand-dark font-bold text-lg bg-white"
                style={{ borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}
              >
                School
              </th>
              <th
                className="p-4 text-center text-brand-dark font-bold text-lg bg-white"
                style={{ borderRight: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}
              >
                Private<br />Tutor
              </th>
              <th
                className="p-4 text-center text-brand-dark font-bold text-lg bg-brand-green"
                style={{ borderBottom: '1px solid #e5e7eb' }}
              >
                MyEdSpace
              </th>
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr key={row.label}>
                <td
                  className="bg-brand-blue p-4 text-white font-bold uppercase leading-tight text-[11px] sm:text-[12px]"
                  style={{
                    borderRight: '1px solid #e5e7eb',
                    borderBottom: i < ROWS.length - 1 ? '1px solid #e5e7eb' : undefined,
                  }}
                >
                  {row.label}
                </td>
                <td
                  className="bg-white p-4 text-center"
                  style={{
                    borderRight: '1px solid #e5e7eb',
                    borderBottom: i < ROWS.length - 1 ? '1px solid #e5e7eb' : undefined,
                  }}
                >
                  {row.school ? <Check /> : <Cross />}
                </td>
                <td
                  className="bg-white p-4 text-center"
                  style={{
                    borderRight: '1px solid #e5e7eb',
                    borderBottom: i < ROWS.length - 1 ? '1px solid #e5e7eb' : undefined,
                  }}
                >
                  {row.tutor ? <Check /> : <Cross />}
                </td>
                <td
                  className="bg-white p-4 text-center"
                  style={{
                    borderBottom: i < ROWS.length - 1 ? '1px solid #e5e7eb' : undefined,
                  }}
                >
                  {row.mes ? <Check /> : <Cross />}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </section>
  )
}
