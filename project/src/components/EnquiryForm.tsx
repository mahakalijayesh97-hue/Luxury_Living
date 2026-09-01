import { useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitLead, type LeadSource } from '@/lib/api';
import { CONFIGS, PROJECT } from '@/lib/content';

interface EnquiryFormProps {
  source: LeadSource;
  variant?: 'card' | 'inline' | 'compact';
  showConfig?: boolean;
  title?: string;
  subtitle?: string;
}

// const CONFIGS = ['2 BHK', '3 BHK', 'Both', 'Not Sure'];

export default function EnquiryForm({
  source,
  variant = 'card',
  showConfig = true,
  title = 'Book Your Free Site Visit',
  subtitle = 'Our team will get back to you within 24 hours',
}: EnquiryFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [config, setConfig] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    setStatus('idle');
    setErrorMsg('');

    const result = await submitLead({ name, phone, email, configuration: config, source });

    if (result.success) {
      setStatus('success');
      setName('');
      setPhone('');
      setEmail('');
      setConfig('');
    } else {
      setStatus('error');
      setErrorMsg(result.error || 'Something went wrong. Please try again.');
    }
    setLoading(false);
  }

  const isCompact = variant === 'compact';

  if (status === 'success') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${isCompact ? 'py-8' : 'py-12'}`}>
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <CheckCircle2 className="w-9 h-9 text-green-600" />
        </div>
        <h3 className="font-display text-2xl text-ink mb-2">Thank You!</h3>
        <p className="text-ink-muted max-w-xs">
          Your enquiry has been received. Our sales team will contact you within 24 hours to schedule your free site visit.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-royal-600 font-semibold hover:underline"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-cloud-300 bg-white text-ink placeholder:text-ink-muted/60 focus:outline-none focus:ring-2 focus:ring-royal-300 focus:border-royal-400 transition-all text-sm';

  return (
    <form onSubmit={handleSubmit} className={variant === 'card' ? 'glass-dark rounded-3xl p-6 shadow-premium-lg' : ''}>
      {variant === 'card' && (
        <div className="mb-5 text-center">
          <h3 className="font-display text-xl text-ink mb-1">{title}</h3>
          <p className="text-sm text-ink-muted">{subtitle}</p>
        </div>
      )}

      <div className="space-y-3">
        <input
          type="text"
          required
          placeholder="Your Name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClass}
          aria-label="Your name"
        />
        <input
          type="tel"
          required
          pattern="[0-9+\s]{10,15}"
          placeholder="Phone Number *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={inputClass}
          aria-label="Phone number"
        />
        {!isCompact && (
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            aria-label="Email address"
          />
        )}
        {showConfig && (
          <select
            value={config}
            onChange={(e) => setConfig(e.target.value)}
            className={inputClass}
            aria-label="Preferred configuration"
          >
            <option value="">Preferred Configuration</option>
            {CONFIGS.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        )}
      </div>

      {status === 'error' && (
        <div className="mt-3 flex items-center gap-2 text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full mt-4 disabled:opacity-60"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          'Book Free Site Visit'
        )}
      </button>

      <p className="mt-3 text-center text-xs text-ink-muted">
        By submitting, you agree to be contacted by {PROJECT.builder} regarding this enquiry.
      </p>
    </form>
  );
}
