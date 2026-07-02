import { Button } from "../shared/ui/Button";

export const NotFoundPage = () => (
  <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4">
    <div className="max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
        404
      </p>
      <h1 className="mt-3 text-2xl font-semibold text-slate-900">
        Page not found
      </h1>
      <p className="mt-2 text-sm text-slate-600">
        The page you are looking for does not exist or may have moved.
      </p>
      <div className="mt-6 flex justify-center">
        <Button
          className = 'text-sm'
          label="Go back home"
          variant="link"
          onClick={() => (window.location.href = "/")}
        />
      </div>
    </div>
  </div>
);

export default NotFoundPage;
