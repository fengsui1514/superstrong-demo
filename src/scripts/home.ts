/* Home-only motion: preloader, logo dock, model switching, cursor, tilt. */

const experienceEl = document.getElementById('experience');
if (experienceEl) {
  const experience = experienceEl;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const skipIntro = document.documentElement.classList.contains('intro-skip');

  const preloader = document.getElementById('preloader');
  const counter = document.getElementById('counter');
  const countEl = document.getElementById('count');
  const logo = document.getElementById('logo');
  const titleEl = document.getElementById('hero-title');
  const factsEl = document.getElementById('hero-facts');
  const nowNo = document.getElementById('now-no');
  const nowName = document.getElementById('now-name');
  const specLink = document.getElementById('hero-spec-link') as HTMLAnchorElement | null;
  const portal = document.getElementById('portal');
  const switchLabel = portal?.dataset.switchLabel || 'Switch to';
  const portalWrap = document.getElementById('portal-wrap');
  const modelList = document.getElementById('model-list');
  const videoEls = Array.from(experience.querySelectorAll<HTMLVideoElement>('.portal video'));
  const modelButtons = Array.from(experience.querySelectorAll<HTMLButtonElement>('.model-item[data-key]'));

  let current = experience.dataset.model || 'cs115';
  let busy = false;
  let introDone = false;

  /* ---------- intro ---------- */
  function finishIntro(): void {
    if (introDone) return;
    introDone = true;
    counter?.classList.add('is-leaving');
    logo?.classList.add('is-docked');
    document.documentElement.classList.add('intro-ready');
    document.body.classList.add('intro-ready');
    preloader?.classList.add('is-fading');

    if (skipIntro) {
      preloader?.remove();
    } else {
      experience.classList.add('content-revealing');
      window.setTimeout(() => preloader?.remove(), 1000);
    }

    playActiveVideo();

    try {
      sessionStorage.setItem('ss-intro', '1');
    } catch {
      /* storage unavailable */
    }
  }

  function runCounter(): void {
    const start = performance.now();
    const duration = 1500;
    const frame = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      if (countEl) countEl.textContent = String(Math.round(eased * 100));
      if (t < 1) requestAnimationFrame(frame);
      else finishIntro();
    };
    requestAnimationFrame(frame);
  }

  document.getElementById('skip')?.addEventListener('click', finishIntro);

  if (skipIntro || reduce) {
    finishIntro();
  } else {
    runCounter();
  }

  /* ---------- video ---------- */
  function playActiveVideo(): void {
    videoEls.forEach((video) => {
      if (video.classList.contains('is-on')) {
        const promise = video.play();
        if (promise) promise.catch(() => {});
      } else {
        video.pause();
      }
    });
  }

  const preloaderVideo = document.querySelector<HTMLVideoElement>('#preloader video');
  if (preloaderVideo) {
    const promise = preloaderVideo.play();
    if (promise) promise.catch(() => {});
  }

  playActiveVideo();

  /* ---------- model switching ---------- */
  function switchTo(key: string): void {
    if (busy || key === current) return;
    const button = modelButtons.find((item) => item.dataset.key === key);
    const template = document.querySelector<HTMLTemplateElement>(`template[data-facts="${key}"]`);
    if (!button || !template || !factsEl) return;

    busy = true;
    experience.classList.add('is-switching');

    videoEls.forEach((video) => video.classList.toggle('is-on', video.dataset.key === key));
    playActiveVideo();

    modelButtons.forEach((item) => item.classList.toggle('active', item.dataset.key === key));
    if (modelList) {
      modelList.classList.remove('is-switching');
      void modelList.offsetWidth;
      modelList.classList.add('is-switching');
    }

    current = key;
    experience.dataset.model = key;

    factsEl.replaceChildren(template.content.cloneNode(true));
    if (titleEl) titleEl.textContent = button.dataset.name || '';
    if (nowNo) nowNo.textContent = button.dataset.no || '';
    if (nowName) nowName.textContent = button.dataset.name || '';
    if (specLink && button.dataset.href) specLink.href = button.dataset.href;
    portal?.setAttribute('aria-label', `${switchLabel} ${button.dataset.next || ''}`.trim());

    experience.classList.remove('content-revealing');
    void experience.offsetWidth;
    experience.classList.add('content-revealing');

    window.setTimeout(() => {
      experience.classList.remove('is-switching');
      busy = false;
    }, 700);
  }

  portal?.addEventListener('click', () => {
    const index = modelButtons.findIndex((item) => item.dataset.key === current);
    const next = modelButtons[(index + 1) % modelButtons.length];
    if (next) switchTo(next.dataset.key || '');
  });

  modelList?.addEventListener('click', (event) => {
    const target = (event.target as HTMLElement).closest<HTMLButtonElement>('.model-item[data-key]');
    if (!target || target.classList.contains('soon')) return;
    switchTo(target.dataset.key || '');
  });

  /* ---------- custom cursor ---------- */
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const cursorEl = document.getElementById('cursor');
  const cursorLabel = document.getElementById('cursor-label');
  const cursorDefault = cursorLabel?.textContent?.trim() || 'View';

  if (finePointer && !reduce && cursorEl) {
    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;
    let seen = false;

    document.addEventListener('pointermove', (event) => {
      tx = event.clientX;
      ty = event.clientY;
      if (!seen) {
        seen = true;
        cx = tx;
        cy = ty;
        cursorEl.classList.add('is-visible');
      }
    });

    document.addEventListener('mouseleave', () => {
      seen = false;
      cursorEl.classList.remove('is-visible');
    });

    document.querySelectorAll<HTMLElement>('[data-cursor]').forEach((el) => {
      el.addEventListener('pointerenter', () => {
        if (cursorLabel) cursorLabel.textContent = el.dataset.cursor || cursorDefault;
        cursorEl.classList.add('is-enter');
      });
      el.addEventListener('pointerleave', () => cursorEl.classList.remove('is-enter'));
    });

    const cursorLoop = () => {
      cx += (tx - cx) * 0.2;
      cy += (ty - cy) * 0.2;
      cursorEl.style.transform = `translate3d(${cx}px,${cy}px,0)`;
      requestAnimationFrame(cursorLoop);
    };
    requestAnimationFrame(cursorLoop);
  }

  /* ---------- pointer tilt ---------- */
  if (finePointer && !reduce && portalWrap) {
    let rx = 0;
    let ry = 0;
    let trx = 0;
    let tryX = 0;

    document.addEventListener('pointermove', (event) => {
      trx = (event.clientY / window.innerHeight - 0.5) * -9;
      tryX = (event.clientX / window.innerWidth - 0.5) * 9;
    });

    document.addEventListener('pointerleave', () => {
      trx = 0;
      tryX = 0;
    });

    const tiltLoop = () => {
      if (window.innerWidth < 900) {
        if (portalWrap.style.transform) portalWrap.style.transform = '';
        requestAnimationFrame(tiltLoop);
        return;
      }
      rx += (trx - rx) * 0.07;
      ry += (tryX - ry) * 0.07;
      portalWrap.style.transform = `translate(-50%,-54%) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg)`;
      requestAnimationFrame(tiltLoop);
    };
    requestAnimationFrame(tiltLoop);
  }
}
