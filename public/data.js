// TajRent - Static Data & Mock API for GitHub Pages
// This file replaces the server API when running on static hosting

const TAJRENT_DATA = {
  users: [
    { id: 1, name: 'Анна Морозова', phone: '+79991234567', password: '1234', role: 'landlord', city: 'Москва', bio: 'Аренда свадебных платьев и костюмов', verified: true, avatar: null, subscribers: 89, likes: 156, rating: 4.7, blocked: false, createdAt: '2024-01-15' },
    { id: 2, name: 'Карим Джамолов', phone: '+79992345678', password: '1234', role: 'landlord', city: 'Москва', bio: 'Прокат автомобилей премиум-класса', verified: true, avatar: null, subscribers: 56, likes: 78, rating: 5.0, blocked: false, createdAt: '2024-02-20' },
    { id: 3, name: 'Сергей Лебедев', phone: '+79993456789', password: '1234', role: 'landlord', city: 'Санкт-Петербург', bio: 'Аренда квартир и апартаментов', verified: false, avatar: null, subscribers: 34, likes: 45, rating: 4.0, blocked: false, createdAt: '2024-03-10' },
    { id: 4, name: 'Марина Козлова', phone: '+79994567890', password: '1234', role: 'landlord', city: 'Казань', bio: 'Гостиницы и дачи для отдыха', verified: false, avatar: null, subscribers: 21, likes: 33, rating: 3.5, blocked: false, createdAt: '2024-04-05' },
    { id: 5, name: 'Дмитрий Волков', phone: '+79995678901', password: '1234', role: 'tenant', city: 'Москва', bio: '', verified: false, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: '2024-05-01' },
    { id: 6, name: 'Иван Петров', phone: '+79996789012', password: '1234', role: 'tenant', city: 'Новосибирск', bio: '', verified: false, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: '2024-06-15' },
    { id: 999, name: 'Админ', phone: '+70000000000', password: 'admin', role: 'admin', city: '', bio: '', verified: true, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: '2024-01-01' },
    { id: 10, name: 'Елена Смирнова', phone: '+79997777777', password: '1234', role: 'landlord', city: 'Екатеринбург', bio: 'Аренда техники для мероприятий', verified: false, passportPhoto: 'passport_10.jpg', passportStatus: 'pending', avatar: null, subscribers: 12, likes: 20, rating: 4.5, blocked: false, createdAt: '2024-07-01' },
    { id: 11, name: 'Олег Новиков', phone: '+79998888888', password: '1234', role: 'landlord', city: 'Ростов-на-Дону', bio: 'Аренда велосипедов и самокатов', verified: false, passportPhoto: 'passport_11.jpg', passportStatus: 'pending', avatar: null, subscribers: 8, likes: 15, rating: 4.2, blocked: false, createdAt: '2024-07-05' },
  ],
  ads: [
    { id: 1, title: 'Гостиница «Звёздная»', category: 'Гостиницы', price: 3200, unit: 'ночь', landlordId: 4, city: 'Казань', desc: 'Уютная гостиница в центре города. Все удобства, Wi-Fi, завтрак включён. Рядом метро и магазины.', images: [], videos: [], tags: ['wi-fi', 'завтрак', 'центр', 'метро'], isNew: false, discount: 0, featured: true, published: true, deposit: 1000, views: 567, likes: 45, commentCount: 23, address: 'ул. Баумана, 15', size: '', rooms: 0, amenities: ['wi-fi', 'завтрак'], createdAt: '2024-06-01' },
    { id: 2, title: 'Дача у озера, 3 спальни', category: 'Дачи', price: 5000, unit: 'сутки', landlordId: 4, city: 'Казань', desc: 'Большая дача у живописного озера. 3 спальни, кухня, баня, мангал. Идеально для семьи или компании.', images: [], videos: [], tags: ['озеро', 'баня', 'мангал', 'семья'], isNew: false, discount: 15, featured: false, published: true, deposit: 5000, views: 412, likes: 31, commentCount: 12, address: 'Озёрная ул., 1', size: '120м²', rooms: 3, amenities: ['баня', 'мангал'], createdAt: '2024-06-05' },
    { id: 3, title: 'Студия в центре, 35м²', category: 'Квартиры', price: 2800, unit: 'ночь', landlordId: 3, city: 'Санкт-Петербург', desc: 'Современная студия в историческом центре. Свежий ремонт, всё необходимое есть. Рядом Невский проспект.', images: [], videos: [], tags: ['центр', 'небольшой', 'ремонт'], isNew: true, discount: 0, featured: true, published: true, deposit: 2000, views: 234, likes: 7, commentCount: 15, address: 'Невский пр., 28', size: '35м²', rooms: 1, amenities: ['ремонт', 'мебель'], createdAt: '2024-06-10' },
    { id: 4, title: 'Вечернее платье «Elegance»', category: 'Платья', price: 2500, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Элегантное вечернее платье размера M. Идеально для торжеств и вечеринок. Новое, не носилось.', images: [], videos: [], tags: ['вечернее', 'новое', 'размер-m'], isNew: true, discount: 0, featured: false, published: true, deposit: 500, views: 203, likes: 31, commentCount: 9, address: '', size: 'M', rooms: 0, amenities: ['новое'], createdAt: '2024-06-12' },
    { id: 5, title: 'Свадебное платье «Aria»', category: 'Платья', price: 3500, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Роскошное свадебное платье с длинным шлейфом. Размер 44-46. Включает фату и аксессуары.', images: [], videos: [], tags: ['свадебное', 'шлейф', '44-46'], isNew: false, discount: 10, featured: true, published: true, deposit: 2000, views: 156, likes: 24, commentCount: 8, address: '', size: '44-46', rooms: 0, amenities: ['фата', 'аксессуары'], createdAt: '2024-06-15' },
    { id: 6, title: 'Мужской костюм «Classic»', category: 'Костюмы', price: 2000, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Классический мужской костюм-тройка. Чёрный, размер 50. Идеально для свадьбы или делового мероприятия.', images: [], videos: [], tags: ['тройка', 'размер-50', 'деловой'], isNew: false, discount: 20, featured: false, published: true, deposit: 1000, views: 92, likes: 18, commentCount: 5, address: '', size: '50', rooms: 0, amenities: ['тройка', 'чистка'], createdAt: '2024-06-18' },
    { id: 7, title: 'Toyota Camry 2023', category: 'Авто', price: 4000, unit: 'день', landlordId: 2, city: 'Москва', desc: 'Новая Toyota Camry 2023 года. Автомат, полный привод, кондиционер. Страховка включена.', images: [], videos: [], tags: ['автомат', 'полный-привод', 'страховка'], isNew: true, discount: 0, featured: true, published: true, deposit: 10000, views: 89, likes: 12, commentCount: 3, address: '', size: '', rooms: 0, amenities: ['автомат', 'страховка', 'GPS'], createdAt: '2024-06-20' },
    { id: 8, title: 'Фата кружевная', category: 'Платья', price: 800, unit: 'день', landlordId: 1, city: 'Москва', desc: 'Нежная кружевная фата ручной работы. Длина 2 метра. Подходит к любому свадебному платью.', images: [], videos: [], tags: ['ручная-работа', '2-метра', 'кружевная'], isNew: false, discount: 0, featured: false, published: true, deposit: 300, views: 45, likes: 9, commentCount: 2, address: '', size: '2м', rooms: 0, amenities: ['ручная-работа'], createdAt: '2024-06-22' },
  ],
  reviews: [
    { id: 1, adId: 1, userId: 5, rating: 5, text: 'Отличная гостиница! Чисто, уютно, персонал вежливый.', createdAt: '2024-07-01' },
    { id: 2, adId: 1, userId: 6, rating: 4, text: 'Хороший вариант, но завтрак мог бы быть лучше.', createdAt: '2024-07-05' },
    { id: 3, adId: 5, userId: 5, rating: 5, text: 'Платье просто волшебное! На свадьбе все были в восторге.', createdAt: '2024-07-10' },
    { id: 4, adId: 7, userId: 6, rating: 5, text: 'Машина в идеальном состоянии, всё прошло отлично!', createdAt: '2024-07-15' },
    { id: 5, adId: 3, userId: 5, rating: 4, text: 'Квартира хорошая, но немного шумно из-за улицы.', createdAt: '2024-07-20' },
  ],
  comments: [
    { id: 1, adId: 1, userId: 5, text: 'Супер место! Рекомендую всем.', createdAt: '2024-07-02' },
    { id: 2, adId: 5, userId: 6, text: 'Платье шикарное, спасибо большое!', createdAt: '2024-07-11' },
    { id: 3, adId: 7, userId: 5, text: 'Машина огонь, буду брать ещё.', createdAt: '2024-07-16' },
  ],
  reports: [
    { id: 1, adId: 3, userId: 6, reason: 'Подозрительная цена', status: 'pending', createdAt: '2024-07-25' },
    { id: 2, adId: 8, userId: 5, reason: 'Фото не соответствует описанию', status: 'pending', createdAt: '2024-07-28' },
  ],
  chats: {},
  settings: { siteName: 'TajRent', commission: 10, minDeposit: 100, maxDeposit: 50000, maintenance: false, welcomeMessage: 'Добро пожаловать в TajRent!' },
  rents: [
    { id: 1, adId: 1, userId: 5, deposit: 1000, status: 'completed', createdAt: '2024-07-01', paidThroughApp: true },
    { id: 2, adId: 5, userId: 5, deposit: 2000, status: 'active', createdAt: '2024-07-10', paidThroughApp: false },
    { id: 3, adId: 7, userId: 6, deposit: 10000, status: 'active', createdAt: '2024-07-15', paidThroughApp: true },
  ],
  favorites: { '5': [1, 3, 5, 7], '6': [2, 4] },
  subscriptions: { '5': [1, 4], '6': [1, 2] },
  notifications: [
    { id: 1, userId: 5, type: 'rent', text: 'Ваша заявка на аренду одобрена', read: false, createdAt: '2024-07-28' },
    { id: 2, userId: 6, type: 'message', text: 'Новое сообщение от арендодателя', read: false, createdAt: '2024-07-29' },
    { id: 3, userId: 5, type: 'like', text: 'Ваш отзыв получил лайк', read: true, createdAt: '2024-07-25' },
  ],
  activityLog: [
    { id: 1, userId: 999, action: 'verify_user', target: 'Елена Смирнова', createdAt: '2024-07-28' },
    { id: 2, userId: 999, action: 'publish_ad', target: 'Toyota Camry 2023', createdAt: '2024-07-25' },
    { id: 3, userId: 999, action: 'block_user', target: 'Тестовый пользователь', createdAt: '2024-07-20' },
  ],
  categories: [
    { name: 'Платья', icon: 'fa-tshirt', color: '#F472B6', img: 'https://picsum.photos/seed/dress/200/200', count: 0 },
    { name: 'Костюмы', icon: 'fa-user-tie', color: '#3B82F6', img: 'https://picsum.photos/seed/suit/200/200', count: 0 },
    { name: 'Авто', icon: 'fa-car', color: '#10B981', img: 'https://picsum.photos/seed/car/200/200', count: 0 },
    { name: 'Гостиницы', icon: 'fa-hotel', color: '#8B5CF6', img: 'https://picsum.photos/seed/hotel/200/200', count: 0 },
    { name: 'Дачи', icon: 'fa-home', color: '#F59E0B', img: 'https://picsum.photos/seed/cabin/200/200', count: 0 },
    { name: 'Квартиры', icon: 'fa-building', color: '#6366F1', img: 'https://picsum.photos/seed/apartment/200/200', count: 0 },
    { name: 'Техника', icon: 'fa-camera', color: '#EC4899', img: 'https://picsum.photos/seed/camera/200/200', count: 0 },
    { name: 'Другое', icon: 'fa-box', color: '#6B7280', img: 'https://picsum.photos/seed/box/200/200', count: 0 },
  ],
  popularTags: ['центр', 'wi-fi', 'завтрак', 'метро', 'озеро', 'баня', 'мангал', 'семья', 'небольшой', 'ремонт']
};

// ============ STATIC API MOCK ============
// This intercepts all fetch() calls and returns data from TAJRENT_DATA

(function() {
  const originalFetch = window.fetch;

  window.fetch = async function(url, options = {}) {
    const urlStr = typeof url === 'string' ? url : url.url || '';
    const method = (options.method || 'GET').toUpperCase();

    // Don't intercept non-API calls
    if (!urlStr.startsWith('/api/')) {
      return originalFetch.apply(this, arguments);
    }

    // Simulate network delay
    await new Promise(r => setTimeout(r, 50 + Math.random() * 100));

    // Parse URL
    const urlObj = new URL(urlStr, window.location.origin);
    const path = urlObj.pathname.replace('/api/', '');
    const params = Object.fromEntries(urlObj.searchParams);

    // Helper to get current user from localStorage
    function getCurrentUser() {
      const stored = localStorage.getItem('rentUser');
      if (stored) {
        try { return JSON.parse(stored); } catch { return null; }
      }
      return null;
    }

    function saveToLocalStorage() {
      localStorage.setItem('tajrentData', JSON.stringify(TAJRENT_DATA));
    }

    function loadFromLocalStorage() {
      const stored = localStorage.getItem('tajrentData');
      if (stored) {
        try {
          const parsed = JSON.parse(stored);
          Object.assign(TAJRENT_DATA, parsed);
        } catch {}
      }
    }

    // Load persisted data
    loadFromLocalStorage();

    // Mock responses
    try {
      // Auth
      if (path === 'auth/login' && method === 'POST') {
        const body = JSON.parse(options.body);
        const user = TAJRENT_DATA.users.find(u => u.phone === body.phone && u.password === body.password);
        if (!user) return makeResponse(401, { error: 'Неверный телефон или пароль' });
        if (user.blocked) return makeResponse(403, { error: 'Аккаунт заблокирован' });
        localStorage.setItem('rentUser', JSON.stringify({ id: user.id, name: user.name, role: user.role, phone: user.phone, verified: user.verified }));
        return makeResponse(200, { user, token: 'token-' + user.id });
      }
      if (path === 'auth/register' && method === 'POST') {
        const body = JSON.parse(options.body);
        if (TAJRENT_DATA.users.find(u => u.phone === body.phone)) return makeResponse(400, { error: 'Пользователь уже существует' });
        const newUser = { id: Date.now(), name: body.name, phone: body.phone, password: body.password, role: body.role || 'tenant', city: body.city || '', bio: body.bio || '', verified: false, avatar: null, subscribers: 0, likes: 0, rating: 0, blocked: false, createdAt: new Date().toISOString().split('T')[0] };
        TAJRENT_DATA.users.push(newUser);
        saveToLocalStorage();
        localStorage.setItem('rentUser', JSON.stringify({ id: newUser.id, name: newUser.name, role: newUser.role, phone: newUser.phone, verified: newUser.verified }));
        return makeResponse(200, { user: newUser, token: 'token-' + newUser.id });
      }

      // Users
      if (path === 'users' && method === 'GET') return makeResponse(200, TAJRENT_DATA.users);
      const userIdMatch = path.match(/^users\/(\d+)$/);
      if (userIdMatch) {
        const uid = parseInt(userIdMatch[1]);
        if (method === 'GET') {
          const user = TAJRENT_DATA.users.find(u => u.id === uid);
          if (!user) return makeResponse(404, { error: 'Не найден' });
          return makeResponse(200, user);
        }
        if (method === 'PUT') {
          const body = JSON.parse(options.body);
          const idx = TAJRENT_DATA.users.findIndex(u => u.id === uid);
          if (idx === -1) return makeResponse(404, { error: 'Не найден' });
          Object.assign(TAJRENT_DATA.users[idx], body);
          saveToLocalStorage();
          return makeResponse(200, TAJRENT_DATA.users[idx]);
        }
        if (method === 'DELETE') {
          TAJRENT_DATA.users = TAJRENT_DATA.users.filter(u => u.id !== uid);
          saveToLocalStorage();
          return makeResponse(200, { ok: true });
        }
      }

      // Verify/block
      const verifyMatch = path.match(/^users\/(\d+)\/verify$/);
      if (verifyMatch) {
        const user = TAJRENT_DATA.users.find(u => u.id === parseInt(verifyMatch[1]));
        if (!user) return makeResponse(404, { error: 'Не найден' });
        user.verified = true;
        saveToLocalStorage();
        return makeResponse(200, user);
      }
      const blockMatch = path.match(/^users\/(\d+)\/block$/);
      if (blockMatch) {
        const user = TAJRENT_DATA.users.find(u => u.id === parseInt(blockMatch[1]));
        if (!user) return makeResponse(404, { error: 'Не найден' });
        user.blocked = !user.blocked;
        saveToLocalStorage();
        return makeResponse(200, user);
      }

      // Ads
      if (path === 'ads' && method === 'GET') {
        let ads = [...TAJRENT_DATA.ads];
        if (params.category && params.category !== 'all') ads = ads.filter(a => a.category === params.category);
        if (params.search) ads = ads.filter(a => a.title.toLowerCase().includes(params.search.toLowerCase()) || a.desc.toLowerCase().includes(params.search.toLowerCase()));
        if (params.sort === 'popular') ads.sort((a, b) => b.views - a.views);
        else if (params.sort === 'new') ads.sort((a, b) => b.id - a.id);
        else if (params.sort === 'cheap') ads.sort((a, b) => a.price - b.price);
        else if (params.sort === 'rating') ads.sort((a, b) => b.likes - a.likes);
        else if (params.sort === 'featured') ads = ads.filter(a => a.featured);
        else ads.sort((a, b) => b.createdAt < a.createdAt ? 1 : -1);
        ads = ads.map(a => {
          const l = TAJRENT_DATA.users.find(u => u.id === a.landlordId);
          return { ...a, landlordName: l?.name || 'Неизвестно', landlordVerified: l?.verified || false };
        });
        return makeResponse(200, ads);
      }

      const adIdMatch = path.match(/^ads\/(\d+)$/);
      if (adIdMatch) {
        const adId = parseInt(adIdMatch[1]);
        if (method === 'GET') {
          const ad = TAJRENT_DATA.ads.find(a => a.id === adId);
          if (!ad) return makeResponse(404, { error: 'Не найдено' });
          const landlord = TAJRENT_DATA.users.find(u => u.id === ad.landlordId);
          const reviews = TAJRENT_DATA.reviews.filter(r => r.adId === adId);
          const comments = TAJRENT_DATA.comments.filter(c => c.adId === adId);
          ad.views++;
          return makeResponse(200, { ...ad, landlordName: landlord?.name || 'Неизвестно', landlordVerified: landlord?.verified || false, landlordRating: landlord?.rating || 0, reviews, comments });
        }
        if (method === 'PUT') {
          const body = JSON.parse(options.body);
          const idx = TAJRENT_DATA.ads.findIndex(a => a.id === adId);
          if (idx === -1) return makeResponse(404, { error: 'Не найдено' });
          Object.assign(TAJRENT_DATA.ads[idx], body);
          saveToLocalStorage();
          return makeResponse(200, TAJRENT_DATA.ads[idx]);
        }
        if (method === 'DELETE') {
          TAJRENT_DATA.ads = TAJRENT_DATA.ads.filter(a => a.id !== adId);
          saveToLocalStorage();
          return makeResponse(200, { ok: true });
        }
      }

      if (path === 'ads' && method === 'POST') {
        const body = JSON.parse(options.body);
        const newAd = { id: Date.now(), title: body.title, category: body.category, price: parseInt(body.price) || 0, unit: body.unit || 'день', desc: body.desc || '', deposit: parseInt(body.deposit) || 0, city: body.city || '', landlordId: parseInt(body.landlordId), images: body.images || [], videos: body.videos || [], tags: body.tags || [], isNew: body.isNew || false, discount: parseInt(body.discount) || 0, featured: body.featured || false, address: body.address || '', size: body.size || '', rooms: parseInt(body.rooms) || 0, amenities: body.amenities || [], views: 0, likes: 0, commentCount: 0, published: false, createdAt: new Date().toISOString().split('T')[0] };
        TAJRENT_DATA.ads.push(newAd);
        saveToLocalStorage();
        return makeResponse(200, newAd);
      }

      // Ads like
      const likeMatch = path.match(/^ads\/(\d+)\/like$/);
      if (likeMatch && method === 'POST') {
        const body = JSON.parse(options.body);
        const userId = body.userId;
        const ad = TAJRENT_DATA.ads.find(a => a.id === parseInt(likeMatch[1]));
        if (!ad) return makeResponse(404, { error: 'Не найдено' });
        const userFavs = TAJRENT_DATA.favorites[userId] || [];
        if (userFavs.includes(ad.id)) {
          TAJRENT_DATA.favorites[userId] = userFavs.filter(id => id !== ad.id);
          ad.likes = Math.max(0, ad.likes - 1);
        } else {
          if (!TAJRENT_DATA.favorites[userId]) TAJRENT_DATA.favorites[userId] = [];
          TAJRENT_DATA.favorites[userId].push(ad.id);
          ad.likes++;
        }
        saveToLocalStorage();
        return makeResponse(200, { likes: ad.likes, liked: TAJRENT_DATA.favorites[userId].includes(ad.id) });
      }

      // Ads landlord
      const landlordAdsMatch = path.match(/^ads\/landlord\/(\d+)$/);
      if (landlordAdsMatch && method === 'GET') {
        const myAds = TAJRENT_DATA.ads.filter(a => a.landlordId === parseInt(landlordAdsMatch[1]));
        return makeResponse(200, myAds);
      }

      // Publish/unpublish
      const publishMatch = path.match(/^ads\/(\d+)\/publish$/);
      if (publishMatch && method === 'POST') {
        const body = JSON.parse(options.body);
        const idx = TAJRENT_DATA.ads.findIndex(a => a.id === parseInt(publishMatch[1]));
        if (idx === -1) return makeResponse(404, { error: 'Не найдено' });
        TAJRENT_DATA.ads[idx].published = body.published;
        saveToLocalStorage();
        return makeResponse(200, TAJRENT_DATA.ads[idx]);
      }

      // Reviews
      if (path === 'reviews' && method === 'POST') {
        const body = JSON.parse(options.body);
        const newReview = { id: Date.now(), adId: parseInt(body.adId), userId: parseInt(body.userId), rating: body.rating, text: body.text, createdAt: new Date().toISOString().split('T')[0] };
        TAJRENT_DATA.reviews.push(newReview);
        saveToLocalStorage();
        return makeResponse(200, newReview);
      }
      const reviewDelMatch = path.match(/^reviews\/(\d+)$/);
      if (reviewDelMatch && method === 'DELETE') {
        TAJRENT_DATA.reviews = TAJRENT_DATA.reviews.filter(r => r.id !== parseInt(reviewDelMatch[1]));
        saveToLocalStorage();
        return makeResponse(200, { ok: true });
      }

      // Comments
      if (path === 'comments' && method === 'POST') {
        const body = JSON.parse(options.body);
        const user = TAJRENT_DATA.users.find(u => u.id === parseInt(body.userId));
        const newComment = { id: Date.now(), adId: parseInt(body.adId), userId: parseInt(body.userId), text: body.text, userName: user?.name || 'Аноним', createdAt: new Date().toISOString().split('T')[0] };
        TAJRENT_DATA.comments.push(newComment);
        // Update commentCount on ad
        const ad = TAJRENT_DATA.ads.find(a => a.id === parseInt(body.adId));
        if (ad) ad.commentCount = TAJRENT_DATA.comments.filter(c => c.adId === parseInt(body.adId)).length;
        saveToLocalStorage();
        return makeResponse(200, newComment);
      }
      const commentDelMatch = path.match(/^comments\/(\d+)$/);
      if (commentDelMatch && method === 'DELETE') {
        TAJRENT_DATA.comments = TAJRENT_DATA.comments.filter(c => c.id !== parseInt(commentDelMatch[1]));
        saveToLocalStorage();
        return makeResponse(200, { ok: true });
      }

      // Subscriptions
      if (path === 'subscriptions' && method === 'POST') {
        const body = JSON.parse(options.body);
        const userId = body.userId;
        const landlordId = body.landlordId;
        if (!TAJRENT_DATA.subscriptions[userId]) TAJRENT_DATA.subscriptions[userId] = [];
        const userSubs = TAJRENT_DATA.subscriptions[userId];
        const idx = userSubs.indexOf(landlordId);
        if (idx !== -1) {
          userSubs.splice(idx, 1);
          const l = TAJRENT_DATA.users.find(u => u.id === landlordId);
          if (l) l.subscribers = Math.max(0, l.subscribers - 1);
        } else {
          userSubs.push(landlordId);
          const l = TAJRENT_DATA.users.find(u => u.id === landlordId);
          if (l) l.subscribers++;
        }
        saveToLocalStorage();
        return makeResponse(200, { subscribed: userSubs.includes(landlordId) });
      }

      // Reports
      if (path === 'reports' && method === 'GET') return makeResponse(200, TAJRENT_DATA.reports);
      if (path === 'reports' && method === 'POST') {
        const body = JSON.parse(options.body);
        const newReport = { id: Date.now(), adId: parseInt(body.adId), userId: parseInt(body.userId), reason: body.reason, status: 'pending', createdAt: new Date().toISOString().split('T')[0] };
        TAJRENT_DATA.reports.push(newReport);
        saveToLocalStorage();
        return makeResponse(200, newReport);
      }
      const reportIdMatch = path.match(/^reports\/(\d+)$/);
      if (reportIdMatch) {
        if (method === 'PUT') {
          const body = JSON.parse(options.body);
          const idx = TAJRENT_DATA.reports.findIndex(r => r.id === parseInt(reportIdMatch[1]));
          if (idx === -1) return makeResponse(404, { error: 'Не найдено' });
          TAJRENT_DATA.reports[idx].status = body.status;
          saveToLocalStorage();
          return makeResponse(200, TAJRENT_DATA.reports[idx]);
        }
        if (method === 'DELETE') {
          TAJRENT_DATA.reports = TAJRENT_DATA.reports.filter(r => r.id !== parseInt(reportIdMatch[1]));
          saveToLocalStorage();
          return makeResponse(200, { ok: true });
        }
      }

      // Chats
      const chatGetMatch = path.match(/^chats\/(\d+)$/);
      if (chatGetMatch && method === 'GET') return makeResponse(200, TAJRENT_DATA.chats[chatGetMatch[1]] || []);
      if (path === 'chats' && method === 'POST') {
        const body = JSON.parse(options.body);
        const key = [parseInt(body.userId), parseInt(body.toId)].sort().join('-');
        if (!TAJRENT_DATA.chats[key]) TAJRENT_DATA.chats[key] = [];
        TAJRENT_DATA.chats[key].push({ from: parseInt(body.userId), to: parseInt(body.toId), text: body.text, createdAt: new Date().toISOString() });
        saveToLocalStorage();
        return makeResponse(200, { ok: true });
      }

      // Settings
      if (path === 'settings' && method === 'GET') return makeResponse(200, TAJRENT_DATA.settings);
      if (path === 'settings' && method === 'PUT') {
        const body = JSON.parse(options.body);
        Object.assign(TAJRENT_DATA.settings, body);
        saveToLocalStorage();
        return makeResponse(200, TAJRENT_DATA.settings);
      }

      // Rents
      if (path === 'rents' && method === 'GET') return makeResponse(200, TAJRENT_DATA.rents);
      if (path === 'rents' && method === 'POST') {
        const body = JSON.parse(options.body);
        const newRent = { id: Date.now(), adId: parseInt(body.adId), userId: parseInt(body.userId), deposit: parseInt(body.deposit) || 0, status: 'active', createdAt: new Date().toISOString().split('T')[0], paidThroughApp: false };
        TAJRENT_DATA.rents.push(newRent);
        saveToLocalStorage();
        return makeResponse(200, newRent);
      }
      const rentIdMatch = path.match(/^rents\/(\d+)$/);
      if (rentIdMatch && method === 'PUT') {
        const body = JSON.parse(options.body);
        const idx = TAJRENT_DATA.rents.findIndex(r => r.id === parseInt(rentIdMatch[1]));
        if (idx === -1) return makeResponse(404, { error: 'Не найдено' });
        TAJRENT_DATA.rents[idx].status = body.status;
        saveToLocalStorage();
        return makeResponse(200, TAJRENT_DATA.rents[idx]);
      }

      // Favorites
      const favMatch = path.match(/^favorites\/(\d+)$/);
      if (favMatch && method === 'GET') return makeResponse(200, TAJRENT_DATA.favorites[favMatch[1]] || []);

      // Stats
      if (path === 'stats' && method === 'GET') {
        return makeResponse(200, {
          totalUsers: TAJRENT_DATA.users.filter(u => u.role !== 'admin').length,
          totalVerified: TAJRENT_DATA.users.filter(u => u.verified && u.role !== 'admin').length,
          totalAds: TAJRENT_DATA.ads.length,
          publishedAds: TAJRENT_DATA.ads.filter(a => a.published).length,
          pendingAds: TAJRENT_DATA.ads.filter(a => !a.published).length,
          totalReviews: TAJRENT_DATA.reviews.length,
          totalReports: TAJRENT_DATA.reports.filter(r => r.status === 'pending').length,
          totalRents: TAJRENT_DATA.rents.length,
          totalRevenue: TAJRENT_DATA.rents.reduce((s, r) => s + (r.deposit || 0), 0),
        });
      }

      // Categories
      if (path === 'categories' && method === 'GET') return makeResponse(200, TAJRENT_DATA.categories);

      // Tags
      if (path === 'tags' && method === 'GET') {
        const tagCounts = {};
        TAJRENT_DATA.ads.forEach(a => (a.tags || []).forEach(t => { tagCounts[t] = (tagCounts[t] || 0) + 1; }));
        const tags = Object.entries(tagCounts).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
        return makeResponse(200, tags);
      }

      // Verifications
      if (path === 'verifications' && method === 'GET') {
        return makeResponse(200, TAJRENT_DATA.users.filter(u => u.passportStatus === 'pending' && u.role !== 'admin'));
      }
      const verifApproveMatch = path.match(/^verifications\/(\d+)\/approve$/);
      if (verifApproveMatch && method === 'POST') {
        const user = TAJRENT_DATA.users.find(u => u.id === parseInt(verifApproveMatch[1]));
        if (!user) return makeResponse(404, { error: 'Не найден' });
        user.verified = true;
        user.passportStatus = 'approved';
        TAJRENT_DATA.activityLog.push({ id: Date.now(), userId: 999, action: 'verify_user', target: user.name, createdAt: new Date().toISOString().split('T')[0] });
        saveToLocalStorage();
        return makeResponse(200, user);
      }
      const verifRejectMatch = path.match(/^verifications\/(\d+)\/reject$/);
      if (verifRejectMatch && method === 'POST') {
        const user = TAJRENT_DATA.users.find(u => u.id === parseInt(verifRejectMatch[1]));
        if (!user) return makeResponse(404, { error: 'Не найден' });
        user.passportStatus = 'rejected';
        saveToLocalStorage();
        return makeResponse(200, user);
      }

      // User verification (passport upload)
      const userVerifMatch = path.match(/^users\/(\d+)\/verification$/);
      if (userVerifMatch && method === 'POST') {
        const user = TAJRENT_DATA.users.find(u => u.id === parseInt(userVerifMatch[1]));
        if (!user) return makeResponse(404, { error: 'Не найден' });
        user.passportPhoto = 'passport_' + user.id + '.jpg';
        user.passportStatus = 'pending';
        saveToLocalStorage();
        return makeResponse(200, user);
      }

      // Notifications
      const notifMatch = path.match(/^notifications\/(\d+)$/);
      if (notifMatch && method === 'GET') {
        return makeResponse(200, TAJRENT_DATA.notifications.filter(n => n.userId === parseInt(notifMatch[1])));
      }
      const notifReadMatch = path.match(/^notifications\/(\d+)\/read$/);
      if (notifReadMatch && method === 'PUT') {
        const idx = TAJRENT_DATA.notifications.findIndex(n => n.id === parseInt(notifReadMatch[1]));
        if (idx !== -1) TAJRENT_DATA.notifications[idx].read = true;
        saveToLocalStorage();
        return makeResponse(200, { ok: true });
      }
      const notifReadAllMatch = path.match(/^notifications\/(\d+)\/read-all$/);
      if (notifReadAllMatch && method === 'PUT') {
        TAJRENT_DATA.notifications.forEach(n => { if (n.userId === parseInt(notifReadAllMatch[1])) n.read = true; });
        saveToLocalStorage();
        return makeResponse(200, { ok: true });
      }

      // Activity
      if (path === 'activity' && method === 'GET') return makeResponse(200, TAJRENT_DATA.activityLog);

      // Admin
      const adminAdMatch = path.match(/^admin\/ads\/(\d+)$/);
      if (adminAdMatch && method === 'PUT') {
        const body = JSON.parse(options.body);
        const idx = TAJRENT_DATA.ads.findIndex(a => a.id === parseInt(adminAdMatch[1]));
        if (idx === -1) return makeResponse(404, { error: 'Не найдено' });
        Object.assign(TAJRENT_DATA.ads[idx], body);
        TAJRENT_DATA.activityLog.push({ id: Date.now(), userId: 999, action: 'edit_ad', target: TAJRENT_DATA.ads[idx].title, createdAt: new Date().toISOString().split('T')[0] });
        saveToLocalStorage();
        return makeResponse(200, TAJRENT_DATA.ads[idx]);
      }
      const adminUserMatch = path.match(/^admin\/users\/(\d+)$/);
      if (adminUserMatch && method === 'PUT') {
        const body = JSON.parse(options.body);
        const idx = TAJRENT_DATA.users.findIndex(u => u.id === parseInt(adminUserMatch[1]));
        if (idx === -1) return makeResponse(404, { error: 'Не найден' });
        Object.assign(TAJRENT_DATA.users[idx], body);
        saveToLocalStorage();
        return makeResponse(200, TAJRENT_DATA.users[idx]);
      }

      // Upload (mock)
      if (path === 'upload' && method === 'POST') {
        return makeResponse(200, { url: '/uploads/file_' + Date.now() + '.jpg' });
      }

      // Fallback
      return makeResponse(404, { error: 'Endpoint not found: ' + path });
    } catch (e) {
      return makeResponse(500, { error: 'Internal error: ' + e.message });
    }
  };

  function makeResponse(status, body) {
    return Promise.resolve(new Response(JSON.stringify(body), {
      status,
      statusText: status === 200 ? 'OK' : 'Error',
      headers: { 'Content-Type': 'application/json' }
    }));
  }
})();

// Export for modules
if (typeof module !== 'undefined') module.exports = TAJRENT_DATA;
