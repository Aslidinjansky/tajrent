import express from 'express';
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, '..', 'data');
const PUBLIC_DIR = join(__dirname, '..', 'public');

mkdirSync(DATA_DIR, { recursive: true });

// ============ FILE DB ============
function loadJSON(name, def = []) {
  const f = join(DATA_DIR, name + '.json');
  if (!existsSync(f)) { writeFileSync(f, JSON.stringify(def)); return def; }
  try { return JSON.parse(readFileSync(f, 'utf8')); } catch { return def; }
}
function saveJSON(name, data) { writeFileSync(join(DATA_DIR, name + '.json'), JSON.stringify(data, null, 2)); }

// ============ SEED DATA ============
function seedData() {
  const users = loadJSON('users');
  if (users.length > 0) return;
  
  const defaultUsers = [
    { id: 1, name: 'Анна Морозова', phone: '+79991234567', password: '1234', role: 'landlord', city: 'Москва', bio: 'Аренда свадебных платьев и костюмов', verified: true, avatar: null, subscribers: 89, likes: 156, rating: 4.7, blocked: false, createdAt: '2024-01-15' },
    { id: 2, name: 'Карим Джамолов', phone: '+79992345678', password: '1234', role: 'landlord', city: 'Москва', bio: 'Прокат автомобилей премиум-класса', verified: true, avatar: null, subscribers: 56, likes: 78, rating: 5.0, blocked: false, createdAt: '2024-02-20' },
    { id: 3, name: 'Сергей Лебедев', phone: '+79993456789', password: '1234', role: 'landlord', city: 'Санкт-Петербург', bio: 'Аренда квартир и апартаментов', verified: false, avatar: null, subscribers: 34, likes: 45, rating: 4.0, blocked: false, createdAt: '2024-03-10' },
    { id: 4, name: 'Марина Козлова', phone: '+79994567890', password: '1234', role: 'landlord', city: 'Казань', bio: 'Гостиницы и дачи для отдыха', verified: false, avatar: null, subscribers: 21, likes: 33, rating: 3.5, blocked: false, createdAt: '2024-04-05' },
    { id: 5, name: 'Дмитрий Волков', phone: '+79995678901', password: '1234', role: 'tenant', city: 'Москва', bio: '', verified: false, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: '2024-05-01' },
    { id: 6, name: 'Иван Петров', phone: '+79996789012', password: '1234', role: 'tenant', city: 'Новосибирск', bio: '', verified: false, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: '2024-06-15' },
    { id: 999, name: 'Админ', phone: '+70000000000', password: 'admin', role: 'admin', city: '', bio: '', verified: true, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: '2024-01-01' },
    { id: 10, name: 'Елена Смирнова', phone: '+79997777777', password: '1234', role: 'landlord', city: 'Екатеринбург', bio: 'Аренда техники для мероприятий', verified: false, passportPhoto: 'passport_10.jpg', passportStatus: 'pending', avatar: null, subscribers: 12, likes: 20, rating: 4.5, blocked: false, createdAt: '2024-07-01' },
    { id: 11, name: 'Олег Новиков', phone: '+79998888888', password: '1234', role: 'landlord', city: 'Ростов-на-Дону', bio: 'Аренда велосипедов и самокатов', verified: false, passportPhoto: 'passport_11.jpg', passportStatus: 'pending', avatar: null, subscribers: 8, likes: 15, rating: 4.2, blocked: false, createdAt: '2024-07-05' },
  ];
  saveJSON('users', defaultUsers);

  const ads = [
    { id: 1, title: 'Гостиница «Звёздная»', category: 'Гостиницы', price: 3200, unit: 'ночь', landlordId: 4, city: 'Казань', desc: 'Уютная гостиница в центре города. Все удобства, Wi-Fi, завтрак включён. Рядом метро и магазины.', images: [], videos: [], tags: ['wi-fi', 'завтрак', 'центр', 'метро'], isNew: false, discount: 0, featured: true, published: true, deposit: 1000, views: 567, likes: 45, comments: 23, commentCount: 23, createdAt: '2024-06-01' },
    { id: 2, title: 'Дача у озера, 3 спальни', category: 'Дачи', price: 5000, unit: 'сутки', landlordId: 4, city: 'Казань', desc: 'Большая дача у живописного озера. 3 спальни, кухня, баня, мангал. Идеально для семьи или компании.', images: [], videos: [], tags: ['озеро', 'баня', 'мангал', 'семья'], isNew: false, discount: 15, featured: false, published: true, deposit: 5000, views: 412, likes: 31, comments: 12, commentCount: 12, createdAt: '2024-06-05' },
    { id: 3, title: 'Студия в центре, 35м²', category: 'Квартиры', price: 2800, unit: 'ночь', landlordId: 3, city: 'Санкт-Петербург', desc: 'Современная студия в историческом центре. Свежий ремонт, всё необходимое есть. Рядом Невский проспект.', images: [], videos: [], tags: ['центр', 'небольшой', 'ремонт'], isNew: true, discount: 0, featured: true, published: true, deposit: 2000, views: 234, likes: 7, comments: 15, commentCount: 15, createdAt: '2024-06-10' },
    { id: 4, title: 'Вечернее платье «Elegance»', category: 'Платья', price: 2500, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Элегантное вечернее платье размера M. Идеально для торжеств и вечеринок. Новое, не носилось.', images: [], videos: [], tags: ['вечернее', 'новое', 'размер-m'], isNew: true, discount: 0, featured: false, published: true, deposit: 500, views: 203, likes: 31, comments: 9, commentCount: 9, createdAt: '2024-06-12' },
    { id: 5, title: 'Свадебное платье «Aria»', category: 'Платья', price: 3500, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Роскошное свадебное платье с длинным шлейфом. Размер 44-46. Включает фату и аксессуары.', images: [], videos: [], tags: ['свадебное', 'шлейф', '44-46'], isNew: false, discount: 10, featured: true, published: true, deposit: 2000, views: 156, likes: 24, comments: 8, commentCount: 8, createdAt: '2024-06-15' },
    { id: 6, title: 'Мужской костюм «Classic»', category: 'Костюмы', price: 2000, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Классический мужской костюм-тройка. Чёрный, размер 50. Идеально для свадьбы или делового мероприятия.', images: [], videos: [], tags: ['тройка', 'размер-50', 'деловой'], isNew: false, discount: 20, featured: false, published: true, deposit: 1000, views: 92, likes: 18, comments: 5, commentCount: 5, createdAt: '2024-06-18' },
    { id: 7, title: 'Toyota Camry 2023', category: 'Авто', price: 4000, unit: 'день', landlordId: 2, city: 'Москва', desc: 'Новая Toyota Camry 2023 года. Автомат, полный привод, кондиционер. Страховка включена.', images: [], videos: [], tags: ['автомат', 'полный-привод', 'страховка'], isNew: true, discount: 0, featured: true, published: true, deposit: 10000, views: 89, likes: 12, comments: 3, commentCount: 3, createdAt: '2024-06-20' },
    { id: 8, title: 'Фата кружевная', category: 'Платья', price: 800, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Нежная кружевная фата ручной работы. Длина 2 метра. Подходит к любому свадебному платью.', images: [], videos: [], tags: ['ручная-работа', '2-метра', 'кружевная'], isNew: false, discount: 0, featured: false, published: true, deposit: 300, views: 45, likes: 9, comments: 2, commentCount: 2, createdAt: '2024-06-22' },
  ];
  saveJSON('ads', ads);

  const reviews = [
    { id: 1, adId: 1, userId: 5, rating: 5, text: 'Отличная гостиница! Чисто, уютно, персонал вежливый.', createdAt: '2024-07-01' },
    { id: 2, adId: 1, userId: 6, rating: 4, text: 'Хороший вариант, но завтрак мог бы быть лучше.', createdAt: '2024-07-05' },
    { id: 3, adId: 5, userId: 5, rating: 5, text: 'Платье просто волшебное! На свадьбе все были в восторге.', createdAt: '2024-07-10' },
    { id: 4, adId: 7, userId: 6, rating: 5, text: 'Машина в идеальном состоянии, всё прошло отлично!', createdAt: '2024-07-15' },
    { id: 5, adId: 3, userId: 5, rating: 4, text: 'Квартира хорошая, но немного шумно из-за улицы.', createdAt: '2024-07-20' },
  ];
  saveJSON('reviews', reviews);

  const reports = [
    { id: 1, adId: 3, userId: 6, reason: 'Подозрительная цена', status: 'pending', createdAt: '2024-07-25' },
    { id: 2, adId: 8, userId: 5, reason: 'Фото не соответствует описанию', status: 'pending', createdAt: '2024-07-28' },
  ];
  saveJSON('reports', reports);

  const chats = {};
  saveJSON('chats', chats);

  const settings = { siteName: 'TajRent', commission: 10, minDeposit: 100, maxDeposit: 50000, maintenance: false, welcomeMessage: 'Добро пожаловать в TajRent!' };
  saveJSON('settings', settings);

  const comments = [
    { id: 1, adId: 1, userId: 5, text: 'Супер место! Рекомендую всем.', createdAt: '2024-07-02' },
    { id: 2, adId: 5, userId: 6, text: 'Платье шикарное, спасибо большое!', createdAt: '2024-07-11' },
    { id: 3, adId: 7, userId: 5, text: 'Машина огонь, буду брать ещё.', createdAt: '2024-07-16' },
  ];
  saveJSON('comments', comments);

  const favorites = { '5': [1, 3, 5, 7], '6': [2, 4] };
  saveJSON('favorites', favorites);

  const subscriptions = { '5': [1, 4], '6': [1, 2] };
  saveJSON('subscriptions', subscriptions);

  const rents = [
    { id: 1, adId: 1, userId: 5, deposit: 1000, status: 'completed', createdAt: '2024-07-01', paidThroughApp: true },
    { id: 2, adId: 5, userId: 5, deposit: 2000, status: 'active', createdAt: '2024-07-10', paidThroughApp: false },
    { id: 3, adId: 7, userId: 6, deposit: 10000, status: 'active', createdAt: '2024-07-15', paidThroughApp: true },
  ];
  saveJSON('rents', rents);

  const notifications = [
    { id: 1, userId: 5, type: 'rent', text: 'Ваша заявка на аренду одобрена', read: false, createdAt: '2024-07-28' },
    { id: 2, userId: 6, type: 'message', text: 'Новое сообщение от арендодателя', read: false, createdAt: '2024-07-29' },
    { id: 3, userId: 5, type: 'like', text: 'Ваш отзыв получил лайк', read: true, createdAt: '2024-07-25' },
  ];
  saveJSON('notifications', notifications);

  const activityLog = [
    { id: 1, userId: 999, action: 'verify_user', target: 'Елена Смирнова', createdAt: '2024-07-28' },
    { id: 2, userId: 999, action: 'publish_ad', target: 'Toyota Camry 2023', createdAt: '2024-07-25' },
    { id: 3, userId: 999, action: 'block_user', target: 'Тестовый пользователь', createdAt: '2024-07-20' },
  ];
  saveJSON('activity_log', activityLog);
}
seedData();

// ============ APP ============
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files
app.use(express.static(PUBLIC_DIR));

// ============ AUTH ============
function getUser(req) {
  const userId = parseInt(req.headers['x-user-id']) || parseInt(req.cookies?.userId) || null;
  if (!userId) return null;
  const users = loadJSON('users');
  return users.find(u => u.id === userId) || null;
}

// ============ API ROUTES ============
// Auth
app.post('/api/auth/login', (req, res) => {
  const { phone, password } = req.body;
  const users = loadJSON('users');
  const user = users.find(u => u.phone === phone && u.password === password);
  if (!user) return res.status(401).json({ error: 'Неверный телефон или пароль' });
  if (user.blocked) return res.status(403).json({ error: 'Аккаунт заблокирован' });
  res.json({ user, token: 'token-' + user.id });
});

app.post('/api/auth/register', (req, res) => {
  const { name, phone, password, role, city, bio } = req.body;
  const users = loadJSON('users');
  if (users.find(u => u.phone === phone)) return res.status(400).json({ error: 'Пользователь уже существует' });
  const newUser = { id: Date.now(), name, phone, password, role, city: city || '', bio: bio || '', verified: false, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: new Date().toISOString().split('T')[0] };
  users.push(newUser);
  saveJSON('users', users);
  res.json({ user: newUser, token: 'token-' + newUser.id });
});

// Users
app.get('/api/users', (req, res) => {
  const users = loadJSON('users');
  res.json(users);
});

app.get('/api/users/:id', (req, res) => {
  const users = loadJSON('users');
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Не найден' });
  res.json(user);
});

app.put('/api/users/:id', (req, res) => {
  const users = loadJSON('users');
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Не найден' });
  Object.assign(users[idx], req.body);
  saveJSON('users', users);
  res.json(users[idx]);
});

app.post('/api/users/:id/verify', (req, res) => {
  const users = loadJSON('users');
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Не найден' });
  user.verified = req.body.verified;
  saveJSON('users', users);
  res.json(user);
});

app.post('/api/users/:id/block', (req, res) => {
  const users = loadJSON('users');
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Не найден' });
  user.blocked = req.body.blocked;
  saveJSON('users', users);
  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  let users = loadJSON('users');
  users = users.filter(u => u.id !== parseInt(req.params.id));
  saveJSON('users', users);
  res.json({ ok: true });
});

// Ads
app.get('/api/ads', (req, res) => {
  let ads = loadJSON('ads');
  const { category, search, sort } = req.query;
  if (category && category !== 'all') ads = ads.filter(a => a.category === category);
  if (search) ads = ads.filter(a => a.title.toLowerCase().includes(search.toLowerCase()) || a.desc.toLowerCase().includes(search.toLowerCase()));
  if (sort === 'popular') ads.sort((a, b) => b.views - a.views);
  else if (sort === 'new') ads.sort((a, b) => b.id - a.id);
  else if (sort === 'cheap') ads.sort((a, b) => a.price - b.price);
  else if (sort === 'rating') ads.sort((a, b) => b.likes - a.likes);
  else if (sort === 'featured') ads = ads.filter(a => a.featured);
  else ads.sort((a, b) => b.createdAt < a.createdAt ? 1 : -1);
  // Attach landlord info
  const users = loadJSON('users');
  ads = ads.map(a => {
    const l = users.find(u => u.id === a.landlordId);
    return { ...a, landlordName: l?.name || 'Неизвестно', landlordVerified: l?.verified || false };
  });
  res.json(ads);
});

app.get('/api/ads/:id', (req, res) => {
  let ads = loadJSON('ads');
  const ad = ads.find(a => a.id === parseInt(req.params.id));
  if (!ad) return res.status(404).json({ error: 'Не найдено' });
  const users = loadJSON('users');
  const landlord = users.find(u => u.id === ad.landlordId);
  const reviews = loadJSON('reviews').filter(r => r.adId === ad.id);
  const comments = loadJSON('comments').filter(c => c.adId === ad.id);
  const adData = { ...ad, landlordName: landlord?.name || 'Неизвестно', landlordVerified: landlord?.verified || false, landlordRating: landlord?.rating || 0, reviews, comments };
  adData.views++;
  ads = ads.map(a => a.id === ad.id ? adData : a);
  saveJSON('ads', ads);
  res.json(adData);
});

app.post('/api/ads', (req, res) => {
  const { title, category, price, unit, desc, deposit, city, landlordId, images, videos, tags, isNew, discount, featured, address, size, rooms, amenities } = req.body;
  const ads = loadJSON('ads');
  const newAd = { id: Date.now(), title, category, price: parseInt(price) || 0, unit: unit || 'день', desc: desc || '', deposit: parseInt(deposit) || 0, city: city || '', landlordId: parseInt(landlordId), images: images || [], videos: videos || [], tags: tags || [], isNew: isNew || false, discount: parseInt(discount) || 0, featured: featured || false, address: address || '', size: size || '', rooms: parseInt(rooms) || 0, amenities: amenities || [], views: 0, likes: 0, comments: 0, published: false, createdAt: new Date().toISOString().split('T')[0] };
  ads.push(newAd);
  saveJSON('ads', ads);
  res.json(newAd);
});

app.put('/api/ads/:id', (req, res) => {
  const ads = loadJSON('ads');
  const idx = ads.findIndex(a => a.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Не найдено' });
  Object.assign(ads[idx], req.body);
  saveJSON('ads', ads);
  res.json(ads[idx]);
});

app.delete('/api/ads/:id', (req, res) => {
  let ads = loadJSON('ads');
  ads = ads.filter(a => a.id !== parseInt(req.params.id));
  saveJSON('ads', ads);
  res.json({ ok: true });
});

app.post('/api/ads/:id/like', (req, res) => {
  const ads = loadJSON('ads');
  const ad = ads.find(a => a.id === parseInt(req.params.id));
  if (!ad) return res.status(404).json({ error: 'Не найдено' });
  const userId = parseInt(req.body.userId);
  const favs = loadJSON('favorites');
  const userFavs = favs[userId] || [];
  if (userFavs.includes(ad.id)) {
    favs[userId] = userFavs.filter(id => id !== ad.id);
    ad.likes--;
  } else {
    favs[userId] = [...userFavs, ad.id];
    ad.likes++;
  }
  saveJSON('favorites', favs);
  saveJSON('ads', ads);
  res.json({ liked: favs[userId].includes(ad.id), likes: ad.likes });
});

// Reviews
app.post('/api/reviews', (req, res) => {
  const { adId, userId, rating, text } = req.body;
  const reviews = loadJSON('reviews');
  const newReview = { id: Date.now(), adId: parseInt(adId), userId: parseInt(userId), rating: parseInt(rating), text, createdAt: new Date().toISOString().split('T')[0] };
  reviews.push(newReview);
  saveJSON('reviews', reviews);
  res.json(newReview);
});

// Comments
app.post('/api/comments', (req, res) => {
  const { adId, userId, text } = req.body;
  const comments = loadJSON('comments');
  const newComment = { id: Date.now(), adId: parseInt(adId), userId: parseInt(userId), text, createdAt: new Date().toISOString().split('T')[0] };
  comments.push(newComment);
  saveJSON('comments', comments);
  // Increment ad comment count
  const ads = loadJSON('ads');
  const ad = ads.find(a => a.id === parseInt(adId));
  if (ad) { ad.comments++; saveJSON('ads', ads); }
  res.json(newComment);
});

// Subscriptions
app.post('/api/subscriptions', (req, res) => {
  const { userId, landlordId } = req.body;
  const subs = loadJSON('subscriptions');
  const userSubs = subs[userId] || [];
  if (userSubs.includes(landlordId)) {
    subs[userId] = userSubs.filter(id => id !== landlordId);
    // Decrement landlord subscribers
    const users = loadJSON('users');
    const l = users.find(u => u.id === landlordId);
    if (l) { l.subscribers = Math.max(0, l.subscribers - 1); saveJSON('users', users); }
  } else {
    subs[userId] = [...userSubs, landlordId];
    const users = loadJSON('users');
    const l = users.find(u => u.id === landlordId);
    if (l) { l.subscribers++; saveJSON('users', users); }
  }
  saveJSON('subscriptions', subs);
  res.json({ subscribed: subs[userId].includes(landlordId) });
});

// Reports
app.get('/api/reports', (req, res) => {
  const reports = loadJSON('reports');
  res.json(reports);
});

app.post('/api/reports', (req, res) => {
  const { adId, userId, reason } = req.body;
  const reports = loadJSON('reports');
  const newReport = { id: Date.now(), adId: parseInt(adId), userId: parseInt(userId), reason, status: 'pending', createdAt: new Date().toISOString().split('T')[0] };
  reports.push(newReport);
  saveJSON('reports', reports);
  res.json(newReport);
});

app.put('/api/reports/:id', (req, res) => {
  const reports = loadJSON('reports');
  const idx = reports.findIndex(r => r.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Не найдено' });
  reports[idx].status = req.body.status;
  saveJSON('reports', reports);
  res.json(reports[idx]);
});

app.delete('/api/reports/:id', (req, res) => {
  let reports = loadJSON('reports');
  reports = reports.filter(r => r.id !== parseInt(req.params.id));
  saveJSON('reports', reports);
  res.json({ ok: true });
});

app.delete('/api/reviews/:id', (req, res) => {
  let reviews = loadJSON('reviews');
  reviews = reviews.filter(r => r.id !== parseInt(req.params.id));
  saveJSON('reviews', reviews);
  res.json({ ok: true });
});

app.delete('/api/comments/:id', (req, res) => {
  let comments = loadJSON('comments');
  comments = comments.filter(c => c.id !== parseInt(req.params.id));
  saveJSON('comments', comments);
  res.json({ ok: true });
});

// Users POST (for registration)
app.post('/api/users', (req, res) => {
  const { name, phone, password, role, city, bio } = req.body;
  const users = loadJSON('users');
  if (users.find(u => u.phone === phone)) return res.status(400).json({ error: 'Пользователь уже существует' });
  const newUser = { id: Date.now(), name, phone, password, role: role || 'tenant', city: city || '', bio: bio || '', verified: false, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: new Date().toISOString().split('T')[0] };
  users.push(newUser);
  saveJSON('users', users);
  res.json(newUser);
});

// Chats
app.get('/api/chats/:userId', (req, res) => {
  const chats = loadJSON('chats');
  res.json(chats[req.params.userId] || []);
});

app.post('/api/chats', (req, res) => {
  const { userId, toId, text } = req.body;
  const chats = loadJSON('chats');
  const key = [parseInt(userId), parseInt(toId)].sort().join('-');
  if (!chats[key]) chats[key] = [];
  chats[key].push({ from: parseInt(userId), to: parseInt(toId), text, createdAt: new Date().toISOString() });
  saveJSON('chats', chats);
  res.json({ ok: true });
});

// Settings
app.get('/api/settings', (req, res) => {
  res.json(loadJSON('settings'));
});

app.put('/api/settings', (req, res) => {
  const settings = { ...loadJSON('settings'), ...req.body };
  saveJSON('settings', settings);
  res.json(settings);
});

// Rents
app.get('/api/rents', (req, res) => {
  const rents = loadJSON('rents');
  res.json(rents);
});

app.post('/api/rents', (req, res) => {
  const { adId, userId, deposit } = req.body;
  const rents = loadJSON('rents');
  const newRent = { id: Date.now(), adId: parseInt(adId), userId: parseInt(userId), deposit: parseInt(deposit) || 0, status: 'active', createdAt: new Date().toISOString().split('T')[0] };
  rents.push(newRent);
  saveJSON('rents', rents);
  res.json(newRent);
});

app.put('/api/rents/:id', (req, res) => {
  const rents = loadJSON('rents');
  const idx = rents.findIndex(r => r.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Не найдено' });
  rents[idx].status = req.body.status;
  saveJSON('rents', rents);
  res.json(rents[idx]);
});

// Favorites
app.get('/api/favorites/:userId', (req, res) => {
  const favs = loadJSON('favorites');
  res.json(favs[req.params.userId] || []);
});

// Stats
app.get('/api/stats', (req, res) => {
  const users = loadJSON('users');
  const ads = loadJSON('ads');
  const reviews = loadJSON('reviews');
  const reports = loadJSON('reports');
  const rents = loadJSON('rents');
  res.json({
    totalUsers: users.filter(u => u.role !== 'admin').length,
    totalVerified: users.filter(u => u.verified && u.role !== 'admin').length,
    totalAds: ads.length,
    publishedAds: ads.filter(a => a.published).length,
    pendingAds: ads.filter(a => !a.published).length,
    totalReviews: reviews.length,
    totalReports: reports.filter(r => r.status === 'pending').length,
    totalRents: rents.length,
    totalRevenue: rents.reduce((s, r) => s + (r.deposit || 0), 0),
  });
});

// Categories
app.get('/api/categories', (req, res) => {
  res.json([
    { name: 'Платья', icon: 'fa-tshirt', color: '#F472B6', img: 'https://picsum.photos/seed/dress/200/200', count: 0 },
    { name: 'Костюмы', icon: 'fa-user-tie', color: '#3B82F6', img: 'https://picsum.photos/seed/suit/200/200', count: 0 },
    { name: 'Авто', icon: 'fa-car', color: '#10B981', img: 'https://picsum.photos/seed/car/200/200', count: 0 },
    { name: 'Гостиницы', icon: 'fa-hotel', color: '#8B5CF6', img: 'https://picsum.photos/seed/hotel/200/200', count: 0 },
    { name: 'Дачи', icon: 'fa-home', color: '#F59E0B', img: 'https://picsum.photos/seed/cabin/200/200', count: 0 },
    { name: 'Квартиры', icon: 'fa-building', color: '#6366F1', img: 'https://picsum.photos/seed/apartment/200/200', count: 0 },
    { name: 'Техника', icon: 'fa-camera', color: '#EC4899', img: 'https://picsum.photos/seed/camera/200/200', count: 0 },
    { name: 'Другое', icon: 'fa-box', color: '#6B7280', img: 'https://picsum.photos/seed/box/200/200', count: 0 },
  ]);
});

// Verification with passport
app.post('/api/users/:id/verification', (req, res) => {
  const { passportPhoto } = req.body;
  const users = loadJSON('users');
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Не найден' });
  user.passportPhoto = passportPhoto || 'passport_' + user.id + '.jpg';
  user.passportStatus = 'pending';
  saveJSON('users', users);
  res.json(user);
});

app.get('/api/verifications', (req, res) => {
  const users = loadJSON('users');
  const pending = users.filter(u => u.passportStatus === 'pending' && u.role !== 'admin');
  res.json(pending);
});

app.post('/api/verifications/:id/approve', (req, res) => {
  const users = loadJSON('users');
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Не найден' });
  user.verified = true;
  user.passportStatus = 'approved';
  saveJSON('users', users);
  const log = loadJSON('activity_log');
  log.push({ id: Date.now(), userId: 999, action: 'verify_user', target: user.name, createdAt: new Date().toISOString().split('T')[0] });
  saveJSON('activity_log', log);
  res.json(user);
});

app.post('/api/verifications/:id/reject', (req, res) => {
  const users = loadJSON('users');
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ error: 'Не найден' });
  user.passportStatus = 'rejected';
  saveJSON('users', users);
  res.json(user);
});

// Notifications
app.get('/api/notifications/:userId', (req, res) => {
  const notifications = loadJSON('notifications');
  res.json(notifications.filter(n => n.userId === parseInt(req.params.userId)));
});

app.put('/api/notifications/:id/read', (req, res) => {
  const notifications = loadJSON('notifications');
  const idx = notifications.findIndex(n => n.id === parseInt(req.params.id));
  if (idx !== -1) { notifications[idx].read = true; saveJSON('notifications', notifications); }
  res.json({ ok: true });
});

app.put('/api/notifications/:userId/read-all', (req, res) => {
  const notifications = loadJSON('notifications');
  notifications.forEach(n => { if (n.userId === parseInt(req.params.userId)) n.read = true; });
  saveJSON('notifications', notifications);
  res.json({ ok: true });
});

// Activity log
app.get('/api/activity', (req, res) => {
  res.json(loadJSON('activity_log'));
});

// Ad landlord (get ads for specific landlord)
app.get('/api/ads/landlord/:id', (req, res) => {
  const ads = loadJSON('ads');
  const myAds = ads.filter(a => a.landlordId === parseInt(req.params.id));
  res.json(myAds);
});

// Tags (popular)
app.get('/api/tags', (req, res) => {
  const ads = loadJSON('ads');
  const tagCounts = {};
  ads.forEach(a => (a.tags || []).forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
  const tags = Object.entries(tagCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
  res.json(tags);
});

// File upload simulation
app.post('/api/upload', (req, res) => {
  const { filename, type } = req.body;
  const url = '/uploads/' + (filename || 'file_' + Date.now() + '.jpg');
  res.json({ url });
});

// Publish/unpublish ad
app.post('/api/ads/:id/publish', (req, res) => {
  const ads = loadJSON('ads');
  const idx = ads.findIndex(a => a.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Не найдено' });
  ads[idx].published = req.body.published;
  saveJSON('ads', ads);
  res.json(ads[idx]);
});

// Admin edit any field
app.put('/api/admin/ads/:id', (req, res) => {
  const ads = loadJSON('ads');
  const idx = ads.findIndex(a => a.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Не найдено' });
  Object.assign(ads[idx], req.body);
  saveJSON('ads', ads);
  const log = loadJSON('activity_log');
  log.push({ id: Date.now(), userId: 999, action: 'edit_ad', target: ads[idx].title, createdAt: new Date().toISOString().split('T')[0] });
  saveJSON('activity_log', log);
  res.json(ads[idx]);
});

app.put('/api/admin/users/:id', (req, res) => {
  const users = loadJSON('users');
  const idx = users.findIndex(u => u.id === parseInt(req.params.id));
  if (idx === -1) return res.status(404).json({ error: 'Не найден' });
  Object.assign(users[idx], req.body);
  saveJSON('users', users);
  res.json(users[idx]);
});

// ============ SSR ROUTES ============
function loadTemplate(name) {
  try { return readFileSync(join(PUBLIC_DIR, name), 'utf8'); } catch { return null; }
}

// Ads page
app.get('/ads.html', (req, res) => {
  const html = loadTemplate('ads.html');
  if (!html) return res.status(404).send('Not found');
  res.type('html').send(html);
});

// Ad detail page
app.get('/ad-detail.html', (req, res) => {
  const html = loadTemplate('ad-detail.html');
  if (!html) return res.status(404).send('Not found');
  res.type('html').send(html);
});

// Landlord page
app.get('/landlord.html', (req, res) => {
  const html = loadTemplate('landlord.html');
  if (!html) return res.status(404).send('Not found');
  res.type('html').send(html);
});

// Admin page
app.get('/admin.html', (req, res) => {
  const html = loadTemplate('admin.html');
  if (!html) return res.status(404).send('Not found');
  res.type('html').send(html);
});

// Auth page
app.get('/auth.html', (req, res) => {
  const html = loadTemplate('auth.html');
  if (!html) return res.status(404).send('Not found');
  res.type('html').send(html);
});

// Profile page
app.get('/profile.html', (req, res) => {
  const html = loadTemplate('profile.html');
  if (!html) return res.status(404).send('Not found');
  res.type('html').send(html);
});

// Redirect root to ads
app.get('/', (req, res) => { res.redirect('/ads.html'); });

app.listen(3000, () => {
  console.log('TajRent v2 running on port 3000');
});
