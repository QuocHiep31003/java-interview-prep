import { useState, useEffect } from 'react'
import { modules } from './data'
import './index.css'

/* ============================================
   SIDEBAR COMPONENT
   ============================================ */
function Sidebar({ activeModule, setActiveModule, isOpen, setIsOpen }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">☕</div>
          <h1>Java Interview</h1>
        </div>
        <div className="sidebar-subtitle">FPT Java Talent Prep</div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section-title">Modules</div>
        {modules.map((mod) => (
          <div
            key={mod.id}
            className={`nav-item ${activeModule === mod.id ? 'active' : ''}`}
            onClick={() => { setActiveModule(mod.id); setIsOpen(false); }}
          >
            <span className="nav-icon">{mod.icon}</span>
            <span>{mod.title}</span>
            <span className="nav-badge">{mod.badge}</span>
          </div>
        ))}
      </nav>

      <div className="progress-container">
        <div className="progress-label">
          <span>Tiến độ ôn tập</span>
          <span>{modules.length} modules</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '100%' }}></div>
        </div>
      </div>
    </aside>
  )
}

/* ============================================
   CODE BLOCK COMPONENT
   ============================================ */
function CodeBlock({ code, lang }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="code-block" onClick={handleCopy} title="Click to copy">
      <span className="code-label">{copied ? '✅ Copied!' : (lang || 'java')}</span>
      <code><pre>{code}</pre></code>
    </div>
  )
}

/* ============================================
   TABLE COMPONENT
   ============================================ */
function DataTable({ data }) {
  if (!data) return null
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {data.headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className={
                  cell.includes('✅') ? 'highlight' : cell.includes('❌') ? 'warn' : ''
                }>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ============================================
   Q&A COMPONENT
   ============================================ */
function QASection({ items }) {
  const [openIdx, setOpenIdx] = useState(null)

  if (!items || items.length === 0) return null

  return (
    <div style={{ marginTop: 24 }}>
      <div className="card-title">🎯 Câu Hỏi Phỏng Vấn</div>
      <ul className="qa-list">
        {items.map((item, i) => (
          <li
            key={i}
            className={`qa-item ${openIdx === i ? 'open' : ''}`}
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
          >
            <div className="qa-question">{item.q}</div>
            <div className="qa-answer">→ {item.a}</div>
          </li>
        ))}
      </ul>
    </div>
  )
}

/* ============================================
   SECTION CARD COMPONENT
   ============================================ */
function SectionCard({ section }) {
  return (
    <div className="card">
      <div className="card-title">{section.title}</div>

      {section.content && (
        <div className="card-subtitle" style={{ whiteSpace: 'pre-line' }}>
          {section.content}
        </div>
      )}

      {section.items && section.items.map((item, i) => (
        <div key={i} style={{ marginBottom: 12 }}>
          <span className="tag tag-blue">{item.q}</span>
          <div className="card-subtitle" style={{ marginTop: 6 }}>{item.a}</div>
        </div>
      ))}

      {section.table && <DataTable data={section.table} />}

      {section.code && <CodeBlock code={section.code} lang={section.codeLang} />}

      {section.example && (
        <div className="tip-box">💡 <strong>Ví dụ:</strong> {section.example}</div>
      )}

      {section.answer && (
        <div className="answer-box">💬 <strong>Trả lời:</strong> {section.answer}</div>
      )}

      {section.tip && (
        <div className="tip-box">💡 {section.tip}</div>
      )}

      {section.warning && (
        <div className="warning-box">⚠️ {section.warning}</div>
      )}
    </div>
  )
}

/* ============================================
   THEME TOGGLE COMPONENT
   ============================================ */
function ThemeToggle({ theme, setTheme }) {
  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      title={theme === 'dark' ? 'Chuyển sang sáng' : 'Chuyển sang tối'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

/* ============================================
   MAIN APP
   ============================================ */
export default function App() {
  const [activeModule, setActiveModule] = useState('english')
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const currentModule = modules.find(m => m.id === activeModule) || modules[0]

  return (
    <div className="app">
      <button className="mobile-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
        {sidebarOpen ? '✕' : '☰'}
      </button>

      <Sidebar
        activeModule={activeModule}
        setActiveModule={setActiveModule}
        isOpen={sidebarOpen}
        setIsOpen={setSidebarOpen}
      />

      <main className="main-content">
        <header className="content-header">
          <h2>{currentModule.icon} {currentModule.title}</h2>
          <div className="header-right">
            <span className="header-badge">{currentModule.badge}</span>
            <ThemeToggle theme={theme} setTheme={setTheme} />
          </div>
        </header>

        <div className="content-body">
          {currentModule.sections.map((section, i) => (
            <div className="section" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
              <SectionCard section={section} />
            </div>
          ))}

          <QASection items={currentModule.qa} />
        </div>
      </main>
    </div>
  )
}
