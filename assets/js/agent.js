// Virtual Agent functionality
class VirtualAgent {
    constructor() {
        this.agent = document.querySelector('.virtual-agent');
        this.chat = document.querySelector('.agent-chat');
        this.audioEnabled = true;
        this.messages = [];
        this.knowledgeBase = {
            tempat: {
                kafe: [
                    { 
                        nama: "Kopi Kenangan Masa",
                        rating: 4.7,
                        harga: "30-70rb",
                        fasilitas: ["wifi", "colokan", "parkir", "ac"],
                        lokasi: "Jl. Sudirman No. 123",
                        jamBuka: "07:00 - 23:00",
                        suasana: ["santai", "cozy", "instagramable"],
                        menu: ["kopi", "pasta", "cake", "tea"],
                        cocokUntuk: ["kerja", "meeting", "nongkrong", "foto-foto"]
                    },
                    {
                        nama: "Ruang Temu Coffee",
                        rating: 4.5,
                        harga: "40-80rb",
                        fasilitas: ["wifi", "colokan", "parkir", "ac", "smoking area"],
                        lokasi: "Jl. Gatot Subroto No. 45",
                        jamBuka: "08:00 - 22:00",
                        suasana: ["modern", "artistic", "cozy"],
                        menu: ["kopi", "sandwich", "pastry", "juice"],
                        cocokUntuk: ["meeting", "nongkrong", "kerja"]
                    },
                    {
                        nama: "Kedai 24/7",
                        rating: 4.3,
                        harga: "25-50rb",
                        fasilitas: ["wifi", "colokan", "parkir", "outdoor"],
                        lokasi: "Jl. Diponegoro No. 88",
                        jamBuka: "24 jam",
                        suasana: ["casual", "santai", "homey"],
                        menu: ["kopi", "nasi", "snack", "tea"],
                        cocokUntuk: ["begadang", "nongkrong", "kerja"]
                    },
                    {
                        nama: "The Garden Cafe",
                        rating: 4.8,
                        harga: "60-150rb",
                        fasilitas: ["wifi", "colokan", "parkir", "outdoor", "ac"],
                        lokasi: "Jl. Imam Bonjol No. 15",
                        jamBuka: "10:00 - 22:00",
                        suasana: ["garden", "romantic", "instagramable"],
                        menu: ["western", "pasta", "steak", "coffee"],
                        cocokUntuk: ["date", "foto-foto", "gathering"]
                    },
                    {
                        nama: "Buku Kopi",
                        rating: 4.6,
                        harga: "35-75rb",
                        fasilitas: ["wifi", "colokan", "parkir", "ac", "perpustakaan"],
                        lokasi: "Jl. Veteran No. 56",
                        jamBuka: "09:00 - 21:00",
                        suasana: ["quiet", "cozy", "intellectual"],
                        menu: ["coffee", "tea", "light meal", "dessert"],
                        cocokUntuk: ["belajar", "kerja", "membaca"]
                    }
                ],
                coworking: [
                    {
                        nama: "WorkHub Space",
                        rating: 4.8,
                        harga: "100-200rb",
                        fasilitas: ["wifi", "colokan", "meeting room", "printer", "loker", "pantry"],
                        lokasi: "Jl. MH Thamrin No. 45",
                        jamBuka: "09:00 - 21:00",
                        suasana: ["professional", "modern", "productive"],
                        layanan: ["private office", "meeting room", "virtual office"],
                        cocokUntuk: ["kerja", "meeting", "event"]
                    },
                    {
                        nama: "Creative Station",
                        rating: 4.7,
                        harga: "80-150rb",
                        fasilitas: ["wifi", "colokan", "meeting room", "cafe", "loker"],
                        lokasi: "Jl. Cikini Raya No. 12",
                        jamBuka: "24 jam",
                        suasana: ["creative", "casual", "vibrant"],
                        layanan: ["hot desk", "private desk", "event space"],
                        cocokUntuk: ["startup", "freelancer", "creative work"]
                    },
                    {
                        nama: "Business Center",
                        rating: 4.9,
                        harga: "150-300rb",
                        fasilitas: ["wifi", "colokan", "meeting room", "receptionist", "parking"],
                        lokasi: "Jl. HR Rasuna Said No. 1",
                        jamBuka: "07:00 - 23:00",
                        suasana: ["premium", "exclusive", "professional"],
                        layanan: ["private office", "virtual office", "meeting room"],
                        cocokUntuk: ["business meeting", "corporate", "client meeting"]
                    },
                    {
                        nama: "Startup Valley",
                        rating: 4.6,
                        harga: "75-150rb",
                        fasilitas: ["wifi", "colokan", "meeting pod", "game room", "cafe"],
                        lokasi: "Jl. Casablanca No. 88",
                        jamBuka: "08:00 - 22:00",
                        suasana: ["fun", "collaborative", "modern"],
                        layanan: ["hot desk", "dedicated desk", "event space"],
                        cocokUntuk: ["startup", "community event", "networking"]
                    },
                    {
                        nama: "The Office",
                        rating: 4.5,
                        harga: "90-180rb",
                        fasilitas: ["wifi", "colokan", "meeting room", "phone booth", "pantry"],
                        lokasi: "Jl. Kuningan No. 23",
                        jamBuka: "08:00 - 20:00",
                        suasana: ["professional", "quiet", "focused"],
                        layanan: ["private office", "hot desk", "virtual office"],
                        cocokUntuk: ["remote work", "meeting", "focused work"]
                    }
                ],
                taman: [
                    {
                        nama: "Taman Kota Hijau",
                        rating: 4.6,
                        harga: "gratis",
                        fasilitas: ["parkir", "toilet", "jogging track", "playground"],
                        lokasi: "Jl. Ahmad Yani",
                        jamBuka: "24 jam",
                        suasana: ["outdoor", "sejuk", "ramai"],
                        aktivitas: ["jogging", "piknik", "foto-foto"],
                        cocokUntuk: ["olahraga", "keluarga", "komunitas"]
                    },
                    {
                        nama: "Taman Bunga Indah",
                        rating: 4.7,
                        harga: "gratis",
                        fasilitas: ["parkir", "toilet", "gazebo", "taman bunga"],
                        lokasi: "Jl. Pemuda No. 10",
                        jamBuka: "06:00 - 18:00",
                        suasana: ["colorful", "romantic", "instagramable"],
                        aktivitas: ["foto-foto", "piknik", "santai"],
                        cocokUntuk: ["foto prewedding", "keluarga", "pacaran"]
                    },
                    {
                        nama: "Taman Olahraga Sentral",
                        rating: 4.4,
                        harga: "gratis",
                        fasilitas: ["parkir", "toilet", "lapangan basket", "area gym outdoor"],
                        lokasi: "Jl. Merdeka No. 45",
                        jamBuka: "05:00 - 21:00",
                        suasana: ["sporty", "energetic", "outdoor"],
                        aktivitas: ["olahraga", "basket", "workout"],
                        cocokUntuk: ["olahraga", "komunitas", "latihan"]
                    },
                    {
                        nama: "Taman Kuliner",
                        rating: 4.8,
                        harga: "gratis (parkir berbayar)",
                        fasilitas: ["parkir", "toilet", "food court", "amphitheater"],
                        lokasi: "Jl. Sudirman No. 90",
                        jamBuka: "10:00 - 22:00",
                        suasana: ["festive", "culinary", "outdoor"],
                        aktivitas: ["kuliner", "nongkrong", "pertunjukan"],
                        cocokUntuk: ["kuliner", "gathering", "event"]
                    },
                    {
                        nama: "Taman Literasi",
                        rating: 4.5,
                        harga: "gratis",
                        fasilitas: ["parkir", "toilet", "perpustakaan outdoor", "wifi"],
                        lokasi: "Jl. Pendidikan No. 12",
                        jamBuka: "08:00 - 17:00",
                        suasana: ["quiet", "educational", "peaceful"],
                        aktivitas: ["membaca", "belajar", "diskusi"],
                        cocokUntuk: ["pelajar", "komunitas literasi", "diskusi"]
                    }
                ]
            }
        };
        this.initialize();
    }

    initialize() {
        this.createAgentInterface();
        this.addEventListeners();
        this.showWelcomeMessage();
        this.loadAudioPreferences();
    }

    createAgentInterface() {
        // Update agent HTML structure
        this.agent.innerHTML = `
            <div class="agent-icon">
                <img src="assets/images/agent-icon.png" alt="HAFI Assistant">
                <div class="agent-status online"></div>
            </div>
            <div class="agent-chat">
                <div class="chat-header">
                    <h3>HAFI - Asisten HangOut Finder</h3>
                    <div class="chat-controls">
                        <button class="btn-audio" title="Toggle Audio">
                            <i class="fas fa-volume-up"></i>
                        </button>
                        <button class="btn-close">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
                <div class="chat-messages"></div>
                <div class="chat-input">
                    <input type="text" placeholder="Tanya HAFI sesuatu...">
                    <button class="btn-send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;

        // Update references after creating interface
        this.chatMessages = this.agent.querySelector('.chat-messages');
        this.chatInput = this.agent.querySelector('.chat-input input');
        this.btnSend = this.agent.querySelector('.btn-send');
        this.btnAudio = this.agent.querySelector('.btn-audio');
        this.btnClose = this.agent.querySelector('.btn-close');
    }

    addEventListeners() {
        // Toggle chat window
        this.agent.querySelector('.agent-icon').addEventListener('click', () => {
            this.toggleChat();
            this.playAudio('open');
        });

        // Close chat
        this.btnClose.addEventListener('click', () => {
            this.toggleChat(false);
            this.playAudio('close');
        });

        // Toggle audio
        this.btnAudio.addEventListener('click', () => {
            this.toggleAudio();
        });

        // Send message
        this.btnSend.addEventListener('click', () => this.sendMessage());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    showWelcomeMessage() {
        const messages = [
            "Hai! HAFI di sini, butuh bantuan mencari tempat nongkrong?",
            "Selamat datang! HAFI siap menemani kamu nongkrong hari ini!",
            "Halo! HAFI siap membantu kamu menemukan tempat ideal!"
        ];
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        this.addMessage('agent', randomMessage);
        this.playAudio('welcome');
    }

    toggleChat(show = null) {
        const chatWindow = this.agent.querySelector('.agent-chat');
        if (show === null) {
            chatWindow.classList.toggle('active');
        } else {
            chatWindow.classList.toggle('active', show);
        }
    }

    toggleAudio() {
        this.audioEnabled = !this.audioEnabled;
        this.btnAudio.innerHTML = this.audioEnabled ? 
            '<i class="fas fa-volume-up"></i>' : 
            '<i class="fas fa-volume-mute"></i>';
        localStorage.setItem('audioEnabled', this.audioEnabled);
    }

    loadAudioPreferences() {
        const savedPreference = localStorage.getItem('audioEnabled');
        if (savedPreference !== null) {
            this.audioEnabled = savedPreference === 'true';
            this.btnAudio.innerHTML = this.audioEnabled ? 
                '<i class="fas fa-volume-up"></i>' : 
                '<i class="fas fa-volume-mute"></i>';
        }
    }

    playAudio(type) {
        if (!this.audioEnabled) return;

        const audioMap = {
            'open': 'open.mp3',
            'close': 'close.mp3',
            'message': 'message.mp3',
            'welcome': 'welcome.mp3'
        };

        const audio = new Audio(`assets/audio/${audioMap[type]}`);
        audio.play().catch(error => console.log('Audio playback failed:', error));
    }

    addMessage(sender, text) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `<p>${text}</p>`;
        this.chatMessages.appendChild(messageDiv);
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        
        if (sender === 'user') {
            this.playAudio('message');
            this.processUserMessage(text);
        }
    }

    sendMessage() {
        const text = this.chatInput.value.trim();
        if (text) {
            this.addMessage('user', text);
            this.chatInput.value = '';
        }
    }

    async processUserMessage(text) {
        await this.delay(1000);
        const lowercaseText = text.toLowerCase();
        let response = "";

        // Sapaan dan perkenalan
        if (this.containsAny(lowercaseText, ['hai', 'halo', 'hi', 'hello', 'hafi'])) {
            if (lowercaseText.includes('nama')) {
                response = "Hai! Aku HAFI (HangOut Finder), asisten virtual yang siap membantu kamu menemukan tempat nongkrong ideal!";
            } else {
                response = "Hai! HAFI di sini, ada yang bisa dibantu mencari tempat nongkrong?";
            }
        }

        // Pertanyaan tentang aktivitas spesifik
        else if (this.containsAny(lowercaseText, ['kerja', 'meeting', 'ketemu klien'])) {
            response = this.getRecommendationByActivity('kerja');
        }
        else if (this.containsAny(lowercaseText, ['foto', 'instagram', 'instagramable', 'foto-foto'])) {
            response = this.getRecommendationByActivity('foto');
        }
        else if (this.containsAny(lowercaseText, ['date', 'kencan', 'romantis'])) {
            response = this.getRecommendationByActivity('date');
        }
        else if (this.containsAny(lowercaseText, ['keluarga', 'anak', 'family'])) {
            response = this.getRecommendationByActivity('keluarga');
        }

        // Pertanyaan tentang makanan/minuman
        else if (this.containsAny(lowercaseText, ['makanan', 'minuman', 'menu', 'kopi', 'makan'])) {
            response = this.getMenuRecommendation(lowercaseText);
        }

        // Pertanyaan tentang suasana
        else if (this.containsAny(lowercaseText, ['suasana', 'tempat', 'atmosphere'])) {
            if (lowercaseText.includes('tenang')) {
                response = this.getRecommendationByMood('tenang');
            } else if (lowercaseText.includes('ramai')) {
                response = this.getRecommendationByMood('ramai');
            } else if (lowercaseText.includes('outdoor')) {
                response = this.getRecommendationByMood('outdoor');
            }
        }

        // Rekomendasi berdasarkan budget
        else if (this.containsAny(lowercaseText, ['murah', 'budget', 'hemat'])) {
            response = this.getRecommendationByBudget('murah');
        }
        else if (this.containsAny(lowercaseText, ['mahal', 'premium', 'mewah'])) {
            response = this.getRecommendationByBudget('mahal');
        }
        // Rekomendasi berdasarkan fasilitas
        else if (lowercaseText.includes('wifi')) {
            response = this.getRecommendationByFacility('wifi');
        }
        else if (this.containsAny(lowercaseText, ['colokan', 'listrik', 'charger'])) {
            response = this.getRecommendationByFacility('colokan');
        }
        // Rekomendasi berdasarkan kategori
        else if (lowercaseText.includes('kafe')) {
            response = this.getRecommendationByCategory('kafe');
        }
        else if (this.containsAny(lowercaseText, ['coworking', 'kerja', 'meeting'])) {
            response = this.getRecommendationByCategory('coworking');
        }
        else if (this.containsAny(lowercaseText, ['taman', 'outdoor', 'luar'])) {
            response = this.getRecommendationByCategory('taman');
        }
        // Pertanyaan tentang rating
        else if (this.containsAny(lowercaseText, ['rating', 'terbaik', 'bagus'])) {
            response = this.getBestRatedPlaces();
        }
        // Pertanyaan tentang lokasi
        else if (this.containsAny(lowercaseText, ['dimana', 'lokasi', 'alamat'])) {
            response = "Saya bisa membantu Anda menemukan lokasi. Daerah mana yang Anda minati?";
        }
        // Pertanyaan tentang jam buka
        else if (this.containsAny(lowercaseText, ['jam', 'buka', 'tutup', 'operasional'])) {
            response = "Kebanyakan kafe buka dari jam 8 pagi sampai 10 malam. Ada preferensi waktu tertentu?";
        }
        // Pertanyaan tentang waktu spesifik
        else if (this.containsAny(lowercaseText, ['pagi', 'siang', 'sore', 'malam'])) {
            response = this.getRecommendationByTime(lowercaseText);
        }
        // Pertanyaan tentang transportasi/akses
        else if (this.containsAny(lowercaseText, ['parkir', 'mobil', 'motor', 'transportasi', 'akses'])) {
            response = this.getAccessInformation(lowercaseText);
        }
        // Default response yang lebih informatif
        else {
            response = "HAFI belum yakin dengan pertanyaanmu. Kamu bisa tanya tentang:\n\n" +
                      "🏢 Tempat berdasarkan:\n" +
                      "- Budget (murah/mahal)\n" +
                      "- Fasilitas (WiFi, colokan, AC)\n" +
                      "- Kategori (kafe, coworking, taman)\n\n" +
                      "🎯 Aktivitas:\n" +
                      "- Kerja/meeting\n" +
                      "- Foto-foto\n" +
                      "- Nongkrong santai\n" +
                      "- Keluarga\n\n" +
                      "🌟 Info lainnya:\n" +
                      "- Rating dan review\n" +
                      "- Menu dan harga\n" +
                      "- Lokasi dan jam buka\n" +
                      "- Suasana tempat\n\n" +
                      "Coba tanya yang lebih spesifik ya! 😊";
        }

        this.addMessage('agent', response);
    }

    // Helper methods
    containsAny(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    getRecommendationByBudget(type) {
        if (type === 'murah') {
            return "HAFI rekomendasikan beberapa tempat dengan budget dibawah 50rb:\n" +
                   "1. Taman Kota (Gratis)\n" +
                   "2. Kafe Satu (30-50rb)\n" +
                   "Mau info lebih detail tentang tempat tertentu?";
        } else {
            return "Untuk pengalaman premium, HAFI rekomendasikan:\n" +
                   "1. Coworking Space (100-200rb)\n" +
                   "2. Kafe Dua (75-150rb)\n" +
                   "Kedua tempat ini punya fasilitas lengkap dan suasana nyaman.";
        }
    }

    getRecommendationByFacility(facility) {
        const places = [];
        Object.values(this.knowledgeBase.tempat).forEach(category => {
            category.forEach(place => {
                if (place.fasilitas.includes(facility)) {
                    places.push(place.nama);
                }
            });
        });

        if (places.length > 0) {
            return `HAFI temukan tempat dengan fasilitas ${facility}:\n${places.join('\n')}`;
        }
        return "Maaf, saat ini HAFI belum menemukan tempat yang sesuai dengan fasilitas yang kamu cari.";
    }

    getRecommendationByCategory(category) {
        const places = this.knowledgeBase.tempat[category];
        if (places && places.length > 0) {
            const recommendations = places.map(place => 
                `${place.nama} (Rating: ${place.rating}, Harga: ${place.harga})`
            ).join('\n');
            return `Rekomendasi ${category}:\n${recommendations}`;
        }
        return `Maaf, saat ini belum ada rekomendasi untuk kategori ${category}.`;
    }

    getBestRatedPlaces() {
        const allPlaces = [];
        Object.values(this.knowledgeBase.tempat).forEach(category => {
            allPlaces.push(...category);
        });

        const bestPlaces = allPlaces
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);

        return "Tempat dengan rating terbaik:\n" +
               bestPlaces.map(place => 
                   `${place.nama} (⭐${place.rating})`
               ).join('\n');
    }

    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getRecommendationByActivity(activity) {
        const recommendations = [];
        Object.values(this.knowledgeBase.tempat).forEach(category => {
            category.forEach(place => {
                if (place.cocokUntuk && place.cocokUntuk.includes(activity)) {
                    recommendations.push(place);
                }
            });
        });

        if (recommendations.length > 0) {
            let response = `HAFI rekomendasikan tempat yang cocok untuk ${activity}:\n\n`;
            recommendations.forEach(place => {
                response += `📍 ${place.nama}\n`;
                response += `💰 ${place.harga}\n`;
                response += `⭐ Rating: ${place.rating}\n`;
                response += `🎯 Cocok untuk: ${place.cocokUntuk.join(', ')}\n\n`;
            });
            return response;
        }
        return `Maaf, HAFI belum punya rekomendasi khusus untuk ${activity}. Coba tanya aktivitas lain ya!`;
    }

    getMenuRecommendation(text) {
        if (text.includes('kopi')) {
            return "HAFI rekomendasikan kafe dengan kopi enak:\n" +
                   "☕ Kafe Satu - Signature Latte\n" +
                   "☕ Kafe Dua - Cold Brew\n\n" +
                   "Mau tau menu lainnya?";
        }
        return "HAFI punya info lengkap tentang menu di setiap tempat. Kamu tertarik sama menu apa?";
    }

    getRecommendationByMood(mood) {
        const moodMap = {
            tenang: "tempat yang tenang dan cozy",
            ramai: "tempat yang rame dan seru",
            outdoor: "tempat outdoor yang sejuk"
        };

        const places = Object.values(this.knowledgeBase.tempat)
            .flat()
            .filter(place => place.suasana.includes(mood));

        if (places.length > 0) {
            let response = `HAFI temukan ${places.length} ${moodMap[mood]}:\n\n`;
            places.forEach(place => {
                response += `🏢 ${place.nama}\n`;
                response += `🌟 Suasana: ${place.suasana.join(', ')}\n`;
                response += `⏰ Jam buka: ${place.jamBuka}\n\n`;
            });
            return response;
        }
        return `Maaf, HAFI belum punya rekomendasi untuk suasana ${mood}`;
    }

    getRecommendationByTime(text) {
        const timeMap = {
            pagi: "06:00-11:00",
            siang: "11:00-15:00",
            sore: "15:00-18:00",
            malam: "18:00-24:00"
        };

        let timeSlot = Object.keys(timeMap).find(time => text.includes(time));
        if (timeSlot) {
            return `HAFI rekomendasikan tempat yang enak untuk ${timeSlot}:\n\n` +
                   `1. ${this.getPlacesByTime(timeSlot)}`;
        }
        return "HAFI bisa kasih rekomendasi berdasarkan waktu (pagi/siang/sore/malam). Mau yang kapan?";
    }

    getAccessInformation(text) {
        if (text.includes('parkir')) {
            return "HAFI informasikan tempat dengan parkiran luas:\n\n" +
                   "🅿️ Kafe Satu - Parkir mobil & motor\n" +
                   "🅿️ Coworking Space - Basement parking\n" +
                   "🅿️ Taman Kota - Area parkir umum\n\n" +
                   "Mau info lebih detail?";
        }
        return "HAFI bisa kasih info akses dan transportasi ke semua tempat. Mau tau yang mana?";
    }
}

// Initialize Virtual Agent
document.addEventListener('DOMContentLoaded', function() {
    const agent = new VirtualAgent();
}); 