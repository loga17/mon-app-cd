// ============================================
// NOTRE SERVEUR WEB
// ============================================

// On importe Express (l'outil pour créer le serveur)
const express = require('express');

// On crée l'application
const app = express();

// On choisit le port (3000 = le port par défaut pour les tests)
const PORT = process.env.PORT || 3000;

// ============================================
// LES ROUTES (les pages de notre site)
// ============================================

// Page d'accueil
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>Ma Super App CD</title>
        <style>
            body {
                font-family: 'Arial', sans-serif;
                text-align: center;
                padding: 50px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                min-height: 100vh;
                margin: 0;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .container {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                padding: 40px;
                border-radius: 20px;
                box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
            }
            h1 {
                font-size: 3em;
                margin-bottom: 20px;
                animation: bounce 2s infinite;
            }
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-20px); }
            }
            .version {
                background: #ffd700;
                color: #333;
                padding: 10px 20px;
                border-radius: 50px;
                display: inline-block;
                font-weight: bold;
                margin: 20px 0;
            }
            .info {
                font-size: 1.2em;
                margin-top: 30px;
                padding: 20px;
                border-top: 2px solid rgba(255, 255, 255, 0.3);
            }
            .date {
                font-size: 0.9em;
                opacity: 0.8;
                margin-top: 20px;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>🚀 Ma Super App avec CD !</h1>
            <div class="version">Version 1.0.0</div>
            <p>✨ Déployée automatiquement avec GitHub Actions et Docker !</p>
            <div class="info">
                <p>🔄 À chaque push sur GitHub, une nouvelle version est déployée</p>
                <p>🐳 Emballée dans Docker pour fonctionner partout</p>
                <p>🤖 Entièrement automatisé par CI/CD</p>
            </div>
            <div class="date">
                Dernier déploiement : ${new Date().toLocaleString()}
            </div>
        </div>
    </body>
    </html>
  `);
});

// Page "À propos"
app.get('/about', (req, res) => {
  res.json({
    name: "Mon App CD",
    version: "1.0.0",
    description: "Une application déployée automatiquement",
    technologies: ["Node.js", "Express", "Docker", "GitHub Actions"],
    author: "Toi !"
  });
});

// Page santé (pour vérifier que l'app tourne)
app.get('/health', (req, res) => {
  res.json({
    status: "OK",
    timestamp: new Date(),
    uptime: process.uptime()
  });
});

// ============================================
// DÉMARRAGE DU SERVEUR
// ============================================

app.listen(PORT, () => {
  console.log(`
  ╔══════════════════════════════════════════╗
  ║     🚀 SERVEUR DÉMARRÉ AVEC SUCCÈS !    ║
  ╠══════════════════════════════════════════╣
  ║  📍 http://localhost:${PORT}                ║
  ║  📍 http://localhost:${PORT}/about         ║
  ║  📍 http://localhost:${PORT}/health        ║
  ╚══════════════════════════════════════════╝
  `);
});