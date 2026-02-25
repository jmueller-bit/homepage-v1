// Telegram Notifications
const TELEGRAM_BOT_TOKEN = import.meta.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = import.meta.env.TELEGRAM_CHAT_ID;

export async function sendTelegramNotification(message: string): Promise<boolean> {
  if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
    console.log('Telegram not configured, skipping notification');
    return false;
  }

  try {
    const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message,
        parse_mode: 'HTML',
      }),
    });

    return response.ok;
  } catch (error) {
    console.error('Failed to send Telegram notification:', error);
    return false;
  }
}

export function formatNewsNotification(title: string, slug: string, excerpt: string): string {
  const url = `https://astrid-lindgren-zentrum.at/news/${slug}`;
  return `📰 <b>Neue News im ALZ</b>

<b>${title}</b>

${excerpt.substring(0, 200)}${excerpt.length > 200 ? '...' : ''}

→ <a href="${url}">Zum Artikel</a>
  `.trim();
}
