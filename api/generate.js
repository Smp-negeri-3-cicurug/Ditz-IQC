export const config = {
  runtime: "edge",
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "Hello iPhone Quote";

  // API eksternal untuk buat gambar
  const imageUrl = `https://api.sxtream.xyz/maker/iqc?text=${encodeURIComponent(text)}`;

  const response = await fetch(imageUrl);

  return new Response(response.body, {
    status: 200,
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
