import { Component, type ReactNode } from "react";
import { Button } from "./ui/Button";

type Props = { children: ReactNode };
type State = { hasError: boolean; error?: Error };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    // In production, report to analytics / Sentry
    console.error("ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-2xl font-bold text-brand-neutral-900">Something went wrong</h1>
          <p className="mt-2 text-sm text-brand-neutral-600">Please refresh the page or contact support.</p>
          <Button className="mt-6" onClick={() => this.setState({ hasError: false })}>Try Again</Button>
          {import.meta.env.DEV && this.state.error && (
            <pre className="mt-6 max-w-2xl overflow-auto rounded-xl border border-brand-neutral-200 bg-brand-neutral-50 p-4 text-left text-xs text-brand-neutral-700">
              {this.state.error.message}
            </pre>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}
