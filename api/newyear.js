export default function handler(req, res) {
  const now = new Date();
  const nextYear = now.getFullYear() + 1;
  const target = new Date(`January 1, ${nextYear} 00:00:00`);
  const diff = target - now;

  let text;
  if (diff <= 0) {
    text = `🎉 Happy New Year ${nextYear}!`;
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);
    text = `⏳ ${days}d ${hours}h ${minutes}m ${seconds}s until New Year ${nextYear}`;
  }

  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  res.status(200).send(text);
}
