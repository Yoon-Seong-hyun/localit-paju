import fetch from 'node-fetch';

export default async function handler(event) {
  const query = '파주 농산물';

  const res = await fetch(`https://openapi.naver.com/v1/search/blog?query=${encodeURIComponent(query)}`, {
    headers: {
      'X-Naver-Client-Id': 'sRWrVGzhjIf_XQin0piV',
      'X-Naver-Client-Secret': 'dzYfIaHzKM'
    }
  });

  const data = await res.json();

  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  };
}
