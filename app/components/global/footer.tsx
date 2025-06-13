export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Medica - Your AI-powered medical research assistant
          </p>
          <p className="mt-2 text-sm text-gray-400">
            © {new Date().getFullYear()} Medica. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
