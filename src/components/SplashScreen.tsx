/**
 * Opening animation (first visit per browser session).
 * Pure CSS: it fades itself out even if JavaScript fails, and an inline
 * script in <head> skips it on later page loads in the same session.
 */
export const splashBootScript = `(function(){try{var d=document.documentElement;if(sessionStorage.getItem('bmf-splash')){d.classList.add('bmf-seen');}else{sessionStorage.setItem('bmf-splash','1');setTimeout(function(){d.classList.add('bmf-seen');},1700);}}catch(e){document.documentElement.classList.add('bmf-seen');}})();`;

export function SplashScreen() {
  return (
    <div className="bmf-splash" aria-hidden="true">
      <div className="bmf-splash__inner">
        <div className="bmf-splash__mark">
          <svg className="bmf-splash__ring" viewBox="0 0 66 66" aria-hidden="true">
            <defs>
              <linearGradient id="bmf-splash-gradient">
                <stop offset="50%" stopColor="#fff" stopOpacity="1" />
                <stop offset="65%" stopColor="#fff" stopOpacity=".5" />
                <stop offset="100%" stopColor="#fff" stopOpacity="0" />
              </linearGradient>
            </defs>
            <circle cx="33" cy="33" r="30" fill="transparent" strokeWidth="1.5" stroke="url(#bmf-splash-gradient)" />
          </svg>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="bmf-splash__logo" src="/images/brand/logo-mark-white.png" alt="" width={56} height={52} />
        </div>
        <span className="bmf-splash__word">BookMyFlight</span>
      </div>
    </div>
  );
}
