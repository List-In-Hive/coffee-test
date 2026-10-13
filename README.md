# Daily Cup — Coffee test website

A small fictional coffee website using the same Markdown publishing contract as Flowers. No real business, orders, payments or enquiry form. Search indexing is disabled.

Repository: [List-In-Hive/coffee-test](https://github.com/List-In-Hive/coffee-test). Test deployment: [coffeic.netlify.app](https://coffeic.netlify.app/).

## Local development

Use Node.js 24 (or a compatible version satisfying package.json):

```bash
npm ci
npm run dev
```

Open http://127.0.0.1:3200. Run `npm run build`, then `npm start` for a local production preview. Available checks are `npm run lint` and `npm run typecheck`.

## Content and publishing

Pages include Home, About, Coffee, Contact and Blog. Contact is informational: it does not submit messages. Business identity is in `config/site.ts`, articles in `content/blog` and local WebP images in `public/images`.

Article frontmatter requires title, slug, description, quoted ISO publishedAt with timezone, status (`draft` or `published`), coverImage and coverAlt. The body is Markdown. Slugs use lowercase letters, numbers and hyphens. Use only assets that exist. Draft and future articles are excluded from public routes and lists. Additional article photos use Markdown image syntax; the cover is rendered once separately.

The build runs `scripts/publication-manifest.ts` through `prebuild`, generating the public manifest with commit, deploy ID, context and article hashes. `lib/publication.ts` and the article's `data-publication-hash` share the admin's hash contract. Do not remove these when changing the design. The current admin verifier requires the exact article commit; a newer unrelated deployment can leave an earlier article pending verification.

## Deploy to Netlify

Import this repository, leave the base directory empty, use build command `npm run build` and publish directory `.next`. Keep the automatic Next.js adapter. The repository declares its supported Node range in package.json. For an exact version without a dashboard variable, add a `.nvmrc` containing `24` before deployment.

On Netlify, canonical and social metadata use its built-in `URL` for the primary domain. No manual SITE_URL is needed. Rebuild after a primary-domain change. Outside Netlify, SITE_URL is an optional override. Keep this fictional test site and previews excluded from indexing.

See [Netlify Next.js setup](https://docs.netlify.com/build/frameworks/framework-setup-guides/nextjs/overview/) and [build environment variables](https://docs.netlify.com/build/configure-builds/environment-variables/).

## Add to Inspirovate Admin

Set the live URL in the GitHub repository's About section, then paste the repository URL in **All projects → Add project**. The admin can use a paid AI request to suggest a profile. Grant its server token Contents read/write for this repository. Review the imported setup and live URL; automation starts off.

Use **Blog rules & settings** for business facts, active article rules, enabled Knowledge and Blog library. Default new-article format is 2 photos, 3 external and 3 internal links; existing drafts retain their earlier format snapshot. Confirm website setup and verify a test publication before enabling the Calendar.

The shared **Documentation** section in the admin sidebar contains the reusable website-building prompt and exact publishing requirements. For a real contact form, implement both the visible form and static Netlify definition as that guide specifies, then test a deployed submission. This test repository has no form to activate.
