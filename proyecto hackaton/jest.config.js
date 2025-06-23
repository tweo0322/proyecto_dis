 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/jest.config.js
index 0000000000000000000000000000000000000000..a4bb70cd39f50fe713add4ce61c30c32da0f51ca 100644
--- a//dev/null
+++ b/jest.config.js
@@ -0,0 +1,3 @@
+export default {
+  testEnvironment: 'jsdom'
+};
 
EOF
)
