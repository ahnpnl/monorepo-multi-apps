import type { RequestHandler } from '@builder.io/qwik-city';

export const onRequest: RequestHandler = ({ redirect, params }) => {
    throw redirect(302, `/en/${params.lang}/`);
};
