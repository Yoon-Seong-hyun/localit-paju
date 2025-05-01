import fetch from 'node-fetch';

export default async function handler(event) {
  const query = '파주 농산물';

  const res = await fetch(`https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query)}`, {
    headers: {
      'X-Naver-Client-Id': '오빠의_클라이언트_ID',
      'X-Naver-Client-Secret': '오빠의_클라이언트_SECRET'
    }
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  };
}
