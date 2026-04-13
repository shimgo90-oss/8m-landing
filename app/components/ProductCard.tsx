type ProductCardProps = {
  imageUrl?: string;
  title: string;
  subtitle: string;
  price: string;
  rating: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
};

export default function ProductCard({
  imageUrl,
  title,
  subtitle,
  price,
  rating,
  ctaLabel = "장바구니 담기",
  onCtaClick,
}: ProductCardProps) {
  return (
    <div className="w-[280px] bg-white rounded-2xl shadow-[0_4px_16px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-3">
      <div
        className="w-full h-[248px] rounded-xl bg-neutral-100 bg-cover bg-center"
        style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : undefined}
      />
      <h3 className="text-base font-semibold text-neutral-900">{title}</h3>
      <p className="text-[13px] text-neutral-500 -mt-2">{subtitle}</p>
      <div className="flex items-center justify-between">
        <span className="text-xl font-bold text-indigo-600">{price}</span>
        <span className="text-sm text-neutral-500">★ {rating}</span>
      </div>
      <button
        onClick={onCtaClick}
        className="w-full py-3 bg-indigo-600 text-white text-sm font-semibold rounded-full hover:bg-indigo-500 active:scale-95 transition-all"
      >
        {ctaLabel}
      </button>
    </div>
  );
}
