import React, { useState, useEffect } from 'react';

const HomepageTools = () => {
  const [activeTab, setActiveTab] = useState('countdown');

  // ── Tool 1: Exam Countdown ──
  const [selectedExam, setSelectedExam] = useState('');
  const [countdown, setCountdown] = useState(null);

  const upcomingExams = [
    { name: 'UPSC CSE Prelims 2026', date: '2026-05-25' },
    { name: 'SSC CGL Tier-1 2026', date: '2026-07-10' },
    { name: 'IBPS PO 2026', date: '2026-10-05' },
    { name: 'RRB NTPC 2026', date: '2026-09-15' },
    { name: 'SBI PO 2026', date: '2026-06-20' },
    { name: 'NDA 2026 (II)', date: '2026-09-06' },
    { name: 'BPSC 70th CCE 2026', date: '2026-08-12' },
    { name: 'UP Police SI 2026', date: '2026-11-20' },
  ];

  useEffect(() => {
    if (!selectedExam) return;
    const exam = upcomingExams.find(e => e.name === selectedExam);
    if (!exam) return;
    const calc = () => {
      const diff = new Date(exam.date) - new Date();
      if (diff <= 0) { setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 }); return; }
      setCountdown({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
        secs: Math.floor((diff % 60000) / 1000),
      });
    };
    calc();
    const t = setInterval(calc, 1000);
    return () => clearInterval(t);
  }, [selectedExam]);

  // ── Tool 2: Salary Calculator ──
  const [post, setPost] = useState('');
  const [salaryResult, setSalaryResult] = useState(null);

  const postSalaries = [
    { name: 'IAS / IPS (UPSC CSE)', basic: 56100, da: 46, hra: 27, ta: 7200 },
    { name: 'SSC CGL Inspector (IT/CE)', basic: 44900, da: 46, hra: 24, ta: 3600 },
    { name: 'IBPS PO / SBI PO', basic: 36000, da: 46, hra: 9, ta: 2000 },
    { name: 'SBI Clerk / IBPS Clerk', basic: 19900, da: 46, hra: 9, ta: 750 },
    { name: 'RRB NTPC (Graduate Level)', basic: 35400, da: 46, hra: 24, ta: 3600 },
    { name: 'UP Police Constable', basic: 21700, da: 46, hra: 9, ta: 1800 },
    { name: 'NDA / CDS Officer', basic: 56100, da: 46, hra: 27, ta: 6000 },
    { name: 'SSC MTS', basic: 18000, da: 46, hra: 9, ta: 1350 },
    { name: 'BPSC / UPPSC PCS Officer', basic: 56100, da: 46, hra: 24, ta: 4500 },
    { name: 'RBI Grade B Officer', basic: 55200, da: 46, hra: 24, ta: 4000 },
  ];

  const calcSalary = () => {
    const p = postSalaries.find(x => x.name === post);
    if (!p) return;
    const daAmt = Math.round(p.basic * p.da / 100);
    const hraAmt = Math.round(p.basic * p.hra / 100);
    const gross = p.basic + daAmt + hraAmt + p.ta;
    const nps = Math.round(p.basic * 0.1);
    const net = gross - nps;
    setSalaryResult({ basic: p.basic, da: daAmt, hra: hraAmt, ta: p.ta, gross, nps, net });
  };

  // ── Tool 3: Study Planner ──
  const [examDate, setExamDate] = useState('');
  const [hoursPerDay, setHoursPerDay] = useState(6);
  const [planResult, setPlanResult] = useState(null);

  const calcPlan = () => {
    if (!examDate) return;
    const days = Math.max(0, Math.floor((new Date(examDate) - new Date()) / 86400000));
    const totalHours = days * hoursPerDay;
    const subjects = [
      { name: 'General Awareness / GK', pct: 25 },
      { name: 'Reasoning & Aptitude', pct: 25 },
      { name: 'English / Hindi Language', pct: 20 },
      { name: 'Quantitative Aptitude', pct: 20 },
      { name: 'Current Affairs (Daily)', pct: 10 },
    ];
    setPlanResult({
      days,
      totalHours,
      subjects: subjects.map(s => ({ ...s, hours: Math.round(totalHours * s.pct / 100) })),
    });
  };

  const tools = [
    { id: 'countdown', label: '⏳ Exam Countdown', color: '#8B5CF6' },
    { id: 'salary', label: '💰 Salary Calculator', color: '#10B981' },
    { id: 'planner', label: '📅 Study Planner', color: '#F59E0B' },
  ];

  return (
    <div className="glass-card reveal" style={{ padding: '2rem', maxWidth: '860px', margin: '0 auto' }}>

      {/* Tab switcher */}
      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tools.map(t => (
          <button
            key={t.id}
            onClick={() => setActiveTab(t.id)}
            style={{
              padding: '0.7rem 1.6rem', borderRadius: '25px',
              border: `2px solid ${t.color}`,
              background: activeTab === t.id ? t.color : 'transparent',
              color: 'white', fontWeight: 700, cursor: 'pointer',
              fontSize: '0.95rem', transition: 'all 0.3s'
            }}
          >{t.label}</button>
        ))}
      </div>

      {/* ── TOOL 1: Countdown Timer ── */}
      {activeTab === 'countdown' && (
        <div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
            Select your target exam and track every second till exam day
          </p>
          <select
            value={selectedExam}
            onChange={e => setSelectedExam(e.target.value)}
            style={{
              width: '100%', padding: '0.9rem 1rem', borderRadius: '10px',
              background: 'rgba(255,255,255,0.07)', border: '2px solid rgba(139,92,246,0.5)',
              color: 'white', fontSize: '1rem', marginBottom: '1.5rem', cursor: 'pointer'
            }}
          >
            <option value="" style={{ background: '#0F172A' }}>-- Select Your Target Exam --</option>
            {upcomingExams.map(e => (
              <option key={e.name} value={e.name} style={{ background: '#0F172A' }}>
                {e.name} — {e.date}
              </option>
            ))}
          </select>

          {countdown ? (
            <div>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
                {[['Days', countdown.days, '#8B5CF6'], ['Hours', countdown.hours, '#A78BFA'], ['Minutes', countdown.mins, '#C4B5FD'], ['Seconds', countdown.secs, '#DDD6FE']].map(([label, val, col]) => (
                  <div key={label} style={{
                    textAlign: 'center', padding: '1.2rem 1.5rem',
                    background: `${col}15`, border: `2px solid ${col}50`,
                    borderRadius: '16px', minWidth: '80px'
                  }}>
                    <div style={{ fontSize: '2.4rem', fontWeight: 800, color: col, lineHeight: 1, fontVariantNumeric: 'tabular-nums' }}>{String(val).padStart(2, '0')}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', marginTop: '0.4rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                  </div>
                ))}
              </div>
              <div style={{ textAlign: 'center', padding: '0.8rem', background: 'rgba(139,92,246,0.1)', borderRadius: '10px', border: '1px solid rgba(139,92,246,0.3)' }}>
                <span style={{ color: '#A78BFA', fontWeight: 600 }}>💪 Stay consistent! Every day of preparation counts.</span>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '2rem', color: 'rgba(255,255,255,0.3)', fontSize: '1rem' }}>
              ⬆️ Select an exam above to start your countdown
            </div>
          )}
        </div>
      )}

      {/* ── TOOL 2: Salary Calculator ── */}
      {activeTab === 'salary' && (
        <div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>
            Know your exact in-hand salary before you apply — 7th Pay Commission rates
          </p>
          <select
            value={post}
            onChange={e => { setPost(e.target.value); setSalaryResult(null); }}
            style={{
              width: '100%', padding: '0.9rem 1rem', borderRadius: '10px',
              background: 'rgba(255,255,255,0.07)', border: '2px solid rgba(16,185,129,0.5)',
              color: 'white', fontSize: '1rem', marginBottom: '1rem', cursor: 'pointer'
            }}
          >
            <option value="" style={{ background: '#0F172A' }}>-- Select Government Post --</option>
            {postSalaries.map(p => (
              <option key={p.name} value={p.name} style={{ background: '#0F172A' }}>{p.name}</option>
            ))}
          </select>

          <button
            onClick={calcSalary}
            disabled={!post}
            style={{
              width: '100%', padding: '0.9rem', borderRadius: '10px',
              background: post ? 'linear-gradient(135deg, #10B981, #059669)' : 'rgba(16,185,129,0.15)',
              border: 'none', color: 'white', fontWeight: 700, fontSize: '1rem',
              cursor: post ? 'pointer' : 'not-allowed', marginBottom: '1.5rem',
              transition: 'all 0.3s'
            }}
          >
            Calculate My Salary 💰
          </button>

          {salaryResult && (
            <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(16,185,129,0.3)' }}>
              {[
                ['Basic Pay (7th CPC)', salaryResult.basic, false, false],
                ['Dearness Allowance (DA 46%)', salaryResult.da, false, false],
                ['House Rent Allowance (HRA)', salaryResult.hra, false, false],
                ['Transport Allowance (TA)', salaryResult.ta, false, false],
                ['Gross Salary', salaryResult.gross, true, false],
                ['NPS Contribution (10%)', salaryResult.nps, false, true],
                ['Net In-Hand Salary', salaryResult.net, true, false],
              ].map(([label, val, bold, deduct]) => (
                <div key={label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '0.85rem 1.2rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  background: bold ? 'rgba(16,185,129,0.12)' : 'rgba(255,255,255,0.02)'
                }}>
                  <span style={{ color: bold ? '#10B981' : 'rgba(255,255,255,0.75)', fontWeight: bold ? 700 : 400, fontSize: '0.95rem' }}>{label}</span>
                  <span style={{ color: deduct ? '#EF4444' : bold ? '#10B981' : 'white', fontWeight: bold ? 800 : 600, fontSize: bold ? '1.05rem' : '0.95rem' }}>
                    {deduct ? '- ' : ''}₹{val.toLocaleString('en-IN')}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── TOOL 3: Study Planner ── */}
      {activeTab === 'planner' && (
        <div>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1.2rem', textAlign: 'center' }}>
            Enter your exam date and daily study hours — get a subject-wise study plan instantly
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>Your Exam Date</label>
              <input
                type="date"
                value={examDate}
                onChange={e => { setExamDate(e.target.value); setPlanResult(null); }}
                style={{
                  width: '100%', padding: '0.9rem', borderRadius: '10px',
                  background: 'rgba(255,255,255,0.07)', border: '2px solid rgba(245,158,11,0.5)',
                  color: 'white', fontSize: '1rem'
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: '200px' }}>
              <label style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', display: 'block', marginBottom: '0.4rem' }}>
                Daily Study Hours: <strong style={{ color: '#F59E0B' }}>{hoursPerDay} hrs</strong>
              </label>
              <input
                type="range" min="2" max="14" step="1"
                value={hoursPerDay}
                onChange={e => { setHoursPerDay(+e.target.value); setPlanResult(null); }}
                style={{ width: '100%', accentColor: '#F59E0B', marginTop: '0.6rem' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>
                <span>2h</span><span>14h</span>
              </div>
            </div>
          </div>

          <button
            onClick={calcPlan}
            disabled={!examDate}
            style={{
              width: '100%', padding: '0.9rem', borderRadius: '10px',
              background: examDate ? 'linear-gradient(135deg, #F59E0B, #D97706)' : 'rgba(245,158,11,0.15)',
              border: 'none', color: 'white', fontWeight: 700, fontSize: '1rem',
              cursor: examDate ? 'pointer' : 'not-allowed', marginBottom: '1.5rem',
              transition: 'all 0.3s'
            }}
          >
            Generate My Study Plan 📅
          </button>

          {planResult && (
            <div>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {[
                  ['Days Left', planResult.days, '#F59E0B'],
                  ['Total Study Hours', planResult.totalHours, '#FBBF24'],
                ].map(([label, val, col]) => (
                  <div key={label} style={{
                    flex: 1, minWidth: '140px', textAlign: 'center', padding: '1rem',
                    background: `${col}15`, border: `2px solid ${col}40`, borderRadius: '12px'
                  }}>
                    <div style={{ fontSize: '2rem', fontWeight: 800, color: col }}>{val}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginTop: '0.3rem' }}>{label}</div>
                  </div>
                ))}
              </div>
              <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(245,158,11,0.3)' }}>
                <div style={{ padding: '0.7rem 1.2rem', background: 'rgba(245,158,11,0.15)', borderBottom: '1px solid rgba(245,158,11,0.2)' }}>
                  <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem' }}>SUBJECT-WISE HOURS ALLOCATION</span>
                </div>
                {planResult.subjects.map(s => (
                  <div key={s.name} style={{ padding: '0.85rem 1.2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', background: 'rgba(255,255,255,0.02)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                      <span style={{ color: 'white', fontSize: '0.9rem' }}>{s.name}</span>
                      <span style={{ color: '#F59E0B', fontWeight: 700, fontSize: '0.9rem' }}>{s.hours} hrs ({s.pct}%)</span>
                    </div>
                    <div style={{ height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${s.pct}%`, background: 'linear-gradient(90deg, #F59E0B, #FBBF24)', borderRadius: '3px' }} />
                    </div>
                  </div>
                ))}
              </div>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginTop: '1rem', textAlign: 'center' }}>
                * Allocate 30% of total time for revision. Adjust based on your weak areas.
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HomepageTools;
