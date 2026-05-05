* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(135deg, #FFE4E6 0%, #FBB6CE 30%, #F8BBD9 70%, #E1BEE7 100%);
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
}

.floating-blobs {
    position: fixed;
    inset: 0;
    pointer-events: none;
    z-index: 1;
}

.blob {
    position: absolute;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    animation: blobFloat 8s ease-in-out infinite;
}

.blob1 {
    width: 200px;
    height: 200px;
    top: 10%;
    left: 10%;
    animation-delay: 0s;
}

.blob2 {
    width: 150px;
    height: 150px;
    top: 60%;
    right: 10%;
    animation-delay: 3s;
}

.blob3 {
    width: 100px;
    height: 100px;
    bottom: 20%;
    left: 20%;
    animation-delay: 6s;
}

@keyframes blobFloat {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -20px) scale(1.1); }
    66% { transform: translate(-15px, 15px) scale(0.9); }
}

.container {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    position: relative;
    z-index: 10;
}

.card {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(25px);
    border-radius: 32px;
    padding: 40px 28px;
    box-shadow: 
        0 25px 50px rgba(251, 182, 206, 0.3),
        0 0 0 1px rgba(255,255,255,0.6);
    position: relative;
    overflow: hidden;
}

.card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, #FF77A8, #FF6B9D, #FF77A8);
    border-radius: 32px 32px 0 0;
}

/* Kawaii Loading */
.loading-screen {
    position: absolute;
    inset: 0;
    background: rgba(255,255,255,0.98);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 100;
    border-radius: 32px;
}

.kawaii-loader .face {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, #FFE4E6, #FBB6CE);
    border-radius: 50%;
    position: relative;
    margin-bottom: 20px;
    animation: faceBounce 2s ease-in-out infinite;
    box-shadow: 0 10px 20px rgba(251, 182, 206, 0.3);
}

.face .eye {
    position: absolute;
    width: 16px;
    height: 16px;
    background: #FF77A8;
    border-radius: 50%;
    top: 28px;
    animation: blink 3s infinite;
}

.eye.left { left: 20px; }
.eye.right { right: 20px; }

.face .mouth {
    position: absolute;
    width: 20px;
    height: 12px;
    background: #FF77A8;
    border-radius: 0 0 20px 20px;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    animation: smile 2s ease-in-out infinite;
}

@keyframes blink {
    0%, 90%, 100% { height: 16px; }
    95% { height: 2px; }
}

@keyframes smile {
    0%, 100% { transform: translateX(-50%) scaleX(1); }
    50% { transform: translateX(-50%) scaleX(1.2); }
}

@keyframes faceBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

.loading-text {
    color: #6B7280;
    font-weight: 500;
    font-size: 15px;
}

/* Kawaii Avatar */
.avatar-wrapper {
    margin-bottom: 24px;
}

.avatar {
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, #FFE4E6, #FBB6CE);
    border-radius: 50%;
    position: relative;
    margin: 0 auto;
    box-shadow: 0 15px 30px rgba(251, 182, 206, 0.4);
    animation: avatarFloat 3s ease-in-out infinite;
}

.avatar i {
    font-size: 44px;
    color: #FF77A8;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.ears {
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
}

.ear {
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #FFE4E6, #FBB6CE);
    border-radius: 50% 50% 50% 0;
    position: absolute;
    box-shadow: 0 4px 8px rgba(251, 182, 206, 0.3);
}

.ear.left { left: -12px; }
.ear.right { right: -12px; }

.blush {
    position: absolute;
    width: 20px;
    height: 20px;
    background: #FF77A8;
    border-radius: 50%;
    opacity: 0.7;
    top: 45%;
}

.blush.left { left: 15px; }
.blush.right { right: 15px; }

@keyframes avatarFloat {
    0%, 100% { transform: translateY(0px) rotate(-2deg); }
    50% { transform: translateY(-8px) rotate(2deg); }
}

/* Header */
.header {
    margin-bottom: 28px;
}

.title {
    font-size: 28px;
    font-weight: 700;
    background: linear-gradient(135deg, #FF77A8, #FF6B9D);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 12px;
    font-family: 'Fredoka One', cursive;
    line-height: 1.2;
}

.cursor {
    background: linear-gradient(135deg, #FF77A8, #FF6B9D);
    width: 4px;
    height: 28px;
    animation: blink 0.7s infinite;
    margin-left: 2px;
    display: inline-block;
    border-radius: 2px;
}

.subtitle {
    font-size: 16px;
    color: #6B7280;
    font-weight: 500;
    line-height: 1.5;
}

/* Date Cards - Kawaii Style */
.date-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
}

.date-card {
    background: rgba(255,255,255,0.8);
    backdrop-filter: blur(15px);
    border: 3px solid #FFE4E6;
    border-radius: 24px;
    padding: 24px 16px;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    position: relative;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0,0,0,0.1);
}

.date-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF77A8, #FBB6CE, #FF77A8);
    border-radius: 24px 24px 0 0;
}

.date-card:hover {
    transform: translateY(-12px) scale(1.05);
    border-color: #FF77A8;
    box-shadow: 0 20px 40px rgba(255, 119, 168, 0.3);
}

.date-card.selected {
    background: linear-gradient(135deg, #FF77A8, #FF6B9D);
    border-color: #FF1493;
    color: white;
    transform: scale(1.08) translateY(-8px);
    box-shadow: 0 25px 50px rgba(255, 119, 168, 0.4);
}

.date-card.selected::after {
    content: '✨';
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 16px;
    animation: sparkle 1.5s infinite;
}

@keyframes sparkle {
    0%, 100% { transform: scale(1) rotate(0deg); opacity: 1; }
    50% { transform: scale(1.4) rotate(180deg); opacity: 0.8; }
}

.date-time {
    font-size: 22px;
    font-weight: 700;
    color: #374151;
    margin-bottom: 4px;
}

.date-card.selected .date-time {
    color: white;
    text-shadow: 0 2px 4px rgba(0,0,0,0.2);
}

.date-info {
    font-size: 14px;
    color: #6B7280;
    font-weight: 600;
}

.date-card.selected .date-info {
    color: rgba(255,255,255,0.95);
}

/* Magic Button */
.confirm-btn {
    background: linear-gradient(135deg, #FF77A8, #FF6B9D);
    border: none;
    border-radius: 50px;
    padding: 16px 32px;
    color: white;
    font-size: 16px;
    font-weight: 700;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto;
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    box-shadow: 0 15px 35px rgba(255, 119, 168, 0.4);
    font-family: 'Fredoka One', cursive;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    overflow: hidden;
}

.confirm-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: left 0.6s;
}

.confirm-btn:hover {
    transform: translateY(-6px) scale(1.08);
    box-shadow: 0 25px 50px rgba(255, 119, 168, 0.6);
}

.confirm-btn:hover::before {
    left: 100%;
}

.confirm-btn i {
    font-size: 18px;
}

/* Paw Prints */
.paw-prints {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
}

.paw {
    position: absolute;
    font-size: 18px;
    animation: pawBounce 2s infinite;
}

.paw1 { left: -20px; animation-delay: 0s; }
.paw2 { right: -20px; animation-delay: 1s; }

@keyframes pawBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
}

/* Responsive */
@media (max-width: 480px) {
    .date-grid {
        grid-template-columns: 1fr;
        gap: 14px;
    }
    
    .title {
        font-size: 26px;
    }
}
