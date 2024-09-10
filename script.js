<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chat met Onze Makelaars</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Chat met Onze Ervaren Makelaars</h1>
        <div class="makelaar-grid">
            <div class="makelaar-card">
                <img src="/api/placeholder/300/400" alt="Emma de Vries">
                <div class="status-indicator status-online"></div>
                <div class="makelaar-info">
                    <h3>Emma de Vries</h3>
                    <p>Specialist binnenstad</p>
                    <button class="btn" onclick="startChat('Emma de Vries')">Start gratis chat</button>
                </div>
            </div>
            <div class="makelaar-card">
                <img src="/api/placeholder/300/400" alt="Jeroen Bakker">
                <div class="status-indicator status-offline"></div>
                <div class="makelaar-info">
                    <h3>Jeroen Bakker</h3>
                    <p>Expert nieuwbouw</p>
                </div>
                <div class="offline-overlay">Offline</div>
            </div>
            <div class="makelaar-card">
                <img src="/api/placeholder/300/400" alt="Sophie Jansen">
                <div class="status-indicator status-offline"></div>
                <div class="makelaar-info">
                    <h3>Sophie Jansen</h3>
                    <p>Luxe appartementen</p>
                </div>
                <div class="offline-overlay">Offline</div>
            </div>
            <div class="makelaar-card">
                <img src="/api/placeholder/300/400" alt="Mark van Dijk">
                <div class="status-indicator status-offline"></div>
                <div class="makelaar-info">
                    <h3>Mark van Dijk</h3>
                    <p>Kenner randgemeenten</p>
                </div>
                <div class="offline-overlay">Offline</div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
