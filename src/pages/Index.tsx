import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/fb58d43c-b1e6-4b1e-9ba2-e47f7fcdddc2.jpg";

const NAV_LINKS = [
  { label: "Лента", icon: "LayoutDashboard" },
  { label: "Группы", icon: "Users" },
  { label: "События", icon: "CalendarDays" },
  { label: "Вакансии", icon: "Briefcase" },
  { label: "О платформе", icon: "Info" },
];

const STATS = [
  { value: "12 400+", label: "Студентов", icon: "GraduationCap" },
  { value: "890+", label: "Преподавателей", icon: "BookOpen" },
  { value: "3 200+", label: "Выпускников", icon: "Award" },
  { value: "540+", label: "Групп", icon: "Users" },
];

const GROUPS = [
  { name: "Кафедра автоматики", members: 312, tag: "Специальность", color: "badge-blue", emoji: "⚙️" },
  { name: "Карьера в IT", members: 204, tag: "Интересы", color: "badge-orange", emoji: "💻" },
  { name: "Проект SmartCampus", members: 87, tag: "Проект", color: "badge-blue", emoji: "🚀" },
  { name: "Математика & ИИ", members: 178, tag: "Специальность", color: "badge-blue", emoji: "🧮" },
  { name: "Клуб стартапов", members: 143, tag: "Интересы", color: "badge-orange", emoji: "💡" },
  { name: "Дорожные технологии", members: 95, tag: "Проект", color: "badge-orange", emoji: "🛣️" },
];

const EVENTS = [
  {
    title: "День карьеры — 2026",
    date: "15 июня",
    time: "10:00",
    type: "Офлайн",
    place: "Главный корпус, ауд. 201",
    icon: "Briefcase",
    color: "bg-brand-orange",
  },
  {
    title: "Вебинар: Машинное обучение в транспорте",
    date: "18 июня",
    time: "18:30",
    type: "Онлайн",
    place: "Zoom",
    icon: "Monitor",
    color: "bg-brand-sky",
  },
  {
    title: "Встреча выпускников 2016–2020",
    date: "22 июня",
    time: "16:00",
    type: "Офлайн",
    place: "Актовый зал",
    icon: "Users",
    color: "bg-brand-blue-mid",
  },
  {
    title: "Хакатон «Умный город»",
    date: "28–29 июня",
    time: "09:00",
    type: "Гибрид",
    place: "Лаборатория 305",
    icon: "Zap",
    color: "bg-brand-orange",
  },
];

const FEED = [
  {
    name: "Анна Соколова",
    role: "Студентка, 3 курс",
    avatar: "АС",
    time: "2 ч назад",
    text: "Ребята, кто уже зарегистрировался на хакатон «Умный город»? Ищу команду — есть опыт в Python и анализе данных 🙌",
    likes: 14,
    comments: 7,
    tag: "Проекты",
  },
  {
    name: "Проф. Игорь Мальцев",
    role: "Преподаватель",
    avatar: "ИМ",
    time: "5 ч назад",
    text: "Опубликовал новые материалы по курсу «Транспортные системы». Смотрите в разделе кафедры, конспект дополнен примерами из практики.",
    likes: 31,
    comments: 4,
    tag: "Учёба",
  },
  {
    name: "Дмитрий Ларин",
    role: "Выпускник 2019",
    avatar: "ДЛ",
    time: "вчера",
    text: "Компания ТехноДорог открыла 2 стажировки для студентов 4–5 курса по направлению «Автоматика». Отправил описание в раздел вакансий!",
    likes: 58,
    comments: 12,
    tag: "Вакансии",
  },
];

const VACANCIES = [
  { title: "Стажёр-аналитик", company: "ТехноДорог", type: "Стажировка", salary: "от 35 000 ₽", tags: ["Python", "Excel"] },
  { title: "Инженер САПР", company: "ГосПроект", type: "Работа", salary: "от 85 000 ₽", tags: ["AutoCAD", "Civil 3D"] },
  { title: "Младший разработчик", company: "SmartTransit", type: "Стажировка", salary: "от 45 000 ₽", tags: ["React", "TypeScript"] },
];

const PEOPLE = [
  { name: "Мария Ким", role: "Студентка, 4 курс", skills: ["UX", "Figma"], avatar: "МК" },
  { name: "Артём Власов", role: "Аспирант", skills: ["ML", "Python"], avatar: "АВ" },
  { name: "Екатерина Рубцова", role: "Преподаватель", skills: ["Математика", "MATLAB"], avatar: "ЕР" },
  { name: "Олег Никитин", role: "Выпускник", skills: ["Управление", "Agile"], avatar: "ОН" },
];

export default function Index() {
  const [activeNav, setActiveNav] = useState("Лента");
  const [searchValue, setSearchValue] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-brand-gray font-golos">
      {/* ─── HEADER ─── */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#3b9fe8]/20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 gap-4">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #1e5fad 50%, #3b9fe8 100%)' }}>
              <Icon name="GraduationCap" size={20} className="text-white" />
            </div>
            <span className="font-montserrat font-extrabold text-[#1a3a6b] text-lg leading-tight hidden sm:block">
              Академ<span className="text-[#f5761a]">Сеть</span>
            </span>
          </div>

          <div className="flex-1 max-w-md relative">
            <Icon name="Search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Поиск по навыкам, специальностям, людям..."
              className="pl-9 h-9 text-sm bg-[#f4f6fa] border-[#3b9fe8]/30 focus:border-[#3b9fe8]"
              value={searchValue}
              onChange={e => setSearchValue(e.target.value)}
            />
          </div>

          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => setActiveNav(link.label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeNav === link.label
                    ? "bg-[#e8f4fd] text-[#1e5fad]"
                    : "text-foreground/70 hover:text-[#1a3a6b] hover:bg-[#e8f4fd]/60"
                }`}
              >
                <Icon name={link.icon} size={15} />
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button className="relative p-2 rounded-full hover:bg-[#e8f4fd] transition-colors">
              <Icon name="Bell" size={18} className="text-[#1a3a6b]" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#f5761a] rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #3b9fe8 100%)' }}>
              <span className="text-white text-xs font-bold">ВП</span>
            </div>
            <button className="lg:hidden p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Icon name="Menu" size={20} className="text-[#1a3a6b]" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#3b9fe8]/20 px-4 py-2 flex flex-wrap gap-1 animate-fade-in">
            {NAV_LINKS.map(link => (
              <button
                key={link.label}
                onClick={() => { setActiveNav(link.label); setMobileMenuOpen(false); }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                  activeNav === link.label ? "bg-[#e8f4fd] text-[#1e5fad]" : "text-foreground/70 hover:text-[#1a3a6b]"
                }`}
              >
                <Icon name={link.icon} size={14} />
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #1e5fad 55%, #3b9fe8 100%)' }}>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl bg-white" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full blur-2xl" style={{ background: 'rgba(245,118,26,0.15)' }} />

        <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-16 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-white/15 border border-white/25 text-white text-xs font-medium px-3 py-1 rounded-full mb-4">
              🎓 Академическое сообщество
            </div>
            <h1 className="font-montserrat font-extrabold text-white text-3xl md:text-4xl xl:text-5xl leading-tight mb-4">
              Платформа для студентов,<br />
              <span style={{ color: '#f5761a' }}>преподавателей</span> и выпускников
            </h1>
            <p className="text-white/80 text-base md:text-lg mb-6 max-w-lg">
              Общайтесь, участвуйте в проектах, находите стажировки и развивайтесь вместе с академическим сообществом.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="px-6 h-11 rounded-lg font-semibold text-white text-sm shadow-lg transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #f5761a 0%, #f99b3a 100%)' }}>
                Присоединиться
              </button>
              <button className="px-6 h-11 rounded-lg font-semibold text-white text-sm border border-white/30 bg-white/10 hover:bg-white/20 transition-colors backdrop-blur">
                Узнать больше
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl blur-2xl opacity-40" style={{ background: 'rgba(245,118,26,0.3)' }} />
              <img
                src={HERO_IMAGE}
                alt="Академическая сеть"
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-video border border-white/20"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#e8f4fd' }}>
                  <Icon name="Users" size={20} className="text-[#3b9fe8]" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[#1a3a6b] text-sm">16 000+</div>
                  <div className="text-xs text-muted-foreground">участников</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: '#fff3ea' }}>
                  <Icon name="CalendarDays" size={20} className="text-[#f5761a]" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[#1a3a6b] text-sm">48 событий</div>
                  <div className="text-xs text-muted-foreground">в этом месяце</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="bg-white border-b border-[#3b9fe8]/20 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {STATS.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: '#e8f4fd' }}>
                  <Icon name={s.icon} size={18} className="text-[#3b9fe8]" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-[#1a3a6b] text-base leading-tight">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN CONTENT ─── */}
      <main className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">

        {/* LEFT COLUMN */}
        <div className="space-y-8">

          {/* FEED */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-montserrat font-bold text-[#1a3a6b] text-xl flex items-center gap-2">
                <Icon name="LayoutDashboard" size={20} className="text-[#3b9fe8]" />
                Лента активности
              </h2>
              <button className="text-[#3b9fe8] text-xs hover:text-[#1e5fad] flex items-center gap-0.5 transition-colors">
                Все посты <Icon name="ChevronRight" size={14} />
              </button>
            </div>

            <div className="bg-white rounded-2xl border border-[#3b9fe8]/20 p-4 mb-4 flex gap-3 items-center shadow-sm">
              <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #1a3a6b, #3b9fe8)' }}>
                <span className="text-white text-xs font-bold">ВП</span>
              </div>
              <div className="flex-1 bg-[#f4f6fa] rounded-xl px-4 py-2.5 text-sm text-muted-foreground cursor-pointer hover:bg-[#e8f4fd]/50 transition-colors">
                Поделитесь новостью или идеей...
              </div>
              <button className="px-4 h-9 rounded-lg text-sm font-semibold text-white shrink-0 transition-colors hover:opacity-90" style={{ background: '#1a3a6b' }}>
                <span className="flex items-center gap-1"><Icon name="Send" size={14} /> Написать</span>
              </button>
            </div>

            <div className="space-y-4">
              {FEED.map((post, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#3b9fe8]/20 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, #1a3a6b, #3b9fe8)' }}>{post.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-[#1a3a6b] text-sm">{post.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          post.tag === "Вакансии"
                            ? "bg-[#fff3ea] text-[#f5761a] border border-[#f5761a]/30"
                            : "bg-[#e8f4fd] text-[#1e5fad] border border-[#3b9fe8]/30"
                        }`}>
                          {post.tag}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground mt-0.5">{post.role} · {post.time}</div>
                    </div>
                  </div>
                  <p className="text-sm text-foreground/80 leading-relaxed mb-4">{post.text}</p>
                  <div className="flex items-center gap-4 pt-3 border-t border-border">
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#f5761a] transition-colors">
                      <Icon name="Heart" size={14} /> {post.likes}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#3b9fe8] transition-colors">
                      <Icon name="MessageCircle" size={14} /> {post.comments}
                    </button>
                    <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-[#1a3a6b] transition-colors ml-auto">
                      <Icon name="Share2" size={14} /> Поделиться
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GROUPS */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-montserrat font-bold text-[#1a3a6b] text-xl flex items-center gap-2">
                <Icon name="Users" size={20} className="text-[#3b9fe8]" />
                Группы и сообщества
              </h2>
              <button className="text-[#3b9fe8] text-xs hover:text-[#1e5fad] flex items-center gap-0.5 transition-colors">
                Все группы <Icon name="ChevronRight" size={14} />
              </button>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {GROUPS.map((g, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#3b9fe8]/20 p-4 shadow-sm cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="text-3xl mb-2">{g.emoji}</div>
                  <div className="font-semibold text-[#1a3a6b] text-sm mb-1 leading-tight">{g.name}</div>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      g.color === "badge-orange"
                        ? "bg-[#fff3ea] text-[#f5761a] border border-[#f5761a]/30"
                        : "bg-[#e8f4fd] text-[#1e5fad] border border-[#3b9fe8]/30"
                    }`}>{g.tag}</span>
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Icon name="Users" size={12} /> {g.members}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* VACANCIES */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-montserrat font-bold text-[#1a3a6b] text-xl flex items-center gap-2">
                <Icon name="Briefcase" size={20} className="text-[#f5761a]" />
                Стажировки и вакансии
              </h2>
              <button className="text-[#f5761a] text-xs hover:text-orange-700 flex items-center gap-0.5 transition-colors">
                Все вакансии <Icon name="ChevronRight" size={14} />
              </button>
            </div>
            <div className="space-y-3">
              {VACANCIES.map((v, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-[#3b9fe8]/20 p-4 shadow-sm flex items-center gap-4 transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'linear-gradient(135deg, #f5761a 0%, #f99b3a 100%)' }}>
                    <Icon name="Briefcase" size={20} className="text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[#1a3a6b] text-sm">{v.title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{v.company}</div>
                    <div className="flex gap-1.5 mt-2 flex-wrap">
                      {v.tags.map(t => (
                        <span key={t} className="bg-[#e8f4fd] text-[#1e5fad] border border-[#3b9fe8]/30 text-xs px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-[#f5761a] font-semibold text-sm">{v.salary}</div>
                    <span className="bg-[#fff3ea] text-[#f5761a] border border-[#f5761a]/30 text-xs px-2 py-0.5 rounded-full mt-1 inline-block">{v.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN */}
        <aside className="space-y-6">

          {/* EVENTS */}
          <div className="bg-white rounded-2xl border border-[#3b9fe8]/20 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#3b9fe8]/15 flex items-center justify-between">
              <h3 className="font-montserrat font-bold text-[#1a3a6b] text-base flex items-center gap-2">
                <Icon name="CalendarDays" size={17} className="text-[#3b9fe8]" />
                Ближайшие события
              </h3>
              <button className="text-[#3b9fe8] text-xs hover:text-[#1e5fad] transition-colors">Календарь</button>
            </div>
            <div className="divide-y divide-border">
              {EVENTS.map((e, i) => (
                <div key={i} className="px-5 py-3.5 hover:bg-[#e8f4fd]/30 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 ${e.color} rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
                      <Icon name={e.icon} size={14} className="text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium text-[#1a3a6b] text-sm leading-snug">{e.title}</div>
                      <div className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                        <Icon name="Clock" size={11} /> {e.date} · {e.time}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                          e.type === "Онлайн"
                            ? "bg-[#e8f4fd] text-[#1e5fad] border border-[#3b9fe8]/30"
                            : "bg-[#fff3ea] text-[#f5761a] border border-[#f5761a]/30"
                        }`}>{e.type}</span>
                        <span className="text-xs text-muted-foreground truncate">{e.place}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-[#3b9fe8]/15">
              <button className="w-full border border-[#3b9fe8]/40 text-[#1e5fad] hover:bg-[#e8f4fd] text-xs h-8 rounded-lg transition-colors flex items-center justify-center gap-1.5">
                <Icon name="Calendar" size={13} /> Открыть полный календарь
              </button>
            </div>
          </div>

          {/* PEOPLE */}
          <div className="bg-white rounded-2xl border border-[#3b9fe8]/20 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-[#3b9fe8]/15">
              <h3 className="font-montserrat font-bold text-[#1a3a6b] text-base flex items-center gap-2">
                <Icon name="UserSearch" size={17} className="text-[#3b9fe8]" />
                Найти людей
              </h3>
            </div>
            <div className="divide-y divide-border">
              {PEOPLE.map((p, i) => (
                <div key={i} className="px-5 py-3 hover:bg-[#e8f4fd]/30 transition-colors cursor-pointer flex items-center gap-3">
                  <Avatar className="w-9 h-9">
                    <AvatarFallback className="text-white text-xs font-bold" style={{ background: 'linear-gradient(135deg, #1a3a6b, #3b9fe8)' }}>{p.avatar}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-[#1a3a6b] text-sm truncate">{p.name}</div>
                    <div className="text-xs text-muted-foreground truncate">{p.role}</div>
                    <div className="flex gap-1 mt-1 flex-wrap">
                      {p.skills.map(s => (
                        <span key={s} className="bg-[#e8f4fd] text-[#1e5fad] border border-[#3b9fe8]/30 text-xs px-1.5 py-0.5 rounded-full">{s}</span>
                      ))}
                    </div>
                  </div>
                  <button className="w-7 h-7 rounded-full border border-[#3b9fe8]/40 flex items-center justify-center hover:bg-[#3b9fe8] hover:border-[#3b9fe8] hover:text-white transition-colors text-[#3b9fe8] shrink-0">
                    <Icon name="UserPlus" size={13} />
                  </button>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-[#3b9fe8]/15">
              <button className="w-full border border-[#3b9fe8]/40 text-[#1e5fad] hover:bg-[#e8f4fd] text-xs h-8 rounded-lg transition-colors flex items-center justify-center gap-1.5">
                <Icon name="Search" size={13} /> Расширенный поиск
              </button>
            </div>
          </div>

          {/* JOIN CARD */}
          <div className="rounded-2xl p-5 relative overflow-hidden text-white" style={{ background: 'linear-gradient(135deg, #1a3a6b 0%, #1e5fad 60%, #3b9fe8 100%)' }}>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-xl" style={{ background: 'rgba(245,118,26,0.25)' }} />
            <div className="relative">
              <div className="text-3xl mb-2">🎓</div>
              <h3 className="font-montserrat font-bold text-white text-base mb-1">Новый на платформе?</h3>
              <p className="text-white/75 text-xs mb-4 leading-relaxed">
                Зарегистрируйтесь и получите доступ ко всем возможностям академического сообщества
              </p>
              <button className="w-full h-9 rounded-lg text-sm font-semibold text-white shadow-lg transition-all hover:opacity-90" style={{ background: 'linear-gradient(135deg, #f5761a 0%, #f99b3a 100%)' }}>
                Создать аккаунт
              </button>
            </div>
          </div>
        </aside>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="mt-8" style={{ background: '#1a3a6b' }}>
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-white/15 rounded-lg flex items-center justify-center">
                <Icon name="GraduationCap" size={18} className="text-white" />
              </div>
              <span className="font-montserrat font-bold text-white">АкадемСеть</span>
            </div>
            <p className="text-white/55 text-xs leading-relaxed">
              Социальная платформа для академического сообщества: студентов, преподавателей и выпускников.
            </p>
          </div>
          {[
            { title: "Платформа", links: ["Лента", "Группы", "События", "Вакансии"] },
            { title: "Сообщество", links: ["Студенты", "Преподаватели", "Выпускники", "Проекты"] },
            { title: "Поддержка", links: ["О платформе", "Правила", "Помощь", "Контакты"] },
          ].map(col => (
            <div key={col.title}>
              <h4 className="text-white font-semibold text-sm mb-3">{col.title}</h4>
              <ul className="space-y-1.5">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-white/50 text-xs hover:text-white transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 px-4 py-3 max-w-7xl mx-auto flex items-center justify-between">
          <span className="text-white/35 text-xs">© 2026 АкадемСеть</span>
          <span className="text-white/35 text-xs">Все права защищены</span>
        </div>
      </footer>
    </div>
  );
}