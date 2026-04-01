import './App.css'

function App() {
  const semesters = [
    {
      year: "2024–2025",
      terms: [
        {
          name: "Fall 2024",
          credits: 12,
          courses: [
            "CLEN 181 - ENGR LC Success Seminar",
            "ENGR 102 - ENGR Lab I Computation",
            "HIST 105 - History of the U.S.",
            "HIST 230 - American Military History 1609–Present",
            "MATH 150 - Functions, Trig & Linear Systems"
          ]
        },
        {
          name: "Spring 2025",
          credits: 15,
          courses: [
            "ARTS 150 - Art History Survey II",
            "CHEM 107 - General Chemistry for Engineers",
            "CHEM 117 - General Chemistry for Engineering Lab",
            "CLEN 261 - The Engineering Profession",
            "MATH 151 - Engineering Math I",
            "POLS 207 - State & Local Government"
          ]
        },
      ]
    },
    {
      year: "2025–2026",
      terms: [
        {
          name: "Fall 2025",
          credits: 12,
          courses: [
            "ATMO 201 - Weather & Climate",
            "MATH 152 - Engineering Math II",
            "PHYS 206 - Newtonian Mechanics Engr & Sci",
            "PHYS 216 - Experimental Physics Engr Lab II Mechanics"
          ]
        },
        {
          name: "Spring 2026",
          credits: 13,
          courses: [
            "CVEN 207 - Intro Civil Engrg Profession",
            "CVEN 221 - Engineering Mechanics: Statics",
            "CVEN 250 - Intro Graphics & Visualization CE Design",
            "MATH 251 - Engineering Math III",
            "STAT 211 - Principles of Statistics I"
          ]
        },
        {
          name: "Summer 2026",
          credits: 3,
          courses: [
            "PHYS 207 - Electricity & Magnetism Engr & Sci"
          ]
        }
      ]
    },
    {
      year: "2026–2027",
      terms: [
        {
          name: "Fall 2026",
          credits: 14,
          courses: [
            "CVEN 302 - Computer Apps Engr & Construction",
            "CVEN 303 - Civil Engineering Measurement",
            "CVEN 305 - Mechanics of Materials",
            "ENGR 217 - Experimental Physics Engr Lab III Elec Magn",
            "MATH 308 - Differential Equations"
          ]
        },
        {
          name: "Spring 2027",
          credits: 12,
          courses: [
            "CVEN 306 - Materials Engineering CVEN Engr",
            "CVEN 307 - Transportation Engineering",
            "CVEN 345 - Theory of Structures",
            "CVEN 365 - Intro to Geotechnical Engineering"
          ]
        },
        {
          name: "Summer 2027",
          credits: 3,
          courses: [
            "ENGL 210 - Technical Professional Writing"
          ]
        }
      ]
    },
    {
      year: "2027–2028",
      terms: [
        {
          name: "Fall 2027",
          credits: 12,
          courses: [
            "CVEN 311 - Fluid Dynamics",
            "CVEN 322 - Civil Engineering Systems",
            "CVEN 342 - Materials of Construction",
            "CVEN 363 - Engineering Mechanics: Dynamics"
          ]
        },
        {
          name: "Spring 2028",
          credits: 14,
          courses: [
            "CVEN 314 - Sensor Tech in Civil Engineering",
            "CVEN 339 - Water Resources Engineering",
            "CVEN 349 - CVEN Project Management",
            "CVEN 444 - Structural Concrete Design",
            "PHIL 482 - Ethics & Engineering"
          ]
        },
        {
          name: "Summer 2028",
          credits: 0,
          courses: [
            "CVEN 399 - Mid-Curriculum Professional Development"
          ]
        }
      ]
    },
    {
      year: "2028–2029",
      terms: [
        {
          name: "Fall 2028",
          credits: 14,
          courses: [
            "CVEN 301 - Environmental Engineering",
            "CVEN 400 - Design Problems in CVEN",
            "CVEN 424 - Civil Engineering Professional Practice",
            "CVEN 455 - Urban Stormwater Management",
            "CVEN 473 - Engineering Project Estimation & Planning"
          ]
        }
      ]
    }
  ]

  return (
    <div className="container">
      <header className="hero">
        <h1>Milkiyas’s Civil Engineering Course Plan</h1>
        <p>Texas A&amp;M University • BS in Civil Engineering</p>
      </header>

      {semesters.map((yearBlock, index) => (
        <section key={index} className="year-section">
          <h2>{yearBlock.year}</h2>
          <div className="term-grid">
            {yearBlock.terms.map((term, idx) => (
              <div key={idx} className="term-card">
                <h3>{term.name}</h3>
                <p className="credits">{term.credits} Credit Hours</p>
                <ul>
                  {term.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default App