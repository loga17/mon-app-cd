// ============================================
// TESTS AUTOMATIQUES
// ============================================

console.log("\n🧪 DÉBUT DES TESTS");
console.log("==================\n");

let testsReussis = 0;
let testsTotal = 0;

// ============================================
// TEST 1 : Vérifier que les dépendances sont installées
// ============================================
testsTotal++;
console.log("📦 Test 1 : Vérification des dépendances...");

try {
  require('express');
  console.log("   ✅ Express est bien installé !");
  testsReussis++;
} catch (error) {
  console.log("   ❌ Express n'est pas installé !");
}

// ============================================
// TEST 2 : Vérifier que le fichier server.js existe
// ============================================
testsTotal++;
console.log("\n📄 Test 2 : Vérification du fichier server.js...");

const fs = require('fs');
if (fs.existsSync('./server.js')) {
  console.log("   ✅ server.js existe !");
  testsReussis++;
} else {
  console.log("   ❌ server.js est manquant !");
}

// ============================================
// TEST 3 : Vérifier la syntaxe du code
// ============================================
testsTotal++;
console.log("\n🔍 Test 3 : Vérification de la syntaxe...");

try {
  const code = fs.readFileSync('./server.js', 'utf8');
  // Test simple : vérifier que le code contient "app.listen"
  if (code.includes('app.listen')) {
    console.log("   ✅ La syntaxe semble correcte !");
    testsReussis++;
  } else {
    console.log("   ❌ Problème détecté dans le code !");
  }
} catch (error) {
  console.log("   ❌ Impossible de lire server.js !");
}

// ============================================
// TEST 4 : Vérifier le package.json
// ============================================
testsTotal++;
console.log("\n📦 Test 4 : Vérification du package.json...");

try {
  const pkg = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
  if (pkg.scripts && pkg.scripts.start) {
    console.log("   ✅ package.json est valide !");
    testsReussis++;
  } else {
    console.log("   ❌ package.json ne contient pas 'start' !");
  }
} catch (error) {
  console.log("   ❌ package.json est invalide !");
}

// ============================================
// RÉSULTATS
// ============================================
console.log("\n==================");
console.log(`📊 RÉSULTAT : ${testsReussis}/${testsTotal} tests réussis`);

if (testsReussis === testsTotal) {
  console.log("\n🎉 FÉLICITATIONS ! Tous les tests sont verts !");
  console.log("   Le pipeline peut continuer vers le déploiement ✅");
  process.exit(0);
} else {
  console.log("\n😱 OH NON ! Certains tests ont échoué !");
  console.log("   Le pipeline va s'arrêter ici ❌");
  process.exit(1);
}