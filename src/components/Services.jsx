import React from 'react'

const services = {
  ar: [
    { icon: '🤖', title: 'تحليلات مدعومة بالذكاء الاصطناعي', desc: 'نحوّل بياناتك إلى قرارات استراتيجية باستخدام أحدث تقنيات الذكاء الاصطناعي.' },
    { icon: '📈', title: 'استراتيجيات تسويق متكاملة', desc: 'حملات تسويقية شاملة تجمع بين SEO والإعلانات المدفوعة وإدارة السوشيال ميديا.' },
    { icon: '⚡', title: 'أتمتة العمليات التجارية', desc: 'نُحوّل عملياتك اليدوية إلى أنظمة ذكية تعمل على مدار الساعة.' },
    { icon: '🎨', title: 'تصميم الهوية البصرية', desc: 'هوية بصرية متكاملة تعكس قيم علامتك التجارية وتميّزها في السوق.' },
    { icon: '📧', title: 'أتمتة التسويق عبر البريد الإلكتروني', desc: 'حملات بريد إلكتروني مؤتمتة وشخصية تحقق معدلات تحويل عالية.' },
    { icon: '🔍', title: 'حملات تحسين محركات البحث', desc: 'نضع علامتك التجارية في مقدمة نتائج البحث وأمام جمهورك المستهدف.' },
  ],
  en: [
    { icon: '🤖', title: 'AI-Powered Analytics', desc: 'Turn your data into strategic decisions using cutting-edge AI technology.' },
    { icon: '📈', title: 'Integrated Marketing Strategies', desc: 'Comprehensive campaigns combining SEO, paid ads, and social media management.' },
    { icon: '⚡', title: 'Business Process Automation', desc: 'Transform manual operations into intelligent systems that work around the clock.' },
    { icon: '🎨', title: 'Brand & Visual Identity', desc: 'Complete visual identity that reflects your brand values and differentiates you in the market.' },
    { icon: '📧', title: 'Email Marketing Automation', desc: 'Automated, personalized email campaigns that achieve high conversion rates.' },
    { icon: '🔍', title: 'SEO Campaigns', desc: 'Position your brand at the top of search results and in front of your target audience.' },
  ]
}

export default function Services({ lang }) {
  const T = services[lang]
  return (
    <section id="services" style={{ padding: '100px 0', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, marginBottom: '16px' }}>
            {lang === 'ar' ? 'خدماتنا' : 'Our Services'}
          </h2>
          <p style={{ color: '#888', fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
            {lang === 'ar' ? 'نقدم حلولاً رقمية متكاملة لتحقيق النمو المستدام' : 'Comprehensive digital solutions for sustainable growth'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {T.map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px', padding: '32px', transition: 'all 0.3s ease', cursor: 'default'
            }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.08)'; e.currentTarget.style.borderColor = 'rgba(108,99,255,0.3)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.transform = 'translateY(0)' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{s.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>{s.title}</h3>
              <p style={{ color: '#888', lineHeight: 1.7, fontSize: '15px' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
