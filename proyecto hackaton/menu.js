 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/menu.test.js
index 0000000000000000000000000000000000000000..78410a99c0b9b382a9f1cfec19ace2652a47c325 100644
--- a//dev/null
+++ b/menu.test.js
@@ -0,0 +1,33 @@
+const fs = require('fs');
+const path = require('path');
+const { TextEncoder, TextDecoder } = require('util');
+global.TextEncoder = TextEncoder;
+global.TextDecoder = TextDecoder;
+const { JSDOM } = require('jsdom');
+
+const html = fs.readFileSync(path.join('proyecto hackaton', 'index.html'), 'utf8');
+const scriptContent = fs.readFileSync(path.join('proyecto hackaton', 'menu.js'), 'utf8');
+
+let dom;
+let document;
+
+beforeEach(() => {
+  dom = new JSDOM(html, { runScripts: 'dangerously' });
+  const scriptEl = dom.window.document.createElement('script');
+  scriptEl.textContent = scriptContent;
+  dom.window.document.body.appendChild(scriptEl);
+  document = dom.window.document;
+});
+
+test('abre y cierra el menú hamburguesa', () => {
+  const btn = document.getElementById('btnHamburguesa');
+  const menu = document.getElementById('menuDesplegable');
+
+  // abrir
+  btn.dispatchEvent(new dom.window.Event('click', { bubbles: true }));
+  expect(menu.classList.contains('activo')).toBe(true);
+
+  // cerrar haciendo clic fuera
+  document.dispatchEvent(new dom.window.Event('click', { bubbles: true }));
+  expect(menu.classList.contains('activo')).toBe(false);
+});
 
EOF
)
