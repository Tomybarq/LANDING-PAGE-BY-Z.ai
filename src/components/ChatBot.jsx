import React, { useState, useRef, useEffect } from 'react'

const INITIAL_MESSAGES = {
  ar: [
    { role: 'bot', text: 'مرحباً! 👋 أنا مساعد غزارة الذكي. كيف يمكنني مساعدتك اليوم؟' }
  ],
  en: [
    { role: 'bot', text: 'Hello! 👋 I\'m Ghazara\'s AI assistant. How can I help you today?' }
  ]
}

const QUICK_REPLIES = {
  ar: ['ما هي خدماتكم؟', 'كيف أبدأ معكم؟', 'ما هي أسعاركم؟', 'أريد التواصل معكم'],
  en: ['What are your services?', 'How do I get started?', 'What are your prices?', 'I want to contact you']
}

const BOT_RESPONSES = {
  ar: {
    'ما هي خدماتكم؟': 'نقدم طيفاً واسعاً من الخدمات الرقمية:\n🤖 تحليلات الذكاء الاصطناعي\n📈 استراتيجيات التسويق المتكاملة\n⚡ أتمتة العمليات التجارية\n🎨 تصميم الهوية البصرية\n📧 أتمتة التسويق عبر البريد\n🔍 تحسين محركات البحث',
    'كيف أبدأ معكم؟': 'الأمر بسيط جداً! 🚀\n1. تواصل معنا عبر واتساب أو نموذج التواصل\n2. نحدد معك احتياجاتك وأهدافك\n3. نضع لك خطة متكاملة\n4. ننفذ ونتابع النتائج معاً\nهل تريد أن أحولك لنموذج التواصل الآن؟',
    'ما هي أسعاركم؟': 'الأسعار تعتمد على طبيعة المشروع وحجمه. 💡\nنقدم باقات مرنة تناسب الشركات الناشئة والكبيرة على حد سواء.\nللحصول على عرض سعر مخصص، تواصل معنا مباشرة وسنرد خلال 24 ساعة.',
    'أريد التواصل معكم': 'يسعدنا التواصل معك! 🤝\n📧 info@ghazara.net\n📱 967783334002+\n💬 أو تواصل معنا عبر واتساب مباشرة',
  },
  en: {
    'What are your services?': 'We offer a wide range of digital services:\n🤖 AI-Powered Analytics\n📈 Integrated Marketing Strategies\n⚡ Business Process Automation\n🎨 Brand & Visual Identity\n📧 Email Marketing Automation\n🔍 SEO Campaigns',
    'How do I get started?': 'It\'s simple! 🚀\n1. Contact us via WhatsApp or the contact form\n2. We identify your needs and goals\n3. We create a tailored plan for you\n4. We execute and track results together\nWant me to take you to the contact form?',
    'What are your prices?': 'Pricing depends on project scope and size. 💡\nWe offer flexible packages for both startups and large enterprises.\nFor a custom quote, contact us directly and we\'ll respond within 24 hours.',
    'I want to contact you': 'We\'d love to connect! 🤝\n📧 info@ghazara.net\n📱 +967 783 334 002\n💬 Or chat with us directly on WhatsApp',
  }
}

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: '4px', padding: '12px 16px', background: 'rgba(108,99,255,0.1)', borderRadius: '18px 18px 18px 4px', width: 'fit-content' }}>
      {[0,1,2].map(i => (
        <div key={i} style={{
          width: 8, height: 8, borderRadius: '50%', background: '#6C63FF',
          animation: 'bounce 1.2s ease-in-out infinite',
          animationDelay: `${i * 0.2}s`
        }} />
      ))}
    </div>
  )
}

export default function ChatBot({ lang }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES[lang])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [unread, setUnread] = useState(1)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    setMessages(INITIAL_MESSAGES[lang])
  }, [lang])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) setUnread(0)
  }, [open])

  const sendMessage = (text) => {
    if (!text.trim()) return
    const userMsg = { role: 'user', text }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setTyping(true)

    setTimeout(() => {
      const responses = BOT_RESPONSES[lang]
      let reply = responses[text]
      if (!reply) {
        reply = lang === 'ar'
          ? 'شكراً على رسالتك! 😊 للحصول على مساعدة متخصصة، يمكنك التواصل معنا مباشرة عبر:\n📧 info@ghazara.net\n💬 واتساب: 967783334002+'
          : 'Thanks for your message! 😊 For specialized help, you can reach us directly:\n📧 info@ghazara.net\n💬 WhatsApp: +967783334002'
      }
      setTyping(false)
      setMessages(prev => [...prev, { role: 'bot', text: reply }])
    }, 1200)
  }

  const T = {
    ar: { title: 'مساعد غزارة', subtitle: 'متصل الآن 🟢', placeholder: 'اكتب رسالتك...', send: 'إرسال' },
    en: { title: 'Ghazara Assistant', subtitle: 'Online now 🟢', placeholder: 'Type your message...', send: 'Send' }
  }[lang]

  return (
    <>
      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-8px); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-10deg); }
          75% { transform: rotate(10deg); }
        }
        .chat-window { animation: slideUp 0.3s ease; }
        .chat-bubble-btn:hover { animation: wiggle 0.4s ease; }
        .msg-user { animation: fadeInUp 0.3s ease; }
        .msg-bot  { animation: fadeInUp 0.3s ease; }
      `}</style>

      {/* Chat Window */}
      {open && (
        <div className="chat-window" style={{
          position: 'fixed', bottom: '100px', right: '24px', zIndex: 9999,
          width: '360px', height: '520px',
          background: '#111111', border: '1px solid rgba(108,99,255,0.3)',
          borderRadius: '24px', overflow: 'hidden',
          boxShadow: '0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(108,99,255,0.1)',
          display: 'flex', flexDirection: 'column'
        }}>
          {/* Header */}
          <div style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>🤖</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 700, fontSize: '15px' }}>{T.title}</div>
              <div style={{ fontSize: '12px', opacity: 0.85 }}>{T.subtitle}</div>
            </div>
            <button onClick={() => setOpen(false)} style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff', width: 32, height: 32, borderRadius: '50%', cursor: 'pointer', fontSize: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>×</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, i) => (
              <div key={i} className={`msg-${msg.role}`} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.role === 'bot' && (
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', marginRight: '8px', flexShrink: 0, alignSelf: 'flex-end' }}>🤖</div>
                )}
                <div style={{
                  maxWidth: '75%', padding: '10px 14px', borderRadius: msg.role === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  background: msg.role === 'user' ? 'linear-gradient(135deg, #6C63FF, #00D4FF)' : 'rgba(255,255,255,0.07)',
                  color: '#fff', fontSize: '14px', lineHeight: 1.7, whiteSpace: 'pre-line', wordBreak: 'break-word'
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {typing && (
              <div style={{ display: 'flex', alignItems: 'flex-end', gap: '8px' }}>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🤖</div>
                <TypingIndicator />
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div style={{ padding: '8px 12px', display: 'flex', gap: '6px', flexWrap: 'wrap', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            {QUICK_REPLIES[lang].map((r, i) => (
              <button key={i} onClick={() => sendMessage(r)} style={{
                background: 'rgba(108,99,255,0.12)', border: '1px solid rgba(108,99,255,0.25)',
                color: '#a09cf7', padding: '5px 10px', borderRadius: '20px', cursor: 'pointer',
                fontSize: '12px', transition: 'all 0.2s ease', whiteSpace: 'nowrap'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.25)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(108,99,255,0.12)'; e.currentTarget.style.color = '#a09cf7' }}>
                {r}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
              placeholder={T.placeholder}
              style={{ flex: 1, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '20px', padding: '10px 16px', color: '#fff', fontSize: '14px', outline: 'none', fontFamily: 'inherit' }}
              onFocus={e => e.target.style.borderColor = 'rgba(108,99,255,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
            <button onClick={() => sendMessage(input)}
              style={{ background: 'linear-gradient(135deg, #6C63FF, #00D4FF)', border: 'none', color: '#fff', width: 40, height: 40, borderRadius: '50%', cursor: 'pointer', fontSize: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        className="chat-bubble-btn"
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: 60, height: 60, borderRadius: '50%',
          background: 'linear-gradient(135deg, #6C63FF, #00D4FF)',
          border: 'none', cursor: 'pointer', fontSize: '26px',
          boxShadow: '0 8px 32px rgba(108,99,255,0.5)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease'
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(108,99,255,0.7)' }}
        onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(108,99,255,0.5)' }}>
        {open ? '×' : '💬'}
        {!open && unread > 0 && (
          <div style={{ position: 'absolute', top: -4, right: -4, width: 20, height: 20, background: '#FF6B6B', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 700, color: '#fff', border: '2px solid #0a0a0a' }}>
            {unread}
          </div>
        )}
      </button>
    </>
  )
}
