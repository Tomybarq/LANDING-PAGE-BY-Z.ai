import React from 'react'

export default function About({ lang }) {
  const values = lang === 'ar'
    ? [{ icon: '💡', t: 'الابتكار' }, { icon: '🎯', t: 'النتائج الملموسة' }, { icon: '🤝', t: 'الشراكة الحقيقية' }, { icon: '⭐', t: 'أعلى جودة' }]
    : [{ icon: '💡', t: 'Innovation' }, { icon: '🎯', t: 'Measurable Results' }, { icon: '🤝', t: 'True Partnership' }, { icon: '⭐', t: 'Highest Quality' }]

  return (
    <section id="about" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '24px' }}>
              {lang === 'ar' ? 'تعرف علينا' : 'Get to Know Us'}
            </h2>
            <p style={{ color: '#888', lineHeight: 1.9, fontSize: '16px', marginBottom: '24px' }}>
              {lang === 'ar'
                ? 'غزارة هي شركة رائدة في الحلول الرقمية المدعومة بالذكاء الاصطناعي، نعمل جنباً إلى جنب مع عملائنا لتحقيق أهدافهم وتحويل أفكارهم إلى واقع ملموس.'
                : 'Ghazara is a leading AI-powered digital solutions company. We work side by side with our clients to achieve their goals and turn ideas into measurable reality.'}
            </p>
            <p style={{ color: '#888', lineHeight: 1.9, fontSize: '16px', marginBottom: '40px' }}>
              {lang === 'ar'
                ? 'نؤمن بأن النمو المستدام يأتي من خلال الجمع بين الإبداع والتقنية والاستراتيجية المدروسة. نسعى دائماً لتقديم أعلى جودة في كل مشروع.'
                : 'We believe sustainable growth comes from combining creativity, technology, and thoughtful strategy. We always strive to deliver the highest quality in every project.'}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {values.map((v, i) => (
                <div key={i} style={{ background: 'rgba(108,99,255,0.08)', border: '1px solid rgba(108,99,255,0.2)', borderRadius: '12px', padding: '16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '24px' }}>{v.icon}</span>
                  <span style={{ fontWeight: 600 }}>{v.t}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" alt="Team" style={{ width: '100%', borderRadius: '20px', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', bottom: '-20px', left: '20px', background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', borderRadius: '16px', padding: '20px 28px' }}>
              <div style={{ fontSize: '32px', fontWeight: 900 }}>+50</div>
              <div style={{ fontSize: '14px', opacity: 0.9 }}>{lang === 'ar' ? 'عميل سعيد' : 'Happy Clients'}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
