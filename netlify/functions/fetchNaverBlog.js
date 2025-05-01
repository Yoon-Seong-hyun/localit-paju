// fetchNaverBlog.js
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "블로그 API 연결 성공!" }),
  };
};
