// Main JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    initializeSearch();
    initializeFilters();
    initializeSlider();
    
    // Play audio notification if needed
    playNotification();
});

function initializeSearch() {
    const searchForm = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm && searchInput) {
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const searchTerm = searchInput.value.toLowerCase().trim();
            
            if (searchTerm) {
                // Simpan kata kunci pencarian di localStorage
                localStorage.setItem('searchTerm', searchTerm);
                // Redirect ke halaman rekomendasi dengan parameter pencarian
                window.location.href = `rekomendasi.html?search=${encodeURIComponent(searchTerm)}`;
            }
        });
    }
}

function initializeFilters() {
    const filterForm = document.getElementById('filter-form');
    if (filterForm) {
        filterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Handle filter submission
            playNotification();
        });
    }
}

function initializeSlider() {
    // Initialize recommendation slider if exists
    const slider = document.querySelector('.rekomendasi-slider');
    if (slider) {
        // Add slider functionality
    }
}

function playNotification() {
    const audio = new Audio('assets/audio/notifikasi.mp3');
    audio.play().catch(function(error) {
        console.log("Audio playback failed:", error);
    });
}

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterTags = document.querySelectorAll('.filter-tags .tag');
    const tempatItems = document.querySelectorAll('.tempat-item');

    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            // Remove active class from all tags
            filterTags.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tag
            this.classList.add('active');

            const filter = this.textContent.toLowerCase();

            tempatItems.forEach(item => {
                // Get kategori from badge
                const kategori = item.querySelector('.kategori-badge').textContent.toLowerCase();
                // Get fasilitas from icons
                const fasilitas = Array.from(item.querySelectorAll('.fasilitas-icons span'))
                    .map(span => span.getAttribute('title').toLowerCase());

                if (filter === 'semua') {
                    item.style.display = 'block';
                } else if (filter === 'wifi' && fasilitas.includes('wifi')) {
                    item.style.display = 'block';
                } else if (filter === 'outdoor' && fasilitas.includes('outdoor')) {
                    item.style.display = 'block';
                } else if (filter === kategori) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });

            // Animate filtered items
            tempatItems.forEach(item => {
                if (item.style.display === 'block') {
                    item.style.animation = 'fadeIn 0.5s ease forwards';
                }
            });
        });
    });
});

// Add animation keyframes to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Profile Image Upload
document.addEventListener('DOMContentLoaded', function() {
    const uploadPhoto = document.getElementById('upload-photo');
    const profileImage = document.getElementById('profile-image');

    if (uploadPhoto && profileImage) {
        uploadPhoto.addEventListener('change', function(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    profileImage.src = e.target.result;
                    // Opsional: Simpan gambar ke localStorage
                    localStorage.setItem('profileImage', e.target.result);
                }
                reader.readAsDataURL(file);
            }
        });

        // Muat gambar dari localStorage jika ada
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            profileImage.src = savedImage;
        }
    }
});

// Audio Management
class AudioManager {
    constructor() {
        this.initializeAudio();
        this.setupEventListeners();
    }

    initializeAudio() {
        this.bgMusic = document.getElementById('bgMusic');
        this.volumeSlider = document.getElementById('volumeSlider');
        this.volumeValue = document.querySelector('.volume-value');
        this.volumeIcon = document.querySelector('.volume-icon');
        this.btnMusic = document.querySelector('.btn-music');

        if (this.bgMusic) {
            const savedVolume = localStorage.getItem('bgmVolume') || 20;
            this.setVolume(savedVolume);
            this.updateVolumeIcon(savedVolume);
        }

        const isMuted = localStorage.getItem('isMuted') === 'true';
        if (isMuted) {
            this.muteAll();
        }

        // Setup button sounds
        this.setupButtonSounds();
    }

    setupEventListeners() {
        if (this.volumeSlider) {
            this.volumeSlider.addEventListener('input', (e) => {
                const volume = e.target.value;
                this.setVolume(volume);
                this.updateVolumeIcon(volume);
            });
        }

        if (this.volumeIcon) {
            this.volumeIcon.addEventListener('click', () => {
                const currentVolume = this.volumeSlider.value;
                if (currentVolume > 0) {
                    this.lastVolume = currentVolume;
                    this.setVolume(0);
                } else {
                    this.setVolume(this.lastVolume || 20);
                }
                this.updateVolumeIcon(this.volumeSlider.value);
            });
        }

        if (this.btnMusic) {
            this.btnMusic.addEventListener('click', () => this.toggleMusic());
        }
    }

    updateVolumeIcon(volume) {
        if (this.volumeIcon) {
            this.volumeIcon.className = 'fas volume-icon';
            if (volume == 0) {
                this.volumeIcon.classList.add('fa-volume-mute');
                this.volumeIcon.classList.add('muted');
            } else if (volume < 50) {
                this.volumeIcon.classList.add('fa-volume-down');
            } else {
                this.volumeIcon.classList.add('fa-volume-up');
            }
        }
    }

    setVolume(volume) {
        if (this.bgMusic) {
            this.bgMusic.volume = volume / 100;
            this.volumeSlider.value = volume;
            this.volumeValue.textContent = `${volume}%`;
            localStorage.setItem('bgmVolume', volume);
        }
    }

    toggleMusic() {
        if (this.bgMusic) {
            if (this.bgMusic.paused) {
                this.bgMusic.play();
                this.btnMusic.classList.remove('muted');
                localStorage.setItem('isMuted', 'false');
            } else {
                this.bgMusic.pause();
                this.btnMusic.classList.add('muted');
                localStorage.setItem('isMuted', 'true');
            }
        }
    }

    muteAll() {
        if (this.bgMusic) {
            this.bgMusic.pause();
            this.btnMusic.classList.add('muted');
        }
    }

    playButtonSound() {
        const buttonSound = new Audio('assets/audio/button-click.mp3');
        buttonSound.volume = this.bgMusic ? this.bgMusic.volume : 0.2;
        buttonSound.play().catch(console.error);
    }

    setupButtonSounds() {
        // Menambahkan suara ke semua tombol
        document.querySelectorAll('button, .btn-detail, .btn-maps, .btn-bantuan, .nav-links a, .kategori-item, .tag')
            .forEach(button => {
                button.addEventListener('click', () => {
                    this.playButtonSound();
                });
            });
    }

    playHafiSound() {
        const hafiSound = new Audio('assets/audio/hafi-message.mp3');
        hafiSound.volume = this.bgMusic ? this.bgMusic.volume : 0.3;
        hafiSound.play().catch(console.error);
    }
}

// Initialize Audio Manager
let audioManager;
document.addEventListener('DOMContentLoaded', () => {
    audioManager = new AudioManager();
    window.audioManager = audioManager;
});

// Update event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Audio Manager
    audioManager = new AudioManager();
    window.audioManager = audioManager;

    // Setup button sounds for dynamically added elements
    const setupDynamicButtonSounds = () => {
        document.querySelectorAll('button:not([data-sound]), .btn-detail:not([data-sound]), .btn-maps:not([data-sound])')
            .forEach(button => {
                button.setAttribute('data-sound', 'true');
                button.addEventListener('click', () => {
                    audioManager.playButtonSound();
                });
            });
    };

    // Setup initial buttons
    setupDynamicButtonSounds();

    // Setup for dynamically added buttons (if needed)
    const observer = new MutationObserver(setupDynamicButtonSounds);
    observer.observe(document.body, { 
        childList: true, 
        subtree: true 
    });

    // Virtual Agent sounds
    const agent = document.querySelector('.virtual-agent');
    if (agent) {
        const chatMessages = agent.querySelector('.chat-messages');
        const chatInput = agent.querySelector('.chat-input input');
        const sendButton = agent.querySelector('.btn-send');

        // Fungsi untuk menambah pesan
        function addMessage(text, isUser = false) {
            const message = document.createElement('div');
            message.className = `message ${isUser ? 'user' : 'agent'}`;
            message.textContent = text;
            chatMessages.appendChild(message);
            chatMessages.scrollTop = chatMessages.scrollHeight;

            // Putar suara sesuai dengan jenis pesan
            if (isUser) {
                audioManager.playSound('message');
            } else {
                audioManager.playHafiSound();
            }
        }

        // Handle pengiriman pesan
        function handleSendMessage() {
            const text = chatInput.value.trim();
            if (text) {
                // Pesan user
                addMessage(text, true);
                chatInput.value = '';

                // Simulasi balasan HAFI setelah delay
                setTimeout(() => {
                    const hafiResponse = getHafiResponse(text);
                    addMessage(hafiResponse, false);
                }, 1000);
            }
        }

        // Event listeners
        sendButton.addEventListener('click', handleSendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSendMessage();
            }
        });

        // Welcome message
        setTimeout(() => {
            addMessage('Halo! Saya HAFI, asisten virtual yang siap membantu Anda menemukan tempat nongkrong ideal. Ada yang bisa saya bantu?');
        }, 1000);
    }

    // Filter tags sound
    document.querySelectorAll('.filter-tags .tag').forEach(tag => {
        tag.addEventListener('click', () => {
            audioManager.playButtonSound();
        });
    });

    // Navigation links sound
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            audioManager.playButtonSound();
        });
    });

    // Kategori items sound
    document.querySelectorAll('.kategori-item').forEach(item => {
        item.addEventListener('click', () => {
            audioManager.playButtonSound();
        });
    });

    // Social media links sound
    document.querySelectorAll('.social-icons a, .member-social a').forEach(link => {
        link.addEventListener('click', () => {
            audioManager.playButtonSound();
        });
    });
});

// Fungsi untuk mendapatkan respons HAFI (bisa dikembangkan lebih lanjut)
function getHafiResponse(userMessage) {
    const responses = [
        'Saya mengerti. Bisa Anda jelaskan lebih detail preferensi Anda?',
        'Baik, saya akan bantu carikan tempat yang sesuai dengan keinginan Anda.',
        'Ada kriteria khusus yang Anda cari?',
        'Saya menemukan beberapa tempat yang mungkin sesuai dengan kebutuhan Anda.',
        'Apakah Anda mencari tempat dengan fasilitas tertentu?'
    ];
    return responses[Math.floor(Math.random() * responses.length)];
}

// Fungsi untuk mengganti gambar utama
function changeImage(src) {
    const mainImage = document.getElementById('mainImage');
    mainImage.classList.add('preview-animation');
    mainImage.src = src;
    
    // Play sound effect
    if (window.audioManager) {
        window.audioManager.playButtonSound();
    }
    
    // Hapus class animasi
    setTimeout(() => {
        mainImage.classList.remove('preview-animation');
    }, 300);
}

// Detail Page Handler
document.addEventListener('DOMContentLoaded', function() {
    // Cek apakah ini halaman detail
    if (document.querySelector('.detail-section')) {
        // Ambil ID tempat dari URL
        const urlParams = new URLSearchParams(window.location.search);
        const tempatId = urlParams.get('id');

        if (!tempatId) {
            console.error('ID tempat tidak ditemukan di URL');
            return;
        }

        if (!tempatData[tempatId]) {
            console.error(`Data untuk tempat dengan ID ${tempatId} tidak ditemukan`);
            return;
        }

        const tempat = tempatData[tempatId];
        updateDetailPage(tempat);
    }
});

function updateDetailPage(tempat) {
    try {
        // Update judul
        document.title = `${tempat.nama} - HangOut Finder`;

        // Update gambar
        const mainImage = document.getElementById('mainImage');
        if (mainImage) {
            mainImage.src = `assets/images/tempat/${tempat.gambar.utama}`;
        }
        
        // Update thumbnails
        const thumbnails = document.querySelectorAll('.thumbnail-item');
        const gambarUrls = Object.values(tempat.gambar);
        thumbnails.forEach((thumb, index) => {
            if (gambarUrls[index]) {
                const img = thumb.querySelector('img');
                if (img) {
                    img.src = `assets/images/tempat/${gambarUrls[index]}`;
                    thumb.onclick = () => changeImage(`assets/images/tempat/${gambarUrls[index]}`);
                }
            }
        });

        // Update info dasar
        const elements = {
            nama: document.querySelector('.info-header h1'),
            kategori: document.querySelector('.kategori-badge'),
            rating: document.querySelector('.rating span'),
            reviewCount: document.querySelector('.review-count'),
            priceRange: document.querySelector('.price-range span'),
            lokasi: document.querySelector('.location span')
        };

        if (elements.nama) elements.nama.textContent = tempat.nama;
        if (elements.kategori) elements.kategori.textContent = tempat.kategori;
        if (elements.rating) elements.rating.textContent = tempat.rating;
        if (elements.reviewCount) elements.reviewCount.textContent = `(${tempat.reviewCount} ulasan)`;
        if (elements.priceRange) elements.priceRange.textContent = tempat.priceRange;
        if (elements.lokasi) elements.lokasi.textContent = tempat.lokasi;

        // Update jam operasional
        const scheduleGrid = document.querySelector('.schedule-grid');
        if (scheduleGrid) {
            scheduleGrid.innerHTML = '';
            Object.entries(tempat.jamOperasional).forEach(([hari, jam]) => {
                scheduleGrid.innerHTML += `
                    <div class="day">${hari}</div>
                    <div class="time">${jam}</div>
                `;
            });
        }

        // Update fasilitas
        const facilityIcons = document.querySelector('.facility-icons');
        if (facilityIcons) {
            facilityIcons.innerHTML = tempat.fasilitas.map(fasilitas => `
                <span title="${fasilitas}">
                    <i class="fas ${getFasilitasIcon(fasilitas)}"></i> ${fasilitas}
                </span>
            `).join('');
        }

        // Update deskripsi
        const description = document.querySelector('.description p');
        if (description) description.textContent = tempat.deskripsi;

        // Update menu unggulan
        const menuItems = document.querySelector('.menu-items');
        if (menuItems) {
            menuItems.innerHTML = tempat.menuUnggulan.map(menu => `
                <div class="menu-item">
                    <img src="assets/images/tempat/${menu.gambar}" alt="${menu.nama}">
                    <div class="menu-info">
                        <h4>${menu.nama}</h4>
                        <span class="price">Rp${menu.harga.toLocaleString()}</span>
                    </div>
                </div>
            `).join('');
        }
    } catch (error) {
        console.error('Error updating detail page:', error);
    }
}

function getFasilitasIcon(fasilitas) {
    const icons = {
        'WiFi': 'fa-wifi',
        'Power Outlet': 'fa-plug',
        'AC': 'fa-snowflake',
        'Parkir': 'fa-parking',
        'Smoking Area': 'fa-smoking',
        'Meeting Room': 'fa-users',
        'Printer': 'fa-print'
        // Tambahkan icon lainnya sesuai kebutuhan
    };
    return icons[fasilitas] || 'fa-check';
}

// Search results handler di halaman rekomendasi
function handleSearchResults() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('search') || localStorage.getItem('searchTerm');
    
    if (searchTerm) {
        // Reset filter tags
        document.querySelectorAll('.filter-tags .tag').forEach(tag => {
            tag.classList.remove('active');
        });
        document.querySelector('.filter-tags .tag:first-child').classList.add('active');

        // Filter tempat berdasarkan kata kunci
        const tempatItems = document.querySelectorAll('.tempat-item');
        let foundCount = 0;

        tempatItems.forEach(item => {
            const nama = item.querySelector('h3').textContent.toLowerCase();
            const kategori = item.querySelector('.kategori-badge').textContent.toLowerCase();
            const fasilitas = Array.from(item.querySelectorAll('.fasilitas-icons span'))
                .map(span => span.getAttribute('title').toLowerCase());
            const harga = item.querySelector('.harga').textContent.toLowerCase();

            if (nama.includes(searchTerm) || 
                kategori.includes(searchTerm) || 
                fasilitas.some(f => f.includes(searchTerm)) ||
                harga.includes(searchTerm)) {
                item.style.display = 'block';
                foundCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Update judul hasil pencarian
        const resultsTitle = document.querySelector('.rekomendasi-list h2');
        if (resultsTitle) {
            resultsTitle.textContent = `Hasil Pencarian untuk "${searchTerm}" (${foundCount} tempat)`;
        }

        // Clear search term from localStorage after displaying results
        localStorage.removeItem('searchTerm');
    }
}

// Kategori handler
function handleKategoriFilter() {
    const urlParams = new URLSearchParams(window.location.search);
    const kategori = urlParams.get('kategori');
    
    if (kategori) {
        // Reset filter tags
        document.querySelectorAll('.filter-tags .tag').forEach(tag => {
            tag.classList.remove('active');
            if (tag.textContent.toLowerCase() === kategori.toLowerCase()) {
                tag.classList.add('active');
            }
        });

        // Filter tempat berdasarkan kategori
        const tempatItems = document.querySelectorAll('.tempat-item');
        let foundCount = 0;

        tempatItems.forEach(item => {
            const itemKategori = item.querySelector('.kategori-badge').textContent.toLowerCase();
            
            if (kategori === 'semua' || itemKategori === kategori.toLowerCase()) {
                item.style.display = 'block';
                foundCount++;
            } else {
                item.style.display = 'none';
            }
        });

        // Update judul hasil filter
        const resultsTitle = document.querySelector('.rekomendasi-list h2');
        if (resultsTitle) {
            resultsTitle.textContent = `${kategori.charAt(0).toUpperCase() + kategori.slice(1)} (${foundCount} tempat)`;
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
    
    // Jika di halaman rekomendasi, handle hasil pencarian dan filter kategori
    if (document.querySelector('.rekomendasi-list')) {
        handleSearchResults();
        handleKategoriFilter();
    }
}); 