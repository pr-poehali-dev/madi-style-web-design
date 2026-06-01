import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

/* ── Images ── */
const IMG_HERO    = "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/affc8d40-49a0-4672-b983-ea96c2440d4d.jpg";
const IMG_LIBRARY = "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/56fa914f-c6fb-47e0-8541-5518c62bf692.jpg";

/* ── Data ── */
const NAV_LINKS = ["Лента", "Группы", "События", "Стажировки", "Выпускники", "О платформе"];

const NEWS = [
  {
    tag: "Событие",
    tagType: "orange",
    date: "01 июня 2026",
    title: "День карьеры — 2026: встреча студентов с работодателями",
    img: IMG_LIBRARY,
    views: 412,
  },
  {
    tag: "Вакансия",
    tagType: "blue",
    date: "31 мая 2026",
    title: "ТехноДорог открыл стажировки для студентов 4–5 курса",
    img: "",
    views: 287,
  },
  {
    tag: "Проект",
    tagType: "blue",
    date: "30 мая 2026",
    title: "Команда SmartCampus ищет разработчика и аналитика данных",
    img: "",
    views: 193,
  },
  {
    tag: "Учёба",
    tagType: "gray",
    date: "29 мая 2026",
    title: "Проф. Мальцев опубликовал обновлённые конспекты по транспортным системам",
    img: "",
    views: 341,
  },
  {
    tag: "Вебинар",
    tagType: "orange",
    date: "28 мая 2026",
    title: "Вебинар «Машинное обучение в дорожной отрасли» — запись доступна",
    img: "",
    views: 519,
  },
  {
    tag: "Сообщество",
    tagType: "gray",
    date: "27 мая 2026",
    title: "Клуб стартапов приглашает на питч-сессию 12 июня",
    img: "",
    views: 156,
  },
];

const EVENTS = [
  { day: "15", month: "ИЮН", title: "День карьеры — 2026", place: "Главный корпус, ауд. 201", type: "Офлайн" },
  { day: "18", month: "ИЮН", title: "Вебинар: ML в транспорте", place: "Онлайн / Zoom", type: "Онлайн" },
  { day: "22", month: "ИЮН", title: "Встреча выпускников 2016–2020", place: "Актовый зал", type: "Офлайн" },
  { day: "28", month: "ИЮН", title: "Хакатон «Умный город»", place: "Лаборатория 305", type: "Гибрид" },
  { day: "05", month: "ИЮЛ", title: "Летняя научная конференция", place: "Конференц-зал A", type: "Гибрид" },
];

const GROUPS = [
  { name: "Кафедра автоматики и управления", members: 312, tag: "Специальность" },
  { name: "Карьера в IT", members: 204, tag: "Интересы" },
  { name: "Проект SmartCampus", members: 87, tag: "Проект" },
  { name: "Математика и искусственный интеллект", members: 178, tag: "Специальность" },
  { name: "Клуб студенческих стартапов", members: 143, tag: "Интересы" },
  { name: "Дорожные технологии будущего", members: 95, tag: "Проект" },
];

const VACANCIES = [
  { title: "Стажёр-аналитик данных", company: "ТехноДорог", salary: "от 35 000 ₽", type: "Стажировка", tags: ["Python", "Excel"] },
  { title: "Инженер САПР", company: "ГосПроект", salary: "от 85 000 ₽", type: "Полная занятость", tags: ["AutoCAD", "Civil 3D"] },
  { title: "Младший разработчик ПО", company: "SmartTransit", salary: "от 45 000 ₽", type: "Стажировка", tags: ["React", "TypeScript"] },
  { title: "Технолог транспортных систем", company: "Росавтодор", salary: "от 70 000 ₽", type: "Полная занятость", tags: ["ПДД", "ГИС"] },
];

const PEOPLE = [
  { name: "Мария Ким", role: "Студентка, 4 курс · ИТ-специальность", skills: ["UX", "Figma", "React"], avatar: "МК" },
  { name: "Артём Власов", role: "Аспирант · Кафедра математики", skills: ["ML", "Python", "NumPy"], avatar: "АВ" },
  { name: "Екатерина Рубцова", role: "Доцент · Кафедра транспорта", skills: ["MATLAB", "Моделирование"], avatar: "ЕР" },
  { name: "Олег Никитин", role: "Выпускник 2019 · Директор продукта", skills: ["Agile", "Стратегия"], avatar: "ОН" },
];

const STATS = [
  { value: "12 400", label: "студентов" },
  { value: "890", label: "преподавателей" },
  { value: "3 200", label: "выпускников" },
  { value: "540", label: "сообществ" },
];

const TICKER_ITEMS = [
  "День карьеры — 15 июня",
  "Хакатон «Умный город» — 28–29 июня",
  "Вебинар по ML — 18 июня 18:30",
  "Встреча выпускников — 22 июня",
  "Новые стажировки от ТехноДорог",
  "Летняя конференция — 5 июля",
];

/* ── Helpers ── */
function TagBadge({ type, label }: { type: string; label: string }) {
  const cls =
    type === "orange" ? "madi-tag-orange" :
    type === "blue"   ? "madi-tag-blue"   : "madi-tag-gray";
  return <span className={cls}>{label}</span>;
}

/* ── Component ── */
export default function Index() {
  const [activeNav, setActiveNav] = useState("Лента");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'PT Sans', Roboto, sans-serif", color: "var(--madi-text)" }}>

      {/* ══ TOP BAR ══ */}
      <div style={{ background: "var(--madi-blue-deeper)" }} className="hidden md:block">
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-8 text-xs text-white/60">
          <span>Социальная платформа академического сообщества</span>
          <div className="flex items-center gap-4">
            <button className="hover:text-white transition-colors flex items-center gap-1">
              <Icon name="Search" size={12} /> Поиск
            </button>
            <button className="hover:text-white transition-colors flex items-center gap-1">
              <Icon name="LogIn" size={12} /> Войти
            </button>
            <button className="hover:text-white transition-colors flex items-center gap-1">
              <Icon name="UserPlus" size={12} /> Регистрация
            </button>
          </div>
        </div>
      </div>

      {/* ══ LOGO BAR ══ */}
      <div className="bg-white border-b" style={{ borderColor: "var(--madi-line)" }}>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-lg"
              style={{ background: "var(--madi-blue)" }}
            >
              А
            </div>
            <div>
              <div className="font-bold text-base leading-tight" style={{ color: "var(--madi-text)" }}>
                АкадемСеть
              </div>
              <div className="text-xs leading-tight" style={{ color: "var(--madi-muted)" }}>
                Социальная платформа вуза
              </div>
            </div>
          </div>

          {/* Search desktop */}
          <div className="hidden md:flex flex-1 max-w-md items-center border rounded" style={{ borderColor: "var(--madi-line)" }}>
            <input
              className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
              placeholder="Поиск людей, групп, событий..."
              style={{ color: "var(--madi-text)" }}
            />
            <button
              className="px-3 py-2 text-white text-sm flex items-center gap-1 rounded-r"
              style={{ background: "var(--madi-orange)" }}
            >
              <Icon name="Search" size={14} />
            </button>
          </div>

          {/* CTA */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              className="btn-madi hidden sm:flex"
              style={{ background: "var(--madi-blue)" }}
            >
              <Icon name="LogIn" size={14} /> Войти
            </button>
            <button
              className="btn-madi btn-madi-orange"
            >
              <Icon name="UserPlus" size={14} /> Регистрация
            </button>
            <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              <Icon name="Menu" size={22} style={{ color: "var(--madi-blue)" }} />
            </button>
          </div>
        </div>
      </div>

      {/* ══ MAIN NAV ══ */}
      <nav style={{ background: "var(--madi-blue)" }}>
        <div className="max-w-screen-xl mx-auto px-4 hidden md:flex h-11 items-stretch">
          {NAV_LINKS.map(link => (
            <button
              key={link}
              onClick={() => setActiveNav(link)}
              className={`madi-nav-item ${activeNav === link ? "active" : ""}`}
            >
              {link}
            </button>
          ))}
          {/* Уведомления */}
          <div className="ml-auto flex items-center gap-1 pr-0">
            <button className="madi-nav-item relative">
              <Icon name="Bell" size={15} />
              <span
                className="absolute top-2 right-1.5 w-2 h-2 rounded-full border-2"
                style={{ background: "var(--madi-orange)", borderColor: "var(--madi-blue)" }}
              />
            </button>
            <button className="madi-nav-item">
              <Icon name="MessageCircle" size={15} />
            </button>
            <div
              className="ml-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white cursor-pointer"
              style={{ background: "var(--madi-orange)" }}
            >
              ВП
            </div>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden px-4 pb-3 pt-1 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => { setActiveNav(link); setMobileOpen(false); }}
                className="text-left text-sm text-white/80 hover:text-white py-1.5 border-b border-white/10"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ══ TICKER ══ */}
      <div
        className="ticker-wrap overflow-hidden py-1.5 border-b"
        style={{ background: "var(--madi-gray)", borderColor: "var(--madi-line)" }}
      >
        <div className="ticker-inner text-xs" style={{ color: "var(--madi-muted)" }}>
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <span key={i} className="flex items-center gap-1.5 shrink-0 cursor-pointer hover:text-[--madi-orange]">
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "var(--madi-orange)" }}
              />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ══ HERO ══ */}
      <section className="relative overflow-hidden" style={{ minHeight: 360 }}>
        <img
          src={IMG_HERO}
          alt="Кампус"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(90deg, rgba(6,58,98,0.88) 0%, rgba(6,58,98,0.60) 55%, rgba(6,58,98,0.10) 100%)" }}
        />
        <div className="relative max-w-screen-xl mx-auto px-4 py-14 md:py-20">
          <div className="max-w-xl madi-animate">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1 rounded mb-4"
              style={{ background: "var(--madi-orange)", color: "#fff" }}
            >
              <Icon name="GraduationCap" size={13} /> Академическое сообщество
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-snug mb-4">
              Платформа для студентов,<br />
              преподавателей и выпускников
            </h1>
            <p className="text-white/80 text-base mb-6 max-w-md">
              Общайтесь, участвуйте в проектах, находите стажировки и развивайтесь вместе с академическим сообществом.
            </p>
            <div className="flex gap-3 flex-wrap">
              <button className="btn-madi btn-madi-orange text-sm px-5 py-2.5">
                Зарегистрироваться
              </button>
              <button
                className="btn-madi text-sm px-5 py-2.5"
                style={{ background: "rgba(255,255,255,0.15)", border: "1.5px solid rgba(255,255,255,0.4)" }}
              >
                Узнать больше
              </button>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div
          className="relative"
          style={{ background: "rgba(6,58,98,0.92)" }}
        >
          <div className="max-w-screen-xl mx-auto px-4 flex flex-wrap">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`stat-item flex-1 min-w-[130px] py-3 px-4 flex flex-col items-center madi-animate madi-animate-d${i + 1}`}
              >
                <span className="text-2xl font-bold text-white">{s.value}</span>
                <span className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT ══ */}
      <div className="max-w-screen-xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">

        {/* ── LEFT ── */}
        <div className="space-y-7">

          {/* NEWS GRID */}
          <section>
            <div className="madi-section-title">
              <span>Лента активности</span>
              <button className="text-xs font-normal" style={{ color: "var(--madi-blue)" }}>
                Все публикации →
              </button>
            </div>

            {/* Quick post bar */}
            <div
              className="flex items-center gap-3 p-3 mb-4 border rounded"
              style={{ background: "var(--madi-gray)", borderColor: "var(--madi-line)" }}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white shrink-0"
                style={{ background: "var(--madi-blue)" }}
              >
                ВП
              </div>
              <div
                className="flex-1 bg-white border rounded px-3 py-2 text-sm cursor-pointer hover:border-[--madi-blue] transition-colors"
                style={{ borderColor: "var(--madi-line)", color: "var(--madi-muted)" }}
              >
                Поделитесь новостью, идеей или материалом...
              </div>
              <button className="btn-madi text-xs px-3 py-2 shrink-0">
                <Icon name="Send" size={13} /> Опубликовать
              </button>
            </div>

            {/* News list — featured + grid */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* Featured */}
              <div className="madi-news-card md:row-span-2 flex flex-col cursor-pointer madi-animate">
                <div className="relative overflow-hidden" style={{ height: 200 }}>
                  <img
                    src={NEWS[0].img}
                    alt={NEWS[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <TagBadge type={NEWS[0].tagType} label={NEWS[0].tag} />
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-xs mb-2" style={{ color: "var(--madi-muted)" }}>{NEWS[0].date}</p>
                  <h3 className="news-title font-bold text-base leading-snug mb-3 transition-colors" style={{ color: "var(--madi-text)" }}>
                    {NEWS[0].title}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 text-xs" style={{ color: "var(--madi-muted)" }}>
                    <Icon name="Eye" size={12} /> {NEWS[0].views}
                    <span className="ml-auto">
                      <button className="btn-madi text-xs px-3 py-1.5">Подробнее</button>
                    </span>
                  </div>
                </div>
              </div>

              {/* Small news items */}
              {NEWS.slice(1, 5).map((item, i) => (
                <div
                  key={i}
                  className={`madi-news-card flex gap-3 p-3 madi-animate madi-animate-d${i + 1}`}
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <TagBadge type={item.tagType} label={item.tag} />
                      <span className="text-xs" style={{ color: "var(--madi-muted)" }}>{item.date}</span>
                    </div>
                    <p className="news-title text-sm font-semibold leading-snug transition-colors" style={{ color: "var(--madi-text)" }}>
                      {item.title}
                    </p>
                    <p className="text-xs mt-1.5 flex items-center gap-1" style={{ color: "var(--madi-muted)" }}>
                      <Icon name="Eye" size={11} /> {item.views}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* GROUPS */}
          <section>
            <div className="madi-section-title">
              <span>Группы и сообщества</span>
              <button className="text-xs font-normal" style={{ color: "var(--madi-blue)" }}>
                Все группы →
              </button>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
              {GROUPS.map((g, i) => (
                <div
                  key={i}
                  className={`madi-card p-4 cursor-pointer madi-animate madi-animate-d${(i % 4) + 1}`}
                >
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center mb-3"
                    style={{ background: "var(--madi-gray)" }}
                  >
                    <Icon name="Users" size={16} style={{ color: "var(--madi-blue)" }} />
                  </div>
                  <p className="font-semibold text-sm leading-snug mb-2" style={{ color: "var(--madi-text)" }}>{g.name}</p>
                  <div className="flex items-center justify-between">
                    <TagBadge type={g.tag === "Специальность" ? "blue" : g.tag === "Проект" ? "orange" : "gray"} label={g.tag} />
                    <span className="text-xs flex items-center gap-1" style={{ color: "var(--madi-muted)" }}>
                      <Icon name="Users" size={11} /> {g.members}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* VACANCIES */}
          <section>
            <div className="madi-section-title">
              <span>Стажировки и вакансии</span>
              <button className="text-xs font-normal" style={{ color: "var(--madi-blue)" }}>
                Все вакансии →
              </button>
            </div>
            <div className="border rounded overflow-hidden" style={{ borderColor: "var(--madi-line)" }}>
              {/* Table head */}
              <div
                className="hidden md:grid grid-cols-[2fr_1fr_1fr_1fr] text-xs font-semibold px-4 py-2.5"
                style={{ background: "var(--madi-blue)", color: "#fff" }}
              >
                <span>Должность / компания</span>
                <span>Тип</span>
                <span>Зарплата</span>
                <span>Навыки</span>
              </div>
              {VACANCIES.map((v, i) => (
                <div
                  key={i}
                  className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-2 px-4 py-3 border-t text-sm hover:bg-[#f7fafd] cursor-pointer transition-colors madi-animate"
                  style={{ borderColor: "var(--madi-line)", animationDelay: `${i * 60}ms` }}
                >
                  <div>
                    <p className="font-semibold" style={{ color: "var(--madi-text)" }}>{v.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--madi-muted)" }}>{v.company}</p>
                  </div>
                  <div className="flex items-center">
                    <TagBadge type={v.type === "Стажировка" ? "orange" : "blue"} label={v.type} />
                  </div>
                  <div className="flex items-center font-semibold text-sm" style={{ color: "var(--madi-orange)" }}>
                    {v.salary}
                  </div>
                  <div className="flex items-center gap-1 flex-wrap">
                    {v.tags.map(t => (
                      <TagBadge key={t} type="gray" label={t} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-center">
              <button className="btn-madi btn-madi-outline text-xs px-5 py-2">
                <Icon name="Briefcase" size={13} /> Смотреть все вакансии
              </button>
            </div>
          </section>

          {/* PEOPLE */}
          <section>
            <div className="madi-section-title">
              <span>Участники платформы</span>
              <button className="text-xs font-normal" style={{ color: "var(--madi-blue)" }}>
                Расширенный поиск →
              </button>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {PEOPLE.map((p, i) => (
                <div
                  key={i}
                  className={`madi-card flex items-start gap-3 p-4 cursor-pointer madi-animate madi-animate-d${(i % 4) + 1}`}
                >
                  <Avatar className="w-11 h-11 shrink-0">
                    <AvatarFallback
                      className="text-white text-sm font-bold"
                      style={{ background: "var(--madi-blue)" }}
                    >
                      {p.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm" style={{ color: "var(--madi-text)" }}>{p.name}</p>
                    <p className="text-xs mt-0.5 mb-2" style={{ color: "var(--madi-muted)" }}>{p.role}</p>
                    <div className="flex flex-wrap gap-1">
                      {p.skills.map(s => <TagBadge key={s} type="blue" label={s} />)}
                    </div>
                  </div>
                  <button
                    className="shrink-0 btn-madi text-xs px-2.5 py-1.5"
                    style={{ background: "var(--madi-blue)" }}
                  >
                    <Icon name="UserPlus" size={12} />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* ── RIGHT SIDEBAR ── */}
        <aside className="space-y-5">

          {/* EVENTS */}
          <div>
            <div className="madi-section-title">
              <span>Ближайшие события</span>
            </div>
            <div className="space-y-2">
              {EVENTS.map((e, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-3 border cursor-pointer hover:bg-[#f7fafd] transition-colors madi-animate"
                  style={{ borderColor: "var(--madi-line)", animationDelay: `${i * 60}ms` }}
                >
                  <div className="event-date-block">
                    <div className="text-xl font-bold leading-none">{e.day}</div>
                    <div className="text-xs mt-0.5 opacity-80">{e.month}</div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold leading-snug" style={{ color: "var(--madi-text)" }}>
                      {e.title}
                    </p>
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: "var(--madi-muted)" }}>
                      <Icon name="MapPin" size={11} /> {e.place}
                    </p>
                    <div className="mt-1.5">
                      <TagBadge
                        type={e.type === "Офлайн" ? "blue" : e.type === "Онлайн" ? "orange" : "gray"}
                        label={e.type}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3">
              <button className="btn-madi btn-madi-outline text-xs w-full justify-center py-2">
                <Icon name="CalendarDays" size={13} /> Полный календарь
              </button>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <div className="madi-section-title">
              <span>Разделы платформы</span>
            </div>
            <div className="space-y-1">
              {[
                { icon: "LayoutDashboard", label: "Лента новостей", count: "124 поста" },
                { icon: "Users",           label: "Группы",          count: "540 сообществ" },
                { icon: "CalendarDays",    label: "Календарь",       count: "48 событий" },
                { icon: "Briefcase",       label: "Вакансии",        count: "93 позиции" },
                { icon: "Award",           label: "Выпускники",      count: "3 200+" },
                { icon: "Info",            label: "О платформе",     count: "" },
              ].map((item, i) => (
                <button
                  key={i}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 text-sm hover:bg-[#f7fafd] transition-colors border-b text-left"
                  style={{ borderColor: "var(--madi-line)", color: "var(--madi-text)" }}
                >
                  <Icon name={item.icon} size={15} style={{ color: "var(--madi-blue)", flexShrink: 0 }} />
                  <span className="flex-1">{item.label}</span>
                  {item.count && (
                    <span className="text-xs" style={{ color: "var(--madi-muted)" }}>{item.count}</span>
                  )}
                  <Icon name="ChevronRight" size={13} style={{ color: "var(--madi-muted)", flexShrink: 0 }} />
                </button>
              ))}
            </div>
          </div>

          {/* REGISTER BANNER */}
          <div
            className="p-4 relative overflow-hidden"
            style={{ background: "var(--madi-blue-deeper)", borderRadius: 2 }}
          >
            <div
              className="absolute -top-6 -right-6 w-24 h-24 rounded-full opacity-10"
              style={{ background: "var(--madi-orange)" }}
            />
            <p className="text-sm font-bold text-white mb-1">Новый участник?</p>
            <p className="text-xs text-white/65 mb-4 leading-relaxed">
              Создайте профиль, чтобы общаться, участвовать в проектах и находить стажировки.
            </p>
            <button className="btn-madi btn-madi-orange w-full justify-center text-xs py-2.5">
              <Icon name="UserPlus" size={14} /> Создать аккаунт
            </button>
          </div>

          {/* POPULAR SKILLS */}
          <div>
            <div className="madi-section-title">
              <span>Популярные навыки</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "AutoCAD", "MATLAB", "React", "Excel", "GIS", "Machine Learning", "Civil 3D", "Agile", "SQL", "Figma", "Arduino"].map(s => (
                <button
                  key={s}
                  className="madi-tag-blue cursor-pointer hover:bg-[#1071B3] hover:text-white transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

        </aside>
      </div>

      {/* ══ FOOTER ══ */}
      <footer style={{ background: "var(--madi-blue-deeper)", marginTop: "2rem" }}>
        <div className="max-w-screen-xl mx-auto px-4 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white font-bold"
                style={{ background: "var(--madi-blue)" }}
              >А</div>
              <span className="font-bold text-white">АкадемСеть</span>
            </div>
            <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Социальная платформа для студентов, преподавателей и выпускников академического сообщества.
            </p>
          </div>
          {[
            { title: "Платформа", links: ["Лента", "Группы", "События", "Вакансии"] },
            { title: "Сообщество", links: ["Студенты", "Преподаватели", "Выпускники", "Проекты"] },
            { title: "Поддержка", links: ["О платформе", "Правила", "Помощь", "Обратная связь"] },
          ].map(col => (
            <div key={col.title}>
              <p className="text-white text-sm font-semibold mb-3">{col.title}</p>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="text-xs hover:text-white transition-colors" style={{ color: "rgba(255,255,255,0.5)" }}>
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div
          className="border-t px-4 py-3 max-w-screen-xl mx-auto flex items-center justify-between text-xs"
          style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
        >
          <span>© 2026 АкадемСеть. Все права защищены.</span>
          <span>Политика конфиденциальности · Правила использования</span>
        </div>
      </footer>
    </div>
  );
}
