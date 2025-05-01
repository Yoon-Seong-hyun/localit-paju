export default async function handler(event) {
  const query = '파주 농산물';

  const res = await fetch(`https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query)}`, {
    headers: {
      'X-Naver-Client-Id': '🔑여기에_오빠의_Client_ID',
      'X-Naver-Client-Secret': '🔒여기에_오빠의_Client_Secret'
    }
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}
