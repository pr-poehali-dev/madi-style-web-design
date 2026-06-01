import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

/* ── Images ── */
const SLIDES = [
  {
    img: "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/74a396ae-967c-4d15-b263-100b8addd73d.jpg",
    title: "Академическая социальная сеть",
    sub: "Общайтесь, развивайтесь, находите возможности вместе с сообществом вуза",
    btn: "Зарегистрироваться",
  },
  {
    img: "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/aed0bf20-5a73-4043-8105-b9f839467413.jpg",
    title: "Наука и проекты",
    sub: "Участвуйте в исследованиях, подключайтесь к командам и запускайте стартапы",
    btn: "Найти проект",
  },
  {
    img: "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/31fad6f9-19f7-428d-a611-7ef9e9aad4c2.jpg",
    title: "Карьера и стажировки",
    sub: "Выпускники делятся вакансиями, компании ищут таланты среди студентов вуза",
    btn: "Смотреть вакансии",
  },
];

const IMG_NEWS1 = "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/56fa914f-c6fb-47e0-8541-5518c62bf692.jpg";
const IMG_NEWS2 = "https://cdn.poehali.dev/projects/df67693e-6768-4f35-bbdf-2f2055631d56/files/affc8d40-49a0-4672-b983-ea96c2440d4d.jpg";

/* ── Data ── */
const NAV = [
  {
    label: "Лента",
    sub: ["Все публикации", "Популярное", "Подписки", "Отметки"],
  },
  {
    label: "Группы",
    sub: ["Специальности", "Интересы", "Проекты", "Кафедры", "Создать группу"],
  },
  {
    label: "События",
    sub: ["Календарь", "Вебинары", "Конференции", "Встречи выпускников"],
  },
  {
    label: "Стажировки",
    sub: ["Все вакансии", "Стажировки", "Подать резюме", "Для работодателей"],
  },
  {
    label: "Выпускники",
    sub: ["Найти выпускника", "Менторство", "Сеть контактов"],
  },
  { label: "О платформе", sub: ["Правила", "Помощь", "Контакты"] },
];

const NEWS_MAIN = [
  {
    id: 1, tag: "Событие", tagType: "orange",
    date: "01 июня 2026",
    title: "День карьеры — 2026: студенты встретятся с ведущими работодателями",
    text: "Ежегодная встреча студентов с представителями более 40 компаний. Регистрация открыта.",
    img: IMG_NEWS1, views: 412, comments: 18,
  },
  {
    id: 2, tag: "Наука", tagType: "blue",
    date: "31 мая 2026",
    title: "Команда SmartCampus получила грант на разработку навигации для кампуса",
    text: "Студенческий проект удостоен федерального финансирования в рамках программы «Умный университет».",
    img: IMG_NEWS2, views: 287, comments: 9,
  },
  {
    id: 3, tag: "Вакансия", tagType: "green",
    date: "30 мая 2026",
    title: "ТехноДорог открыл 3 стажировки для студентов 4–5 курса",
    text: "Направления: анализ данных, инженерное проектирование и разработка ПО. Отклики до 15 июня.",
    img: "", views: 341, comments: 22,
  },
];

const NEWS_SIDE = [
  { tag: "Учёба", tagType: "gray", date: "29 мая", title: "Проф. Мальцев обновил конспекты по транспортным системам" },
  { tag: "Вебинар", tagType: "orange", date: "28 мая", title: "Запись вебинара «ML в дорожной отрасли» — доступна" },
  { tag: "Проект", tagType: "blue", date: "27 мая", title: "Клуб стартапов приглашает на питч-сессию 12 июня" },
  { tag: "Сообщество", tagType: "gray", date: "26 мая", title: "Новые участники в группе «Кафедра автоматики»: 18 чел." },
  { tag: "Вакансия", tagType: "green", date: "25 мая", title: "ГосПроект ищет инженера САПР — от 85 000 ₽" },
];

const EVENTS = [
  { day: "15", mon: "ИЮН", title: "День карьеры — 2026", place: "Главный корпус, ауд. 201", type: "Офлайн" },
  { day: "18", mon: "ИЮН", title: "Вебинар: ML в транспорте", place: "Онлайн / Zoom", type: "Онлайн" },
  { day: "22", mon: "ИЮН", title: "Встреча выпускников 2016–2020", place: "Актовый зал", type: "Офлайн" },
  { day: "28", mon: "ИЮН", title: "Хакатон «Умный город»", place: "Лаб. 305", type: "Гибрид" },
  { day: "05", mon: "ИЮЛ", title: "Летняя научная конференция", place: "Конференц-зал A", type: "Гибрид" },
];

const GROUPS = [
  { name: "Кафедра автоматики и управления", tag: "Специальность", tagType: "blue",   members: 312 },
  { name: "Карьера в IT и технологиях",        tag: "Интересы",     tagType: "orange",  members: 204 },
  { name: "Проект SmartCampus",                tag: "Проект",       tagType: "green",   members: 87  },
  { name: "Математика и искусственный интеллект", tag: "Специальность", tagType: "blue", members: 178 },
  { name: "Клуб студенческих стартапов",       tag: "Интересы",     tagType: "orange",  members: 143 },
  { name: "Дорожные технологии будущего",      tag: "Проект",       tagType: "green",   members: 95  },
];

const VACANCIES = [
  { title: "Стажёр-аналитик данных",    company: "ТехноДорог",  salary: "35 000 ₽", type: "Стажировка",       tags: ["Python", "Excel"] },
  { title: "Инженер САПР",              company: "ГосПроект",   salary: "85 000 ₽", type: "Полная занятость",  tags: ["AutoCAD", "Civil 3D"] },
  { title: "Младший разработчик ПО",    company: "SmartTransit",salary: "45 000 ₽", type: "Стажировка",       tags: ["React", "TS"] },
  { title: "Технолог транспортных систем", company: "Росавтодор", salary: "70 000 ₽", type: "Полная занятость", tags: ["ГИС", "ПДД"] },
];

const PEOPLE = [
  { name: "Мария Ким",      role: "Студентка · 4 курс", skills: ["UX", "Figma"],    av: "МК" },
  { name: "Артём Власов",   role: "Аспирант",            skills: ["ML", "Python"],   av: "АВ" },
  { name: "Е. Рубцова",     role: "Доцент",              skills: ["MATLAB", "Моделирование"], av: "ЕР" },
  { name: "Олег Никитин",   role: "Выпускник 2019",      skills: ["Agile", "PM"],    av: "ОН" },
];

const TICKER = [
  "День карьеры — 15 июня, ауд. 201",
  "Хакатон «Умный город» — 28–29 июня",
  "Вебинар по ML — 18 июня 18:30",
  "Встреча выпускников — 22 июня",
  "Новые стажировки от ТехноДорог",
  "Питч-сессия стартапов — 12 июня",
  "Конференция — 5 июля, конф.-зал A",
];

const STATS = [
  { n: "12 400", l: "студентов" },
  { n: "890",    l: "преподавателей" },
  { n: "3 200",  l: "выпускников" },
  { n: "540",    l: "сообществ" },
];

/* ── Tag helper ── */
function Tag({ type, label }: { type: string; label: string }) {
  const cls = type === "orange" ? "m-tag m-tag-orange"
            : type === "blue"   ? "m-tag m-tag-blue"
            : type === "green"  ? "m-tag m-tag-green"
            :                     "m-tag m-tag-gray";
  return <span className={cls}>{label}</span>;
}

/* ══════════════════════════════════ */
export default function Index() {
  const [slide, setSlide] = useState(0);
  const [openNav, setOpenNav] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Auto-advance slider */
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  const s = SLIDES[slide];

  return (
    <div className="min-h-screen" style={{ background: "var(--m-bg)", fontFamily: "'PT Sans', Arial, sans-serif" }}>

      {/* ══ 1. TOP UTILITY BAR ══ */}
      <div style={{ background: "var(--m-blue-deep)" }}>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-8">
          <span className="text-xs" style={{ color: "rgba(255,255,255,.55)" }}>
            Социальная платформа академического сообщества
          </span>
          <div className="hidden sm:flex items-center gap-5 text-xs" style={{ color: "rgba(255,255,255,.6)" }}>
            {["О платформе", "Контакты", "Помощь"].map(l => (
              <button key={l} className="hover:text-white transition-colors">{l}</button>
            ))}
            <div className="w-px h-3" style={{ background: "rgba(255,255,255,.2)" }} />
            <button
              className="m-btn m-btn-ghost-white"
              style={{ padding: "2px 10px", fontSize: 11, borderRadius: 1 }}
            >
              <Icon name="LogIn" size={11} /> Войти
            </button>
            <button
              className="m-btn m-btn-orange"
              style={{ padding: "2px 10px", fontSize: 11, borderRadius: 1 }}
            >
              <Icon name="UserPlus" size={11} /> Регистрация
            </button>
          </div>
        </div>
      </div>

      {/* ══ 2. LOGO / SEARCH BAR ══ */}
      <div className="bg-white border-b" style={{ borderColor: "var(--m-border)" }}>
        <div className="max-w-screen-xl mx-auto px-4 flex items-center justify-between gap-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <div
              className="flex items-center justify-center text-white font-bold text-xl"
              style={{
                width: 52, height: 52,
                background: "var(--m-blue)",
                borderRadius: 2,
                flexShrink: 0,
              }}
            >
              АС
            </div>
            <div>
              <div className="font-bold leading-tight" style={{ fontSize: 17, color: "var(--m-blue)" }}>
                АкадемСеть
              </div>
              <div style={{ fontSize: 11, color: "var(--m-text-lt)", lineHeight: 1.3 }}>
                Социальная платформа вуза
              </div>
            </div>
          </div>

          {/* Stats strip */}
          <div className="hidden lg:flex items-center gap-0 border rounded overflow-hidden" style={{ borderColor: "var(--m-border-lt)" }}>
            {STATS.map((st, i) => (
              <div
                key={i}
                className="flex flex-col items-center px-5 py-1.5 border-r"
                style={{ borderColor: "var(--m-border-lt)" }}
              >
                <span className="font-bold" style={{ fontSize: 15, color: "var(--m-blue)" }}>{st.n}</span>
                <span style={{ fontSize: 10, color: "var(--m-text-lt)" }}>{st.l}</span>
              </div>
            ))}
          </div>

          {/* Search */}
          <div
            className="flex items-center border overflow-hidden flex-1 max-w-xs"
            style={{ borderColor: "var(--m-border)", borderRadius: 2 }}
          >
            <input
              type="text"
              placeholder="Поиск людей, групп, событий..."
              className="flex-1 px-3 py-2 text-sm outline-none bg-white"
              style={{ color: "var(--m-text)", fontSize: 13 }}
            />
            <button
              className="px-3 py-2 flex items-center"
              style={{ background: "var(--m-blue)", color: "#fff" }}
            >
              <Icon name="Search" size={15} />
            </button>
          </div>

          {/* Mobile burger */}
          <button className="lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
            <Icon name="Menu" size={24} style={{ color: "var(--m-blue)" }} />
          </button>
        </div>
      </div>

      {/* ══ 3. MAIN NAV ══ */}
      <nav style={{ background: "var(--m-blue)", position: "relative", zIndex: 40 }}>
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="hidden lg:flex items-stretch h-11">
            {NAV.map(item => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenNav(item.label)}
                onMouseLeave={() => setOpenNav(null)}
              >
                <button
                  className="flex items-center gap-1 px-4 h-full text-white/85 hover:text-white hover:bg-white/10 transition-colors font-bold"
                  style={{
                    fontSize: 13,
                    borderBottom: openNav === item.label ? "3px solid var(--m-orange)" : "3px solid transparent",
                  }}
                >
                  {item.label}
                  {item.sub.length > 1 && <Icon name="ChevronDown" size={12} className="opacity-70" />}
                </button>
                {/* Dropdown */}
                {openNav === item.label && item.sub.length > 1 && (
                  <div
                    className="absolute top-full left-0 bg-white shadow-lg border min-w-[200px] z-50"
                    style={{ borderColor: "var(--m-border)", borderTop: "2px solid var(--m-orange)" }}
                  >
                    {item.sub.map(sub => (
                      <button
                        key={sub}
                        className="w-full text-left px-4 py-2.5 text-sm hover:bg-[#EEF4FB] hover:text-[#1071B3] border-b transition-colors"
                        style={{ borderColor: "var(--m-border-lt)", color: "var(--m-text)", fontSize: 13 }}
                      >
                        {sub}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Right side of nav */}
            <div className="ml-auto flex items-center gap-1 pr-0">
              <button
                className="flex items-center gap-1 px-3 h-full text-white/80 hover:text-white hover:bg-white/10 transition-colors relative"
              >
                <Icon name="Bell" size={16} />
                <span
                  className="absolute top-2.5 right-2 w-1.5 h-1.5 rounded-full"
                  style={{ background: "var(--m-orange)", border: "1.5px solid var(--m-blue)" }}
                />
              </button>
              <button className="flex items-center gap-1 px-3 h-full text-white/80 hover:text-white hover:bg-white/10 transition-colors">
                <Icon name="MessageSquare" size={16} />
              </button>
              <div className="mx-2 w-px h-5 bg-white/20" />
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold cursor-pointer mr-1"
                style={{ background: "var(--m-orange)" }}
              >
                ВП
              </div>
            </div>
          </div>

          {/* Mobile nav */}
          {mobileOpen && (
            <div className="lg:hidden py-2">
              {NAV.map(item => (
                <button
                  key={item.label}
                  className="w-full text-left text-white/80 hover:text-white py-2.5 border-b text-sm font-semibold"
                  style={{ borderColor: "rgba(255,255,255,.1)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* ══ 4. TICKER ══ */}
      <div
        className="m-ticker-wrap border-b overflow-hidden"
        style={{ background: "var(--m-blue-hdr)", borderColor: "rgba(255,255,255,.08)", height: 32, display: "flex", alignItems: "center" }}
      >
        <div
          className="shrink-0 px-3 flex items-center gap-1.5 border-r"
          style={{ borderColor: "rgba(255,255,255,.15)", height: "100%" }}
        >
          <Icon name="Zap" size={12} style={{ color: "var(--m-orange)" }} />
          <span className="text-white font-bold" style={{ fontSize: 11 }}>НОВОСТИ</span>
        </div>
        <div className="m-ticker-track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i} className="m-ticker-item">
              <span className="w-1 h-1 rounded-full shrink-0" style={{ background: "var(--m-orange)" }} />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ══ 5. HERO SLIDER ══ */}
      <section className="relative overflow-hidden" style={{ height: 380 }}>
        {SLIDES.map((sl, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === slide ? 1 : 0, pointerEvents: i === slide ? "auto" : "none" }}
          >
            <img src={sl.img} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(100deg, rgba(6,40,80,.82) 0%, rgba(6,40,80,.45) 60%, rgba(6,40,80,.05) 100%)" }}
            />
          </div>
        ))}

        {/* Slide text */}
        <div className="relative h-full max-w-screen-xl mx-auto px-4 flex flex-col justify-center">
          <div className="max-w-lg m-anim" key={slide}>
            <div
              className="inline-block mb-4 font-bold"
              style={{ background: "var(--m-orange)", color: "#fff", fontSize: 11, padding: "3px 10px", borderRadius: 1 }}
            >
              {["СТУДЕНТАМ", "НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ", "КАРЬЕРА"][slide]}
            </div>
            <h1 className="text-white font-bold mb-3" style={{ fontSize: 28, lineHeight: 1.2 }}>
              {s.title}
            </h1>
            <p style={{ color: "rgba(255,255,255,.82)", fontSize: 14, marginBottom: 20, lineHeight: 1.55 }}>
              {s.sub}
            </p>
            <div className="flex gap-3">
              <button className="m-btn m-btn-orange">{s.btn}</button>
              <button className="m-btn m-btn-ghost-white">Узнать больше</button>
            </div>
          </div>
        </div>

        {/* Dots + arrows */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2">
          {SLIDES.map((_, i) => (
            <button key={i} className={`slider-dot${i === slide ? " active" : ""}`} onClick={() => setSlide(i)} />
          ))}
        </div>
        <button
          onClick={() => setSlide((slide - 1 + SLIDES.length) % SLIDES.length)}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-colors"
          style={{ background: "rgba(0,0,0,.35)", borderRadius: 1 }}
        >
          <Icon name="ChevronLeft" size={20} className="text-white" />
        </button>
        <button
          onClick={() => setSlide((slide + 1) % SLIDES.length)}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center transition-colors"
          style={{ background: "rgba(0,0,0,.35)", borderRadius: 1 }}
        >
          <Icon name="ChevronRight" size={20} className="text-white" />
        </button>
      </section>

      {/* ══ 6. MAIN BODY ══ */}
      <div className="max-w-screen-xl mx-auto px-4 py-5">
        <div className="flex gap-5">

          {/* ── LEFT MAIN ── */}
          <main className="flex-1 min-w-0 space-y-6">

            {/* ─ NEWS SECTION ─ */}
            <section>
              <div className="m-sec-hdr">
                <h2><span className="acc" />Лента активности</h2>
                <a href="#" className="m-link-more">Все публикации <Icon name="ChevronRight" size={13} /></a>
              </div>

              {/* Quick post */}
              <div
                className="flex gap-3 items-center p-3 mb-4 border"
                style={{ background: "#fff", borderColor: "var(--m-border-lt)", borderRadius: 1 }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                  style={{ background: "var(--m-blue)" }}
                >ВП</div>
                <div
                  className="flex-1 bg-[#F4F6F9] px-3 py-2 text-sm cursor-pointer hover:bg-[#EEF4FB] transition-colors border"
                  style={{ borderColor: "var(--m-border-lt)", borderRadius: 1, color: "var(--m-text-lt)", fontSize: 13 }}
                >
                  Поделитесь новостью или идеей с сообществом...
                </div>
                <button className="m-btn m-btn-blue shrink-0" style={{ fontSize: 12, padding: "6px 14px" }}>
                  <Icon name="Send" size={13} /> Опубликовать
                </button>
              </div>

              {/* 3-col news grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {NEWS_MAIN.map((n, i) => (
                  <div key={n.id} className={`m-news-card flex flex-col m-anim m-d${i + 1}`}>
                    {/* Image */}
                    <div className="m-img-zoom overflow-hidden" style={{ height: n.img ? 160 : 0 }}>
                      {n.img && <img src={n.img} alt="" className="w-full h-full object-cover" />}
                    </div>
                    <div className="p-3 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Tag type={n.tagType} label={n.tag} />
                        <span style={{ fontSize: 11, color: "var(--m-text-lt)" }}>{n.date}</span>
                      </div>
                      <h3
                        className="m-nc-title font-bold leading-snug mb-2 transition-colors"
                        style={{ fontSize: 14, color: "var(--m-text)" }}
                      >
                        {n.title}
                      </h3>
                      <p style={{ fontSize: 12, color: "var(--m-text-md)", lineHeight: 1.5 }} className="mb-3">
                        {n.text}
                      </p>
                      <div
                        className="mt-auto flex items-center justify-between pt-2"
                        style={{ borderTop: "1px solid var(--m-border-lt)" }}
                      >
                        <div className="flex items-center gap-3" style={{ color: "var(--m-text-lt)", fontSize: 11 }}>
                          <span className="flex items-center gap-1"><Icon name="Eye" size={11} /> {n.views}</span>
                          <span className="flex items-center gap-1"><Icon name="MessageCircle" size={11} /> {n.comments}</span>
                        </div>
                        <button
                          className="m-btn m-btn-blue"
                          style={{ fontSize: 11, padding: "4px 10px" }}
                        >
                          Читать
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* List news (below grid) */}
              <div
                className="mt-4 bg-white border"
                style={{ borderColor: "var(--m-border-lt)", borderRadius: 1 }}
              >
                {NEWS_SIDE.map((n, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 px-3 py-2.5 border-b hover:bg-[#F7FAFD] cursor-pointer transition-colors m-anim"
                    style={{ borderColor: "var(--m-border-lt)", animationDelay: `${i * 50}ms` }}
                  >
                    <Tag type={n.tagType} label={n.tag} />
                    <div className="flex-1 min-w-0">
                      <span
                        className="text-sm leading-snug hover:text-[#E8600A] transition-colors"
                        style={{ color: "var(--m-text)", fontSize: 13 }}
                      >
                        {n.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs" style={{ color: "var(--m-text-lt)" }}>{n.date}</span>
                  </div>
                ))}
                <div className="px-3 py-2 flex justify-end">
                  <a href="#" className="m-link-more text-xs">Все публикации <Icon name="ChevronRight" size={12} /></a>
                </div>
              </div>
            </section>

            {/* ─ GROUPS ─ */}
            <section>
              <div className="m-sec-hdr">
                <h2><span className="acc" />Группы и сообщества</h2>
                <a href="#" className="m-link-more">Все группы <Icon name="ChevronRight" size={13} /></a>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {GROUPS.map((g, i) => (
                  <div
                    key={i}
                    className="bg-white border p-3 cursor-pointer hover:shadow-md transition-shadow m-anim"
                    style={{ borderColor: "var(--m-border-lt)", borderTop: "3px solid var(--m-blue)", borderRadius: 1, animationDelay: `${i * 50}ms` }}
                  >
                    <div
                      className="w-8 h-8 flex items-center justify-center mb-2"
                      style={{ background: "var(--m-bg)", borderRadius: 1 }}
                    >
                      <Icon name="Users" size={16} style={{ color: "var(--m-blue)" }} />
                    </div>
                    <p className="font-bold text-sm leading-snug mb-2" style={{ color: "var(--m-text)", fontSize: 13 }}>{g.name}</p>
                    <div className="flex items-center justify-between">
                      <Tag type={g.tagType} label={g.tag} />
                      <span className="flex items-center gap-1 text-xs" style={{ color: "var(--m-text-lt)", fontSize: 11 }}>
                        <Icon name="Users" size={11} /> {g.members}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ─ VACANCIES ─ */}
            <section>
              <div className="m-sec-hdr">
                <h2><span className="acc" />Стажировки и вакансии</h2>
                <a href="#" className="m-link-more">Все вакансии <Icon name="ChevronRight" size={13} /></a>
              </div>
              <div className="bg-white border overflow-hidden" style={{ borderColor: "var(--m-border-lt)", borderRadius: 1 }}>
                {/* Table header */}
                <div
                  className="hidden md:grid grid-cols-[2fr_1.2fr_1fr_1.2fr] px-4 py-2.5 text-xs font-bold text-white"
                  style={{ background: "var(--m-blue)", gap: 8 }}
                >
                  <span>Должность / Компания</span>
                  <span>Тип занятости</span>
                  <span>Зарплата</span>
                  <span>Навыки</span>
                </div>
                {VACANCIES.map((v, i) => (
                  <div
                    key={i}
                    className="grid md:grid-cols-[2fr_1.2fr_1fr_1.2fr] gap-2 px-4 py-3 border-b hover:bg-[#F7FAFD] cursor-pointer transition-colors m-anim"
                    style={{ borderColor: "var(--m-border-lt)", alignItems: "center", animationDelay: `${i * 60}ms` }}
                  >
                    <div>
                      <p className="font-bold text-sm" style={{ color: "var(--m-text)", fontSize: 13 }}>{v.title}</p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--m-text-lt)", fontSize: 12 }}>{v.company}</p>
                    </div>
                    <div><Tag type={v.type === "Стажировка" ? "orange" : "blue"} label={v.type} /></div>
                    <div className="font-bold text-sm" style={{ color: "var(--m-orange)", fontSize: 13 }}>от {v.salary}</div>
                    <div className="flex flex-wrap gap-1">
                      {v.tags.map(t => <Tag key={t} type="gray" label={t} />)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3">
                <button className="m-btn m-btn-outline" style={{ fontSize: 12 }}>
                  <Icon name="Briefcase" size={13} /> Смотреть все вакансии
                </button>
              </div>
            </section>

            {/* ─ PEOPLE ─ */}
            <section>
              <div className="m-sec-hdr">
                <h2><span className="acc" />Участники платформы</h2>
                <a href="#" className="m-link-more">Поиск людей <Icon name="ChevronRight" size={13} /></a>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {PEOPLE.map((p, i) => (
                  <div
                    key={i}
                    className="m-person-card flex items-start gap-3 p-3 cursor-pointer m-anim"
                    style={{ borderRadius: 1, animationDelay: `${i * 60}ms` }}
                  >
                    <Avatar className="w-11 h-11 shrink-0">
                      <AvatarFallback
                        className="text-white text-sm font-bold"
                        style={{ background: "var(--m-blue)", fontSize: 13 }}
                      >{p.av}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-sm" style={{ color: "var(--m-text)", fontSize: 13 }}>{p.name}</p>
                      <p className="text-xs mt-0.5 mb-2" style={{ color: "var(--m-text-lt)", fontSize: 11 }}>{p.role}</p>
                      <div className="flex flex-wrap gap-1">
                        {p.skills.map(s => <Tag key={s} type="blue" label={s} />)}
                      </div>
                    </div>
                    <button
                      className="m-btn m-btn-outline shrink-0"
                      style={{ fontSize: 11, padding: "4px 10px" }}
                    >
                      <Icon name="UserPlus" size={12} /> Добавить
                    </button>
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="hidden lg:block shrink-0" style={{ width: 280 }}>

            {/* Events widget */}
            <div className="m-widget">
              <div className="m-widget-hdr">
                <Icon name="CalendarDays" size={14} /> Ближайшие события
              </div>
              <div className="m-widget-body p-0">
                {EVENTS.map((e, i) => (
                  <div
                    key={i}
                    className="flex gap-2.5 p-2.5 border-b hover:bg-[#F7FAFD] cursor-pointer transition-colors"
                    style={{ borderColor: "var(--m-border-lt)" }}
                  >
                    <div className="m-date-badge">
                      <div className="font-bold" style={{ fontSize: 17, lineHeight: 1 }}>{e.day}</div>
                      <div style={{ fontSize: 9, opacity: .85, marginTop: 1 }}>{e.mon}</div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="font-bold leading-snug"
                        style={{ fontSize: 12, color: "var(--m-text)", lineHeight: 1.35 }}
                      >{e.title}</p>
                      <p className="mt-0.5 flex items-center gap-1" style={{ fontSize: 11, color: "var(--m-text-lt)" }}>
                        <Icon name="MapPin" size={10} /> {e.place}
                      </p>
                      <div className="mt-1"><Tag type={e.type === "Офлайн" ? "blue" : e.type === "Онлайн" ? "orange" : "gray"} label={e.type} /></div>
                    </div>
                  </div>
                ))}
                <div className="p-2.5">
                  <button className="m-btn m-btn-outline w-full justify-center" style={{ fontSize: 11 }}>
                    <Icon name="Calendar" size={12} /> Полный календарь
                  </button>
                </div>
              </div>
            </div>

            {/* Quick links widget */}
            <div className="m-widget">
              <div className="m-widget-hdr">
                <Icon name="LayoutGrid" size={14} /> Разделы
              </div>
              <div className="m-widget-body p-0">
                {[
                  { icon: "LayoutDashboard", label: "Лента новостей",  count: "124" },
                  { icon: "Users",           label: "Группы",           count: "540" },
                  { icon: "CalendarDays",    label: "Календарь",        count: "48" },
                  { icon: "Briefcase",       label: "Вакансии",         count: "93" },
                  { icon: "Award",           label: "Выпускники",       count: "3 200" },
                  { icon: "UserSearch",      label: "Поиск людей",      count: "" },
                  { icon: "Info",            label: "О платформе",      count: "" },
                ].map((item, i) => (
                  <button
                    key={i}
                    className="w-full flex items-center gap-2 px-3 py-2.5 border-b hover:bg-[#EEF4FB] transition-colors text-left"
                    style={{ borderColor: "var(--m-border-lt)", color: "var(--m-text)", fontSize: 13 }}
                  >
                    <Icon name={item.icon} size={14} style={{ color: "var(--m-blue)", flexShrink: 0 }} />
                    <span className="flex-1">{item.label}</span>
                    {item.count && (
                      <span className="m-tag m-tag-blue">{item.count}</span>
                    )}
                    <Icon name="ChevronRight" size={12} style={{ color: "var(--m-text-lt)", flexShrink: 0 }} />
                  </button>
                ))}
              </div>
            </div>

            {/* Register CTA */}
            <div
              className="p-4 relative overflow-hidden"
              style={{ background: "var(--m-blue-deep)", borderRadius: 1 }}
            >
              <div
                className="absolute -top-5 -right-5 w-20 h-20 rounded-full"
                style={{ background: "rgba(232,96,10,.2)" }}
              />
              <div className="relative">
                <Icon name="GraduationCap" size={28} className="text-white/80 mb-2" />
                <p className="font-bold text-white mb-1" style={{ fontSize: 14 }}>Новый участник?</p>
                <p className="text-xs mb-3 leading-relaxed" style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>
                  Создайте профиль и получите доступ ко всем возможностям платформы
                </p>
                <button className="m-btn m-btn-orange w-full justify-center" style={{ fontSize: 12 }}>
                  <Icon name="UserPlus" size={13} /> Создать аккаунт
                </button>
              </div>
            </div>

            {/* Popular skills */}
            <div className="m-widget mt-3.5">
              <div className="m-widget-hdr">
                <Icon name="Tag" size={14} /> Популярные навыки
              </div>
              <div className="m-widget-body flex flex-wrap gap-1.5">
                {["Python", "AutoCAD", "MATLAB", "React", "Excel", "GIS", "ML", "Civil 3D", "Agile", "SQL", "Figma", "Arduino"].map(s => (
                  <button
                    key={s}
                    className="m-tag m-tag-blue hover:bg-[#1071B3] hover:text-white transition-colors"
                    style={{ cursor: "pointer" }}
                  >{s}</button>
                ))}
              </div>
            </div>

          </aside>
        </div>
      </div>

      {/* ══ 7. FOOTER ══ */}
      <footer style={{ background: "var(--m-blue-deep)", marginTop: 32 }}>
        {/* Top footer */}
        <div className="max-w-screen-xl mx-auto px-4 pt-8 pb-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Logo col */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-9 h-9 flex items-center justify-center text-white font-bold"
                style={{ background: "var(--m-blue)", borderRadius: 2, fontSize: 15 }}
              >АС</div>
              <span className="font-bold text-white" style={{ fontSize: 15 }}>АкадемСеть</span>
            </div>
            <p className="mb-4" style={{ fontSize: 12, color: "rgba(255,255,255,.5)", lineHeight: 1.6 }}>
              Социальная платформа для студентов, преподавателей и выпускников академического сообщества.
            </p>
            <div className="flex gap-2">
              {[{ icon: "MessageCircle", label: "ВКонтакте" }, { icon: "Send", label: "Telegram" }].map(soc => (
                <button
                  key={soc.label}
                  className="flex items-center gap-1.5 text-xs px-2.5 py-1.5"
                  style={{
                    background: "rgba(255,255,255,.1)",
                    color: "rgba(255,255,255,.7)",
                    borderRadius: 1,
                    fontSize: 11,
                  }}
                >
                  <Icon name={soc.icon} size={12} /> {soc.label}
                </button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {[
            { title: "Платформа",   links: ["Лента", "Группы", "События", "Стажировки"] },
            { title: "Сообщество",  links: ["Студенты", "Преподаватели", "Выпускники", "Проекты"] },
            { title: "Поддержка",   links: ["О платформе", "Правила", "Помощь", "Обратная связь"] },
          ].map(col => (
            <div key={col.title}>
              <p className="font-bold text-white mb-3" style={{ fontSize: 13 }}>{col.title}</p>
              <ul className="space-y-2">
                {col.links.map(l => (
                  <li key={l}>
                    <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-white" style={{ color: "rgba(255,255,255,.5)", fontSize: 12 }}>
                      <span style={{ color: "var(--m-orange)", fontSize: 14, lineHeight: 1 }}>›</span> {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,.08)" }}
        >
          <div
            className="max-w-screen-xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-2"
            style={{ fontSize: 11, color: "rgba(255,255,255,.35)" }}
          >
            <span>© 2026 АкадемСеть. Все права защищены.</span>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white/60 transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white/60 transition-colors">Пользовательское соглашение</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
