class KawaiiConfession {
    constructor() {
        this.dates = [
            { day: 'Thu 12', time: '7:00 PM', full: 'Thursday, December 12th - 7:00 PM 🐾' },
            { day: 'Sat 14', time: '3:00 PM', full: 'Saturday, December 14th - 3:00 PM ✨' },
            { day: 'Mon 16', time: '6:30 PM', full: 'Monday, December 16th - 6:30 PM 🌟' },
            { day: 'Wed 18', time: '8:00 PM', full: 'Wednesday, December 18th - 8:00 PM' }
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
        }, 2000);
    }

    hideLoading() {
        const loading = document.getElementById('loading');
        const mainContent = document.getElementById('mainContent');
        loading.style.transition = 'opacity 0.5s ease';
        loading.style.opacity = '0';
        setTimeout(() => {
            loading.style.display = 'none';
            mainContent.classList.add('show');
        }, 500);
    }

    typeWriter() {
        const greeting = 'Hey cutie!';
        const title = document.querySelector('.title');
        
        let i = 0;
        title.innerHTML = '<span class="cursor">|</span>';

        function type() {
            if (i < greeting.length) {
                title.innerHTML = greeting.slice(0, i + 1) + '<span class="cursor">|</span>';
                i++;
                setTimeout(type, 100);
            } else {
                setTimeout(() => {
                    title.innerHTML = greeting + ' 🐾';
                }, 500);
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

        // **FIXED CLICK EVENTS**
        document.querySelectorAll('.date-card').forEach((card, index) => {
            card.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                this.selectDate(index);
            });
            
            // Touch support
            card.addEventListener('touchstart', (e) => {
                e.preventDefault();
                this.selectDate(index);
            });
        });
    }

    selectDate(index) {
        // Remove all selected
        document.querySelectorAll('.date-card').forEach(c => {
            c.classList.remove('selected');
        });
        
        // Select clicked
        const selectedCard = document.querySelector(`[data-index="${index}"]`);
        selectedCard.classList.add('selected');
        
        this.selectedDate = this.dates[index];
        
        // Show button
        const btn = document.getElementById('confirmBtn');
        btn.style.display = 'flex';
        btn.style.opacity = '0';
        btn.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            btn.style.transition = 'all 0.4s ease';
            btn.style.opacity = '1';
            btn.style.transform = 'scale(1)';
        }, 100);
    }

    redirectToWhatsApp() {
        if (!this.selectedDate) return;
        
        const message = `Hey cutie! 🐾 Chose ${this.selectedDate.full} for our Google Meet! You free?`;
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${this.waNumber}?text=${encodedMessage}`, '_blank');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new KawaiiConfession();
});
