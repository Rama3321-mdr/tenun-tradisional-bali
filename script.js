document.addEventListener('DOMContentLoaded', () => {
    // --- DATA ---
    const tenunData = [
        {
            id: 'songket-jinengdalem',
            name: 'Songket Jinengdalem',
            image: 'https://tatkala.co/wp-content/uploads/2022/03/dinda.-tenun-jinengdalem3.jpg',
            asal: 'Desa Jinengdalem, Buleleng, Bali',
            teknik: 'Teknik tenun pakan tambahan, di mana benang emas atau perak disisipkan di antara benang lungsi untuk menciptakan motif.',
            bahan: 'Benang sutra',
            warna: ['Merah dan Kuning'],
            fungsi: ['Upacara Adat', 'Pakaian Agung'],
            deskripsi: 'Songket Jinengdalem adalah kain tenun tradisional khas Desa Jinengdalem, Buleleng, Bali Utara, yang dikenal dengan motif rumit sarat makna simbolik dan penggunaan benang emas atau sutra. Diproduksi secara turun-temurun oleh para penenun lokal, kain ini biasa digunakan dalam upacara pernikahan, metatah, dan ritual keagamaan sebagai simbol status, kemewahan, dan penghormatan terhadap budaya Bali.',
            motifs: [
                { name: 'Bade', desc: 'Motif bade pada tenun songket Bali dari Desa Jinengdalem melambangkan tandu suci yang digunakan dalam upacara keagamaan, terutama saat prosesi ngaben atau pemakaman adat Bali. Motif ini merepresentasikan penghormatan kepada roh leluhur dan perjalanan spiritual menuju alam keabadian. Dalam konteks budaya lokal, bade menjadi simbol sakral yang mencerminkan nilai-nilai spiritualitas, kesucian, dan keterikatan masyarakat Jinengdalem pada tradisi Hindu Bali.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbfYQFtRWvDLCAQbc3wgX2xDmSEenVT3kS5cX2SXOK7Nkk7OF_' },
                { name: 'Patra Sari', desc: 'Motif patra sari dalam tenun songket Bali, termasuk yang dibuat di Desa Jinengdalem, memang menggambarkan unsur flora atau tumbuh-tumbuhan. Motif ini biasanya terinspirasi dari bentuk daun dan bunga yang memiliki makna kesuburan, keindahan, dan keharmonisan dengan alam. Dalam konteks budaya Bali, patra sari mencerminkan hubungan spiritual antara manusia dan alam, serta simbol kehidupan yang terus tumbuh dan berkembang. Motif ini juga sering dianggap sebagai perlambang doa untuk kesejahteraan dan keberlanjutan hidup.', img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTcNQn-lOnYYO5MB4x6Yu90S9xf8RZFB-AMm45U0HN68SDFURh1' },
                { name: 'Wayang', desc: 'Menggambarkan tokoh-tokoh pewayangan, seringkali dari epos Ramayana atau Mahabharata, melambangkan cerita dan nilai-nilai luhur.', img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQsYDbVFX8P2WUkq0xqzkIOYkAfDpcEhqXjJvC56nxDH43y3kQL' }
            ]
        },
        {
            id: 'endek',
            name: 'Tenun Endek',
            image: 'https://balitoursclub.com/gallerys/pasarkainendekklungkung_400.jpg',
            asal: 'Desa Sampalan Kelod, Klungkung, Bali',
            teknik: 'Teknik ikat celup adalah metode di mana benang pakan diikat dengan motif tertentu menggunakan tali atau bahan pengikat, lalu dicelup dengan pewarna sebelum proses penenunan. Setelah benang dikeringkan dan tali ikat dilepas, hasilnya menciptakan pola khas dengan tepi yang sedikit kabur, memberikan kesan lembut dan alami yang menjadi ciri khas teknik ini.',
            bahan: 'Benang katun dan Benang Sutra',
            warna: ['Biru', 'Hijau', 'Ungu'],
            fungsi: ['Pakaian Harian', 'Seragam Kantor', 'Upacara Adat'],
            deskripsi: 'Endek adalah kain tenun ikat yang sangat serbaguna dan populer di Bali. Awalnya digunakan untuk pakaian adat, kini endek telah berkembang menjadi bahan fashion modern dan bahkan seragam resmi. Motifnya sangat beragam, dari geometris hingga floral.',
            motifs: [
                { name: 'Encak Saji', desc: 'Motif encak saji pada tenun endek Bali melambangkan penyambutan, penghormatan, dan ketulusan dalam menjamu tamu. Terinspirasi dari susunan sesaji atau persembahan dalam budaya Bali, motif ini mencerminkan nilai keramahtamahan, keikhlasan, dan spiritualitas yang kuat. Dalam konteks adat, encak saji menjadi simbol penghormatan kepada yang datang, baik manusia maupun roh leluhur, serta wujud rasa syukur dan keselarasan dalam kehidupan sehari-hari masyarakat Bali.', img: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQDEz3h26-qLns1Yw1CqHvQPu94q6Q_FFYe3O3INMgJa59fu2kn' },
                { name: 'Wajik Ukir', desc: 'Motif wajik ukir pada tenun endek Bali menggambarkan pola wajik (belah ketupat) yang dihias dengan detail ukiran khas Bali. Motif ini melambangkan keseimbangan, harmoni, dan keteraturan dalam kehidupan. Selain itu, wajik ukir juga merefleksikan keindahan seni ukir tradisional Bali yang kaya akan simbolisme dan estetika, menegaskan hubungan erat antara kain tenun dengan budaya dan spiritualitas masyarakat Bali.', img: 'https://bantex.co.id/wp-content/uploads/2023/03/wajik_prod.jpg' }
            ]
        },
        {
            id: 'gringsing',
            name: 'Tenun Gringsing',
            image: 'https://asset-3.tstatic.net/jualbeli/img/njajal/2021/11/Mengenal-Kerajinan-Kain-Tenun-Gringsing-di-Desa-Wisata-Tenganan-Bali-master-520526503.jpg',
            asal: 'Tenganan Pengringsingan, Karangasem, Bali',
            teknik: 'Ikat ganda (double ikat), teknik yang sangat langka dan rumit di mana benang lungsi dan pakan diikat dan diwarnai sebelum ditenun. Proses pembuatannya bisa memakan waktu bertahun-tahun.',
            bahan: 'Benang katun',
            warna: ['Merah', 'Hitam', 'Kuning Gading'],
            fungsi: ['Upacara Adat'],
            deskripsi: 'Tenun Gringsing adalah kain tradisional khas Bali yang sangat langka dan sakral, dibuat dengan teknik ikat ganda (double ikat) yang sangat rumit dan membutuhkan waktu lama. Motifnya sarat makna spiritual dan biasanya digunakan dalam upacara keagamaan sebagai simbol perlindungan dan penyucian dari energi negatif. Kain gringsing dipercaya memiliki kekuatan magis untuk menjaga pemakainya dari bahaya dan membawa keberuntungan, sehingga sangat dihormati dalam budaya Bali sebagai warisan leluhur yang sakral dan unik.',
            motifs: [
                { name: 'Lubeng', desc: 'Motif lubeng pada tenun Gringsing Bali berbentuk pola yang menyerupai kalajengking, melambangkan kekuatan perlindungan dari bahaya dan energi negatif. Motif ini menggambarkan fungsi sakral kain sebagai penjaga spiritual, sekaligus simbol keseimbangan alam dan harmoni antara manusia dengan lingkungan dan leluhur.', img: 'https://www.researchgate.net/publication/330710886/figure/fig3/AS:720433728983043@1548776194352/Gambar-4-Kain-Gringsing-motif-Lubeng-luhur-Sumber-foto-dokumentasi-pribadi-2011.jpg' },
                { name: 'Sanan Empeg', desc: 'Motif Sanan Empeg pada tenun Gringsing Bali adalah pola geometris yang khas dengan bentuk kotak-kotak kecil berulang. Motif ini melambangkan keteraturan, keteguhan, dan ketahanan dalam kehidupan. Dalam konteks budaya Bali, Sanan Empeg juga menggambarkan keseimbangan antara kekuatan spiritual dan dunia material, serta menjadi simbol perlindungan dan keberlangsungan hidup yang harmonis.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrDY3YyRObZgj4asJtRwyEqLf1g0mAs9pcbDiRzp59S56loChTDttDBav8PQaS5u8nH-0&usqp=CAU' },
                { name: 'Cemplong', desc: 'Motif Cemplong pada tenun Gringsing Bali berupa pola bulatan kecil yang tersebar merata, melambangkan tetesan air atau butiran mutiara. Motif ini melambangkan kesucian, keberkahan, dan limpahan rezeki dalam kehidupan. Dalam tradisi Bali, cemplong juga dianggap sebagai simbol perlindungan dan keharmonisan, menjaga keseimbangan spiritual serta mengundang energi positif bagi pemakainya.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRseqeaJ0F473WZ7ZZe1jmRlivs4BSeBCVHig&s' }
            ]
        },
        {
            id: 'cepuk-rangrang',
            name: 'Tenun Cepuk Rangrang',
            image: 'https://s3.us-east-1.wasabisys.com/agendaindonesia/2022/08/Tenun-Rangrang-Wak-Laba.jpg',
            asal: 'Nusa Penida, Bali',
            teknik: 'Teknik tenun pakan tambahan dengan ciri khas lubang-lubang kecil (rangrang) yang membentuk pola. Ditenun dengan benang berwarna cerah.',
            bahan: 'Benang katun.',
            warna: ['Merah', 'Oranye', 'Kuning', 'Putih'],
            fungsi: ['Upacara Adat'],
            deskripsi: 'Berasal dari pulau Nusa Penida, kain Cepuk Rangrang memiliki warna-warna yang sangat cerah dan mencolok. Kata "rangrang" berarti "bolong-bolong" atau transparan, mengacu pada teknik tenunnya yang unik. Kain ini sering digunakan sebagai selendang dalam upacara keagamaan.',
            motifs: [
                { name: 'Zigzag', desc: 'melambangkan dinamika kehidupan dan kekuatan dalam menghadapi perubahan. Bentuknya yang bergerigi mencerminkan perjalanan hidup yang tidak selalu lurus, namun penuh tantangan dan keberanian. Dalam kepercayaan lokal, motif ini juga berfungsi sebagai simbol pelindung, menolak energi negatif dan menjaga keseimbangan antara dunia nyata dan spiritual.', img: 'https://asset.kompas.com/data/photo/2014/12/08/1310527cepukkk780x390.jpg' }
            ]
        },
        {
            id: 'bebali',
            name: 'Tenun Bebali',
            image: 'https://jadesta.kemenparekraf.go.id/imgpost/57291.jpg',
            asal: 'Karangasem, Bali',
            teknik: 'Beragam teknik tenun, namun umumnya lebih sederhana. Fokusnya adalah pada kesakralan fungsi dan motifnya.',
            bahan: 'Benang katun kasar.',
            warna: ['Putih', 'Hitam'],
            fungsi: ['Upacara Keagamaan'],
            deskripsi: 'Tenun Bebali adalah sebutan umum untuk kain-kain yang dibuat khusus untuk keperluan upacara (bebali). Kain ini tidak mementingkan kehalusan, melainkan kesakralan dan fungsi ritualnya. Motifnya sangat simbolis dan terkait erat dengan kosmologi Hindu Bali.',
            motifs: [
                { name: 'Poleng', desc: 'Motif kotak-kotak hitam putih seperti papan catur, melambangkan Rwa Bhineda, konsep keseimbangan dualisme di alam semesta (baik-buruk, siang-malam).', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSeKa3B7FqTPgsA-1fTGcS9l1z242FaRUEFw&s' }
            ]
        }
    ];

    const quizQuestions = [
        { question: "Dari mana asal Tenun Gringsing yang terkenal dengan teknik ikat gandanya?", answers: ["Klungkung", "Tenganan", "Buleleng", "Nusa Penida"], correct: 1 },
        { question: "Motif papan catur hitam-putih yang melambangkan keseimbangan Rwa Bhineda disebut...", answers: ["Bade", "Zigzag", "Poleng", "Lubeng"], correct: 2 },
        { question: "Teknik tenun dengan lubang-lubang kecil yang menjadi ciri khas kain dari Nusa Penida adalah...", answers: ["Songket", "Ikat Pakan", "Ikat Ganda", "Rangrang"], correct: 3 },
        { question: "Tenun yang sering menggunakan benang emas dan perak untuk menunjukkan kemewahan adalah...", answers: ["Endek", "Songket", "Bebali", "Gringsing"], correct: 1 },
        { question: "Apa sebutan untuk kain yang dibuat khusus untuk keperluan upacara adat di Bali?", answers: ["Kain Pesta", "Kain Harian", "Tenun Bebali", "Kain Modern"], correct: 2 },
        { question: "Motif kalajengking pada tenun Gringsing yang dipercaya sebagai penolak bala disebut?", answers: ["Cemplong", "Sanan Empeg", "Wayang", "Lubeng"], correct: 3 },
        { question: "Tenun Endek modern sering digunakan sebagai...", answers: ["Hanya untuk Raja", "Seragam Kantor", "Alas Tidur", "Tirai Jendela"], correct: 1 },
    ];

    // --- STATE ---
    let favorites = JSON.parse(localStorage.getItem('tenunFavorites')) || [];
    let visitedPages = new Set(JSON.parse(localStorage.getItem('visitedTenunPages')));
    let guideShown = false;
    let currentQuizQuestion = 0;
    let quizScore = 0;
    let activeQuizQuestions = [];
    let chatHistory = [];
    let isAudioInitialized = false;
    let isMusicPlaying = true;

    // --- DOM ELEMENTS ---
    const pages = document.querySelectorAll('.page');
    const appHeader = document.getElementById('app-header');
    const startBtn = document.getElementById('start-btn');
    const tenunGrid = document.getElementById('tenun-grid');
    const detailPageContainer = document.getElementById('detail-page');
    const backToMainBtn = document.getElementById('back-to-main');
    const favoriteCountSpan = document.getElementById('favorite-count');
    const viewFavoritesBtn = document.getElementById('view-favorites-btn');
    const favoritesGrid = document.getElementById('favorites-grid');
    const noFavoritesText = document.getElementById('no-favorites-text');
    const finishExploringBtn = document.getElementById('finish-exploring-btn');
    const quizContainer = document.getElementById('quiz-container');
    const replayBtn = document.getElementById('replay-btn');
    const guideModal = document.getElementById('guide-modal');
    const skipGuideBtn = document.getElementById('skip-guide-btn');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const closeChatbotBtn = document.getElementById('close-chatbot-btn');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const chatbotInputForm = document.getElementById('chatbot-input-form');
    const chatbotInput = document.getElementById('chatbot-input');
    const musicToggleBtn = document.getElementById('music-toggle-btn');
    const backgroundMusic = document.getElementById('background-music');
    const startOverlay = document.getElementById('start-overlay');
    const enterWebsiteBtn = document.getElementById('enter-website-btn');
    // REVISI: Ambil elemen slider volume
    const volumeSlider = document.getElementById('volume-slider');
    
    // Custom Cursor
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');

    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        cursorOutline.style.left = `${posX}px`;
        cursorOutline.style.top = `${posY}px`;
        createSparkle(e);
    });
    
    function createSparkle(e) {
        if (Math.random() > 0.5) return;
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        document.body.appendChild(sparkle);
        const colors = ['#FFD700', '#F4A460', '#FF6347', '#FFFFFF'];
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        setTimeout(() => { sparkle.remove(); }, 800);
    }

    // --- Audio Setup ---
    let clickSound, quizCompleteSound;

    const initializeAudio = async () => {
        if (isAudioInitialized) return;
        await Tone.start();
        clickSound = new Tone.Synth({
            oscillator: { type: 'triangle' },
            envelope: { attack: 0.005, decay: 0.05, sustain: 0, release: 0.1 }
        }).toDestination();
        clickSound.volume.value = -15;

        quizCompleteSound = new Tone.PolySynth(Tone.Synth, {
            oscillator: { type: 'sine' },
            envelope: { attack: 0.01, decay: 0.2, sustain: 0.2, release: 0.5 }
        }).toDestination();
        quizCompleteSound.volume.value = -8;
        isAudioInitialized = true;
    };

    const playClickSound = () => {
        if (isAudioInitialized) {
            clickSound.triggerAttackRelease('C7', '32n');
        }
    };
    
    const playQuizCompleteSound = () => {
        if (isAudioInitialized) {
            const now = Tone.now();
            quizCompleteSound.triggerAttackRelease(['C5', 'E5', 'G5'], '8n', now);
            quizCompleteSound.triggerAttackRelease(['E5', 'G5', 'B5'], '4n', now + 0.2);
        }
    };

    // REVISI: Fungsi untuk mengatur volume
    const setVolume = (level) => {
        const volume = level / 100;
        backgroundMusic.volume = volume;
        // Jika volume > 0, pastikan musik tidak di-mute
        if (volume > 0) {
            isMusicPlaying = true;
        } else {
            isMusicPlaying = false;
        }
        updateMusicButtonUI();
        localStorage.setItem('tenunVolume', level);
    };

    const updateMusicButtonUI = () => {
        musicToggleBtn.classList.toggle('muted', !isMusicPlaying);
    };

    const toggleMusic = () => {
        isMusicPlaying = !isMusicPlaying;
        if (isMusicPlaying) {
            // Jika menyalakan kembali, set ke volume terakhir atau default
            const savedVolume = localStorage.getItem('tenunVolume') || 80;
            volumeSlider.value = savedVolume > 0 ? savedVolume : 80;
            setVolume(volumeSlider.value);
            backgroundMusic.play();
        } else {
            setVolume(0); // Mute dengan set volume ke 0
        }
        updateMusicButtonUI();
    };

    // --- Navigation System ---
    const updatePageUI = (pageId) => {
        const pageName = pageId.split('?')[0];
        document.body.className = document.body.className.replace(/on-[a-z-]+-page/g, '');
        document.body.classList.add(`on-${pageName}`);

        pages.forEach(page => {
            page.style.display = page.id === pageName ? (['landing-page', 'quiz-page', 'closing-page'].includes(pageName) ? 'grid' : 'block') : 'none';
        });
        
        appHeader.classList.toggle('hidden', !['main-page', 'detail-page', 'favorites-page'].includes(pageName));
        document.getElementById('app-footer').style.display = ['landing-page', 'quiz-page', 'closing-page'].includes(pageName) ? 'none' : 'block';
        
        updateProgressBar();
        window.scrollTo(0, 0);
    };

    const navigateTo = (pageId, push = true) => {
        if (push) {
            history.pushState({ page: pageId }, '', `#${pageId}`);
        }
        updatePageUI(pageId);
    };

    window.addEventListener('popstate', (e) => {
        if (e.state && e.state.page) {
            const pageId = e.state.page;
            if (pageId.startsWith('detail-page')) {
                 const urlParams = new URLSearchParams(pageId.split('?')[1]);
                 const tenunId = urlParams.get('id');
                 if (tenunId) renderDetailPage(tenunId);
            }
            navigateTo(pageId, false);
        } else {
            if (document.body.classList.contains('experience-started')) {
                 navigateTo('main-page', false);
            }
        }
    });

    const updateProgressBar = () => {
        const totalPages = tenunData.length;
        const percentage = Math.round((visitedPages.size / totalPages) * 100);
        progressBar.style.width = `${percentage}%`;
        progressText.textContent = `${percentage}% dijelajahi`;
    };

    const saveState = () => {
        localStorage.setItem('tenunFavorites', JSON.stringify(favorites));
        localStorage.setItem('visitedTenunPages', JSON.stringify(Array.from(visitedPages)));
    };

    const renderTenunGrid = (data) => {
        tenunGrid.innerHTML = '';
        if (data.length === 0) {
            tenunGrid.innerHTML = `<p class="text-center text-gray-400 col-span-full">Tidak ada tenun yang cocok dengan filter Anda.</p>`;
            return;
        }
        data.forEach(tenun => {
            const isFavorited = favorites.includes(tenun.id);
            tenunGrid.innerHTML += `
                <div class="tenun-box bg-gray-800 rounded-lg overflow-hidden shadow-lg group" data-id="${tenun.id}">
                    <a href="#detail-page?id=${tenun.id}" data-id="${tenun.id}" class="block cursor-pointer">
                        <div class="relative">
                            <img src="${tenun.image}" alt="${tenun.name}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                            <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                                <h3 class="text-2xl font-bold text-white font-lora">${tenun.name}</h3>
                            </div>
                        </div>
                    </a>
                    <button class="favorite-btn absolute top-4 right-4 text-2xl ${isFavorited ? 'text-yellow-400' : 'text-white'} hover:text-yellow-300 transition-all" data-id="${tenun.id}">
                        <i class="${isFavorited ? 'fas' : 'far'} fa-star"></i>
                    </button>
                </div>
            `;
        });
    };

    const renderDetailPage = (tenunId) => {
        const tenun = tenunData.find(t => t.id === tenunId);
        if (!tenun) {
            navigateTo('main-page');
            return;
        };
        visitedPages.add(tenunId);
        saveState();
        detailPageContainer.innerHTML = `
            <div class="grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div class="lg:col-span-2">
                    <img src="${tenun.image}" alt="${tenun.name}" class="w-full h-auto object-cover rounded-lg shadow-2xl">
                </div>
                <div class="lg:col-span-3">
                    <h2 class="text-4xl md:text-5xl font-bold font-lora text-yellow-400 mb-4">${tenun.name}</h2>
                    <div class="space-y-4 text-lg">
                        <p><strong class="text-yellow-500">Asal:</strong> ${tenun.asal}</p>
                        <p>${tenun.deskripsi}</p>
                        <p><strong class="text-yellow-500">Teknik Pembuatan:</strong> ${tenun.teknik}</p>
                        <p><strong class="text-yellow-500">Bahan:</strong> ${tenun.bahan}</p>
                        <p><strong class="text-yellow-500">Warna Dominan:</strong> ${tenun.warna.join(', ')}</p>
                        <p><strong class="text-yellow-500">Penggunaan Umum:</strong> ${tenun.fungsi.join(', ')}</p>
                    </div>
                    <div class="mt-8">
                        <h3 class="text-2xl font-bold text-yellow-400 mb-4">Motif dan Maknanya</h3>
                        <div class="flex flex-wrap gap-2 mb-4" id="motif-buttons">
                            ${tenun.motifs.map((motif, index) => `<button class="motif-btn border border-yellow-500 px-4 py-2 rounded-full transition-colors" data-motif-index="${index}" data-tenun-id="${tenun.id}">${motif.name}</button>`).join('')}
                        </div>
                        <div id="motif-display" class="bg-gray-800 p-6 rounded-lg min-h-[150px] flex items-center">
                            <p class="text-gray-400">Pilih motif di atas untuk melihat detailnya.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        const firstMotifBtn = detailPageContainer.querySelector('.motif-btn');
        if(firstMotifBtn) {
            displayMotif(tenun.id, 0);
            firstMotifBtn.classList.add('active');
        }
    };
    
    const displayMotif = (tenunId, motifIndex) => {
        const tenun = tenunData.find(t => t.id === tenunId);
        const motif = tenun.motifs[motifIndex];
        const motifDisplay = document.getElementById('motif-display');
        motifDisplay.innerHTML = `
            <div class="flex flex-col md:flex-row gap-4 w-full items-center">
                <img src="${motif.img}" alt="${motif.name}" class="w-32 h-20 object-cover rounded-md flex-shrink-0">
                <div>
                    <h4 class="font-bold text-lg text-yellow-500">${motif.name}</h4>
                    <p>${motif.desc}</p>
                </div>
            </div>
        `;
        document.querySelectorAll('#motif-buttons .motif-btn').forEach(btn => btn.classList.remove('active'));
        document.querySelector(`#motif-buttons .motif-btn[data-motif-index='${motifIndex}']`).classList.add('active');
    };
    
    const toggleFavorite = (tenunId) => {
        const index = favorites.indexOf(tenunId);
        if (index > -1) favorites.splice(index, 1);
        else favorites.push(tenunId);
        saveState();
        updateFavoriteUI();
    };

    const updateFavoriteUI = () => {
        favoriteCountSpan.textContent = favorites.length;
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            const id = btn.dataset.id;
            const isFavorited = favorites.includes(id);
            btn.innerHTML = `<i class="${isFavorited ? 'fas' : 'far'} fa-star"></i>`;
            btn.classList.toggle('text-yellow-400', isFavorited);
        });
    };

    const renderFavoritesPage = () => {
        favoritesGrid.innerHTML = '';
        if (favorites.length === 0) {
            noFavoritesText.classList.remove('hidden');
            favoritesGrid.classList.add('hidden');
        } else {
            noFavoritesText.classList.add('hidden');
            favoritesGrid.classList.remove('hidden');
            const favoriteTenuns = tenunData.filter(t => favorites.includes(t.id));
            favoriteTenuns.forEach(tenun => {
                favoritesGrid.innerHTML += `
                    <div class="tenun-box bg-gray-800 rounded-lg overflow-hidden shadow-lg group" data-id="${tenun.id}">
                         <a href="#detail-page?id=${tenun.id}" data-id="${tenun.id}" class="block cursor-pointer">
                            <div class="relative">
                                <img src="${tenun.image}" alt="${tenun.name}" class="w-full h-64 object-cover">
                                <div class="overlay absolute inset-0 bg-black bg-opacity-50 flex items-end p-4">
                                    <h3 class="text-2xl font-bold text-white font-lora">${tenun.name}</h3>
                                </div>
                            </div>
                        </a>
                        <button class="favorite-btn absolute top-4 right-4 text-2xl text-yellow-400" data-id="${tenun.id}">
                            <i class="fas fa-star"></i>
                        </button>
                    </div>
                `;
            });
        }
    };

    const setupFilters = () => {
        const origins = [...new Set(tenunData.map(t => t.asal))];
        const colors = [...new Set(tenunData.flatMap(t => t.warna))];
        const functions = [...new Set(tenunData.flatMap(t => t.fungsi))];
        const motifTypes = [...new Set(tenunData.flatMap(t => t.motifs.map(m => m.name)))];
        const createFilter = (id, label, options) => {
            const container = document.getElementById(id);
            let optionsHTML = options.map(o => `<option value="${o}">${o}</option>`).join('');
            container.innerHTML = `
                <label for="${id}-select" class="block text-sm font-medium mb-1">${label}</label>
                <select id="${id}-select" class="w-full bg-gray-700 border border-gray-600 rounded-md p-2 focus:ring-yellow-500 focus:border-yellow-500">
                    <option value="">Semua</option>
                    ${optionsHTML}
                </select>
            `;
        };
        createFilter('filter-daerah', 'Daerah Asal', origins);
        createFilter('filter-warna', 'Warna Dominan', colors);
        createFilter('filter-fungsi', 'Fungsi Penggunaan', functions);
        createFilter('filter-motif', 'Jenis Motif', motifTypes);
        document.querySelectorAll('#filter-section select').forEach(select => select.addEventListener('change', applyFilters));
    };

    const applyFilters = () => {
        const daerah = document.getElementById('filter-daerah-select').value;
        const warna = document.getElementById('filter-warna-select').value;
        const fungsi = document.getElementById('filter-fungsi-select').value;
        const motif = document.getElementById('filter-motif-select').value;
        let filteredData = tenunData.filter(t => {
            const daerahMatch = !daerah || t.asal === daerah;
            const warnaMatch = !warna || t.warna.includes(warna);
            const fungsiMatch = !fungsi || t.fungsi.includes(fungsi);
            const motifMatch = !motif || t.motifs.some(m => m.name === motif);
            return daerahMatch && warnaMatch && fungsiMatch && motifMatch;
        });
        renderTenunGrid(filteredData);
    };

    const startQuiz = () => {
        currentQuizQuestion = 0;
        quizScore = 0;
        activeQuizQuestions = quizQuestions.sort(() => 0.5 - Math.random()).slice(0, 5);
        navigateTo('quiz-page');
        displayQuizQuestion();
    };

    const displayQuizQuestion = () => {
        if (currentQuizQuestion >= activeQuizQuestions.length) {
            showQuizResult();
            return;
        }
        const q = activeQuizQuestions[currentQuizQuestion];
        quizContainer.innerHTML = `
            <p class="text-sm text-yellow-400 mb-2">Pertanyaan ${currentQuizQuestion + 1} dari ${activeQuizQuestions.length}</p>
            <h3 class="text-2xl font-bold mb-6">${q.question}</h3>
            <div id="answers-grid" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                ${q.answers.map((answer, index) => `<button class="answer-btn w-full text-left p-4 border-2 rounded-lg transition-colors duration-300" data-index="${index}">${answer}</button>`).join('')}
            </div>
            <div id="quiz-feedback" class="mt-6 text-center"></div>
            <button id="next-question-btn" class="w-full mt-6 font-bold py-3 rounded-lg transition-colors hidden">Lanjutkan</button>
        `;
    };

    const selectAnswer = (selectedIndex) => {
        const q = activeQuizQuestions[currentQuizQuestion];
        const buttons = document.querySelectorAll('.answer-btn');
        const feedback = document.getElementById('quiz-feedback');
        buttons.forEach(btn => btn.disabled = true);
        const selectedBtn = buttons[selectedIndex];
        selectedBtn.classList.add('selected');
        if (selectedIndex === q.correct) {
            quizScore++;
            selectedBtn.classList.add('correct');
            feedback.innerHTML = `<p class="text-green-400 font-bold">Benar! Jawaban yang tepat.</p>`;
        } else {
            selectedBtn.classList.add('incorrect');
            buttons[q.correct].classList.add('correct');
            feedback.innerHTML = `<p class="text-red-400 font-bold">Kurang tepat. Jawaban yang benar adalah "${q.answers[q.correct]}".</p>`;
        }
        document.getElementById('next-question-btn').classList.remove('hidden');
    };

    const showQuizResult = () => {
        let message = '';
        if (quizScore === activeQuizQuestions.length) message = 'Luar Biasa! Anda adalah seorang maestro budaya Bali!';
        else if (quizScore >= 3) message = 'Kerja Bagus! Pengetahuan Anda tentang tenun Bali sangat baik.';
        else message = 'Terus Belajar! Setiap perjalanan dimulai dengan satu langkah.';
        quizContainer.innerHTML = `
            <h3 class="text-3xl font-bold font-lora text-center text-yellow-400 mb-4">Kuis Selesai!</h3>
            <p class="text-center text-xl mb-2">Skor Anda:</p>
            <p class="text-center text-6xl font-bold mb-6">${quizScore} / ${activeQuizQuestions.length}</p>
            <p class="mb-8">${message}</p>
            <div class="flex flex-col md:flex-row gap-4">
                <button id="restart-quiz-btn" class="w-full bg-yellow-600 font-bold py-3 rounded-lg hover:bg-yellow-700 transition-colors">Ulangi Kuis</button>
                <button id="finish-quiz-btn" class="w-full bg-gray-600 font-bold py-3 rounded-lg hover:bg-gray-700 transition-colors">Selesai</button>
            </div>
        `;
        playQuizCompleteSound();
    };
    
    const setupSlider = () => {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        const sliderDotsContainer = document.querySelector('.slider-dots');
        sliderWrapper.innerHTML = '';
        sliderDotsContainer.innerHTML = '';
        tenunData.forEach((tenun, index) => {
            sliderWrapper.innerHTML += `
                <div class="slider-item relative">
                    <img src="${tenun.image}" alt="${tenun.name}" class="w-full h-64 md:h-96 object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8">
                        <h3 class="text-3xl md:text-4xl font-bold text-white font-lora">${tenun.name}</h3>
                        <p class="text-gray-300 hidden md:block">${tenun.asal}</p>
                    </div>
                </div>
            `;
            sliderDotsContainer.innerHTML += `<button class="slider-dot w-3 h-3 rounded-full bg-white bg-opacity-50 transition-all" data-index="${index}"></button>`;
        });
        const sliderItems = document.querySelectorAll('.slider-item');
        const dots = document.querySelectorAll('.slider-dot');
        const prevBtn = document.querySelector('.slider-prev');
        const nextBtn = document.querySelector('.slider-next');
        let currentIndex = 0;
        let slideInterval;
        function goToSlide(index) {
            currentIndex = (index + sliderItems.length) % sliderItems.length;
            sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
            dots.forEach((dot, i) => dot.classList.toggle('bg-opacity-100', i === currentIndex));
        }
        function startSlider() { slideInterval = setInterval(() => goToSlide(currentIndex + 1), 5000); }
        function stopSlider() { clearInterval(slideInterval); }
        prevBtn.addEventListener('click', () => { goToSlide(currentIndex - 1); stopSlider(); startSlider(); });
        nextBtn.addEventListener('click', () => { goToSlide(currentIndex + 1); stopSlider(); startSlider(); });
        dots.forEach(dot => dot.addEventListener('click', (e) => { goToSlide(parseInt(e.target.dataset.index)); stopSlider(); startSlider(); }));
        goToSlide(0);
        startSlider();
    };

    const addMessageToChat = (text, sender) => {
        const messageEl = document.createElement('div');
        messageEl.classList.add('chat-message', sender);
        messageEl.textContent = text;
        chatbotMessages.appendChild(messageEl);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    };

    const handleChatbotSubmit = async (e) => {
        e.preventDefault();
        const userInput = chatbotInput.value.trim();
        if (!userInput) return;
        addMessageToChat(userInput, 'user');
        chatbotInput.value = '';
        const typingEl = document.createElement('div');
        typingEl.classList.add('chat-message', 'ai');
        typingEl.id = 'typing-indicator';
        typingEl.innerHTML = `<div class="typing-indicator"><span></span><span></span><span></span></div>`;
        chatbotMessages.appendChild(typingEl);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
        chatHistory.push({ role: "user", parts: [{ text: userInput }] });
        const prompt = `Anda adalah asisten virtual yang ramah dan ahli tentang tenun tradisional Bali. Jawab dengan informasi akurat dan boleh mencari informasi di internet, tidak harus berpatokan dengan data di website ini, terutama informasi asal daerah tenun. Jika user menanyakan di luar konteks, silahkan jawab dengan tegas dan menolak. Jawab pertanyaan pengguna dengan informatif dan singkat dalam Bahasa Indonesia. Data tenun yang ada di website ini adalah tentang: ${tenunData.map(t => t.name).join(', ')}. Riwayat percakapan sejauh ini: ${JSON.stringify(chatHistory)}. Pertanyaan baru: ${userInput}`;
        const apiKey = "AIzaSyBrfHbyqQXuEipbREW3e0-NJ1nvnv-a8sc";
        const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
        const payload = { contents: [{ role: "user", parts: [{ text: prompt }] }] };
        try {
            const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
            if (!response.ok) throw new Error(`API Error: ${response.status}`);
            const result = await response.json();
            document.getElementById('typing-indicator')?.remove();
            if (result.candidates && result.candidates[0]?.content?.parts[0]?.text) {
                const aiResponse = result.candidates[0].content.parts[0].text;
                addMessageToChat(aiResponse, 'ai');
                chatHistory.push({ role: "model", parts: [{ text: aiResponse }] });
            } else {
                addMessageToChat('Maaf, saya tidak bisa merespons saat ini. Coba lagi nanti.', 'ai');
            }
        } catch (error) {
            console.error("Chatbot API error:", error);
            document.getElementById('typing-indicator')?.remove();
            addMessageToChat('Terjadi kesalahan. Mohon coba beberapa saat lagi.', 'ai');
        }
    };

    // --- EVENT LISTENERS ---
    const startExperience = () => {
        if (document.body.classList.contains('experience-started')) return;
        document.body.classList.add('experience-started');
        initializeAudio();
        // Terapkan volume tersimpan saat memulai
        const savedVolume = localStorage.getItem('tenunVolume') || 80;
        volumeSlider.value = savedVolume;
        setVolume(savedVolume);
        backgroundMusic.play().catch(e => console.error("Gagal memutar musik:", e));
        updateMusicButtonUI();
        startOverlay.classList.add('hidden');
        navigateTo('landing-page');
    };

    enterWebsiteBtn.addEventListener('click', startExperience);

    document.addEventListener('click', (e) => {
        if (e.target.closest('button, a, select, input[type="checkbox"], .slider-dot')) {
            playClickSound();
        }

        const tenunLink = e.target.closest('a[data-id]');
        if (tenunLink) {
            e.preventDefault();
            const tenunId = tenunLink.dataset.id;
            renderDetailPage(tenunId);
            navigateTo(`detail-page?id=${tenunId}`);
        }

        const favBtn = e.target.closest('.favorite-btn');
        if (favBtn) toggleFavorite(favBtn.dataset.id);
        
        const motifBtn = e.target.closest('.motif-btn');
        if (motifBtn) displayMotif(motifBtn.dataset.tenunId, parseInt(motifBtn.dataset.motifIndex));

        const answerBtn = e.target.closest('.answer-btn');
        if (answerBtn) selectAnswer(parseInt(answerBtn.dataset.index));
        if (e.target.id === 'next-question-btn') {
            currentQuizQuestion++;
            displayQuizQuestion();
        }
        if (e.target.id === 'restart-quiz-btn') startQuiz();
        if (e.target.id === 'finish-quiz-btn') navigateTo('closing-page');
    });

    startBtn.addEventListener('click', () => {
        if (!guideShown) {
            guideModal.classList.add('is-open');
            guideShown = true;
        } else {
            navigateTo('main-page');
        }
    });
    skipGuideBtn.addEventListener('click', () => {
        guideModal.classList.remove('is-open');
        navigateTo('main-page');
    });
    backToMainBtn.addEventListener('click', () => navigateTo('main-page'));
    viewFavoritesBtn.addEventListener('click', () => {
        renderFavoritesPage();
        navigateTo('favorites-page');
    });
    finishExploringBtn.addEventListener('click', startQuiz);
    replayBtn.addEventListener('click', () => {
        visitedPages.clear();
        favorites = [];
        saveState();
        updateFavoriteUI();
        chatbotMessages.innerHTML = '';
        addMessageToChat('Selamat datang kembali! Ada lagi yang ingin ditanyakan?', 'ai');
        navigateTo('landing-page');
    });

    chatbotToggle.addEventListener('click', () => chatbotContainer.classList.toggle('open'));
    closeChatbotBtn.addEventListener('click', () => chatbotContainer.classList.remove('open'));
    chatbotInputForm.addEventListener('submit', handleChatbotSubmit);
    musicToggleBtn.addEventListener('click', () => {
        playClickSound();
        toggleMusic();
    });
    // REVISI: Event listener untuk slider volume
    volumeSlider.addEventListener('input', (e) => {
        setVolume(e.target.value);
    });

    // --- INITIALIZATION ---
    const init = () => {
        renderTenunGrid(tenunData);
        updateFavoriteUI();
        setupFilters();
        setupSlider();
        addMessageToChat('Selamat datang! Ada yang bisa saya bantu untuk memahami tenun Bali?', 'ai');
        pages.forEach(p => p.style.display = 'none');
        document.getElementById('app-footer').style.display = 'none';
        
        // Atur UI volume berdasarkan data tersimpan sebelum interaksi
        const savedVolume = localStorage.getItem('tenunVolume') || 80;
        volumeSlider.value = savedVolume;
        isMusicPlaying = savedVolume > 0;
        updateMusicButtonUI();

        const initialHash = window.location.hash.substring(1);
        if (initialHash && document.body.classList.contains('experience-started')) {
            if (initialHash.startsWith('detail-page')) {
                 const urlParams = new URLSearchParams(initialHash.split('?')[1]);
                 const tenunId = urlParams.get('id');
                 if (tenunId) renderDetailPage(tenunId);
            }
            navigateTo(initialHash, false);
        }
    };

    init();
});