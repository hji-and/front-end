interface ContentSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  list?: string[];
}

export function ContentSection({ title, subtitle, description, list }: ContentSectionProps) {
  return (
    <section className="ml-80 bg-white px-16 py-20">
      <div className="max-w-4xl">
        {subtitle && (
          <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
        )}
        <h3 className="text-3xl mb-6">{title}</h3>
        <p className="text-gray-600 leading-relaxed mb-8">
          {description}
        </p>
        {list && (
          <div className="grid grid-cols-2 gap-4">
            {list.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#00d9c0]"></div>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
