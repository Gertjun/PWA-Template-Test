// =============================================================
//  App-configuratie — geïsoleerde testomgeving PWA-Core
// =============================================================
export const APP = {
  name: 'PWA Core Test',

  // Semver. Bij ELKE release ook VERSION in sw.js gelijk ophogen.
  version: '1.5.0',

  // Unieke prefix: voorkomt botsingen met alle andere PWA's op github.io.
  storagePrefix: 'pwa-core-test',

  // Alleen gebruiken met de afzonderlijke private testdata-repository.
  defaultDataPath: 'pwa-core-test/vault.json',
  defaultBranch: 'main',

  autoLockMinutes: 5,
  autoBiometricUnlock: true,
  syncDelaySeconds: 20,
  minPasswordLength: 12,
  kdfIterations: 600_000,
};
