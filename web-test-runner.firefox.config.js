const { playwrightLauncher } = require('@web/test-runner-playwright');

module.exports = {
    files: ['packages/*/test/*.test.js'],
    nodeResolve: true,
    concurrency: 1,
    coverage: false,
    testRunnerHtml: (testRunnerImport) => `
        <html>
        <head></head>
        <body>
            <script type="module">
            import '${testRunnerImport}';
            window.process = window.process || {};
            window.process.env = window.process.env || {};
            window.process.env.NODE_ENV = window.process.env.NODE_ENV || 'production';
            </script>
        </body>
        </html>
    `,
    browsers: [
        playwrightLauncher({
            product: 'firefox',
            launchOptions: {
                headless: false,
                args: ['-headless'],
                firefoxUserPrefs: {
                    'toolkit.telemetry.reportingpolicy.firstRun': false,
                    'browser.shell.checkDefaultBrowser': false,
                    'browser.bookmarks.restore_default_bookmarks': false,
                    'dom.disable_open_during_load': false,
                    'dom.max_script_run_time': 0,
                    'dom.min_background_timeout_value': 10,
                    'extensions.autoDisableScopes': 0,
                    'extensions.enabledScopes': 15,
                },
            },
        }),
    ],
};
