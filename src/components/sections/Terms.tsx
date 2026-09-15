export function Terms() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold text-brand-neutral-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-brand-neutral-500">Last updated: {new Date().getFullYear()}</p>
        <div className="prose prose-sm mt-8 max-w-none text-brand-neutral-700">
          <p>By using FeeCollect you agree to these terms. The platform is provided as a cloud service with SLAs defined in your order form.</p>
          <h2 className="mt-6 text-lg font-semibold text-brand-neutral-900">Acceptable use</h2>
          <p>Do not misuse the service or attempt to access data without authorization.</p>
          <h2 className="mt-6 text-lg font-semibold text-brand-neutral-900">Contact</h2>
          <p>Questions? <a href="mailto:legal@feecollect.io" className="underline">legal@feecollect.io</a></p>
        </div>
      </div>
    </section>
  );
}
