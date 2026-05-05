class CuteConfession {
    constructor() {
        this.dates = [
            { day: 'Thu, Dec 12', time: '7:00 PM ⭐', full: 'Thursday, December 12th at 7:00 PM' },
            { day: 'Sat, Dec 14', time: '3:00 PM 🌟', full: 'Saturday, December 14th at 3:00 PM' },
            { day: 'Mon, Dec 16', time: '6:30 PM ✨', full: 'Monday, December 16th at 6:30 PM' },
            { day: 'Wed, Dec 18', time: '8:00 PM 🎉', full: 'Wednesday, December 18th at 8:00 PM' }
        ];
        this.selectedDate = null;
        this.waNumber = '6281234567890'; // GANTI NOMOR WA LU!
        this.init();
    }

    init() {
        this.showLoading();
        this.createParticles();
        setTimeout(() => {
            this.hideLoading();
            this.typeWriter();
            this.renderDates();
            this.attachEvents();
        }, 2000);
    }

    showLoading() {
        // Loading animation already in CSS
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        const mainContent = document.getElementById('mainContent');
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
            mainContent.style.opacity = '1';
            mainContent.style.transform = 'translateY(0)';
        }, 500);
    }

    typeWriter() {
        const title = document.querySelector('.title');
        const text = title.getAttribute('data-text');
        let i = 0;
        title.innerHTML = '<span class="cursor">|</span>';

        function type() {
            if (i < text.length) {
                title.innerHTML = text.slice(0, i + 1) + '<span class="cursor">|</span>';
                i++;
                setTimeout(type, 100);
            } else {
                title.innerHTML = text;
            }
        }
        type();
    }

    createParticles() {
        // Stars
        for (let i = 0; i < 20; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 5 + 's';
            star.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.querySelector('.stars').appendChild(star);
        }

        // Stars instead of hearts
        for (let i = 0; i < 10; i++) {
            const star = document.createElement('div');
            star.innerHTML = '⭐';
            star.className = 'star-particle';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = '100%';
            star.style.animationDelay = Math.random() * 3 + 's';
            document.querySelector('.hearts').appendChild(star);
        }
    }

    renderDates() {
        const grid = document.getElementById('dateGrid');
        grid.innerHTML = this.dates.map((date, index) => `
            <div class="date-card" data-index="${index}">
                <div class="date-time">${date.time}</div>
                <div class="date-info">${date.day}</div>
            </div>
        `).join('');
    }

    attachEvents() {
        document.querySelectorAll('.date-card').forEach((card, index) => {
            card.addEventListener('click', () => this.selectDate(index));
        });
    }

    selectDate(index) {
        document.querySelectorAll('.date-card').forEach(c => c.classList.remove('selected'));
        const card = document.querySelector(`[data-index="${index}"]`);
        card.classList.add('selected');
        this.selectedDate = this.dates[index];
        
        // Show magic button
        document.getElementById('magicBtn').style.display = 'flex';
        this.animateMagicButton();
    }

    animateMagicButton() {
        const btn = document.getElementById('magicBtn');
        btn.onclick = () => this.redirectToWhatsApp();
        
        // Button entrance animation
        btn.style.opacity = '0';
        btn.style.transform = 'translateY(20px) scale(0.8)';
        setTimeout(() => {
            btn.style.transition = 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            btn.style.opacity = '1';
            btn.style.transform = 'translateY(0) scale(1)';
        }, 300);
    }

    redirectToWhatsApp() {
        if (!this.selectedDate) return;
        
        const message = `Hey! 😊 I picked ${this.selectedDate.full} for our meetup!\n\nReady for Google Meet? ✨`;
        const encodedMessage = encodeURIComponent(message);
        const waUrl = `https://wa.me/${this.waNumber}?text=${encodedMessage}`;
        
        // Celebration effect
        this.celebrate();
        setTimeout(() => {
            window.open(waUrl, '_blank');
        }, 800);
    }

    celebrate() {
        // Screen shake + stars explosion
        document.body.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => document.body.style.animation = '', 500);
        
        // Stars explosion instead of hearts
        for (let i = 0; i < 15; i++) {
            setTimeout(() => {
                const star = document.createElement('div');
                star.innerHTML = '⭐';
                star.style.position = 'fixed';
                star.style.left = Math.random() * 100 + 'vw';
                star.style.top = '100vh';
                star.style.fontSize = '24px';
                star.style.pointerEvents = 'none';
                star.style.zIndex = '1000';
                star.style.animation = 'starRain 2s linear forwards';
                document.body.appendChild(star);
                
                setTimeout(() => star.remove(), 2000);
            }, i * 100);
        }
    }
}

// Add CSS animations dynamically (Updated for stars)
const style = document.createElement('style');
style.textContent = `
    .star {
        position: absolute;
        width: 4px;
        height: 4px;
        background: #FFD700;
        border-radius: 50%;
        animation: twinkle 3s ease-in-out infinite;
    }
    
    .star-particle {
        position: absolute;
        font-size: 14px;
        animation: starFall 4s linear infinite;
    }
    
    @keyframes twinkle {
        0%, 100% { opacity: 0.3; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.5); }
    }
    
    @keyframes starFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
    
    @keyframes starRain {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(-120vh) rotate(720deg); opacity: 0; }
    }
    
    .main-content {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s ease-out;
    }
`;
document.head.appendChild(style);

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    new CuteConfession();
});
