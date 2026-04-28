export async function onRequest(context) {
  const url = new URL(context.request.url);

  if (url.hostname === 'emd-gummy-sommeil.pages.dev') {
    url.hostname = 'gummy-sommeil.fr';
    return Response.redirect(url.toString(), 301);
  }

  return context.next();
}
