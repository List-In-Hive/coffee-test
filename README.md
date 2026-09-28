# Daily Cup — test website

A minimal fictional coffee website using the Flowers blog format. No real business, orders, payments or contact form. Search indexing is disabled.

Use Node.js 24, run `npm ci`, then `npm run dev`. Open http://127.0.0.1:3200.

Run `npm run build` for a production build and `npm start` to preview it locally. The build generates the publication manifest used to verify blog publication.

Repository: https://github.com/List-In-Hive/coffee-test

Add this repository manually in the admin panel using its GitHub URL. Review the imported project settings before enabling automatic blog creation. The website must be deployed and its public URL configured before automatic publication can be enabled.

Blog articles live in `content/blog`; images live in `public/images`. No remote deployment is included in this repository setup. Search indexing remains disabled for this test website.

On Netlify, canonical URLs and social metadata automatically use the primary site address supplied by the hosting platform (`URL`). No manual `SITE_URL` is needed. Rebuild after changing the primary domain. Outside Netlify, `SITE_URL` remains an optional override. Preview deployments remain excluded from indexing.
