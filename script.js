class KawaiiConfession {
    constructor() {
        this.dates = [
            { day: 'Thu 12', time: '7:00 PM', full: 'Thursday, December 12th - 7:00 PM 🐾' },
            { day: 'Sat 14', time: '3:00 PM', full: 'Saturday, December 14th - 3:00 PM ✨' },
            { day: 'Mon 16', time: '6:30 PM', full: 'Monday, December 16th - 6:30 PM 🌟' },
            { day: 'Wed 18', time: '8:00 PM', full: 'Wednesday, December 18th - 8:00 PM ' }
        ];
        this.selectedDate = null;
        this.waNumber = '6281234567890'; // YOUR WA NUMBER!
        this.init();
    }

    init() {
        setTimeout(() => {
            this.hideLoading();
            this.typeWriter();
            this.renderDates();
            this.sparkleEffect();
        }, 1800);
    }

    hideLoading() {
        document.getElementById('loading').style.opacity = '0';
        document.getElementById('mainContent').classList.add('show');
    }

    typeWriter() {
        const cuteGreetings = [
            'Hey guguguk!',
            'Hiii', 
            'Halo dek!',
            'Hi there! 🐾'
        ];
        
        const greeting = cuteGreetings[Math.floor(Math.random() * cuteGreetings.length)];
        const title = document.querySelector('.title');
        title.setAttribute('data-text', greeting);
        
        let i = 0;
        title.innerHTML = '<span class="cursor">|</span>';

        function type() {
            if (i < greeting.length) {
                title.innerHTML = greeting.slice(0, i + 1) + '<span class="cursor">|</span>';
                i++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    title.innerHTML = greeting;
                    document.getElementById('confirmBtn').onclick = () => this.redirectToWhatsApp();
                }, 1000);
            }
        }
        type();
    }

    renderDates() {
        const grid = document.getElementById('dateGrid');
        grid.innerHTML = this.dates.map((date, index) => `
            <div class="date-card" data-index="${index}">
                <div class="date-time">${date.time}</div>
                <div class="date-info">${date.day}</div>
            </div>
        `).join('');

        document.querySelectorAll('.date-card').forEach((card, index) => {
            card.addEventListener('click', () => this.selectDate(index));
        });
    }

    selectDate(index) {
        document.querySelectorAll('.date-card').forEach(c => c.classList.remove('selected'));
        document.querySelector(`[data-index="${index}"]`).classList.add('selected');
        this.selectedDate = this.dates[index];
        document.getElementById('confirmSection').style.opacity = '0';
        document.getElementById('confirmSection').style.transform = 'scale(0.8)';
        document.getElementById('confirmSection').style.display = 'flex';
        
        setTimeout(() => {
            document.getElementById('confirmSection').style.transition = 'all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            document.getElementById('confirmSection').style.opacity = '1';
            document.getElementById('confirmSection').style.transform = 'scale(1)';
        }, 100);
    }

    sparkleEffect() {
        setInterval(() => {
            const sparkle = document.createElement('div');
            sparkle.innerHTML = '✨';
            sparkle.style.position = 'fixed';
            sparkle.style.left = Math.random() * 100 + 'vw';
            sparkle.style.top = Math.random() * 50 + 'vh';
            sparkle.style.pointerEvents = 'none';
            sparkle.style.zIndex = '1000';
            sparkle.style.fontSize = '20px';
            sparkle.style.animation = 'sparkleFall 3s linear forwards';
            document.body.appendChild(sparkle);
            setTimeout(() => sparkle.remove(), 3000);
        }, 3000);
    }

    redirectToWhatsApp() {
        const cuteMessages = [
            `Hey ganteng! 🐾 Chose ${this.selectedDate.full} for our Google Meet! You free? `,
            `Hiii~ Picked ${this.selectedDate.full} for Gmeet! Ready? ✨`,
            `${this.selectedDate.full} works for you? Let's chat!`,
            `Google Meet at ${this.selectedDate.full}? Can't wait! 🐾`
        ];
        
        const message = cuteMessages[Math.floor(Math.random() * cuteMessages.length)];
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${this.waNumber}?text=${encodedMessage}`, '_blank');
    }
}

// Dynamic sparkle CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkleFall {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(100vh) rotate(360deg); opacity: 0; }
    }
    
    .main-content {
        opacity: 0;
        transform: scale(0.8) rotate(-5deg);
        transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    }
    
    .main-content.show {
        opacity: 1;
        transform: scale(1) rotate(0deg);
    }
    
    #confirmSection {
        opacity: 0;
        transform: scale(0.8);
        transition: all 0.4s ease;
        display: flex;
        justify-content: center;
    }
`;
document.head.appendChild(style);

document.addEventListener('DOMContentLoaded', () => new KawaiiConfession());
