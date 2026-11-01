/* Global UI: header, mobile menu, reveals, inquiry form, cookie consent. */

const docEl = document.documentElement;
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- header state ---------- */
const header = document.getElementById('site-header');
const setHeaderState = () => header?.classList.toggle('is-solid', window.scrollY > 24);
setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

/* ---------- mobile menu ---------- */
const menuToggle = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const mobileMenu = document.getElementById('mobile-menu');
const menuQuery = window.matchMedia('(max-width: 1024px)');
const labelOpen = menuToggle?.dataset.labelOpen || 'Open menu';
const labelClose = menuToggle?.dataset.labelClose || 'Close menu';

function setMenu(open: boolean) {
  docEl.classList.toggle('menu-open', open);
  menuToggle?.setAttribute('aria-expanded', String(open));
  menuToggle?.setAttribute('aria-label', open ? labelClose : labelOpen);
  mobileMenu?.setAttribute('aria-hidden', String(!open));
  if (open) mobileMenu?.querySelector<HTMLElement>('a')?.focus();
}

menuToggle?.addEventListener('click', () => {
  setMenu(!docEl.classList.contains('menu-open'));
});

mobileMenu?.querySelectorAll('[data-menu-link]').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && docEl.classList.contains('menu-open')) {
    setMenu(false);
    menuToggle?.focus();
  }
});

menuQuery.addEventListener('change', (event) => {
  if (!event.matches) setMenu(false);
});

/* ---------- scroll reveals ---------- */
const reveals = document.querySelectorAll<HTMLElement>('.r');

if (reduceMotion || !('IntersectionObserver' in window)) {
  reveals.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -6% 0px' }
  );
  reveals.forEach((el) => io.observe(el));
}

/* ---------- product videos: play once when visible ---------- */
const autoVideos = document.querySelectorAll<HTMLVideoElement>('video[data-auto-video]');
if (autoVideos.length && !reduceMotion && 'IntersectionObserver' in window) {
  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting && !video.dataset.autoPlayed) {
          video.dataset.autoPlayed = '1';
          const promise = video.play();
          if (promise) promise.catch(() => {});
        } else if (!entry.isIntersecting) {
          video.pause();
        }
      });
    },
    { threshold: 0.5 }
  );
  autoVideos.forEach((video) => videoObserver.observe(video));
}

/* ---------- inquiry form ---------- */
document.querySelectorAll<HTMLFormElement>('form[data-inquiry]').forEach((form) => {
  const status = form.querySelector<HTMLElement>('.form-status');
  const submit = form.querySelector<HTMLButtonElement>('.submit');
  const email = form.dataset.email || '';
  const demo = form.dataset.demo === 'true';
  const endpoint = form.dataset.endpoint || '';
  const msgDemo = form.dataset.msgDemo || `Demo only — this form is not connected yet. Please email ${email}.`;
  const msgSending = form.dataset.msgSending || 'Sending…';
  const msgSuccess = form.dataset.msgSuccess || 'Thank you — your inquiry has been sent. Our team will reply within one business day.';
  const msgError = form.dataset.msgError || `Sorry, the form could not be sent. Please email ${email} directly.`;
  const sendLabel = form.dataset.sendLabel || 'Send inquiry →';

  const say = (message: string, isError = false) => {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle('is-error', isError);
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const honeypot = form.querySelector<HTMLInputElement>('input[name="website"]');
    if (honeypot?.value) return;

    if (demo || !endpoint) {
      say(msgDemo);
      return;
    }

    if (submit) {
      submit.disabled = true;
      submit.textContent = msgSending;
    }
    say('');

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      form.reset();
      say(msgSuccess);
    } catch {
      say(msgError, true);
    } finally {
      if (submit) {
        submit.disabled = false;
        submit.textContent = sendLabel;
      }
    }
  });
});

/* ---------- cookie consent + GA4 ---------- */
type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
};

const CONSENT_KEY = 'ss-cookie-consent';
const banner = document.getElementById('cookie-consent');
const gaId = banner?.dataset.gaId || '';

function loadAnalytics(id: string) {
  if (!id || document.getElementById('ga4-script')) return;
  const w = window as GtagWindow;
  w.dataLayer = w.dataLayer || [];
  w.gtag = w.gtag || ((...args: unknown[]) => {
    w.dataLayer!.push(args);
  });
  w.gtag('js', new Date());
  w.gtag('config', id, { anonymize_ip: true });

  const script = document.createElement('script');
  script.id = 'ga4-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  document.head.appendChild(script);
}

function readConsent(): string | null {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

function writeConsent(value: 'accepted' | 'declined') {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage unavailable */
  }
}

if (banner && gaId) {
  const consent = readConsent();
  if (consent === 'accepted') {
    loadAnalytics(gaId);
  } else if (!consent) {
    window.setTimeout(() => banner.classList.add('is-open'), 900);
  }

  banner.querySelectorAll<HTMLButtonElement>('[data-consent]').forEach((button) => {
    button.addEventListener('click', () => {
      const choice = button.dataset.consent === 'accept' ? 'accepted' : 'declined';
      writeConsent(choice);
      banner.classList.remove('is-open');
      if (choice === 'accepted') loadAnalytics(gaId);
    });
  });
}
