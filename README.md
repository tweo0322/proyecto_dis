 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/README.md b/README.md
index 40c70af851aa36ecc273488ccf4f8e7167a3d359..246c95a07acac340d741ceaaf2c238a617198a0a 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,12 @@
-# proyecto_dis
+# Proyecto Dis
+
+## Ejecutar pruebas
+
+1. Instala las dependencias:
+   ```bash
+   npm install
+   ```
+2. Ejecuta las pruebas:
+   ```bash
+   npm test
+   ```
 
EOF
)
