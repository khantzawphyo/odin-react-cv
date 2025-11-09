import { AnimatedLink } from "@components/ui";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-24 text-center">
      <h1 className="font-display mb-4 text-6xl font-extrabold">404</h1>
      <p className="mb-2 text-xl font-medium text-neutral-700">
        Page not found.
      </p>
      <p className="mb-8 text-neutral-600">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <div>
        <AnimatedLink to="/">Go Back Home</AnimatedLink>
      </div>
    </div>
  );
}
