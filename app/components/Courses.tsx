const COURSES = [
  {
    name: 'Pre-Algebra',
    description: 'For students building their foundation.',
    topics: 'Fractions, ratios, basic equations, geometry basics.',
    pdf: '/assets/curriculum/pre-algebra.pdf',
  },
  {
    name: 'Algebra I',
    description: 'For students ready to work with variables and functions.',
    topics: 'Linear equations, inequalities, systems of equations.',
    pdf: '/assets/curriculum/algebra-i.pdf',
  },
  {
    name: 'Geometry',
    description: 'For students tackling shapes, proofs, and spatial reasoning.',
    topics: 'Triangles, circles, coordinate geometry, proofs.',
    pdf: '/assets/curriculum/geometry.pdf',
  },
  {
    name: 'Algebra II',
    description: 'For students advancing toward pre-calculus.',
    topics: 'Polynomials, quadratics, logarithms, sequences.',
    pdf: '/assets/curriculum/algebra-ii.pdf',
  },
]

export default function Courses() {
  return (
    <section className="bg-white px-4 sm:px-6 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">

        {/* Headline */}
        <h2 className="text-[32px] sm:text-[48px] font-black leading-tight tracking-tight mb-4 text-brand-dark text-center">
          Find the{' '}
          <span className="text-brand-green">right course</span> for your child
        </h2>

        {/* Subhead */}
        <p className="text-lg text-brand-dark/60 text-center mb-12 leading-relaxed">
          Four courses for students aged 11–17.
          Each has its own curriculum, workbooks, and class group.
        </p>

        {/* Course cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {COURSES.map((course) => (
            <div
              key={course.name}
              className="border border-brand-dark/10 border-l-4 border-l-brand-blue p-6 flex flex-col gap-3"
            >
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark">{course.name}</h3>
              <p className="text-brand-dark/65 text-sm leading-relaxed">{course.description}</p>
              <p className="text-brand-dark/50 text-sm leading-relaxed">
                <span className="font-semibold text-brand-dark/70">Key topics: </span>
                {course.topics}
              </p>
              <a
                href={course.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto pt-2 text-sm font-bold text-brand-blue hover:text-brand-dark motion-safe:transition-colors inline-flex items-center gap-1"
              >
                ↓ Download curriculum PDF
              </a>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
