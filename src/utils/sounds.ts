// Simple Web Audio API sounds - no backend needed!

let audioContext: AudioContext | null = null;

const getAudioContext = () => {
  if (!audioContext) {
    audioContext = new AudioContext();
  }
  return audioContext;
};

// Cute sparkle/chime sound for YES
export const playYesSound = () => {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  // Create a series of ascending notes for a magical chime
  const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
  
  notes.forEach((freq, i) => {
    const oscillator = ctx.createOscillator();
    const gainNode = ctx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(ctx.destination);
    
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(freq, now + i * 0.1);
    
    gainNode.gain.setValueAtTime(0, now + i * 0.1);
    gainNode.gain.linearRampToValueAtTime(0.3, now + i * 0.1 + 0.05);
    gainNode.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.4);
    
    oscillator.start(now + i * 0.1);
    oscillator.stop(now + i * 0.1 + 0.5);
  });

  // Add a final sparkle
  setTimeout(() => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = "sine";
    osc.frequency.setValueAtTime(1318.51, ctx.currentTime); // E6
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
    osc.start();
    osc.stop(ctx.currentTime + 0.3);
  }, 400);
};

// Playful "boing" sound for NO button escape
export const playNoEscapeSound = () => {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = "sine";
  
  // Bouncy frequency sweep
  oscillator.frequency.setValueAtTime(300, now);
  oscillator.frequency.exponentialRampToValueAtTime(150, now + 0.1);
  oscillator.frequency.exponentialRampToValueAtTime(400, now + 0.15);
  oscillator.frequency.exponentialRampToValueAtTime(200, now + 0.25);

  gainNode.gain.setValueAtTime(0.3, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

  oscillator.start(now);
  oscillator.stop(now + 0.3);
};

// Cat meow-like sound
export const playCatSound = () => {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = "sine";
  
  // Meow-like frequency curve
  oscillator.frequency.setValueAtTime(600, now);
  oscillator.frequency.exponentialRampToValueAtTime(900, now + 0.1);
  oscillator.frequency.exponentialRampToValueAtTime(500, now + 0.2);

  gainNode.gain.setValueAtTime(0.2, now);
  gainNode.gain.linearRampToValueAtTime(0.25, now + 0.1);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.25);

  oscillator.start(now);
  oscillator.stop(now + 0.3);
};

// Pop sound
export const playPopSound = () => {
  const ctx = getAudioContext();
  const now = ctx.currentTime;

  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(400, now);
  oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);

  gainNode.gain.setValueAtTime(0.4, now);
  gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);

  oscillator.start(now);
  oscillator.stop(now + 0.15);
};
