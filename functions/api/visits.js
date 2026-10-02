// Optional: Cloudflare Pages Function for the visit counter.
// Bind a KV namespace named VISITS (Pages > Settings > Functions > KV bindings).
// Without it, /api/visits fails and the page simply hides every counter.
export async function onRequestGet({ request, env }) {
  const h = { 'content-type': 'application/json', 'cache-control': 'no-store' };
  const kv = env.VISITS;
  if (!kv) return new Response('{"error":"no kv binding"}', { status: 503, headers: h });
  const day = 'd:' + new Date().toISOString().slice(0, 10);
  const hit = new URL(request.url).searchParams.get('hit') === '1';
  let total = +(await kv.get('total')) || 0, today = +(await kv.get(day)) || 0;
  if (hit) {
    total++; today++;
    await Promise.all([kv.put('total', String(total)), kv.put(day, String(today), { expirationTtl: 172800 })]);
  }
  return new Response(JSON.stringify({ total, today }), { headers: h });
}
