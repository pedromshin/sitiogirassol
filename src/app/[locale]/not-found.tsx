import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-display text-accent-gold mb-4">404</h1>
      <h2 className="text-xl md:text-2xl font-display text-white mb-2">
        Página não encontrada
      </h2>
      <p className="text-white/60 mb-8 max-w-md">
        A página que você procura não existe ou foi movida. Volte para a página inicial do Sítio Girassol.
      </p>
      <Link
        href="/pt"
        className="px-8 py-3 rounded-full font-bold bg-warm-gold text-forest-dark hover:opacity-90 transition"
      >
        Voltar ao início
      </Link>
    </div>
  );
}
