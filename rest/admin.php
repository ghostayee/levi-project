<?php
$ADMIN_KEY = 'Ford6kkk$$$';
$routesFile = __DIR__ . '/routes.json';

$key = $_GET['key'] ?? '';
if ($key !== $ADMIN_KEY) {
  http_response_code(403);
  echo '<!doctype html><html lang="en"><head><meta charset="UTF-8"><title>Access denied</title></head><body><h1>403 Forbidden</h1><p>Access denied.</p></body></html>';
  exit;
}

$message = '';
$error = '';
$routes = [];

if (file_exists($routesFile)) {
  $content = file_get_contents($routesFile);
  $decoded = json_decode($content, true);
  if (is_array($decoded)) {
    $routes = $decoded;
  }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $rawRoutes = $_POST['routes'] ?? '';
  $lines = preg_split('/\r?\n/', $rawRoutes);
  $cleaned = [];

  foreach ($lines as $line) {
    $line = trim($line);
    if ($line === '') {
      continue;
    }

    if (filter_var($line, FILTER_VALIDATE_URL)) {
      $cleaned[] = $line;
    }
  }

  if (count($cleaned) === 0) {
    $error = 'Please provide at least one valid absolute URL. Use https:// or http://.';
  } else {
    $cleaned = array_values(array_unique($cleaned));
    $saved = file_put_contents($routesFile, json_encode($cleaned, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    if ($saved === false) {
      $error = 'Unable to save updated route list. Please check file permissions.';
    } else {
      $routes = $cleaned;
      $message = 'Route list updated successfully.';
    }
  }
}

$textareaValue = htmlspecialchars(implode("\n", $routes), ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
?>
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JWT Route Admin</title>
    <style>
      body { font-family: Arial, sans-serif; margin: 0; padding: 24px; background: #f8fafc; color: #111827; }
      .panel { max-width: 840px; margin: 0 auto; background: #fff; border: 1px solid #d1d5db; border-radius: 12px; padding: 24px; box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08); }
      h1 { margin-top: 0; font-size: 1.8rem; }
      textarea { width: 100%; min-height: 320px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; font-size: 0.95rem; line-height: 1.5; padding: 12px; border: 1px solid #cbd5e1; border-radius: 8px; background: #f8fafc; resize: vertical; }
      .button { display: inline-flex; align-items: center; justify-content: center; padding: 0.75rem 1.25rem; border: none; border-radius: 9999px; font-weight: 700; text-decoration: none; cursor: pointer; }
      .button-primary { background: #2563eb; color: #fff; }
      .button-secondary { background: #e2e8f0; color: #0f172a; }
      .status { margin: 1rem 0 0; padding: 0.9rem 1rem; border-radius: 8px; }
      .status.success { background: #d1fae5; color: #065f46; }
      .status.error { background: #fee2e2; color: #991b1b; }
      .warning { color: #b45309; margin: 0.5rem 0 1rem; }
      label { display: block; margin-bottom: 0.75rem; font-weight: 600; }
      code { background: #eef2ff; padding: 0.2rem 0.4rem; border-radius: 6px; }
    </style>
  </head>
  <body>
    <div class="panel">
      <h1>JWT Route Admin</h1>
      <p class="warning">Hidden admin page. Only open this page if you know the secret key.</p>

      <?php if ($message): ?>
        <div class="status success"><?php echo htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); ?></div>
      <?php endif; ?>
      <?php if ($error): ?>
        <div class="status error"><?php echo htmlspecialchars($error, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'); ?></div>
      <?php endif; ?>

      <form method="post">
        <label for="routes">Enter one route URL per line:</label>
        <textarea id="routes" name="routes"><?php echo $textareaValue; ?></textarea>
        <div style="margin-top: 1rem; display: flex; gap: 0.75rem; flex-wrap: wrap; align-items: center;">
          <button type="submit" class="button button-primary">Save routes</button>
          <a href="admin.php?key=<?php echo urlencode($ADMIN_KEY); ?>" class="button button-secondary">Reload</a>
        </div>
      </form>

      <section style="margin-top: 2rem; font-size: 0.95rem; color: #475569;">
        <h2>Notes</h2>
        <p>The dispatcher page reads <code>routes.json</code> in the background and updates its redirect list automatically.</p>
        <p>Use absolute URLs only, for example <code>https://pcrr-jwt.eu/iteg</code>.</p>
      </section>
    </div>
  </body>
</html>
