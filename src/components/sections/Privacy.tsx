export function Privacy() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-brand-neutral-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-brand-neutral-500">Last updated: {new Date().getFullYear()}</p>
        <div className="prose prose-sm mt-8 max-w-none text-brand-neutral-700">
          <p>FeeCollect respects your privacy. We collect only what we need to provide the service — institution details, contact information, and usage analytics with consent.</p>
          <h2 className="mt-6 text-lg font-semibold text-brand-neutral-900">Data we collect</h2>
          <ul className="list-disc pl-5"><li>Contact form submissions</li><li>Usage analytics (if consented)</li><li>Support correspondence</li></ul>
          <h2 className="mt-6 text-lg font-semibold text-brand-neutral-900">Your rights</h2>
          <p>Request export or deletion at <a href="mailto:privacy@feecollect.io" className="underline">privacy@feecollect.io</a>.</p>
        </div>
      </div>
    </section>
  );
}
