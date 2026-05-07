type VisionItem = {
  icon: string;
  title: string;
  subtitle: string;
  text: string;
  description: string;
  verse: string;
};

const visionItems: VisionItem[] = [
  {
    icon: "✦",
    title: "Vision",
    subtitle: "ビジョン",
    text: "すべての民族とともに、王なるイエス様を賛美する。",
    description: "世界中のすべての人と共に、希望の神であるイエス様に歌う日を夢見ています。",
    verse: "ハバクク 2:14 / 黙示録 5:13 / 黙示録 7:9-12",
  },
  {
    icon: "✦",
    title: "Mission",
    subtitle: "ミッション",
    text: "すべての民族に福音を届け、イエス様の弟子とする。",
    description: "イエス様の愛を世界中に届け、共にその愛の中を歩む仲間を増やしていきます。",
    verse: "イザヤ 49:6 / マタイ 28:18-20 / マタイ 24:14 / マルコ 16:15",
  },
  {
    icon: "✦",
    title: "Core Values",
    subtitle: "コアバリュー",
    text: "神を愛し、人を愛する。イエス様の弟子として歩む。",
    description: "神様を愛し、目の前の人を愛する。これが土台です。",
    verse: "マタイ 22:37 / マタイ 22:39 / 詩篇 96:1-4 / 第二テモテ 4:2 / 使徒 2:42 / ヨハネ 13:34 / マルコ 1:17-18 / 黙示録 14:4 / ヨハネ 12:24-26",
  },
];

export default function VisionSection() {
  return (
    <section className="py-12 md:py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-medium tracking-[0.3em] uppercase mb-3">My Vision</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy">ビジョンと使命</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {visionItems.map((item) => (
            <div
              key={item.title}
              className="group p-8 rounded-2xl border border-sky hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5 transition-all"
            >
              <span className="text-gold text-2xl">{item.icon}</span>
              <h3 className="text-xl font-serif font-bold text-navy mt-4">{item.title}</h3>
              <p className="text-sm text-gold mb-3">{item.subtitle}</p>
              <p className="text-gray-600 leading-relaxed">{item.text}</p>
              <p className="text-sm text-gray-500 mt-3 leading-relaxed">{item.description}</p>
              <p className="text-xs text-gray-400 mt-4 italic whitespace-pre-line">{item.verse}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
